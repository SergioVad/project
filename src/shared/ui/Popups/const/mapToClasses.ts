import { TDirection } from '@/shared/types/ui';
import clsPopup from '../styles/popups.module.scss';

export const mapDirectionClass: Record<TDirection, string> = {
    'bottom left': clsPopup.optionsBottomLeft,
    'bottom right': clsPopup.optionsBottomRight,
    'top right': clsPopup.optionsTopRight,
    'top left': clsPopup.optionsTopLeft,
};
