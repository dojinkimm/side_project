import { Request, Response, NextFunction } from 'express';
import createRoom from '../../../../services/room/createRoom';

const { CLIENT_URL } = process.env;

export const postCreateRoom = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const {
    title,
    capacity,
    bedroomNumber,
    bedNumber,
    bathNumber,
    price,
    checkin,
    checkout,
    houseType,
    convenience,
    country,
    city,
    address,
    street1,
    street2
  } = req.body;
  const imagePaths: string[] = [];
  const mainImg = req.files[0].path;

  Array.prototype.forEach.call(req.files, function(file: any, idx: number) {
    if (idx !== 0)
      imagePaths.push(file.path);
  });

  try {
    const userId = req.user.id;

    await createRoom({
      title,
      capacity,
      bedroomNumber,
      bedNumber,
      bathNumber,
      price,
      checkin,
      checkout,
      houseType,
      convenience,
      country,
      city,
      address,
      street1,
      street2,
      imagePaths,
      mainImg,
      userId
    });
    res.status(201);
  } catch (e) {
    console.log(e);
    next();
  }
};
