import {
    FETCH_SERVICE_ITEM_REQUEST,
    FETCH_SERVICE_ITEM_FAILURE,
    FETCH_SERVICE_ITEM_SUCCESS,
  } from '../actions/actionTypes'
  
  const initialState = {
    item: {},
    loading: false,
    error: null,
  };
  
  export default function serviceItemReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_SERVICE_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_SERVICE_ITEM_FAILURE:
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      case FETCH_SERVICE_ITEM_SUCCESS:
        const {item} = action.payload;
        return {
          ...state,
          item,
          loading: false,
          error: null,
        };
      default:
        return state;
    }
  }
  