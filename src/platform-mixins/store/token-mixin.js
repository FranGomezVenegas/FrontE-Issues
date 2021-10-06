import {store} from '../../store';

export const tokenMixin = (superClass) => class extends superClass {
    getPartialToken(){
        var state=store.getState();
        var partialToken=state.app.user.partialToken;
        return partialToken;
    }
    getFinalToken(){
        var state=store.getState();
        var finalToken=state.app.user.finalToken;
        return finalToken;
    }
}