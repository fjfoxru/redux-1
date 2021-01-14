import {
    SAVE_EDITED_SERVICE_ITEM_REQUEST,
    SAVE_EDITED_SERVICE_ITEM_FAILURE,
    SAVE_EDITED_SERVICE_ITEM_SUCCESS,
  } from '../actions/actionTypes'
  
  const initialState = {
    item: {},
    loading: false,
    error: null,
  };
  
  export default function serviceSaveItemEdited(state = initialState, action) {
    switch (action.type) {
      case SAVE_EDITED_SERVICE_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SAVE_EDITED_SERVICE_ITEM_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case SAVE_EDITED_SERVICE_ITEM_SUCCESS:
        return {
          ...initialState,
        };
      default:
        return {
          ...state,
        }
    }
  }
  