export class Localization {

    public items: { [key: string]: string };

    constructor() {
        this.items = {};
    }

    public add(key: string, value: string): void {
        this.items[key] = value;
    }

    public has(key: string): boolean {
        return key in this.items;
    }

    public get(key: string): string {
        return this.items[key];
    }

    public getItems() {
        return this.items; 
    }

    public setLocal(local: Localization) {
        this.items = local.getItems();
    }

} 

