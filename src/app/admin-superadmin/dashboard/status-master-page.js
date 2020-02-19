import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Modal, message } from 'antd'
import { API } from '../../../common/api'
import ButtonDashboard from '../../../common/component/button/button-dashboard';
import { navigate } from '../../../common/store/action'
import StatusMasterComponent from '../../../modules/admin-superadmin/data-master/status-component';

const {confirm} = Modal;

class StatusMasterPage extends Component {
    state = { 
        status:[],
        loading:false,
        visible: false,
     }

    componentDidMount(){
        this.getStatus();
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk = e => {
    console.log(e);
    this.setState({
        visible: false,
    });
    };

    handleCancel = e => {
    console.log(e);
    this.setState({
        visible: false,
    });
    };

    //get data dari API
    getStatus=()=>{
        this.setState({loading: true})

        API.get(`/admin/status`)
        .then(res => {
            console.log('res',res)
            this.setState({
                status:res.data.data.status,
                loading: false,
            })
        });
    }

    //delete status
    deleteStatus = (id) => {   
        console.log(id)
        API.delete(`/admin/deletestatus/${id}`)
        .then(res => {
            console.log('res',res)
            if(res.status == 200){
                message.success('This is a success message');
                window.location.reload(); 
            }   
        });
    }

    
    //function untuk modal
    showDeleteConfirm = (id) => {
        confirm({
            title: ' Apakah yakin untuk menghapus data ?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
               this.deleteStatus(id)
            },
            onCancel(){
                console.log('Cancel')
            }
        });
    }

    render() { 

        const columns = [
            {
                title: 'No',
                dataIndex: 'no',
                key: 'no',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Nama Status',
                dataIndex: 'nama_status',
                key: 'nama_status',
                render: text => <a>{text}</a>,
            },
            {
              title: 'Action',
              key: 'action',
              render: (data) => (
                [<ButtonDashboard
                    text="Edit"
                    height={20}
                    icon={faPen}
                    borderRadius="5px"
                    background="#005568"
                    marginRight= "20px"
                />,
                <ButtonDashboard
                    text="Delete"
                    height={20}
                    icon={faTrash}
                    borderRadius="5px"
                    background="#E11212"
                    onClick = {() => this.showDeleteConfirm(data.nomor)}
                />]
              ),
            },
          ];
        

        const data =  this.state.status.map( ({id_status, nama_status}, index) => ({
            no : index+1,
            nomor : id_status,
            nama_status: nama_status,
        }))

        return ( 
            <StatusMasterComponent
                navigate={this.props.navigate}
                initialData = {this.state}
                columns = {columns}
                data = {data}
                handleCancel = {this.handleCancel}
                handleOk = {this.handleOk}
                showModal = {this.showModal}
            />
        );
    }
}
 
const mapStateToProps = state => ({
    
});

const mapDispatchToProps = (dispatch => ({
    navigate,
}))();

const page = connect(mapStateToProps, mapDispatchToProps)(StatusMasterPage);
export default page