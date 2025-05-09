import {Config} from 'ziggy-js';
import {Cart} from './cart'

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Country {
    id: number;
    code: string;
    name: string;
    is_active: boolean;
}

export interface Currency {
    id: number;
    code: string;
    name: string;
    symbol: string;
    is_active: boolean;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    cart: Cart;
    ziggy: Config & { location: string };
    available_currencies: Currency[];
    available_countries: Country[];
    current_currency: string;
    current_locale: string;
};
