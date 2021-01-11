import express from 'express';

import redisClient from 'src/utils/redis/redis';

async function context({ req }: { req: express.Request }) {
  try {
    return { req, redisClient };
  } catch (e) {
    console.log('context e()', e);
    throw new Error('context e()');
  }
}

export default context;
