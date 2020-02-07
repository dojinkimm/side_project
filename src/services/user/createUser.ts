import { User } from '../../models';
import { WhereOptions } from 'sequelize';

// User가 로그인을 할 때 사용되는 Service
export default async (
  googleId: string,
  displayName: string,
  isSeller=false,
  isSuperHost=false
): Promise<User> => {
  const data = { googleId, displayName, isSeller, isSuperHost };
  return await User.create(data);
};