import { User } from '../../models';
import { WhereOptions } from 'sequelize';

export default async (googleId: string): Promise<User | null> => {
  const where: WhereOptions = { googleId: googleId };
  return await User.findOne({ where });
};