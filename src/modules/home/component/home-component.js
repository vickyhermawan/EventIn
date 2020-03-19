import React, { Component } from 'react';
import { Layout, BackTop, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import '../../../assets/css/home.css'
// component
import Navbar from '../../../common/layout/navbar-landing'
import Footer from '../../../common/layout/footer-landing'
import ButtonRounded from '../../../common/component/button/button-rounded'
import ButtonHome from '../../../common/component/button/button-home';
import LoadingContainer from '../../../common/component/loading/loading-container';

const { Content } = Layout;
const cardData = [
    {
        image: require(`../../../assets/images/organizer.png`),
        title: 'Panitia',
        description: 'Ingin mengelolah event-mu dengan cara yang lebih mudah?'
    },
    {
        image: require(`../../../assets/images/participant.png`),
        title: 'Peserta',
        description: 'Senang mengikuti berbagai event seru? Ayo daftar sekarang!'
    },
    {
        image: require(`../../../assets/images/event.png`),
        title: 'Event',
        description: 'Temukan event-event yang keren disini!'
    }
]
const whyData = [
    {
        image: require(`../../../assets/images/tracking.png`),
        title: 'Informatif',
        description: 'Panitia dapat dengan mudah mengetahui jumlah peserta yang mendaftar event'
    },
    {
        image: require(`../../../assets/images/certificate.png`),
        title: 'Sertifikat',
        description: 'Peserta akan mendapat sertifikat settelah mengikuti event'
    },
    {
        image: require(`../../../assets/images/paperless.png`),
        title: 'Hemat',
        description: 'Akan sangat menghemat kertas, karena pengelolaan dilakukan pada sistem'
    },
    {
        image: require(`../../../assets/images/simplifying.png`),
        title: 'Mudah',
        description: 'Kelolah event dengan lebih mudah dan tertata'
    },
    {
        image: require(`../../../assets/images/news.png`),
        title: 'Terbaru',
        description: 'Peserta mendapat info mengenai event terbaru'
    },
    {
        image: require(`../../../assets/images/both-time.png`),
        title: 'Satu Sistem',
        description: 'Semua orang dapat dengan mudah mendaftar sebagai peserta ataupun panitia dalam satu sistem'
    }
]


class HomeComponent extends Component {
    render() { 
        const image1 = require(`../../../assets/images/home-image1.png`);
        const image2 = require(`../../../assets/images/home-image2.png`);
        const image3 = require(`../../../assets/images/home-image3.png`);
        const {onLoginHome,onRegisterHome,initialData} = this.props;
        return ( 
            <Layout className="landing-container">
                <Navbar
                    navigate={this.props.navigate}
                />
                <LoadingContainer loading={initialData.loading}>
                    <Content style={{ overflow: "hidden" }}>
                        {/* Section 1 */}
                        <Row className="section-container">
                            <Col lg={12} md={12} sm={12}>
                                <Row>
                                    <Col span={24}>
                                        <div className="title-container">
                                            <span className="text-soft-blue title-biggest bold">Temukan </span>
                                            <br/>
                                            <span className="text-soft-blue title-big bold">event yang ada disekitarmu..</span>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="image-hidden">
                                            <img
                                                src={image1}
                                                alt="Home 1"
                                                style={{maxWidth: '100%'}}
                                            />
                                        </div>
                                        <div className="description-container desc-medium">
                                            Pilih event yang sesuai dengan dirimu atau mulailah untuk mengelolah event-mu sendiri.
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="button-section-1-container">
                                        <Link to="/login">
                                            <ButtonHome
                                                text="Daftar event"
                                                className='button-participate'
                                                onClick = { () => onLoginHome}
                                            />
                                        </Link>
                                        <Link to="/login">
                                            <ButtonHome
                                                text="Kelolah event"
                                                background="white"
                                                textColor="#4D5AF2"
                                                border="1px solid #4D5AF2"
                                                marginLeft={16}
                                                className='button-participate'
                                                onClick = { () => onRegisterHome}
                                            />
                                        </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} md={12} sm={12}>
                                <div className="image-big-container">
                                    <img
                                        src={image1}
                                        alt="Home 1"
                                        style={{maxWidth: '100%'}}
                                    />
                                </div>
                            </Col>
                        </Row>
                        {/* Section 2 */}
                        <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                    Temukan event-mu
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                    Mempertemukan para pencari event dengan event yang keren-keren.
                                </div>
                            </Col>
                            <Col lg={24} className="card-container">
                                <Row gutter={24} type="flex" justify="center">
                                    {
                                        cardData.map( data =>
                                            <Col lg={7} className="text-align-center">
                                                <div className="card-content">
                                                    <img src={data.image} alt="organizer" className="card-image"/>
                                                    <div className="text-black semi-bold card-title">
                                                        {data.title}
                                                    </div>
                                                    <div className="card-description">
                                                        {data.description}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                        {/* Section 3 */}
                        <Row className="section-container">
                            <Col lg={12} md={12} sm={12}>
                                <div className="image-section">
                                    <img
                                        src={image2}
                                        alt="event in"
                                        style={{maxWidth: '100%'}}
                                    />
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12}>
                                <Row className="ml-20 ml-40">
                                    <Col span={24}>
                                        <div className="title-container-3 mt-20">
                                            <span className="text-soft-blue title-big bold">Event<span className="text-black">In</span></span>
                                            <br/>
                                            <span className="text-soft-blue title-medium semi-bold">Memudahkan pengelolaan event</span>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="image-hidden-3">
                                            <img
                                                src={image2}
                                                alt="eventin"
                                                style={{maxWidth: '100%'}}
                                            />
                                        </div>
                                        <div className="desc-medium description-section-3 mt-10">
                                            Daftarkan eventmu, dan semua akan langsung terorganisir dengan baik.
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <ButtonRounded
                                            text="Mulai mengelolah event"
                                            className='button-organize mt-20 semi-bold'
                                        />
                                    </Col>
                                </Row>
                            </Col>                        
                        </Row>

                        {/* Section 4 */}
                        <Row className="section-container">                        
                            <Col lg={12} md={12} sm={12}>
                                <Row className="mr-50 ml-40">
                                    <Col span={24}>
                                        <div className="title-container-3 mt-20">
                                            <span className="text-soft-blue title-big bold">Event<span className="text-black">In</span></span>
                                            <br/>
                                            <span className="text-soft-blue title-medium semi-bold">Memudahkan peserta mencari event</span>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="image-hidden-3">
                                            <img
                                                src={image3}
                                                alt="simply participant"
                                                style={{maxWidth: '100%'}}
                                            />
                                        </div>
                                        <div className="desc-medium description-section-3 mt-10">
                                            Cari event yang diinginkan, klik tombol 'daftar', dan selesai. Sangat mudah!
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <ButtonRounded
                                            text="Mulai mencari event ?"
                                            background="white"
                                            textColor="#4D5AF2"
                                            border="1px solid #4D5AF2"
                                            className='button-participate mt-20 semi-bold'
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} md={12} sm={12}>
                                <div className="image-section-4 ml-40">
                                    <img
                                        src={image3}
                                        alt="simply participant"
                                        style={{maxWidth: '100%'}}
                                    />
                                </div>
                            </Col>
                        </Row>
                        {/* Section 5 */}
                        <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                    Kenapa Event<span className="text-black">In</span>
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                    Misi kami memudahkan kegiatan peserta, dan panitia dalam mengelolah event.
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#4D5AF2',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image} alt={data.title} className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>

                        <BackTop />
                    </Content>
                    <Footer/>
                </LoadingContainer>
            </Layout>
        );
    }
}
 
export default HomeComponent;