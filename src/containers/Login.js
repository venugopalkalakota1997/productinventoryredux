import React from 'react';
import './style.css';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import loginuserBroadcast from '../actions/loginuserBroadcast'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            username: '',
            password: '',
            logindetails: [],
            nameError: '',
            passwordError: '',
            buttonStatus: true,
            loginstatus: false
        }
    }
    componentWillMount() {
        localStorage.removeItem("username", this.state.username)
    }

    getName = (event) => {
        console.log(event.target.value)
        this.setState({ username: event.target.value })
        this.checkValidation(event)
    }

    getPassword = (event) => {
        console.log(event.target.value)
        this.setState({ password: event.target.value })
        this.checkValidation(event)
    }
    getblurName = (event) => {

        this.setState({ username: event.target.value })
        this.checkValidation("username")
    }

    getblurPasswword = (event) => {

        console.log(event.target.value)
        this.setState({ password: event.target.value })
        this.checkValidation('password');
    }


    checkValidation(event) {
        console.log(event)
        let nameerror = ''
        let passworderror = ''
        if (event === 'username' && this.state.username === '') {
            console.log('set state for nameError');
            nameerror = 'Name is Required'
        }
        else if (event === 'password' && this.state.password === '') {
            console.log('set state for passwordError');
            passworderror = 'Password is Required'
        }
        //check for other conditions!
        if (nameerror || passworderror) {

            this.setState({
                nameError: nameerror,
                passwordError: passworderror,
                buttonStatus: true
            })

            return false
        }
        this.setState({
            nameError: '',
            passwordError: '',
            buttonStatus: false
        })
        return true

    }




    login = () => {
        let loginbody = []

       loginbody= this.props.user.filter((user)=>{
        return(user.name === this.state.username && user.password === this.state.password)}
        )
       console.log(loginbody)

       if(loginbody.length!==0){
        localStorage.setItem("username",this.state.username)
        this.props.history.push('/')
        this.setState({loginstatus:false})
       }
       else{
        this.setState({
            username: '',
            password: '',
            loginstatus:true
        })

       }
    }


    render() {
        return (
            <form className="form">
                {this.state.loginstatus &&
                    <div >
                        <h5 className="loginerror">Invalid UserName/Password</h5>
                    </div>
                }
                <h3>login Component</h3>
                <p >Name </p>
                <input className="input" type='text' id="username" onChange={this.getName} onBlur={this.getblurName}></input>
                <p className="error">{this.state.nameError}</p>
                <p >Password </p>
                <input className="input" type='password' id="password" onChange={this.getPassword} onBlur={this.getblurPasswword}></input>
                <br></br>
                <p className="error">{this.state.passwordError}</p>
                <br></br>
                <button type="submit" className="button" onClick={this.login} disabled={this.state.buttonStatus}>Login</button>
            </form>

        );
    }
}

function convertStoreToProps(store) {
    console.log('Received complete store....in product container');
    console.log(store.user.length);
    return {
        user : store.user,

    }
}

function convertPropToEventAndBroadcast(dispatch) {
    return bindActionCreators({
        loginuser: loginuserBroadcast
    }, dispatch)
}
export default connect(convertStoreToProps, convertPropToEventAndBroadcast)(Login);