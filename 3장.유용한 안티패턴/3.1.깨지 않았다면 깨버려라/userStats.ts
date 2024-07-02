import { Request, Response } from "express";
import { getConnection } from "typeorm";

class UserStats {
  public received: number;
  public sent: number;

  constructor(received: number = 0, sent: number = 0) {
    this.received = received;
    this.sent = sent;
  }
}

class StatsController {
  public async getUserStats(req: Request, res: Response) {
    const userId = req.query.userId;
    const userStats = new UserStats();
    const connection = getConnection();

    const sentResult = await connection.query(
      "SELECT COUNT(*) as count FROM Messages WHERE FromId = ?",
      [userId]
    );
    userStats.sent = sentResult[0].count;

    const receivedResult = await connection.query(
      "SELECT COUNT(*) as count FROM Messages WHERE ToId = ?",
      [userId]
    );
    userStats.received = receivedResult[0].count;

    return res.json(userStats);
  }
}
