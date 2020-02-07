import { Request, Response, NextFunction } from "express";


export const postCreateRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    console.log("createRoom");
    console.log(req.body);
    console.log(req.files);
    res.send("createRoom received");
}   

export const getRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    res.send("getRoom");
}   