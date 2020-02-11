import { Room } from '../../models';

interface Props {
  title: string;
  capacity: number;
  bedroomNumber: number;
  bedNumber: number;
  bathNumber: number;
  price: number;
  checkin: string;
  checkout: string;
  houseType: string;
  convenience: {
    wifi: boolean;
    parking: boolean;
    kitchen: boolean;
    breakfast: boolean;
    tv: boolean;
    laundry: boolean;
    ac: boolean;
  };
  country: string;
  city: string;
  address: string;
  street1: string;
  street2: string;
  imagePaths: string[];
  userId: number;
}

// 방을 새롭게 호스팅할 때 사용하는 service
export default async (UploadData: Props): Promise<Room> => {
  return await Room.create({ ...UploadData });
};
