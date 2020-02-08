export {};

declare global {
  namespace Express {
    interface User{
      id: number;
      token: string;
      isAuth: boolean;
      googleId: string;
    }

    interface Request {
      user?: User
    }
  }
}
