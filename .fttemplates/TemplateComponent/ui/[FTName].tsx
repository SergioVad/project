import { classNames } from 'shared/lib/classNames/classNames'
import cls from './[FTName].module.scss'
import {memo} from 'react

import { useTranslation } from 'react-i18next';
interface [FTName]Props {
  className?: string;
}

export const [FTName] = memo(({ className }: [FTName]Props) => {
const { t } = useTranslation();
  return (
    <div className={classNames(cls.[FTName], {}, [className])}>
      [FTName]
    </div>
  )
})