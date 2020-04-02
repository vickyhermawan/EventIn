import React, { Component } from 'react';
import { Layout, Row, Col, Button, Form,Icon, Modal, Input, } from 'antd';
import '../../../assets/css/auth-login.css'
import { Link } from 'react-router-dom';
// component
import InputAuth from '../../../common/component/input/input-auth'
import ButtonAuth from '../../../common/component/button/button-auth'
import LoadingContainer from '../../../common/component/loading/loading-container'
const { Content } = Layout;
const logo = require(`../../../assets/images/logo.png`);
const login = require(`../../../assets/images/login-image.png`);


class LoginComponent extends Component{
    render(){
        const { initialData, handleChange, handleSubmit,handleConfirmBlur } = this.props;
        return (
            
            <Layout className="login-container">
                <LoadingContainer loading={initialData.loading}>
                    <Content style={{ overflow: "hidden", minHeight:"100vh" }}>
                    <Row>
                        <Col lg={15} md={12} sm={12} className="background-white container-full">
                            <Row>
                                <div className="login-section-container">
                                    <Link to="/">
                                        <img src={logo} alt="EventIn logo" width="100"/>
                                    </Link>
                                    <div className="auth-image-container float-ease text-align-center">
					                <img
                                        src={login}
                                        alt="EventIn login"
                                        style={{maxWidth: '100%'}}
                                    />
                                    </div>
                                </div>
                                <div className="text-soft-blue title-medium text-align-center mt-30">
                                    Temukan Event di dekatmu
                                </div>
                                <div className="text-soft-black title-more-small text-align-center thin">
                                    Siapkah merasakan sensasi baru?
                                </div>
                            </Row>
                        </Col>
                        <Col lg={9} md={12} sm={12} className="background-soft-blue container-full">
                            <Row > 
                                <Form onSubmit={handleSubmit}>
                                    <div className="auth-form-container">
                                        <div className="text-white text-align-center title-more-small mb-50 mt-60">
                                            <p className="title-medium semi-bold m-0">Selamat Datang!</p>
                                            <p className="form-description">Sign in ke dalam akun anda</p>
                                        </div>
                                        <span className="auth-input-label text-white">Email</span>
                                        <InputAuth
                                            name='email'
                                            placeholder="Masukkan Email Anda"
                                            onChange={handleChange}
                                            value={initialData.email}
                                            className="input-auth mt-5 mb-20"
                                        />
                                        <span className="auth-input-label text-white">Password</span>
                                        <InputAuth
                                            name='password'
                                            placeholder="Masukkan Password Anda"
                                            onChange={handleChange}
                                            value={initialData.password}
                                            className="input-auth mt-5"
                                            iconType="lock"
                                            type="password"
                                            onBlur = {handleConfirmBlur}
                                        />
                                         <p className="auth-reminder-label mt-10 text-white">Forgot Password?</p>
                                        <div>
                                            <ButtonAuth
                                                text="Login"
                                                className="auth-button-red mt-35 auth-button-login"
                                                style={{borderRadius: '26px',backgroundColor:'#FA607E',border:'none',color:'#ffff'}}
                                                block={true}
                                            />
                                            <p className="auth-login-label mt-10 text-align-center text-white">Belum punya akun?<Button className="text-pink" type="link" ><Link to='/choose' className="text-white">Daftar Sekarang !</Link></Button></p>
                                            
                                        </div>
                                    </div>
                                </Form>
                            </Row>
                        </Col>
                    </Row>
                    
                 </Content>
                </LoadingContainer>
            </Layout>
        );
    }
}


export default LoginComponent;