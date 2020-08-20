import React from 'react';
import { connect } from 'react-redux';
import { Bar, Pie } from 'react-chartjs-2';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.productlist,
            totalproducts: this.props.productlist.length,
            totalquantity: 2,
            category: '',
            noproduct: [],
            noproductcategory: [],

            data: {
                labels: ['Televison', 'Mobile', 'Furniture', 'Computer Accesories'],
                datasets: [
                    {
                        borderWidth: 1,
                        label: 'All Categories',
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56'
                        ],
                        data: []
                    }
                ]
            },
            datacategory: {
                labels: [],
                datasets: [
                    {
                        label: '',
                        backgroundColor: 'blue',
                        data: []
                    }
                ]

            },

        }
    }



    componentWillMount() {

        this.getAllProducts()

    }

    getAllProducts = (event) => {
        
     this.state.products.map((product) => {
            console.log(product.quantity);
            this.setState({
                totalquantity: this.state.totalquantity + Number(product.quantity)
            })
            console.log(this.state.totalquantity);
            return this.state.totalquantity;
        })

    }


    gettotalproductpie() {

        let Televisontotal = 0;
        let mobiletotal = 0;
        let computertotal = 0;
        let furnituretotal = 0;
        this.state.products.map((product) => {
            if (product.category === "Televison") {
                Televisontotal = Televisontotal + Number(product.quantity)

            }
            else if (product.category === "Mobile") {
                mobiletotal = mobiletotal + Number(product.quantity)
            }
            else if (product.category === "Computer Accessories") {
                computertotal = computertotal + Number(product.quantity)
            }
            else if (product.category === "Furniture") {
                furnituretotal = furnituretotal + Number(product.quantity)
            }

            return null;
        })

        this.setState({
            data: {
                datasets: [
                    {
                        borderWidth: 1,
                        backgroundColor: [
                            'indigo',
                            'red',
                            'blue',
                            'orange'
                        ],
                        data: [Televisontotal, mobiletotal, furnituretotal, computertotal]
                    }
                ]
            },
        })
    }

    getcategory = (event) => {
        console.log(event.target.value)
        if (event.target.value === "Televison") {

            this.getAllProducts("Televison")
        }
        else if (event.target.value === "Mobile") {

            this.getAllProducts("Mobile")
        }
        else if (event.target.value === "Furniture") {

            this.getAllProducts("Furniture")
        }
        else if (event.target.value === "Computer Accessories") {

            this.getAllProducts("Computer Accessories")
        }
    }

    getcategoryproductTelevisionbar() {
        let datahere = [];
        this.setState({
            noproduct: []
        })
        this.state.products.map((product) => {
            if (product.category === "Televison") {
                datahere = datahere.concat(product.quantity)
                this.setState({

                    datacategory: {

                        labels: this.state.datacategory.labels.concat(product.name),
                        datasets: [
                            {
                                label: product.category,
                                backgroundColor: 'blue',
                                data: datahere
                            }
                        ]
                    }
                })

                if (product.quantity === '0') {

                    this.setState({
                        noproduct: this.state.noproduct.concat(product.name),

                    })
                }


            }

            return this.state.datacategory;
        })
    }
    getcategoryproductMobilebar() {
        let datahere = [];
        this.setState({
            noproduct: []
        })
        this.state.products.map((product) => {
            if (product.category === "Mobile") {
                datahere = datahere.concat(product.quantity)
                this.setState({

                    datacategory: {
                        labels: this.state.datacategory.labels.concat(product.name),
                        datasets: [
                            {
                                label: product.category,
                                backgroundColor: 'blue',
                                data: datahere
                            }
                        ]
                    }
                })
                if (product.quantity === '0') {

                    this.setState({
                        noproduct: this.state.noproduct.concat(product.name),

                    })
                }
            }
            return this.state.datacategory;
        })
    }
    getcategoryproductFurniturebar() {
        let datahere = [];
        this.setState({
            noproduct: []
        })
        this.state.products.map((product) => {
            if (product.category === "Furniture") {
                datahere = datahere.concat(product.quantity)
                this.setState({

                    datacategory: {
                        labels: this.state.datacategory.labels.concat(product.name),
                        datasets: [
                            {
                                label: product.category,
                                backgroundColor: 'blue',
                                data: datahere
                            }
                        ]
                    }
                })
                if (product.quantity === '0' || product.quantity === 0) {

                    this.setState({
                        noproduct: this.state.noproduct.concat(product.name),

                    })
                }
            }
            return this.state.datacategory;
        })
    }
    getcategoryproductComputerbar() {
        let datahere = [];
        this.setState({
            noproduct: []
        })
        this.state.products.map((product) => {
            if (product.category === "Computer Accessories") {

                datahere = datahere.concat(product.quantity)
                this.setState({

                    datacategory: {
                        labels: this.state.datacategory.labels.concat(product.name),
                        datasets: [
                            {
                                label: product.category,
                                backgroundColor: 'blue',
                                data: datahere
                            }
                        ]
                    }
                })
                if (product.quantity === '0') {

                    this.setState({
                        noproduct: this.state.noproduct.concat(product.name),

                    })
                }
            }
            return this.state.datacategory;
        })
    }

    render() {
        return (

            <div>
                <label className="dashboard">Total Products : {this.state.totalproducts}</label>
                <label className="dashboardtotal">Total Quantity : {this.state.totalquantity}</label>
                <br></br><br></br>

                <div className="dashboardpie">
                    <p >Total Number of Products in Each Category</p>
                    <Pie data={this.state.data}   ></Pie>
                </div>

                <div className="dashboardbar">

                    <h3>Product Quantity of Idividual Category</h3>

                    <select id="productquantity" className="input" onChange={this.getcategory}>
                        <option id="productcategory">Select Category</option>
                        <option id="productcategory">Televison</option>
                        <option id="productcategory">Mobile </option>
                        <option id="productcategory">Furniture</option>
                        <option id="productcategory">Computer Accessories</option>
                    </select><br></br>

                    {this.state.noproduct.length !== 0 &&
                        <label>Products out of stock: <p style={{ color: "red" }}>{this.state.noproduct.map(product => { return <label>{product}, &nbsp;</label> })}
                        </p></label>
                    }
                    {this.state.datacategory.labels.length !== 0 &&

                        <Bar data={this.state.datacategory} width={100} height={50} options={{ maintainAspectRatio: false }}>  </Bar>
                    }
                </div>
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
export default connect(convertStoreToProps)(Dashboard);
