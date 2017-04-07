class GlobalSettings {
    activeView: any;
    activeImagesView: any;
    
    constructor(){
        this.activeView=false;
        this.activeImagesView="tile";
    }
    
}
export var globalSettings: GlobalSettings = new GlobalSettings(); 