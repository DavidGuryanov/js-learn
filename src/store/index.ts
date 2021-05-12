import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { productListReducer, productDetailsReducer } from './reducers/productReducers.js'
// import { cartReducer } from './reducers/cartReducers'
export const productListReducer = (state = { products: [] }, action: any) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST_PENDING':
      return { loading: true, products: [] }
    case 'PRODUCT_LIST_REQUEST_SUCCESS':
      return { loading: false, products: action.payload }
    case 'PRODUCT_LIST_REQUEST_FAILED':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
const reducer = combineReducers({
  productList: productListReducer,
  // productDetails: productDetailsReducer,
  // cart: cartReducer,
})

// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : []
const initialState = {
  user: 1,
  progress: 2,
  productList: undefined,
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
