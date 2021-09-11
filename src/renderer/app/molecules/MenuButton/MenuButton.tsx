import { FC, SyntheticEvent } from 'react';
import { Icon } from 'src/types/Icon';

export interface MenuButtonProps {
  onClick?: (ev: SyntheticEvent) => void;
  /** State when this page is selected */
  selected?: boolean;
  /** Icon to be shown from atoms/icons */
  Icon: Icon;
  /** Menu item is disabled */
  disabled?: boolean;
  /** Aria-label for the button (a11y)*/
  label: string;
  /** Icon width */
  width?: number;
}

export const MenuButton: FC<MenuButtonProps> = (props) => {
  const { Icon } = props;
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props.label}
      className={`w-14 h-16 py-10 ${
        props.selected && 'border-l-4 border-red-500'
      } flex justify-center items-center outline-none`}
    >
      <Icon
        selected={props.selected}
        width={props.width}
        disabled={props.disabled}
      />
    </button>
  );
};
