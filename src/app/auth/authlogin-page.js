import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { API } from '../../common/api'
import { connect } from 'react-redux';
import { navigate } from '../../common/store/action'
import CONSTANS from '../../common/utils/Constants'
import LoginComponent from '../../modules/auth/component/authlogin-component';
import '../../assets/css/auth-login.css'

class AuthLogin extends Component {
    state = {
        username: '',
        password: '',
    }
    componentDidMount(){
        
    }

    handleChange = (e) => {
        let target = e.target.name;
        let value = e.target.value;
        this.setState({
            [target]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const params = {
            email: this.state.username,
            password: this.state.password   
        }
        console.log('params',params)
        API.post(`/login`, params)
        .then(res => {
            console.log('res',res.data)
            if(res.data.id_role == 2){
                this.props.navigate(CONSTANS.PANITIA_MENU_KEY)
                localStorage.setItem('token', res.data.api_token)
            }
            else if(res.data.id_role == 1) {
                this.props.navigate(CONSTANS.ADMIN_MENU_KEY)
                localStorage.setItem('token', res.data.api_token)
            }
            else if(res.data.id_role == 3) {
                this.props.navigate(CONSTANS.HOME_MENU_KEY)
                localStorage.setItem('token', res.data.api_token)
            }
            else if(res.data.id_role == 4) {
                this.props.navigate(CONSTANS.SIGNER_MENU_KEY)
                localStorage.setItem('token', res.data.api_token)
            }
            else{
                alert('Login salah')
            }
            // localStorage.setItem('token', res)
        });
    }

    render() {
        return (
        <LoginComponent
            initialData={this.state}
            navigate={this.props.navigate}
            
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
        />
        );
    }
}
 

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = (dispatch => ({
    navigate,
}))();

const page = connect(mapStateToProps, mapDispatchToProps)(AuthLogin);
export default page