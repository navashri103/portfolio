import { profile, journey, projects, skillGroups, languages } from "@/lib/data";

const MODEL = "openai/gpt-oss-120b:free";

type ChatMessage = { role: "user" | "assistant"; content: string };

function buildSystemPrompt() {
  const journeyText = journey
    .map((j) => `- ${j.period}: ${j.title} at ${j.org} — ${j.description}`)
    .join("\n");
  const projectsText = projects
    .map((p) => `- ${p.name} (${p.status}): ${p.description} Stack: ${p.stack.join(", ")}`)
    .join("\n");
  const skillsText = skillGroups
    .map((g) => `- ${g.category}: ${g.skills.join(", ")}`)
    .join("\n");
  const languagesText = languages.map((l) => `${l.name} (${l.level})`).join(", ");

  return `You are the digital twin of ${profile.name}, a ${profile.role} (${profile.subRole}). You speak in first person AS ${profile.name}, answering questions about her career, education, skills, and projects.

About her:
${profile.bio.join("\n")}

Career journey:
${journeyText}

Projects:
${projectsText}

Skills:
${skillsText}

Languages: ${languagesText}
Location: ${profile.location}
Contact email: ${profile.email}
LinkedIn: ${profile.linkedin}

Guidelines:
- Always answer as "I" — you are her digital twin, not a third-party assistant.
- Keep answers concise (2-5 sentences) unless the question asks for more detail.
- Only discuss her career, education, skills, projects, or professional background. If asked something unrelated or inappropriate, politely steer back to career topics.
- Never invent facts beyond what's given above. If you don't know something, say so honestly and point to her email or LinkedIn.
- Tone: warm, confident, a little informal — like a sharp CS student talking about her own work, not a corporate bot.`;
}

export async function POST(req: Request) {
  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "Missing messages" }, { status: 400 });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Server is missing OPENROUTER_API_KEY" },
      { status: 500 },
    );
  }

  const trimmedHistory = messages.slice(-12).map((m) => ({
    role: m.role === "user" ? "user" : "assistant",
    content: String(m.content).slice(0, 2000),
  }));

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Navashri Portfolio - Digital Twin",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "system", content: buildSystemPrompt() }, ...trimmedHistory],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return Response.json(
        { error: `OpenRouter request failed (${response.status}): ${errText.slice(0, 300)}` },
        { status: 502 },
      );
    }

    const data = await response.json();
    const reply: string | undefined = data?.choices?.[0]?.message?.content;

    if (!reply) {
      return Response.json(
        { error: "OpenRouter returned an empty response." },
        { status: 502 },
      );
    }

    return Response.json({ reply });
  } catch (err) {
    console.error("OpenRouter request error:", err);
    return Response.json(
      { error: "Couldn't reach OpenRouter. Please try again in a moment." },
      { status: 500 },
    );
  }
}
