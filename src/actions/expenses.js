import uuid from 'uuid';
import database from '../firebase/firebase';
//**before
//1. component calls action generator
//2. action generator returns an object
//3. component dispatches object
//4. redux store changes

//*** with database connection */
//1. component calls action generator
//2. action generator returns a function
//3. component dispatches function (with the help of a middleware (redux-thunk) because reduc only dispatches objects)
//4. function runs and dispatch an action to update the redux store

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});
   
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt};
        
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=> {
            dispatch(addExpense({
                id: ref.key,
                ...expense
                }));
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
       type: 'REMOVE_EXPENSE',
       id
   });
   

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const deleteitem = `users/${uid}/expenses/${id}`;
        return database.ref(deleteitem).remove().then(()=> { 
            dispatch(removeExpense({id})) });
    
     };
};
   
//EDIT_EXPENSE  using the new capabilities to overwrite with spread object (need to add the plugin for babel)
export const editExpense = (id, updates) => ({
       type: 'EDIT_EXPENSE',
       id,
       updates
   });

 export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=> {
               dispatch(editExpense(id,updates));
            });
    };
 };  

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses  = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
       return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=> {
        const expenses= [];
        snapshot.forEach((childSnapshot)=> {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch(setExpenses(expenses));
        });
    };
};;