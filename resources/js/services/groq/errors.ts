export class GroqAPIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'GroqAPIError';
    }
}

export class GroqResponseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'GroqResponseError';
    }
}
