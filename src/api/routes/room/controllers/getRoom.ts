import { Request, Response, NextFunction } from "express";

export const getRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    res.send("getRoom");
}   