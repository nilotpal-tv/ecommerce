declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      DATABASE_URL: string;
      DATABASE_PORT: string;
      DATABASE_USER: string;
      DATABASE_NAME: string;
      DATABASE_HOST: string;
      GOOGLE_CLIENT_ID: string;
      DATABASE_PASSWORD: string;
      SHADOW_DATABASE_URL: string;
      GOOGLE_CLIENT_SECRET: string;
    }
  }
}

export {};
