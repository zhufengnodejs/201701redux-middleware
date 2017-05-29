import {createStore,applyMiddleware} from './redux';
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
let logger = store => next => action =>{
  console.log('before',store.getState());
  console.log(action);
  next(action);
  console.log('after',store.getState());
}
/*let logger= function(store){
    return function(next){//next=dispatch
        return function(action){

        }
    }
}*/

let store = applyMiddleware(logger)(createStore)(counter);
store.dispatch({type:'ADD'});
store.dispatch({type:'SUB'});