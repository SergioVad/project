import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { TDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import clsPopup from '../../styles/popups.module.scss';
import { mapDirectionClass } from '../../const/mapToClasses';
import cls from './Popover.module.scss';

interface PopoverProps {
    trigger: ReactNode;
    direction?: TDirection;
    className?: string;
    children: ReactNode;
    button?: boolean
}

export function Popover(props: PopoverProps) {
    const {
        className, children, trigger, button, direction = 'bottom left',
    } = props;
    return (
        <HPopover className={clsPopup.popup}>
            <HPopover.Button
                as={button ? 'div' : 'button'}
                className={clsPopup.button}
            >
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, [mapDirectionClass[direction]])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
