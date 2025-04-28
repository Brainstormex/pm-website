import Redis from 'ioredis';

class RedisService {
  private static instance: Redis | null = null;
  private static isConnected = false;

  private static createInstance() {
    if (!RedisService.instance) {
      try {
        RedisService.instance = new Redis({
          host: process.env.REDIS_HOST || 'localhost',
          port: Number(process.env.REDIS_PORT) || 6379,
          maxRetriesPerRequest: 3,
          retryStrategy(times) {
            if (times > 3) {
              return null;
            }
            return Math.min(times * 50, 2000);
          },
          enableOfflineQueue: false,
          lazyConnect: true // Don't connect immediately
        });

        RedisService.instance.on('connect', () => {
          RedisService.isConnected = true;
          console.log('Redis connected');
        });

        RedisService.instance.on('error', (err) => {
          RedisService.isConnected = false;
          console.error('Redis connection error:', err);
        });

        RedisService.instance.on('close', () => {
          RedisService.isConnected = false;
          console.log('Redis connection closed');
        });
      } catch (error) {
        console.error('Redis initialization error:', error);
        RedisService.instance = null;
      }
    }
    return RedisService.instance;
  }

  static async get(key: string): Promise<string | null> {
    if (!RedisService.isConnected) {
      return null;
    }
    try {
      const client = RedisService.createInstance();
      return client ? await client.get(key) : null;
    } catch (error) {
      console.error('Redis get error:', error);
      return null;
    }
  }

  static async set(key: string, value: string, expiry?: number): Promise<void> {
    if (!RedisService.isConnected) {
      return;
    }
    try {
      const client = RedisService.createInstance();
      if (client) {
        if (expiry) {
          await client.set(key, value, 'EX', expiry);
        } else {
          await client.set(key, value);
        }
      }
    } catch (error) {
      console.error('Redis set error:', error);
    }
  }
}

export default RedisService; 