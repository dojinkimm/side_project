import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';
import { getUserByGoogleId, createUser } from '../services/user';
import { generateJWT } from '../utils/jwt';

const { CLIENT_ID, CLIENT_SECRET, SERVER_URL } = process.env;


export const makeUserObj = async (
  id: number,
  googleId: string,
) => {
  const token = await generateJWT(id, googleId);
  return {
    id,
    googleId,
    token,
  };
};


export default function passportSetting(): void {
  // Passport session setup.
  //   To support persistent login sessions, Passport needs to be able to
  //   serialize users into and deserialize users out of the session.  Typically,
  //   this will be as simple as storing the user ID when serializing, and finding
  //   the user by ID when deserializing.  However, since this example does not
  //   have a database of user records, the complete Google profile is serialized
  //   and deserialized.

  // Used to stuff a piece of information into a cookie
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Used to decode the received cookie and persist session
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new GoogleStrategy.OAuth2Strategy(
      {
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: `${SERVER_URL}/auth/callback`
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: GoogleStrategy.Profile,
        done: GoogleStrategy.VerifyFunction
      ) => {
        const { id: googleId, displayName } = profile;

        try {
          const user = await getUserByGoogleId(googleId);

          // User exists in DB
          if (user) {
            const userObj = await makeUserObj(user.id, googleId);
            // done(null, user, {message: 'User exists, Login'});
            done(null, userObj, {message: 'User exists, Login'});

          // User not exists in DB -> insert DB
          } else {
            const newUser = await createUser(googleId, displayName);
            const userObj = await makeUserObj(newUser.id, googleId);
            // done(null, newUser, {message: 'User not exists, Sign up'});
            done(null, userObj, {message: 'User not exists, Sign up'});
          }
        } catch (e) {
          console.log(e);
        }
      }
    )
  );
}
