/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    rate?: number;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        title,
        rate = 0,
    } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const mobileDevice = useDevice();
    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text
                title={feedbackTitle}
            />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder="Ваш отзыв"
            />
        </>
    );
    // if (mobileDevice) {
    //     return (
    //         <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
    //             <VStack gap="32">
    //                 {modalContent}
    //                 <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
    //                     Отправить
    //                 </Button>
    //             </VStack>
    //         </Drawer>
    //     );
    // }
    return (
        <Card
            className={classNames('', {}, [className])}
            max
        >
            <VStack align="center" gap="8" max>
                <Text title={rate ? 'Спасибо за оценку!' : title} />
                <StarRating
                    selectedStars={rate}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <Modal isOpen={isModalOpen} onClose={cancelHandle} lazy>
                <VStack max gap="32">
                    {modalContent}
                    <HStack max gap="16" justify="end">
                        <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                            Закрыть
                        </Button>
                        <Button onClick={acceptHandle}>
                            Отправить
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        </Card>
    );
});
