export const SET_SELECTED = 'SET_SELECTED';
export const SET_LOCALE = 'SET_LOCALE';
export const SET_PATH = 'SET_PATH';
export const ADD_NODE = 'ADD_NODE';
export const REMOVE_NODE = 'REMOVE_NODE';
export const UPDATE_NODE = 'UPDATE_NODE';
export const CLEAR_STATE = 'CLEAR_STATE';
export const HIDE_DELEGATE_TOOLTIP = 'HIDE_DELEGATE_TOOLTIP';
export const ADD_PATH = 'ADD_PATH';
export const REMOVE_PATH = 'REMOVE_PATH';
export const UPDATE_PATH = 'UPDATE_PATH';
export const SET_NETWORK = 'SET_NETWORK';

export interface SetSelectedAction {
  type: typeof SET_SELECTED;
  selected: string;
  target: any;
}

export interface SetLocaleAction {
  type: typeof SET_LOCALE;
  locale: string;
}

export type SettingsActionTypes = SetSelectedAction | SetLocaleAction;
