import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import updateProductBroadcast from '../actions/updateProductBroadcast'
import axios from "axios";
class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
            id: this.props.product.id,
            name: this.props.product.name,
            productdetails: this.props.product.productdetails,
            quantity: this.props.product.quantity,
            price: this.props.product.price,
            category: this.props.product.category,
            image: this.props.product.image,

            deleteSuccess: props.deleteSuccess,
            productnameError: '',
            productdetailsError: '',
            productpriceError: '',
            productquantityError: '',
            productcategoryError: '',
            productimageError: '',
            buttonStatus: false,
        }

    }

    editProduct = () => {
        if (this.state.name === '' || this.state.price === '' || this.state.category === '' || this.state.quantity === '' || this.state.productdetails === '' || this.state.image === '') {
            this.setState({

                buttonStatus: true
            })
        }
        else {

            let productRequestBody = {
                "id":this.state.id,
                "name": this.state.name,
                "productdetails": this.state.productdetails,
                "quantity": this.state.quantity,
                "price": this.state.price,
                "category": this.state.category,
                "image": this.state.image
            }
            axios.put('http://localhost:3000/productdetails/' + this.state.id, productRequestBody)
                .then(response => {
                    console.log(response);

                    this.props.history.push('/')

                }, error => {
                    console.error(error);
                })
            this.props.updateproduct(productRequestBody)
           this.props.history.push('/')

        }
    }

    getName = (event) => {

        console.log(event.target.value)
        this.setState({ name: event.target.value })
        this.checkValidation(event)
    }
    getproductdetails = (event) => {

        console.log(event.target.value)
        this.setState({ productdetails: event.target.value })
        this.checkValidation(event)
    }
    getPrice = (event) => {

        console.log(event.target.value)
        this.setState({ price: event.target.value })
        this.checkValidation(event)
    }
    getquantity = (event) => {


        console.log(event.target.value)
        this.setState({ quantity: event.target.value })
        this.checkValidation(event)
    }
    getcategory = (event) => {


        console.log(event.target.value)
        this.setState({ category: event.target.value })
        this.checkValidation(event)
    }
    getImage = (event) => {

        this.setState({ image: event.target.value.substr(12) })
        this.checkValidation(event)
    }

    checkValidation(event) {
        console.log(event)
        let productnameError = ''
        let productdetailsError = ''
        let productpriceError = ''
        let productquantityError = ''
        let productcategoryError = ''
        let productimageError = ''
        if (event === 'productname' && this.state.name === '') {
            productnameError = 'Product Name  Required'
        }
        else if (event === 'productdetails' && (this.state.productdetails === '' || this.state.productdetails.length < 10)) {
            productdetailsError = 'Product details  Required or Product details must above 10 word '
        }
        else if (event === 'productprice' && this.state.price === '') {
            productpriceError = 'Product price Required'
        }
        else if (event === 'productquantity' && this.state.quantity === '') {
            productquantityError = 'Product quantity  Required'
        }
        else if (event === 'productcategory' && (this.state.category === '' || this.state.category === 'Select option')) {
            productcategoryError = 'Product category  Required'
        }
        else if (event === 'productimage' && (this.state.image === '')) {
            productimageError = 'Product image  Required'
        }
        //check for other conditions!
        if (productnameError || productdetailsError || productpriceError || productquantityError || productcategoryError || productimageError) {

            this.setState({
                productnameError: productnameError,
                productdetailsError: productdetailsError,
                productpriceError: productpriceError,
                productquantityError: productquantityError,
                productcategoryError: productcategoryError,
                productimageError: productimageError,
                buttonStatus: true
            })

            return false
        }
        this.setState({
            productnameError: '',
            productdetailsError: '',
            productpriceError: '',
            productquantityError: '',
            productcategoryError: '',
            productimageError: '',
            buttonStatus: false
        })
        return true

    }



    getblurName = (event) => {
        console.log(event.target.value)
        this.setState({ name: event.target.value })
        this.checkValidation('productname');
    }

    getblurproductdetails = (event) => {
        console.log(event.target.value)
        this.setState({ productdetails: event.target.value })
        this.checkValidation('productdetails');
    }
    getblurPrice = (event) => {
        console.log(event.target.value)
        this.setState({ price: event.target.value })
        this.checkValidation('productprice');
    }
    getblurquantity = (event) => {
        console.log(event.target.value)
        this.setState({ quantity: event.target.value })
        this.checkValidation('productquantity');
    }
    getblurcategory = (event) => {
        console.log(event.target.value)
        this.setState({ category: event.target.value })
        this.checkValidation('productcategory');
    }
    getblurimage = (event) => {
        console.log(event.target.value)
        this.setState({ image: event.target.value.substr(12) })
        this.checkValidation('productimage');
    }

    render() {

        return (

            <form className="form">
                <h2 >Update Product</h2>
                <br></br>

                <input type="hidden" value={this.state.id} readOnly></input>
                <br></br>
                <p>Product name <span style={{ color: 'red' }}> *</span></p>
                <input className="input" type="text" id="productname" value={this.state.name} onChange={this.getName} onBlur={this.getblurName}></input>
                <p className="error">{this.state.productnameError}</p>
                <p>Product Description <span style={{ color: 'red' }}> *</span></p>
                <textarea id="productdetails" value={this.state.productdetails} onChange={this.getproductdetails} onBlur={this.getblurproductdetails}> </textarea><br></br>
                <p className="error">{this.state.productdetailsError}</p>
                <p>Price <span style={{ color: 'red' }}> *</span></p>
                <input type="number" className="input" id="productprice" value={this.state.price} onChange={this.getPrice} onBlur={this.getblurPrice}></input>
                <p className="error">{this.state.productpriceError}</p>
                <p>Quantity <span style={{ color: 'red' }}> *</span></p>
                <input type="number" className="input" id="productquantity" value={this.state.quantity} onChange={this.getquantity} onBlur={this.getblurquantity}></input>
                <p className="error">{this.state.productquantityError}</p>
                <p>Categorey <span style={{ color: 'red' }}> *</span></p>
                <select id="productquantity" className="input" onChange={this.getcategory} value={this.state.category} onBlur={this.getblurcategory}>
                    <option id="productcategory" >{this.state.category}</option>
                    <option id="productcategory">Televison</option>
                    <option id="productcategory">Mobile </option>
                    <option id="productcategory">Furniture</option>
                    <option id="productcategory">Computer Accessories</option>
                </select><br></br>
                <p className="error">{this.state.productcategoryError}</p>
                <p>Select Image <span style={{ color: 'red' }}> *</span></p>
                <input type="file" onChange={this.getImage} onBlur={this.getblurimage} multiple accept='image/*' ></input>
                {this.state.image}
                <br></br>
                <p className="error">{this.state.productimageError}</p>
                <button type="submit" className="button" onClick={this.editProduct} disabled={this.state.buttonStatus}>Update</button>
            </form>

        );
    }
}
function convertStoreToProps(store) {
    console.log('Received complete store....in product container');
    console.log(store);
    return {
        
        product: store.selectedproduct,

    }
}
function convertPropToEventAndBroadcast(dispatch) {
    return bindActionCreators({
        updateproduct: updateProductBroadcast
    }, dispatch)
}
export default connect(convertStoreToProps, convertPropToEventAndBroadcast)(EditProduct);