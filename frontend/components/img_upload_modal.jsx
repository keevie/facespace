import React from 'react';
import Modal from 'react-modal';

const modalStyle = {
  overlay: {
    position          :    'fixed',
    top               :    '50%',
    left              :    '50%',
    backgroundColor   :    'white',
    height            :    '400px',
    width             :    '700px',
    marginTop         :    '-200px',
    marginLeft        :    '-350px',
    zIndex            :    1000000
  },

  content: {
  }
};

class ImgUploadModal extends React.Component{
  constructor (props) {
    super(props);
    this.updateFile = this.updateFile.bind(this);
    this.sendImage = this.sendImage.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
    this.state = {
      imageFile: null,
      imageUrl: null,
      titlebar:   '',
      imageType:  '',
      spinner:    '',
      dot1:       '',
      dot2:       ''
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
    if (this.props.type === 'profModalisOpen') {
      this.setState({titlebar: 'Upload a new profile picture'});
      this.setState({imageType: 'profile'});
    }
    else {
      this.setState({titlebar: 'Upload a new cover photo'});
      this.setState({imageType: 'cover'});
    }
    if (this.props.loading) {
      this.setState({
        spinner: 'spinner',
        dot1: 'dot1',
        dot2: 'dot2',
        titlebar: ''
      });
    }
    else {
      this.setState({
        spinner: '',
        dot1: '',
        dot2: ''
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.type === 'profModalisOpen') {
      this.setState({titlebar: 'Update profile picture'});
      this.setState({imageType: 'profile'});
    }
    else {
      this.setState({titlebar: 'Update new cover photo'});
      this.setState({imageType: 'cover'});
    }

    if (newProps.loading) {
      this.setState({
        spinner: 'spinner',
        dot1: 'dot1',
        dot2: 'dot2'
      });
    }
    else {
      this.setState({
        spinner: '',
        dot1: '',
        dot2: ''
      });
    }
  }

  updateFile (imageType){
    return (event) => {
      const file = event.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({ imageFile: file, imageUrl: fileReader.result });
      };

      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  }

  sendImage (imageType) {
    let modalType;
    if (imageType === 'profile') {
      modalType = 'profModalisOpen';
    }
    else {
      modalType = 'coverModalisOpen';
    }
    return (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append(`user[${imageType}]`, this.state.imageFile);
      this.props.updateUser(formData, this.props.profileData.profile_url)
        .then(() => this.setState({imageFile: null, imageUrl: ''}))
          .then(() => this.props.closeModal());
    };
  }

  renderPreview () {
    return <img src={this.state.imageUrl}/>;
  }

  render() {

    return (
      <Modal
        className = 'image-upload'
        isOpen = {this.props.isOpen}
        style={modalStyle}
        contentLabel=''>

        <nav>
          <h1>{this.state.titlebar}</h1>
          <i className="fa fa-times"
            onClick={this.props.closeModal}
            aria-hidden="true"></i>
        </nav>
        <section className='uploadForm'>
          <form onSubmit={this.sendImage(this.state.imageType)}>
            <input onChange={this.updateFile(this.state.imageType)} type='file'/>
            <button>Submit</button>
          </form>

          { this.state.imageUrl && this.renderPreview()}

          <div className={this.state.spinner}>
            <div className={this.state.dot1}></div>
            <div className={this.state.dot2}></div>
          </div>
        </section>

      </Modal>
    );

  }
}

export default ImgUploadModal;
