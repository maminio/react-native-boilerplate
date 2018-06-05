import * as actionTypes from 'actions/constants';

export const initialState = {
  userName: 'BEE_ME'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_APP:
            return { ...state, userName: 'BEE_YOU' };
        default:
            return state;
    }
};
