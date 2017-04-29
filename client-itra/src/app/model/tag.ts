export class Tag {
    
    private idImage: number;

    constructor(public text: string){

    }

    getText(): string {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }
    
    getIdImage(): number {
        return this.idImage;
    }

    setIdImage(idImage: number) {
        this.idImage = idImage;
    }
}
