import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './style/dashboard-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Layout, Menu, Icon,Avatar,Dropdown } from 'antd';
/*Import Icon */
import { faDesktop,faPen, faCalendarCheck, faHistory, faFile,faUserFriends,faUserCircle, faClipboard, faUserTie } from '@fortawesome/free-solid-svg-icons'
import ButtonAuth from '../component/button/button-auth'
import { connect } from 'react-redux';
import { navigate } from '../../common/store/action'
import { API } from '../../common/api'
import CONSTANS from '../utils/Constants'
/*Import Page */
import DashboardPanitiaPage from '../../app/admin-panitia/dashboard/panitia-page'
import CreateEventPage from '../../app/admin-panitia/dashboard/create-event-page'
import ActiveEventPage from '../../app/admin-panitia/dashboard/active-event-page'
import ECertificatePage from '../../app/admin-panitia/dashboard/e-certificate-page'
import HistoryEventPage from '../../app/admin-panitia/dashboard/history-event-page'
import ListParticipantPage from '../../app/admin-panitia/dashboard/list-participant-page'
import ProfilePage from '../../app/admin-panitia/dashboard/profile-page'
import LoadingContainer from '../../common/component/loading/loading-container'
import DetailEvent from '../../app/admin-panitia/detail-page/detail-event-page'
import DetailSertifPage from '../../app/admin-panitia/detail-page/detail-sertif-page'
import TemplateSertifPage from '../../app/admin-panitia/dashboard/template-page'
import ListPenandatanganPage from '../../app/admin-panitia/dashboard/list-penandatangan-page'
import CreateBiodataPenandatanganPage from '../../app/admin-panitia/dashboard/create-biodata-penandatangan-page'
import TabAbsentPage from '../../app/admin-panitia/dashboard/tab-absent-page'
import EditEventPage from '../../app/admin-panitia/edit-page/edit-event-page'
import EditProfilePage from '../../app/admin-panitia/edit-page/edit-profile-page'

const { Header, Sider } = Layout;

class dashboard extends Component {
  state = {
    picture : '',
    nama_panitia : '',
    collapsed: false,
    loading : false,
    username: 'username',
  };
  
  componentDidMount(){
    // this.getProfile();
    const username = localStorage.getItem("username")
    const picture = localStorage.getItem("picture")
    this.setState({ username,picture })
  }

  //get data profile dari API
//   getProfile=()=>{
//     this.setState({loading: true})
//     API.get(`/panitia/profile-edit`)
//     .then(res => {
//         // console.log('res',res.data.data.user)
//         this.setState({
//           nama_panitia : res.data.data.user.panitia.nama_panitia,
//           picture : res.data.data.user.panitia.image_URL,
//           loading: false,
//         })
//     });
// }

  handleLogout = e => {
     this.setState({loading: true})
      API.post(`/logout`)
      .then(res => {
          console.log('res',res)
          if(res.status == 200){
              localStorage.clear();
              this.setState({
                loading: false,
              })
              this.props.navigate(CONSTANS.LOGIN_MENU_KEY)
          }
      });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  render() {
    const logo = require(`../../assets/images/logo.png`);
    const logoadmin = require(`../../assets/images/En.png`);
    let hidden = this.state.collapsed ? 'hidden-objek' : 'block-objek'
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            <ButtonAuth
                text="Logout"
                className="auth-button-logout"
                style={{borderRadius: '10px',color:'black'}}
                block={true}
                onClick={this.handleLogout}
            />
        </Menu.Item>
      </Menu>
    );
   


    return ( 
     <LoadingContainer loading={this.state.loading}>
        <Layout style={{minHeight: '100vh'}}>    
              <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo">
                  <img src={this.state.collapsed? logoadmin : logo} className={this.state.collapsed ? 'hidden-admin-logo' : 'logo-admin'} alt="EventIn logo" width="100"/>
                </div>
                <div className="menu-dashboard">
                  <Menu mode="inline" defaultSelectedKeys={['dashboard']}>
                      <div className="title-dashboard">
                          <span className="title-desc-dashboard">REPORT</span>
                      </div>              
                      <Menu.Item key="dashboard"  >
                        <Link to="/dashboard/dashboard-panitia">
                          <FontAwesomeIcon
                              icon={faDesktop}
                              style={{marginRight: 10}}
                              className={this.state.collapsed ? 'hidden-logo' : 'block-logo'}
                          />
                          <span className={hidden} >Dashboard</span>
                        </Link>
                      </Menu.Item>
                      <div className="title-dashboard">
                          <hr style={{
                              minHeight: 1,
                              backgroundColor: '#D7D7D7',
                              border: 'none',
                              maxWidth: 200,
                              marginBottom:'10px',
                          }}/>
                      </div>

                      <div className="title-dashboard">
                          <span className="title-desc-dashboard">EVENT</span>
                      </div>  
                      
                      <Menu.Item key="create-event">
                        <Link to="/dashboard/create-event">
                          <FontAwesomeIcon
                              icon={faPen}
                              style={{marginRight: 10}}
                          /> 
                          <span className={hidden}>Create Event</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="active-event">
                        <Link to="/dashboard/active-event">
                          <FontAwesomeIcon
                              icon={faCalendarCheck}
                              style={{marginRight: 10}}
                          /> 
                          <span className={hidden}>Active Event</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="history-event">
                        <Link to="/dashboard/history-event">
                          <FontAwesomeIcon
                              icon={faHistory}
                              style={{marginRight: 10}}
                          /> 
                          <span className={hidden}>History Event</span>
                        </Link>
                      </Menu.Item>
                      <div className="title-dashboard">
                          <hr style={{
                              minHeight: 1,
                              backgroundColor: '#D7D7D7',
                              border: 'none',
                              maxWidth: 200,
                              marginBottom:'10px',
                          }}/>
                      </div>

                      <div className="title-dashboard">
                          <span className="title-desc-dashboard">CERTIFICATE</span>
                      </div>  
                      
                      <Menu.Item key="e-certificate">
                        <Link to="/dashboard/e-certificate">
                          <FontAwesomeIcon
                              icon={faFile}
                              style={{marginRight: 10}}
                          /> 
                          <span className={hidden}>List E-Certificate</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="list-penandatangan">
                        <Link to="/dashboard/list-penandatangan">
                          <FontAwesomeIcon
                              icon={faUserTie}
                              style={{marginRight: 10}}
                          /> 
                          <span className={hidden}>List Signer</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="template">
                        <Link to="/dashboard/template-e-certificate">
                          <FontAwesomeIcon
                              icon={faClipboard}
                              style={{marginRight: 10}}
                          /> 
                          <span className={hidden}>Template</span>
                        </Link>
                      </Menu.Item>
                      <div className="title-dashboard">
                          <hr style={{
                              minHeight: 1,
                              backgroundColor: '#D7D7D7',
                              border: 'none',
                              maxWidth: 200,
                          }}/>
                      </div>
                      <div className="title-dashboard">
                          <span className="title-desc-dashboard">PARTICIPANT</span>
                      </div>  
                      <Menu.Item key="list-participant">
                        <Link to="/dashboard/list-participant">
                          <FontAwesomeIcon
                              icon={faUserFriends}
                              style={{marginRight: 10}}
                          /> 
                          <span className={hidden}>List Participant</span>
                        </Link>
                      </Menu.Item>
                      <div className="title-dashboard">
                          <hr style={{
                              minHeight: 1,
                              backgroundColor: '#D7D7D7',
                              border: 'none',
                              maxWidth: 200,
                          }}/>
                      </div>
                      <div className="title-dashboard">
                          <span className="title-desc-dashboard">PROFILE</span>
                      </div> 
                      <Menu.Item key="profile">
                        <Link to="/dashboard/profile">
                          <FontAwesomeIcon
                              icon={faUserCircle}
                              style={{marginRight: 10}}
                          /> 
                          <span className={hidden}>Profile</span>
                        </Link>
                      </Menu.Item>
                  </Menu>
                </div>
              </Sider>
              
              <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                  <div className= "avatar">
                    <Avatar size={40} icon="user" className="avatars" src={this.state.picture} style={{maxHeight:'100%'}}/>
                        <span className="semi-bold">{this.state.username}</span>
                      <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#">
                          <Icon type="down" style={{marginLeft:"20px", color:"black", fontSize:"13px"}} />
                        </a>
                      </Dropdown>
                    {/* <p>sa</p> */}
                  </div>
                </Header>
                <Route
                    path='/dashboard/dashboard-panitia'
                    exact
                    render={ (props) => <DashboardPanitiaPage {...props}/> }
                />
                <Route
                    path='/dashboard/create-event'
                    exact
                    render={ (props) => <CreateEventPage {...props}/> }
                />
                <Route
                    path='/dashboard/active-event'
                    exact
                    render={ (props) => <ActiveEventPage {...props}/> }
                />
                 <Route
                    path='/dashboard/participant-event'
                    exact
                    render={ (props) => <TabAbsentPage {...props}/> }
                />
                <Route
                    path='/dashboard/detail-event'
                    exact
                    render={ (props) => <DetailEvent {...props}/> }
                />
                <Route
                    path='/dashboard/history-event'
                    exact
                    render={ (props) => <HistoryEventPage {...props}/> }
                />
                <Route
                    path='/dashboard/e-certificate'
                    exact
                    render={ (props) => <ECertificatePage {...props}/> }
                />
                <Route
                    path='/dashboard/list-penandatangan'
                    exact
                    render={ (props) => <ListPenandatanganPage {...props}/> }
                />
                <Route
                    path='/dashboard/create-biodata-penandatangan'
                    exact
                    render={ (props) => <CreateBiodataPenandatanganPage {...props}/> }
                />
                <Route
                    path='/dashboard/template-e-certificate'
                    exact
                    render={ (props) => <TemplateSertifPage {...props}/> }
                />
                 <Route
                    path='/dashboard/detail-e-certificate'
                    exact
                    render={ (props) => <DetailSertifPage {...props}/> }
                />
                <Route
                    path='/dashboard/list-participant'
                    exact
                    render={ (props) => <ListParticipantPage {...props}/> }
                />
                <Route
                    path='/dashboard/profile'
                    exact
                    render={ (props) => <ProfilePage {...props}/> }
                />
                 <Route
                    path='/dashboard/edit-profile'
                    exact
                    render={ (props) => <EditProfilePage {...props}/> }
                />
                <Route
                    path='/dashboard/edit-event'
                    exact
                    render={ (props) => <EditEventPage {...props}/> }
                />
              </Layout>
            
        
        </Layout>
       </LoadingContainer>
    );
  }
}

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = (dispatch => ({
    navigate, 
}))();

const page = connect(mapStateToProps, mapDispatchToProps)(dashboard);
export default page