import { ActionTypes } from "../type";
import { INFOR_ACTION_STORE } from "../constants";
const initialState = {
    data: null,
    currentPage: 1,
    status: null,
    statusModal: false,
    dataModal: null,
    featureModal: null,
  };
  
export const rootReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
      case INFOR_ACTION_STORE.FETCH_DATA_SUCCESS:
        return {
          ...state,
          data: action.payload,
        };
      case INFOR_ACTION_STORE.SET_CURRENT_PAGE:
          return {
            ...state,
            currentPage: action.payload,
          };
      case INFOR_ACTION_STORE.SET_SELECT_OPTION:
          return {
            ...state,
            status: action.payload,
      };
      case INFOR_ACTION_STORE.SET_STATUS_MODAL:
          return {
            ...state,
            statusModal: action.payload,
      };
      case INFOR_ACTION_STORE.SET_DATA_MODAL:
          return {
            ...state,
            dataModal: action.payload,
      };
      case INFOR_ACTION_STORE.SET_FEATURE_MODAL:
          return {
            ...state,
            featureModal: action.payload,
      };
      case INFOR_ACTION_STORE.SET_RENDER_SCREEN:
          return {
            ...state,
            reRenderScreen: action.payload,
      };
      default:
        return state;
    }
  };
  