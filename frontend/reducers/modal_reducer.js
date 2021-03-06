import { OPEN_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return action.modal;
    default:
      return state;
  }
};

export default modalReducer;
