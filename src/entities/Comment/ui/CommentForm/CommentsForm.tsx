import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import cls from './addCommentForm.module.scss';

export interface CommentFormProps {
  className?: string;
  onSendComment?: (text: string) => void;
  text?: string;
  onChange?: (value: string) => void;
}

export const CommentsForm = memo((props: CommentFormProps) => {
    const {
        className, onSendComment, onChange, text,
    } = props;
    const { t } = useTranslation();
    const onSendHandler = useCallback(() => {
        onSendComment?.(text || '');
    }, [text, onSendComment]);
    return (
        <VStack
            justify="between"
            gap="4"
            className={classNames(cls.CommentForm, {}, [className])}
        >
            <Input
                value={text}
                className={cls.input}
                label={t('Введите текст комментария')}
                onChange={onChange}
            />
            <Button
                onClick={onSendHandler}
            >
                {t('Отправить')}
            </Button>
        </VStack>
    );
});
