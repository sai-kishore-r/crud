import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from "redux-thunk";
const persistConfig = {
    key :"persistKey",
    storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleWare = []
const store = createStore(persistedReducer,composeWithDevTools( applyMiddleware(...middleWare)))
const persister = persistStore(store)
export default store
export {persister}