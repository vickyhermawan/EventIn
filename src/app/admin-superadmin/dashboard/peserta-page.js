import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, message } from 'antd'
import { API } from '../../../common/api'
import { navigate } from '../../../common/store/action'
import PesertaAdminComponent from '../../../modules/admin-superadmin/user/peserta/peserta-component';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ButtonDashboard from '../../../common/component/button/button-dashboard';

const { confirm } = Modal;

class PesertaAdminPage extends Component {
    state = { 
        peserta : [],
        loading: false,
    }

    componentDidMount(){
        this.getPeserta();
    }

    getPeserta=()=>{
        this.setState({loading: true})
        API.get(`/admin/showpeserta`)
        .then(res => {
          console.log('res',res.data.data.user)
          this.setState({
            peserta:res.data.data.user,
            loading: false,
          })
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
               // this.deleteEvent(id)
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
                dataIndex: 'nomor',
                key: 'nomor',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Nama Peserta',
                dataIndex: 'peserta',
                key: 'peserta',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Email',
                key: 'email',
                dataIndex: 'email',
            },
            {
                title: 'Jenis Kelamin',
                dataIndex: 'jenis_kelamin',
                key: 'jenis_kelamin',
            },
            {
                title: 'Organisasi',
                dataIndex: 'organisasi',
                key: 'organisasi',
            },
            {
                title: 'Umur',
                dataIndex: 'umur',
                key: 'umur',
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
                        text="Detail"
                        height={20}
                        icon={faInfoCircle}
                        borderRadius="5px"
                        background="#FFA903"
                        marginRight= "20px"
                    />,
                    <ButtonDashboard
                        text="Delete"
                        height={20}
                        icon={faTrash}
                        borderRadius="5px"
                        background="#FF0303"
                        onClick = { () => this.showDeleteConfirm(data.nomor)}
                    />]
              ),
            },
          ];
        const data =  this.state.peserta.map( data => ({
            nomor : data.id_users,
            peserta : data.peserta.nama_peserta,
            email : data.email,
            organisasi : data.peserta.organisasi,
            umur : data.peserta.umur,
            jenis_kelamin : data.peserta.jenis_kelamin
        }))
                
        return ( 
            <PesertaAdminComponent
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
}))();

const page = connect(mapStateToProps, mapDispatchToProps)(PesertaAdminPage);
export default page