import { FC } from 'react';

export interface IIcon {
  width?: number;
  selected?: boolean;
  disabled?: boolean;
}

export type Icon = FC<IIcon>;
