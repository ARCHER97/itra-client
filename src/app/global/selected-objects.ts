import { Image } from '../model/Image';
import { Profile } from '../model/profile';

class SelectedObjects{
    image: Image = new Image(0,0,'#');
    profile: Profile;
}
export var selectedObjects = new SelectedObjects(); 