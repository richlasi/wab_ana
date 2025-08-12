import { Request, Response } from "express";
import pool from "../utils/db";

export async function trackProgress(req: Request, res: Response) {
  const userId = (req as any).user.id;
  const { action, details } = req.body;
  try {
    await pool.query(
      "INSERT INTO user_progress (user_id, action, details, created_at) VALUES ($1, $2, $3, NOW())",
      [userId, action, details]
    );
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Could not track progress" });
  }
}  
