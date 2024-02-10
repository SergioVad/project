import { SVGProps, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Img: React.FC<SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Img, inverted } = props;
    return (
        <Img className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
});
