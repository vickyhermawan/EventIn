import React, { Component } from 'react';
import { Layout, Breadcrumb, Row, Col, Form, Select, DatePicker, TimePicker,Upload, Icon, Button  } from 'antd';
import { Link } from 'react-router-dom';
import '../../../../assets/css/dashboard-all/dashboard.css'
import '../../../../assets/css/dashboard-all/table-style.css'
import '../../../../assets/css/admin-superadmin/detail-event.css'
// component
import LoadingContainer from '../../../../common/component/loading/loading-container'
import InputForm from '../../../../common/component/input/input-form';
import 'moment-timezone';
import 'moment/locale/id';
// constant content
const { Content } = Layout;
const { Option } = Select;
const { Dragger } = Upload;
const uploadButton = (
    <div>
      {/* {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />} */}
      <div className="ant-upload-text">Upload Foto Eventmu</div>
    </div>
);
class EditProfileSignerAdminComponent extends Component {
    render() { 
      const {initialData,handleChange,beforeUpload,handleChangeFoto} = this.props  
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
                    <Breadcrumb.Item><Link to='/admin/admin-penandatangan/'>Dashboard Profile Penandatangan</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard Edit Profile</Breadcrumb.Item>
                </Breadcrumb>

                <Row style={{minHeight: '100%',marginBottom: '2%',marginTop:'2%',}} className="background">
                    <Col lg={24} md={24} sm={24}> 
                        <div className="container-active-event">
                            <Row>
                                <div className="container-title-event">
                                    <span>Edit Profile</span>
                                </div>
                            </Row>
                            <LoadingContainer loading={initialData.loading}>
                                <Form>
                                    <div className="container-form">
                                        <Row>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Nama Penandatangan*</span>
                                                </div>
                                                <div>
                                                    <InputForm
                                                        name='nama_penandatangan'
                                                        placeholder="Masukan nama panitia...."
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.nama_penandatangan}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Email*</span>
                                                </div>
                                                <div>
                                                    <InputForm
                                                        name='email'
                                                        placeholder="Masukan nama email...."
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.email}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Nama Intansi*</span>
                                                </div>
                                                <div>
                                                    <InputForm
                                                        name='instansi'
                                                        placeholder="Masukan nama organisasi...."
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.instansi}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Nomor Induk Pegawai*</span>
                                                </div>
                                                <div>
                                                    <InputForm
                                                        name='nip'
                                                        placeholder="Masukan nomor nip...."
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.nip}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Jabatan*</span>
                                                </div>
                                                <div>
                                                    <InputForm
                                                        name='jabatan'
                                                        placeholder="Masukan jabatan...."
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.jabatan}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>   
                                                    <span className="auth-input-label text-black">Foto profil*</span>
                                                </div>
                                                <div>

                                                    <Upload
                                                        name="picture"
                                                        listType="picture-card"
                                                        className="avatar-uploader"
                                                        showUploadList={true}
                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                        beforeUpload={beforeUpload}
                                                        onChange={handleChangeFoto}
                                                        previewFile={initialData.picture}
                                                    >
                                                        {initialData.picture ? <img src={initialData.picture} alt="avatar" style={{ width: '10%' }} /> : uploadButton}
                                                    </Upload>

                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="steps-action">
                                        <Button
                                            type="primary"
                                            // onClick={() => onNext()}
                                        >
                                            Done
                                        </Button>
                                    </div>
                                </Form>
                            </LoadingContainer>
                        </div>
                    </Col>
                </Row>
            </Content>
        );
    }
}
 
export default EditProfileSignerAdminComponent;