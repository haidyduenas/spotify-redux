import createStore from "redux-zero"; 

const initialState = {
    time : 0,
};

const store = createStore(initialState);

export default store;
