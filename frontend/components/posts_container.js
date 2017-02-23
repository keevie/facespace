import { connect } from 'react-redux';
import Posts from './posts';
import { createPost, deletePost, updatePost } from '../actions/post_actions';
import { receiveOpenModal } from '../actions/modal_actions';
import { deleteComment, createComment, updateComment }
  from '../actions/comment_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    modalIsOpen: state.modalOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (post) => dispatch(deletePost(post)),
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    openModal: (modal) => dispatch(receiveOpenModal(modal)),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
