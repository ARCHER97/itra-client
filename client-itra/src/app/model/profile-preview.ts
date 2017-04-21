import { ImageInfo } from './image-info';

export class ProfilePreview {
    
    constructor(private id: number,
                private imageInfo: ImageInfo,
                private name: string,
                private rating: number){}

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getImageInfo(): ImageInfo {
        return this.imageInfo;
    }

    public setImageInfo(imageInfo: ImageInfo) {
        this.imageInfo = imageInfo;
    }

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
    
}
