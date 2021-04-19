import { icons } from './constants';

export type Todo = {
  text: string,
  icon: keyof typeof icons,
  done: boolean
};
