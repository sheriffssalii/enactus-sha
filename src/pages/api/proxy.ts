// pages/api/proxy.ts
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwaFgbjWJ0bI6QROqKA3gFoxG0fdxuVdYDfZjUg4sKffIflZ5kaT0RM2jnkZp0QzWiq/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Failed to send data" });
  }
}
