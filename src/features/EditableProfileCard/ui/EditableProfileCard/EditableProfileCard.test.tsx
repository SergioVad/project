import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';
import { IProfile } from '@/entities/Profile';
import { RenderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slices/Profile.slice';
import { $api } from '@/shared/api/api';

const mockData: IProfile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 30,
    currency: ECurrency.EUR,
    country: ECountry.CANADA,
    city: 'Moscow',
    username: 'admin',
};

describe('features/EditableProfileCard', () => {
    beforeEach(() => {
        RenderComponent(<EditableProfileCard />, {
            initialState: {
                profile: {
                    readonly: true,
                    profile: mockData,
                    form: mockData,
                },
                user: {
                    authData: {
                        id: '1',
                        username: 'admin',
                        role: ['USER'],
                    },
                },
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
    });
    test('Переключение readonly на false', async () => {
        await userEvent.click(screen.getByTestId('ProfilePageHeader.editBtn'));
        expect(screen.getByTestId('ProfilePageHeader.saveBtn')).toBeInTheDocument();
    });

    test('Отмена изменений', async () => {
        await userEvent.click(screen.getByTestId('ProfilePageHeader.editBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Input.firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Input.firstname'), 'user');
        expect(screen.getByTestId('ProfileCard.Input.firstname')).toHaveValue('user');
        await userEvent.click(screen.getByTestId('ProfilePageHeader.cancelBtn'));
        expect(screen.getByTestId('ProfileCard.Input.firstname')).toHaveValue('admin');
    });

    test('Валидация на firstName', async () => {
        await userEvent.click(screen.getByTestId('ProfilePageHeader.editBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Input.firstname'));
        await userEvent.click(screen.getByTestId('ProfilePageHeader.saveBtn'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Успешная отправка', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        await userEvent.click(screen.getByTestId('ProfilePageHeader.editBtn'));
        await userEvent.type(screen.getByTestId('ProfileCard.Input.firstname'), 'user');
        await userEvent.click(screen.getByTestId('ProfilePageHeader.saveBtn'));
        expect(mockPutReq).toHaveBeenCalled();
    });
});
