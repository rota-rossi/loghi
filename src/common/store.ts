import Store from 'electron-store';
import { StoreInterface } from './types';

const storeSchema = {
  windowBounds: {
    type: 'object',
    properties: {
      width: {
        type: 'number',
      },
      height: {
        type: 'number',
      },
    },
  },
  language: {
    type: 'string',
  },
} as const;

const storeDefaults = {
  windowBounds: {
    width: 800,
    height: 600,
  },
  language: 'en',
} as const;

const createStore = (): Store<StoreInterface> => {
  return new Store<StoreInterface>({
    schema: storeSchema,
    defaults: storeDefaults,
  });
};

export const store = createStore();
