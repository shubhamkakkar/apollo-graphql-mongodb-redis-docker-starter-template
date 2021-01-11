import { promisify } from 'util';

import redis from 'redis';

import constants from 'src/constants';

const createClientFunction = () => redis.createClient({
  host: constants.REDIS_DB_HOST,
  port: Number(constants.REDIS_DB_PORT),
});
const store = createClientFunction();

const get = async (key: string) => {
  const redisCache = await promisify(store.get).bind(store)(key) as string;
  if (redisCache) {
    return JSON.parse(redisCache);
  }
  return null;
};

export default {
  client: store,
  get,
  set: (key:string, data:any) => promisify(store.set).bind(store)(key, JSON.stringify(data)),
};
