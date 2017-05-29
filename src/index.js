import {createStore} from './redux';
let counter = (state=0,action)=>{
    if(action){
        switch (action.type){
            case "ADD":
                return state + 1;
            case "SUB":
                return state - 1;
            default:
                return state;
        }
    }else{
        return state;
    }
}
let store = createStore(counter);
console.log(store.getState());
store.dispatch({type:'ADD'});
console.log(store.getState());