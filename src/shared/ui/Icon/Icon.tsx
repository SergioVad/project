import { classNames } from 'shared/lib/classNames/classNames';
import { SVGProps, memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Img: React.FC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, Img } = props;
    return (
        <Img className={classNames(cls.Icon, {}, [className])} />
    );
});
