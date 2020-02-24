import React, { Component } from 'react';
import { Layout, BackTop, Row, Col, Button, Card, Tag, Modal, Icon,  Statistic } from 'antd';
import '../../../assets/css/detail.css'
import Navbar from '../../../common/layout/navbar-landing'
import Footer from '../../../common/layout/footer-landing'
import LoadingContainer from '../../../common/component/loading/loading-container'
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/id';
const { Content } = Layout;
const { Countdown } = Statistic;
const deadline = Date.now() + 5000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK


function onFinish() {
  console.log('finished!');
}

class DetailComponent extends Component {
    state = {
        visible: false,
        confirmLoading: false,
        isPaid : false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      };
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      };

    render() { 
        const {initialData} = this.props
        const { visible, confirmLoading, ModalText } = this.state;
        const datebeginevent = initialData.detailEvent.start_event
        const benefitData = [
            {
                image: require(`../../../assets/images/Day.png`),
                title: 'The Day',
                description: initialData.detailEvent.start_event + ' - ' + initialData.detailEvent.end_event,
            },
            {
                image: require(`../../../assets/images/Location.png`),
                title: 'Venue',
                description: initialData.detailEvent.lokasi ,
            },
            {
                image: require(`../../../assets/images/Regis.png`),
                title: 'Registrasi',
                description: initialData.detailEvent.open_registration + ' - ' + initialData.detailEvent.end_registration,
            },
            {
                image: require(`../../../assets/images/Quota.png`),
                title: 'Quota',
                description: initialData.detailEvent.limit_participant + ' orang'
            },
            
        ]
        let hidden = this.state.isPaid ? 'hidden-objek' : 'block-objek'

        return ( 
            <Layout className="landing-container">
                <Navbar
                    navigate={this.props.navigate}
                />
                 <LoadingContainer loading={initialData.loading}>
                <Content style={{ overflow: "hidden" }}>
                    <Row style={{minHeight: '100%',marginBottom: '2%',marginTop:'2%'}}>
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24} >
                                    <div className="title-container-detail">
                                        <span className="text-soft-blue title-big-detail">{initialData.Event.nama_event}</span>
                                        <br/>
                                        <span className="text-soft-blue title-small-detail">{initialData.Event.organisasi}</span>
                                    </div>
                                </Col>
                                <Col span={24} style={{ marginTop: 2 }}>
                                    <Countdown className="text-soft-blue title-small title-container-detail" title="Will be held on" value={deadline} format="D day,  H-m-s hour" />
                                </Col>
                                <Col span={24}>
                                    <div className="button-detail-1-container">
                                        <Button className="button-participate button-regis" style={{marginTop:'2%'}} type="primary" onClick={this.showModal}>
                                            Register Now!
                                        </Button>
                                        <Modal
                                            title={"Kamu akan mendaftar di "+initialData.Event.nama_event}
                                            visible={visible}
                                            onOk={this.handleOk}
                                            confirmLoading={confirmLoading}
                                            onCancel={this.handleCancel}
                                        >
                                        <p className="bold">Apakah anda yakin akan mendaftar pada acara {initialData.Event.nama_event} yang akan dilaksanakan pada {initialData.detailEvent.start_event + ' - ' + initialData.detailEvent.end_event} ?</p>
                                        <p className="text-soft-blue">Total yang harus dibayar: Rp. {initialData.detailEvent.biaya},-</p>
                    
                                        <p className="text-soft-blue mb-50">Anda harus melakukan transfer ke rekening : {initialData.detailEvent.nomor_rekening} dari bank {initialData.detailEvent.bank}</p>
                                        
                                        <p className="text-merah">*Setelah melakukan registrasi, jangan lupa untuk melakukan pembayaaran sesuai nominal yang tertera diatas.</p>
                                        </Modal>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container-detail">
                                <img
                                    src={initialData.detailEvent.image_URL}
                                    alt="Home 1"
                                    style={{maxWidth: '100%'}}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row style = {{minHeight: '100%',marginBottom: '2%', marginLeft: '5%', marginRight:'5%'}}>
                        <Col lg={24} className="card-container-detail">
                            <Card className="card-content-detail">
                                <Row gutter={24} type="flex" justify="center">
                                    {
                                        benefitData.map( data =>
                                            <Col lg={6} className="text-align">
                                                    <div className="detail-content" style={{marginLeft:'5%'}}>
                                                        <img src={data.image} alt="organizer" className="detail-image"/>
                                                        <div className="text-soft-blue bold detail-title">

                                                            {data.title}
                                                        </div>
                                                        <div className="detail-description">
                                                            {data.description}
                                                        </div>
                                                    </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{minHeight: '100%',marginBottom: '2%',marginTop:'2%'}}> 
                        <Col lg={12} md={12} sm={12}>
                            <Row style={{marginLeft:'12%', marginTop:'4%'}}>
                                <div className="title-container-detail-2">
                                    <p className="text-soft-grey title-quote-detail teks-detail">{initialData.detailEvent.deskripsi_event}</p>
                                </div>
                            </Row>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24} >
                                    <div className="title-container-nama">
                                        <span className="text-soft-blue title-big-detail">HAGE 2020 </span>
                                        <br/>
                                        <span className="text-soft-blue title-small-detail">hobbies, adventure, and gears exhibition</span>
                                    </div>
                                </Col>
                                <Col span={24} style={{ marginTop:'1%' }}>
                                    <div>
                                        <Tag color="blue">Free</Tag>
                                        <Tag color="blue">Adventure</Tag>
                                        <Tag color="blue">Exhibition</Tag>
                                        <Tag color="blue">Hobby</Tag>
                                    </div>
                                </Col>
                                <Col span={24} style={{ marginTop:'4%' }}>
                                    <div>
                                        <p>More Info : </p>
                                        <p className="text-soft-blue">
                                            <Icon type="instagram" /> @ice_indonesia 
                                        </p>
                                        <p className="text-soft-blue">
                                            <Icon type="ie" /> ice-indonesia.com 
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <BackTop />
                </Content>
                </LoadingContainer>
                <Footer/>
            </Layout>
        );
    }
}
export default DetailComponent;