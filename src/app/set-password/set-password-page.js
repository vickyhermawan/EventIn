import React, { Component } from 'react';
import { notification, message } from 'antd';
import { connect } from 'react-redux';
import { API } from '../../common/api'
import { navigate } from '../../common/store/action'
import CONSTANS from '../../common/utils/Constants'
import * as validation from '../../common/utils/validation'
import SetPasswordComponent from '../../modules/set-password/set-password-component.js';

class SetPasswordPage extends Component {
    state = {  
        current: '',
        password : '',
        loading : false,
        show : false,
    }

    componentDidMount(){
        let pathArray = window.location.pathname.split('/');
        let pathName = pathArray[2];
        pathName === '' ? this.setState({current: '/set-password'}) : this.setState({current: pathName});
    }

    handleChange = (e) => {
        let target = e.target.name;
        let value = e.target.value;
        this.setState({
            [target]: value
        })
    }

    openNotification = (message, description) => {
        notification.error({
            message,
            description,
        });
    };

    showModal2 = () => {
        this.setState({
            show :true,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const params = {
            password: this.state.password,
            password_confirmation: this.state.password,  
        }
        if(validation.minPassword(this.state.password)){
            const message = validation.minPassword(this.state.password);
            this.openNotification(message, 'Kata Sandi minimal 8 karakter')
        }else{
            this.setState({loading: true})
            this.showModal2();
            API.post(`/password/reset/${this.state.current}`, params)
            .then(res => {
                if( res.status === 200){
                    this.props.navigate(CONSTANS.LOGIN_MENU_KEY)
                    message.success('Berhasil Merubah Kata Sandi');
                }else {
                    this.setState({show :false})
                    this.props.navigate(CONSTANS.FORGET_PASSWORD_MENU_KEY)
                    this.openNotification('Token Tidak Valid','Silahkan Masukan Email Anda Lagi')
                }
            });
        }
    }


    render() { 
        return ( 
            <SetPasswordComponent
                navigate={this.props.navigate}
                initialData = {this.state}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
            />
        );
    }
}
 
const mapStateToProps = state => ({
    
});

const mapDispatchToProps = (dispatch => ({
    navigate,
}))();

const page = connect(mapStateToProps, mapDispatchToProps)(SetPasswordPage);
export default page