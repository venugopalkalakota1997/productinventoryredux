import allproductsreducer from "./productsreducer"
import selectedproductreducer from './Selectedproductreducer'
import allusersreducer from './userreducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    products:allproductsreducer,
    selectedproduct:selectedproductreducer,
    user:allusersreducer
})
export default allReducers