import React, { Component } from 'react';
import { Layout, Breadcrumb, Row, Table, Input, Col,Icon } from 'antd';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import '../../../assets/css/dashboard-all/dashboard.css'
import '../../../assets/css/dashboard-all/table-style.css'
import LoadingContainer from '../../../common/component/loading/loading-container'
import ButtonDashboard from '../../../common/component/button/button-dashboard';
// constant content
const { Content } = Layout;

class ProfilePanitiaComponent extends Component {
    render() {
        const {initialData, dataProfile,onEditPanitia} = this.props;
        return ( 
            <Content
                style={{
                    margin : "5px 10px 0px 10px",
                    padding: 15,
                    minHeight: 280,
                    borderRadius: "8px",
                }}
            >

                
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>Dashboard Profile Panitia</Breadcrumb.Item>
                </Breadcrumb>
                {
                    dataProfile.map( data =>
                <Row className="section-container-admin">
                <LoadingContainer loading={initialData.loading}>
                
                        <Col lg={6} md={12} sm={12}>
                            <Row gutter={40}>
                                <Col span={24}>
                                   <div className="container-profile-admin">
                                        <img
                                            src={data.picture}
                                            alt="Event 1"
                                            style={{maxWidth: '95%', borderRadius: '10px'}}
                                        />
                                   </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={18} md={12} sm={12}>
                            <Row className="profile-description-admin" >
                                <Col span={24} >
                                   <div className="name-profile">
                                      <span className="text-soft-blue title-small bold">{data.nama_panitia}</span>
                                      <br/>
                                      <p className="text-soft-grey email-user"> <Icon type="mail" style={{marginRight:'10px'}} />{data.email}</p>                                      
                                   </div>
                                   <div>
                                      <ButtonDashboard
                                        text="Edit Profile"
                                        height={20}
                                        icon={faInfoCircle}
                                        borderRadius="5px"
                                        background="#070E57"
                                        onClick={ () => onEditPanitia(data.id_panitia)}
                                    />
                                   </div>
                                </Col> 
                                <Col lg={8} md={12} sm={12}>
                                    <div className="container-desc">
                                      <p className="text-soft-blue desc-title">Organisasi</p>
                                      <p className="text-black desc-profile">{data.organisasi}</p>
                                   </div>
                                </Col>
                                <Col lg={8} md={12} sm={12}>
                                  <div className="container-desc">
                                      <p className="text-soft-blue desc-title">Media Sosial</p>
                                      <p className="text-black desc-profile">{data.instagram}</p>
                                   </div>
                                </Col>
                                <Col lg={8} md={12} sm={12}>
                                  <div className="container-desc">
                                      <p className="text-soft-blue desc-title">No Telefon</p>
                                      <p className="text-black desc-profile">{data.no_telepon}</p>
                                   </div>
                                </Col>
                            </Row>  
                        </Col>
                        </LoadingContainer>
                </Row>
                )}
                
            </Content>
        );
    }
}
 
export default ProfilePanitiaComponent;