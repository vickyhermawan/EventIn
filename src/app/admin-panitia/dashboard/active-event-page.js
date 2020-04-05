import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, message, Tag, Divider, Tooltip, Button, Input, Icon } from 'antd'
import { API } from '../../../common/api'
import { navigate } from '../../../common/store/action'
import CONSTANS from '../../../common/utils/Constants'
import  * as Highlighter from 'react-highlight-words';
import 'moment-timezone';
import 'moment/locale/id';
import moment from 'moment-timezone';

//import component
import { faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons' 
import ButtonDashboard from '../../../common/component/button/button-dashboard';
import ActiveEventComponent from '../../../modules/admin-panitia/active-event/active-event-component';

// import store
import { setIdEvent } from '../../../modules/admin-panitia/active-event/store/active-event-action'

const { confirm } = Modal;

class ActiveEventPage extends Component {
    state = {  
        halaman : 'active',
        activeEvent: [],
        loading: false,
        searchText: '',
        searchedColumn: '',
    }
    
    componentDidMount(){
        this.getEvent();
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
    };
    
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    //get data dari API
    getEvent=()=>{
        this.setState({loading: true})
        API.get(`/panitia/event`)
        .then(res => {
            // console.log('res',res)
            this.setState({
                activeEvent:res.data.data.event,
                loading: false,
            })
        });
    }

    //delete event
    deleteEvent = (id) => {
        console.log(id)
        API.delete(`/panitia/deleteevent/${id}`)
        .then(res => {
            console.log('res',res)
            if(res.status == 200){
                message.success('This is a success message');
                this.componentDidMount(); 
            }   
        });
    }

    //function untuk modal
    showDeleteConfirm = (id) => {
        confirm({
            title: 'Yakin untuk mendelete ?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                this.deleteEvent(id)
            },
            onCancel(){
                console.log('Cancel')
            }
        });
    }

    //button absent participant
    onAbsentParticipant = (id) => {
        console.log('id ini',id)
        this.props.setIdEvent(id);
        this.props.navigate(CONSTANS.PARTICIPANT_EVENT_MENU_KEY)
    }

    //button detail participant
    onDetailParticipant = (id) => {
        console.log('id ini',id)
        this.props.setIdEvent(id);
        this.props.navigate(CONSTANS.DETAIL_LIST_PARTICIPANT_EVENT_MENU_KEY)
    }

    //button detail event
    onDetailEvent = (id) => {
        console.log('id ini',id)
        this.props.setIdEvent(id);
        this.props.navigate(CONSTANS.DETAIL_EVENT_PANITIA_MENU_KEY)
    }

    onEditEvent = (id) => {
        this.props.setIdEvent(id);
        this.props.navigate(CONSTANS.EDIT_EVENT_PANITIA_MENU_KEY)
    }

    render() { 
        const columns = [
            {
                title: 'No',
                dataIndex: 'no',
                key: 'no',
                render: text => <a>{text}</a>,
                sorter: (a, b) => a.no - b.no,
                sortDirections: ['ascend','descend'],
            },
            {
                title: 'Nama Event',
                dataIndex: 'nama_event',
                key: 'nama_event',
                ...this.getColumnSearchProps('nama_event'),
            },
            {
                title: 'Tempat',
                dataIndex: 'lokasi',
                key: 'lokasi',
            },
            {
                title: 'Kategori',
                dataIndex: 'kategori',
                key: 'kategori',
                render: kategori => (
                    <span>
                      {kategori.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                          color = 'volcano';
                        }
                        return (
                          <Tag color={color} key={tag}>
                            {tag}
                          </Tag>
                        );
                      })}
                    </span>
                ),
                onFilter: (value, record) => record.nama_event.indexOf(value) === 0,
                sorter: (a, b) => a.kategori.length - b.kategori.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Tanggal Mulai',
                dataIndex: 'start_event',
                key: 'start_event',
            },
            {
                title: 'Tanggal Selesai',
                dataIndex: 'end_event',
                key: 'end_event',
              },
            {
              title: 'Action',
              key: 'action',
              render: (data) => (
                [
                <Tooltip title="Absent">
                <ButtonDashboard
                    height={20}
                    icon={faUserCheck}
                    borderRadius="5px"
                    background="#4D5AF2"
                    onClick={ () => this.onAbsentParticipant(data.nomor)}
                />,
                </Tooltip>,
                <Divider type="vertical" />,
                <Tooltip title="Participant">
                    <ButtonDashboard
                        height={20}
                        icon={faUsers}
                        borderRadius="5px"
                        textAlign="center"
                        background="#4D5AF2"
                        onClick={ () => this.onDetailParticipant(data.nomor)}
                    />,
                </Tooltip>,
                <Divider type="vertical" />,
                <Tooltip title="Detail">
                    <ButtonDashboard
                        height={20}
                        icon={faInfoCircle}
                        borderRadius="5px"
                        background="#FFA903"
                        onClick={ () => this.onDetailEvent(data.nomor)}
                    />,
                </Tooltip>,
                <Divider type="vertical" />,
                <Tooltip title="Edit">
                    <ButtonDashboard
                        height={20}
                        icon={faInfoCircle}
                        borderRadius="5px"
                        background="#088C0D"
                        onClick={ () => this.onEditEvent(data.nomor)}
                    />,
                </Tooltip>
                ]
              ),
            },
          ];
        
        const data =  this.state.activeEvent.map( ({id_event, nama_event, detail_event, kategori}, index) => ({
            no: index+1,
            nomor : id_event,
            nama_event: nama_event,
            start_event : moment(detail_event.start_event).format("DD MMMM YYYY"),
            lokasi : detail_event.lokasi,
            kategori : [kategori.nama_kategori],
            end_event : moment(detail_event.end_event).format("DD MMMM YYYY"),
            foto : detail_event.image_URL,
        }))

        return ( 
            <ActiveEventComponent
                initialData={this.state}
                navigate={this.props.navigate}
                columns={columns}
                data={data}
            />
            
        );
    }
}
 
const mapStateToProps = state => ({
    
});

const mapDispatchToProps = (dispatch => ({
    navigate,
    setIdEvent,
}))();

const page = connect(mapStateToProps, mapDispatchToProps)(ActiveEventPage);
export default page