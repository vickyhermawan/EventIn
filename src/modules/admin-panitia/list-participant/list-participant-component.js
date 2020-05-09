import React, { Component } from 'react';
import { Layout, Breadcrumb, Row, Col,Modal } from 'antd';
import TableProfile from '../../../common/component/table/table'
import '../../../assets/css/dashboard-all/dashboard.css'
import '../../../assets/css/dashboard-all/table-style.css'
import LoadingContainer from '../../../common/component/loading/loading-container'
import LoadingNotifContainer from '../../../common/component/loading/loading-notif';
import { Link } from 'react-router-dom';
// constant content
const { Content } = Layout;

class ListParticipantComponent extends Component {
    render() { 
      const { initialData, columns, data } = this.props
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
                    <Breadcrumb.Item><Link to='/dashboard/list-count-regist'>Dashboard Data Pendaftar</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard Pendaftar Event </Breadcrumb.Item>
                </Breadcrumb>
                <Row style={{minHeight: '100%',marginBottom: '2%',marginTop:'2%',}} className="background">
                    <Col lg={24} md={24} sm={24}> 
                        
                        <div className="container-active-event">
                            <Row>
                            <div className="container-title-event">
                                <span>Daftar Pendaftar Event</span>
                            </div>
                            </Row>
                            <LoadingContainer loading={initialData.loading}>
                            <Row gutter={24} type="flex">
                                <TableProfile 
                                    columns={columns} 
                                    dataSource={data} 
                                    className="table-active-event"
                                />
                                <div>
                                    <Modal
                                        title="Proses Penerimaan Peserta"
                                        visible={initialData.visible}
                                        className = "modal-notif"
                                        >
                                        <p className="text-notif">Mohon tunggu sebentar, sistem akan mengirimkan data biodata...</p>
                                        <div >
                                            <LoadingNotifContainer loading={initialData.loading_notif} style={{ minHeight:'20px', marginTop:'50px',}}/>
                                        </div>
                                    </Modal>
                                </div>
                            </Row>
                            </LoadingContainer>
                        </div>
                    </Col>
                </Row>
            </Content>
        );
    }
}
 
export default ListParticipantComponent;