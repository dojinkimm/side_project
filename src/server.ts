import errorHandler from 'errorhandler';
import app from './app';
import { sequelize } from './db/sequelizeConfig';

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
export const server = sequelize
  .sync()
  .then(res => {
    app.listen(app.get('port'), () => {
      console.log(
        '  App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
      );
      console.log('  Press CTRL-C to stop\n');
    });
  })
  .catch(e => console.log(e));
