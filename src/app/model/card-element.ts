export class CardElement {
    
    constructor(private name: string,
                private rating: number,
                private url: string){ }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getRating(): number {
        return this.rating;
    }

    public setRating(rating: number) {
        this.rating = rating;
    }

    public getUrl(): string {
        return this.url;
    }

    public setUrl(url: string) {
        this.url = url;
    }
}

