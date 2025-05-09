export const formatPrice = (price: number, currency: string): string => {
    return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price)
}
