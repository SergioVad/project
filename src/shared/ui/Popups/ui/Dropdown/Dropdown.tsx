import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TDirection } from '@/shared/types/ui';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../../const/mapToClasses';
import clsPopup from '../../styles/popups.module.scss';

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

export function Dropdown(props: DropdownProps) {
    const {
        className, trigger, items, direction = 'bottom right',
    } = props;
    return (
        <Menu as="div" className={classNames(clsPopup.popup, {}, [className])}>
            <Menu.Button className={clsPopup.button}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
                {items.map((item, index) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [clsPopup.active]: active })}
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
