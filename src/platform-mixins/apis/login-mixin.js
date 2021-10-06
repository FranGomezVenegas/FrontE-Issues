import {store} from '../../store';
import {tokenMixin} from '../store/token-mixin';
import {userSessionMixin} from '../store/user-session-mixin';
export const loginMixin = (superClass) => class extends (userSessionMixin(tokenMixin(superClass))) {
    DoLogin(userName){
console.log('DoLogin', 'userName', userName);        
        var personId=this.getPersonId();
        var datas = [];
        datas.paramsUrl='personFieldsName='+personId;
        //this.getPlatformHeader(datas);   
        store.dispatch(userName);
    }
}