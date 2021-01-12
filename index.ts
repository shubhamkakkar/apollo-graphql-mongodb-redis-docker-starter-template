import mongoose from 'mongoose';
import server from 'src';
import constants from 'src/constants';

mongoose
  .connect(constants.MONGO_URI_DEV,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
  .then(() => {
    console.log('DB connected'); return server();
  })
  .catch((er:any) => {
    console.log('failed to connect to mongoose', er);
  });
