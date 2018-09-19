import {createStore} from 'redux';

//action generator

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy //simplified tertiary variable by using deconstructuring in the function parameter putting default to 1
});

const decrementCount = ({decrementBy = 1} = {}) => ({ //deconstruct decrementby default it to 1 or empty object if not provided
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: "SET",
    count
})

const resetCount = () => ({
    type: "RESET"
})
 

//reducers
// 1. Reducers are pure functions
// 2. Never state or action

const countReducer = (state ={count: 0}, action) => {
    switch (action.type) {
       case'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case'RESET':
            return {
                count: 0
            };
        case'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

//increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy:5
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());


store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));

