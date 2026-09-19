export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Retrieve your secret Hugging Face token from environment variables
  const HF_TOKEN = process.env.HUGGINGFACE_TOKEN;

  // Format system prompt for N-ATLaS LLM (Llama-3 template)
  const formattedPrompt = `<|begin_of_text|><|start_header_id|>system<|end_header_id|>
You are Prop, a friendly real estate AI assistant for Beloveeth Realty in Nigeria. You assist users in English, Pidgin, Yoruba, Hausa, and Igbo with property insights and real estate advice.<|eot_id|><|start_header_id|>user<|end_header_id|>
${message}<|eot_id|><|start_header_id|>assistant<|end_header_id|>`;

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/NCAIR1/N-ATLaS",
      {
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: formattedPrompt,
          parameters: {
            max_new_tokens: 300,
            temperature: 0.7,
            repetition_penalty: 1.12,
            return_full_text: false
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Hugging Face API responded with status ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the text output from N-ATLaS
    let replyText = "";
    if (Array.isArray(data) && data[0]?.generated_text) {
      replyText = data[0].generated_text.trim();
    } else if (data.generated_text) {
      replyText = data.generated_text.trim();
    } else {
      replyText = "Ma binu! I couldn't process that response right now.";
    }

    return res.status(200).json({ reply: replyText });

  } catch (error) {
    console.error("N-ATLaS Error:", error);
    return res.status(500).json({ 
      error: "Failed to connect to N-ATLaS model", 
      details: error.message 
    });
  }
}
