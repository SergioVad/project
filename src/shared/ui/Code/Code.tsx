import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback } from 'react';
import ButtonIcons from 'shared/assets/icons/button.svg';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface CodeProps {
    text: string;
    className?: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;
    const onCopyCode = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.button}
                theme={ButtonTheme.CLEAR}
                onClick={onCopyCode}
            >
                <ButtonIcons className={cls.icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
