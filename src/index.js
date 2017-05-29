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
let thunk = store => next => action =>{
    if(typeof action === 'function')
        return action(next);
    return next(action);
}
let store = applyMiddleware(thunk)(createStore)(counter);
store.subscribe(function(){
    console.log(store.getState());
})
store.dispatch(function(dispatch){
  setTimeout(function(){
    dispatch({type:'ADD'});
  },3000)
});
