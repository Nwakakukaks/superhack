export interface AppConfig {
  environment: string;
  jwtSecret: string;
  optimismUrl: string;
  baseUrl: string;
  zoraUrl: string;
  modeUrl: string;
}

export const Config: AppConfig = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'local',
  jwtSecret: process.env.JWT_SECRET || 'jwtsecret',
  optimismUrl: '',
  baseUrl: '',
  zoraUrl: '',
  modeUrl: '',
};
