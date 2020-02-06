import { Request, Response, NextFunction } from "express";


export const postCreateRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    console.log("createRoom");
    console.log(req.files);

    // const image = req.file;
    // if (!image){
    //     console.log("No image");
    // }else{
    //     console.log(image.path);
    //     const body = req.body;
    //     console.log(body);
    //     console.log(req);
    // }
    res.send("createRoom received");
}   

export const getRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    res.send("getRoom");
}   