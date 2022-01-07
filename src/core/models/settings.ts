import type {Theme} from '@core/interfaces';
import {createModel} from '@rematch/core';
import themes from '@core/themes.json';

export interface SettingsState {
  locale: string;
  theme: Theme;
  themeColorPack: string;
}

const state: SettingsState = {
  locale: 'en',
  theme: '',
  themeColorPack: themes[0].name,
};

const setLocale = (draftState: SettingsState, locale: string): void => {
  draftState.locale = locale;
};

const setTheme = (draftState: SettingsState, theme: Theme): void => {
  draftState.theme = theme;
};

const setThemeColorPack = (draftState: SettingsState, themeColorPack: string): void => {
  draftState.themeColorPack = themeColorPack;
};

export const settings = createModel()({
  state,
  reducers: {
    setLocale,
    setTheme,
    setThemeColorPack,
  },
  effects: (_dispatch) => ({}),
});
