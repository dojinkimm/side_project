import { Request, Response, NextFunction } from "express";


export const postCreateRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    console.log("createRoom");
    const request = req.body;
    console.log(request);
    res.send("createRoom received");
}   

export const getRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    res.send("getRoom");
}   