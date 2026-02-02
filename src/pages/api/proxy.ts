// pages/api/proxy.ts
export default async function handler(req, res) {
  if (req.method !== "POST") {
    // رد على أي request غير POST
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwaFgbjWJ0bI6QROqKA3gFoxG0fdxuVdYDfZjUg4sKffIflZ5kaT0RM2jnkZp0QzWiq/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    // Google Apps Script لا يعيد JSON حقيقي إلا إذا أرسل ContentService
    // لذلك نضع try/catch
    let data;
    try {
      data = await response.json();
    } catch (e) {
      data = { result: "success" }; // fallback إذا Google Script رد نص فقط
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    return res.status(500).json({ error: "Failed to send data" });
  }
}
