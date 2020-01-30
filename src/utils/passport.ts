import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth';

const { CLIENT_ID, CLIENT_SECRET, SERVER_URL } = process.env;

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
  console.log(SERVER_URL);

  passport.use(
    new GoogleStrategy.OAuth2Strategy(
      {
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: `${SERVER_URL}/login/callback`
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: GoogleStrategy.Profile,
        done: GoogleStrategy.VerifyFunction
      ) => {
        console.log(profile);
        done(null, profile); // passes the profile data to serializeUser
      }
    )
  );

}

// // Middleware to check if the user is authenticated
// function isUserAuthenticated(req: Request, res: Response, next: NextFunction) {
//   if (req.user) {
//       next();
//   } else {
//       res.send('You must login!');
//   }
// }



// app.get('/', (req,res)=>{
//   res.send("HELLO");
// });
