import {store} from '../../store';

export const userConfirmationMixin = (superClass) => class extends superClass {
    getEsignPhrase(){
        var state=store.getState();        
        var usSgn=state.esignDialog.sgn;
        return usSgn;
    }
    getUserPhrase(){
        var state=store.getState();
        var usr=state.confirmUserDialog.user;
        return usr;
    }
    getUserPwPhrase(){
        var state=store.getState();
        var usrPw=state.confirmUserDialog.userPw;
        return usrPw;
    }

}