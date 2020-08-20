import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import deleteProductBroadcast from '../actions/deleteProductBroadcast'
import selectProductBroadcast from '../actions/selectedproductBroadcast'
import getsearchBroadcast from '../actions/getsearchBroadcast'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: ""
        }
    }

    getAllProducts = () => {
        let username = localStorage.getItem("username")
        console.log("Received props from store -> products");
        return this.props.productlist.map(product => {
            return (
                <div className="individual" key={product.id}>
                    <img src={product.image} className="image" alt="imagenotfound"></img>
                    <h2>{product.name}</h2>
                    <p>{product.id}</p>
                    <p>Category :{product.category} </p>
                    <p className="description">Description :{product.productdetails} </p>
                    <p>
                        <span style={{ float: "left", padding: "0px 2px" }}>Price:Rs.{product.price}  </span>
                        <span style={{ float: "right", padding: "0px 32px" }}>Quantity:{product.quantity}</span>
                    </p>
                    <span><br></br><br></br>
                    {username !== null && 
                        <span>
                            <button className="btnmodify" onClick={()=>this.editProduct(product)}>Modify</button>
                            <button className="btndelete" onClick={() => this.props.deleteProduct(product)}>Delete</button>
                        </span>
        }
                    </span>
                </div>
            )
        })
    }

    editProduct=(product)=>{
       
       
        this.props.history.push({
            pathname: '/editproduct',
            state: { product: product }
        })
        this.props.editProduct(this.props.product)
    }






    render() {
        let username = localStorage.getItem("username")
        return (
            <div className="home">
                <input type="text" className="searchtext" placeholder="Search.." name="search" onChange={(event) => this.props.getsearch(event.target.value)}></input>
                <button type="submit" className="searchbutton" >Search</button>
                <br></br>
                <br></br>
                <span>
                {username !== null &&
                    <div className="addproduct">
                        <button className="buttonadd" ><Link to='/add'>Addproduct&nbsp;&nbsp;</Link></button>
                        <button className="buttonadd"><Link to='/dashboard'>Dashboard</Link></button>
                    </div>
    }
                </span><br></br><br></br>
                {this.getAllProducts()}
            </div>
        );
    }
}


function convertStoreToProps(store) {
    console.log('Received complete store....in product container');
    console.log(store);
    return {
        productlist: store.products,

    }
}

function convertEventToPropsAndDispatchFromContainer(dispatch) {
    return bindActionCreators({
        deleteProduct: deleteProductBroadcast,
        editProduct: selectProductBroadcast,
        getsearch: getsearchBroadcast
    }, dispatch)
}


export default connect(convertStoreToProps, convertEventToPropsAndDispatchFromContainer)(Product);