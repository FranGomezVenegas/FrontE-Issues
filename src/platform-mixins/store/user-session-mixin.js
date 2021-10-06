import {store} from '../../store';

export const userSessionMixin = (superClass) => class extends superClass {
    getStoreTabs(){
        var state=store.getState();
        return state.app.user.tabsOpenOnLogin;
    }
    getPersonId(){
        var state=store.getState();
        return state.app.user.personId;
    }
    getUserName(){
        var state=store.getState();
        return state.app.user.userName;
    }
    getTabsOpenOnLogin(){
        var state=store.getState();
        return state.app.user.tabsOpenOnLogin;
    }    
}