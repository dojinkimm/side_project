import { Request, Response, NextFunction } from "express";

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello');
};