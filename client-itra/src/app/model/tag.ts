export class Tag {
    
    constructor(private text: string){

    }

    getText(): string {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }
    
}
