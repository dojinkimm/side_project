export {};

declare global {
  namespace Express {

    interface Request {
      id?: number;
      token?: string;
      isAuth?: boolean;
    }
  }
}
