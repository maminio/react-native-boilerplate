import * as actionTypes from '../../actions/constants';

export const initialState = {
  token: 'SOME_TOKEN'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_APP:
            return { ...state, token: 'UPDATED' };
        default:
            return state;
    }
};
