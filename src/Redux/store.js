import  {createStore,applyMiddleware}  from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState={}
const middleware=[thunk]
// we applay thunl to solve async await problem and Devtools to show store during process
// const store =createStore(rootReducer,initialState,applyMiddleware(...middleware))

const store =createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;