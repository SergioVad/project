import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { Additional, classNames } from '@/shared/lib/classNames/classNames';
import { TDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack/HStack/HStack';
import { mapDirectionClass } from '../../const/mapToClasses';
import clsPopup from '../../styles/popups.module.scss';

interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxInterface {
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    onChange: (value: string) => void;
    className?: string;
    label?: string;
    direction?: TDirection;
}

export function ListBox(props: ListBoxInterface) {
    const {
        defaultValue,
        disabled, items, value, onChange, className, label, direction = 'bottom right',
    } = props;
    const additionalClasses: Additional = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{label}</span>}
            <HListBox
                disabled={disabled}
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(clsPopup.popup, {}, [className])}
            >
                <HListBox.Button
                    className={clsPopup.button}
                    as="div"
                >
                    <Button
                        disabled={disabled}
                    >
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, additionalClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [clsPopup.active]: active,
                                            [cls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
}
