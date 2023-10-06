import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const handleError = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <button type="button" onClick={handleError}>
            {t('Перезагрузить страницу')}
        </button>
    );
};
