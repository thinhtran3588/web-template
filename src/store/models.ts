import {Models} from '@rematch/core';
import {settings} from '@core/models/settings';
import {wallet} from '@main/models/wallet';

export interface RootModel extends Models<RootModel> {
  settings: typeof settings;
  wallet: typeof wallet;
}

export const models: RootModel = {
  settings,
  wallet,
};
