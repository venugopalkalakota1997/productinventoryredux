import React from 'react'
import './style.css';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import addUserBroadcast from '../actions/addUserBroadcast'
class Signup extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            contactNumber: '',


            nameError: '',
            contactNumberError: '',
            passwordError: '',
            confirmPasswordError: '',
            buttonStatus: true,
            signSuccess: false
        }
    }

    getName = (event) => {
        console.log(event.target.value)
        this.setState({ username: event.target.value })
        this.checkValidation(event)
    }

    getconfirmPassword = (event) => {
        console.log(event.target.value)

        this.setState({ confirmPassword: event.target.value })
        this.checkValidation(event)
    }
    getPassword = (event) => {
        console.log(event.target.value)
        this.setState({ password: event.target.value })
        this.checkValidation(event)
    }
    getcontactNumber = (event) => {
        console.log(event.target.value)
        this.setState({ contactNumber: event.target.value })
        this.checkValidation(event)
    }



    getblurName = (event) => {

        this.setState({ username: event.target.value })
        this.checkValidation("username")
    }

    getblurPassword = (event) => {

        console.log(event.target.value)
        this.setState({ password: event.target.value })
        this.checkValidation('password');
    }
    getblurcontactNumber = (event) => {
        console.log(event.target.value)
        this.setState({ contactNumber: event.target.value })
        this.checkValidation('contactnumber');
    }
    getblurconfirmPassword = (event) => {
        console.log(event.target.value)
        this.setState({ confirmPassword: event.target.value })
        this.checkValidation('confirmPassword');
    }

    checkValidation(event) {

        let nameerror = ''
        let passworderror = ''
        let contactnumbererror = ''
        let confirmpassworderror = ''
        
        if (event === 'username' && this.state.username === '') {

            nameerror = 'Name is Required'
        }
        else if (event === 'password' && this.state.password === '') {

            passworderror = 'Password is Required'
        }
        else if (event === 'confirmPassword' && (this.state.confirmPassword === '' || this.state.password !== this.state.confirmPassword)) {
           
            confirmpassworderror = 'Password mismatch'
        }
        else if (event === 'contactnumber' && (this.state.contactNumber === '' || this.state.contactNumber.length !== 10 )) {

            contactnumbererror = 'Contact number is Required or should be 10digit'
        }

        //check for other conditions!
        if (nameerror || passworderror || confirmpassworderror || contactnumbererror) {

            this.setState({
                nameError: nameerror,
                passwordError: passworderror,
                contactNumberError: contactnumbererror,
                confirmPasswordError: confirmpassworderror,
                buttonStatus: true
            })

            return false
        }
        this.setState({
            nameError: '',
            passwordError: '',
            contactNumberError: '',
            confirmPasswordError: '',
            buttonStatus: false
        })
        return true

    }



    intializeState = () => {
        setTimeout(() => {
            this.setState({ signSuccess: false })
        }, 2000)
    }

    signup = () => {
        if(this.state.username === '' || this.state.password === '' || this.state.contactNumber === '' || this.state.confirmPassword === ''){
            this.setState({
             
             buttonStatus:false
             })
         }
         else {
        let userRequestBody = {
            "name": this.state.username,
            "password": this.state.password,
            "contactNumber": this.state.contactNumber,
        }
        this.props.adduser(userRequestBody)
        this.props.history.push('/login')
    }
    }

    render() {
        return (
            <div>

                <form className="form">
                    <h2>Signup Component</h2>
                    <p >Name <span style={{color:'red'}}> *</span></p>
                    <input className="input" type='text' id="username" onChange={this.getName} onBlur={this.getblurName}></input>
                    <p className="error">{this.state.nameError}</p>

                    <p >Contact Number <span style={{color:'red'}}> *</span></p>
                    <input className="input" type='text' id="contactNumber" onChange={this.getcontactNumber} onBlur={this.getblurcontactNumber}></input>
                    <p className="error">{this.state.contactNumberError}</p>

                    <p>Password<span style={{color:'red'}}> *</span> </p>
                    <input className="input" type='password' id="password" onChange={this.getPassword} onBlur={this.getblurPassword}></input>
                    <p className="error">{this.state.passwordError}</p>


                    <p>Confirm Password <span style={{color:'red'}}> *</span></p>
                    <input className="input" type='password' id="confirmPassword" onChange={this.getconfirmPassword} onBlur={this.getblurconfirmPassword}></input>
                    <br></br>
                    <p className="error">{this.state.confirmPasswordError}</p>
                    <br></br>
                    <button type="submit" className="button" onClick={this.signup} disabled={this.state.buttonStatus}>Signup</button>
                </form>
            </div>
        );
    }
}
function convertPropToEventAndBroadcast(dispatch){
    return bindActionCreators({
        adduser: addUserBroadcast 
    }, dispatch)
}
export default connect(null, convertPropToEventAndBroadcast) (Signup);