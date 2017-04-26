export class Comment {
    
    constructor(
        private id: number,
        private idImage: number,
        private title: string,
        private position: number,
        private text: string
    ){ }

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getIdImage(){
        return this.idImage;
    }

    setIdImage(idImage: number){
        this.idImage = idImage;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string){
        this.title = title;
    }

    getPosition(){
        return this.position;
    }

    setPosition(position: number){
        this.position = position;
    }

    getText(){
        return this.text;
    }

    setText(text: string){
        this.text = text;
    }
    
}
