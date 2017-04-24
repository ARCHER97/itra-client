export class TypeOfPhoto {

    constructor(private id: number, private text: string){ }

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getText(){
        return this.text;
    }

    setText(text: string){
        this.text = text;
    }
    
}
