import { connect } from 'react-redux';
import ImgUploadModal from './img_upload_modal';

import {loadingUserInfo, updateUser} from '../actions/user_actions';

const mapStateToProps = state => {
  return {
    profileData: state.user,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadingUserInfo: () => dispatch(loadingUserInfo()),
    updateUser: (file, profileUrl) => dispatch(updateUser(file, profileUrl))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImgUploadModal);
