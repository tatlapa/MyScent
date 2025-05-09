export interface Cart {
    count: number
    items: CartItem[]
    subtotal: number;
    total: number;
    currency: string;
}

export interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
    attributes: string[]
    conditions: string[]
    image: string
}

export interface PromoCode {
    id: number
    code: string
    type: 'percentage' | 'fixed'
    value: number
    maxUses: number | null
    timesUsed: number
    startsAt: string | null
    expiresAt: string | null
    active: boolean
}

export interface PromoCodeValidation {
    isValid: boolean
    message: string
    discount?: number
}

export interface Address {
    id: number
    street: string
    city: string
    postal_code: string
    country: string
    state?: string
}

export interface ShippingMethod {
    id: number
    name: string
    price: number
    estimated_days: string
}
