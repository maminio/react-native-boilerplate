import { combineReducers } from 'redux';
import * as app from './app';
import * as settings from './settings';

export default (reducers) => {
  /**
     * Combine All Reducers
     */

  const appReducer = combineReducers({
    ...reducers,
    app: combineReducers({ ...app }),
    settings: combineReducers({ ...settings }),
  });

  return (state, action) => {
    switch (action.type) {
      case 'RESET_REDUX':
        return appReducer(undefined, action);
      case 'persist/REHYDRATE':
        return appReducer(state, action);
      default:
        break;
    }

    return appReducer(state, action);
  };
};
