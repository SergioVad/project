import { ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '../../../config/i18next/i18nextForTests';

interface RenderComponentProps {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

export function RenderComponent(component: ReactNode, options: RenderComponentProps = {}) {
    const {
        route = '/',
        asyncReducers,
        initialState,
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState as StateSchema}
                asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
            >
                <I18nextProvider i18n={i18nForTests}>
                    <Suspense fallback="">
                        {component}
                    </Suspense>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
