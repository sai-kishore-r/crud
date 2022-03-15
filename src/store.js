import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
const middleWare = []
const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(...middleWare)))

export default store
