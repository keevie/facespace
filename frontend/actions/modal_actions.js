export const OPEN_MODAL = 'OPEN_MODAL';

export const receiveOpenModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const openModal = (modal) => {
  return (dispatch) => {
    dispatch(receiveOpenModal(modal));
  };
};
