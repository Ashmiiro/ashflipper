import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': "aistudio-build",
    },
  },
});

export async function POST(req: NextRequest) {
  try {
    const { messages, quizContext } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages array provided." },
        { status: 400 }
      );
    }

    const systemInstruction = `You are "Ash Flipper Support Bot", an expert AI trading assistant representing Ash Traders Hub in Kampala, Uganda. 
Lead Analyst: Ash Flipper (The Blord, also called The Flip King).
Academy Focus: Algorithmic and institutional order flow strategies (Smart Money Concepts/SMC, ICT, Order Blocks, Liquidity Sweeps, Market Structure Shifts), rather than retail chart indicators (like retail trend lines, EMA cross, support/resistance of retail traders).
We help Ugandan and East African traders pass major global prop firms (such as FTMO, FundedNext, MyFundedFX) and transition to structural profitability.
We suggest Exness as our recommended regulated broker, offering ultra-low spreads and seamlessly integrated Ugandan MTN Mobile Money & Airtel Money payment rails for fast deposits and withdrawals.
We offer:
- January Intake: Ultimate Algorithmic Foundation ($80 USD, 2026 Reloaded)
- May Intake: Advanced Institutional Dynamics ($75 USD, Live session stream, ICT/SMC filters, signals)
- VIP Elite: 1-on-1 Premium Mentorship ($999 USD, custom TradingView indicators, daily classes, phone support)
- Live Boot Camp (3-Day Live Crypto & Forex Virtual Event)

When addressing the user:
- Keep your tone positive, highly professional, encouraging, and localized for East African / Kampalan trading circles (use terms like MTN Money, Airtel Money, Kampala HQ, or local references naturally, but keep it highly polished).
- Respond in clean, crisp, concise markdown paragraphs.
- Offer direct tips on how order blocks and liquidity hunting work if they ask technical questions.
- Encourage them to try their hand at the diagnostic "Retail Liquidity Trap" quiz on the page or to simulate an MTN/Airtel enrollment transaction to unlock the Student Portal.
${quizContext ? `Current context: The user has completed our diagnostic quiz with results: ${quizContext}. Use this to customize your advice.` : ""}`;

    // Format chat history for gemini-3.5-flash
    // We can map the messages array directly as contents, or structure a clean prompt containing conversation history.
    const conversationPrompt = messages
      .map((msg: any) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
      .join("\n");

    const prompt = `Here is our conversation history:\n${conversationPrompt}\n\nAssistant: Please generate your next supportive response:`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I am here to guide your journey to institutional profitability! Let me know what questions you have about our Kampala intakes or algorithmic strategies.";
    
    return NextResponse.json({ text: reply });
  } catch (error: any) {
    console.error("Gemini support API error:", error);
    return NextResponse.json(
      { 
        text: "Apologies, boss! My connection backcompiled momentarily. Let's talk about market liquidity or how to link your Exness account under MTN money." 
      },
      { status: 200 } // Backoff gracefully so chat is never broken visually
    );
  }
}
