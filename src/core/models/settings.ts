import type {Color, Theme} from '@core/interfaces';
import {createModel} from '@rematch/core';

export interface SettingsState {
  locale: string;
  theme: Theme;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

const state: SettingsState = {
  locale: 'en',
  theme: '',
  colors: {
    primary: 'cyan',
    secondary: 'violet',
    success: 'green',
    error: 'red',
    warning: 'orange',
    info: 'cyan',
  },
};

const setLocale = (draftState: SettingsState, locale: string): void => {
  draftState.locale = locale;
};

const setTheme = (draftState: SettingsState, theme: Theme): void => {
  draftState.theme = theme;
};

const setColor = (draftState: SettingsState, payload: {value: string; type: Color}): void => {
  const {value, type} = payload;
  if (!draftState.colors) {
    draftState.colors = {
      primary: 'cyan',
      secondary: 'violet',
      success: 'green',
      error: 'red',
      warning: 'orange',
      info: 'cyan',
    };
  }
  draftState.colors[type] = value;
};

export const settings = createModel()({
  state,
  reducers: {
    setLocale,
    setTheme,
    setColor,
  },
  effects: (_dispatch) => ({}),
});
