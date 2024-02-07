import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { TDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

interface DropdownItem {
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
    content: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: TDirection;
}

const mapDirectionClass: Record<TDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export function Dropdown(props: DropdownProps) {
    const {
        className, trigger, items, direction = 'bottom right',
    } = props;
    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.button}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item key={index} as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
