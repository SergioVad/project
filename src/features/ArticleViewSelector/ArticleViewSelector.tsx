import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list.svg';
import GridIcon from '@/shared/assets/icons/grid.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticlesView } from '../../entities/Article/model/const/const';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticlesView,
    onViewClick?: (view: ArticlesView) => void;
}

const viewTypes = [
    {
        view: ArticlesView.SMALL,
        Icon: GridIcon,
    },
    {
        view: ArticlesView.BIG,
        Icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticlesView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Img={viewType.Icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
