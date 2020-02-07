import { Request, Response, NextFunction } from "express";


export const postSignIn = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const request = req.body;
    console.log(request);
}   