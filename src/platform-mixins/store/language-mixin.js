import {store} from '../../store';

export const languageMixin = (superClass) => class extends superClass {
    getLanguage(){
        var state=store.getState();
        var appLanguage=state.app.user.appLanguage;
        return appLanguage;
    }
}