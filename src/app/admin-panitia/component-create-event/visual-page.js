import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Upload, Icon, message } from 'antd';
import { navigate } from '../../../common/store/action'
import VisualComponent from '../../../modules/admin-panitia/create-event/visual/visual-component'


class VisualPage extends Component {
    state = {
        picture_event : '',
        imageUrl : '',
    }

    componentDidMount(){
       
    }

    componentWillMount(){
        const data = JSON.parse(localStorage.getItem('step-5', this.state));
        console.log(data)
    }
    onNext = () => {
      this.props.next();
      localStorage.setItem('step-5', JSON.stringify(this.state));
    }
    onPrev = () => {
      this.props.prev();
    }

    getBase64 = (img, callback)  =>{
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
    }

    beforeUpload = (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    }

    handleChangeFoto = info => {
      if (info.file.status === 'uploading') {
        this.setState({ 
          loading: true 
        });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        this.getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl,
            loading: false,
          }),
        );
      }
    };
  
    // onChangePhoto = (info) => {
    //   const { status } = info.file;
    //   if (status !== 'uploading') {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (status === 'done') {
    //     console.log('name',info.file.name)
    //     message.success(`${info.file.name} file uploaded successfully.`);
    //     this.setState({ picture_event : info.file })
    //   } else if (status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }
    // }

    render() {

        return ( 
            <VisualComponent
                initialData={this.state}
                navigate={this.props.navigate}
                onChangePhoto={this.onChangePhoto}
                beforeUpload = {this.beforeUpload}
                handleChangeFoto = {this.handleChangeFoto}
                onNext={this.onNext}
                onPrev={this.onPrev}
            />
        );
    }
}
 
const mapStateToProps = state => ({
    
});

const mapDispatchToProps = (dispatch => ({
    navigate,
}))();

const page = connect(mapStateToProps, mapDispatchToProps)(VisualPage);
export default page