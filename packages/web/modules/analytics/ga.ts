import { Config } from '@core/config/config';
import { Environments } from '@core/enums/environments';

export const getGATrackingId = (): string => {
  const optimismTrackingId = 'G-W7FG9D1W1X';
  const baseTrackingId = 'G-4BVFN4FPYH';
  const zoraTrackingId = 'G-ABC123XYZ';
  const modeTrackingId = 'G-DEF456UVW';

  return Config.environment === Environments.Optimism
    ? optimismTrackingId
    : Config.environment === Environments.Base
    ? baseTrackingId
    : Config.environment === Environments.Zora
    ? zoraTrackingId
    : Config.environment === Environments.Mode
    ? modeTrackingId
    : '';
};
