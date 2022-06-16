import type { App } from 'vue';
import * as Parse from 'parse';

Parse.initialize('spark');
(Parse as any).masterKey = 'mulean666';
(Parse as any).serverURL = 'http://106.55.30.242/parse';

export const parse = (app: App): void => {
  app.use(Parse as any);
};
