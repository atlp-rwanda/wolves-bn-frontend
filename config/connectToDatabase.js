/* eslint-disable import/no-unresolved */
import Postgres from 'PostgreSQL';
import config from 'config';

const connectToDatabase = async () => {
  try {
    await Postgres.connect(
      config.get('sqltools.connections'),
      {
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    );
    console.log('Postgres is now Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;