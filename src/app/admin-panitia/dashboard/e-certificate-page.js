import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tag } from 'antd';
import { faInfoCircle ,faDownload} from '@fortawesome/free-solid-svg-icons'
import CONSTANS from '../../../common/utils/Constants'
import { API } from '../../../common/api'
import { navigate } from '../../../common/store/action'
import ECertificateComponent from '../../../modules/admin-panitia/e-certificate/e-certificate-component';
import ButtonDashboard from '../../../common/component/button/button-dashboard';
import 'moment-timezone';
import 'moment/locale/id';
import moment from 'moment-timezone';
// import store
import { setIdSertifikat } from '../../../modules/admin-panitia/e-certificate/store/e-certificate-action'

class ECertificatePage extends Component {
    state = {  
        certificate: [],
        loading: false,
    }

    componentDidMount(){
        this.getCertificate();
    }

    getCertificate=()=>{
        this.setState({loading: true})
        API.get(`/panitia/event-sertifikat`)
        .then(res => {
          console.log('res',res.data.data.sertifikat)
          this.setState({
              certificate:res.data.data.sertifikat,
              loading: false,
            })
        });
    }

     //button detail event
     onDetailCertificate = (id) => {
        console.log('id ini',id)
        this.props.setIdSertifikat(id);
        this.props.navigate(CONSTANS.DETAIL_SERTIF_PANITIA_MENU_KEY)
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
            title: 'Nama Event',
            dataIndex: 'nama_event',
            key: 'nama_event',
            render: text => <a>{text}</a>,
            onFilter: (value, record) => record.nama_event.indexOf(value) === 0,
            sorter: (a, b) => a.nama_event.length - b.nama_event.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Penandatangan',
            dataIndex: 'penandatangan',
            key: 'penandatangan',
        },
        {
            title: 'File',
            dataIndex: 'sertifikat',
            key: 'sertifikat',
        },
        {
            title: 'Tenggang Waktu',
            dataIndex: 'tenggang_waktu',
            key: 'tenggang_waktu',
        },
        {
            title: 'Status Sertifikat',
            key: 'status',
            dataIndex: 'status',
            render: sertifikat => (
            <span>
                {sertifikat.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : '#87d068';
                if (tag === 'reject') {
                    color = 'volcano';
                }
                return (
                    <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                    </Tag>
                );
                })}
            </span>
            ),
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            sorter: (a, b) => a.status.length - b.status.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Action',
            key: 'action',
            render: (data) => (
            [<ButtonDashboard
                text="Download"
                height={20}
                icon={faDownload}
                borderRadius="5px"
                background="#070E57"
                marginRight= "20px"
              
            />,
            <ButtonDashboard
                text="Detail"
                height={20}
                icon={faInfoCircle}
                borderRadius="5px"
                background="#FFA903"
                marginRight= "20px"
                onClick = {() => this.onDetailCertificate(data.nomor)}
            />]
            ),
        },
    ];
    
    const data =  this.state.certificate.map( ({id_sertifikat, sertifikat, penandatangan, tenggang_waktu, status}, index) => ({
        no : index+1,
        nomor : id_sertifikat,
        nama_event: sertifikat.event.nama_event,
        penandatangan : penandatangan.nama_penandatangan,
        sertifikat :sertifikat.sertifikat,
        tenggang_waktu :moment(tenggang_waktu).format("DD MMMM YYYY"),
        status : [status.nama_status],
               
    }))

        return ( 
            <ECertificateComponent
                navigate={this.props.navigate}
                initialData={this.state}
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
    setIdSertifikat,
}))();

const page = connect(mapStateToProps, mapDispatchToProps)(ECertificatePage);
export default page