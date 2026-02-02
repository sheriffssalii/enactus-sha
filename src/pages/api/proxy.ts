// pages/api/proxy.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST", "OPTIONS"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // Forward POST to Google Apps Script
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwaFgbjWJ0bI6QROqKA3gFoxG0fdxuVdYDfZjUg4sKffIflZ5kaT0RM2jnkZp0QzWiq/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    // Try to parse JSON from Google Script response
    let data;
    try {
      data = await response.json();
    } catch {
      data = { result: "success" }; // fallback if Google Script returns text
    }

    // Add CORS header so browser accepts the response
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Proxy error:", error);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(500).json({ error: "Failed to send data to Google Script" });
  }
}
