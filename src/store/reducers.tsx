import { ActionTypes } from "../type";
const initialState = {
    data: null,
    currentPage: 1,
    status: null,
  };
  
export const rootReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          data: action.payload,
        };
      case 'SET_CURRENT_PAGE':
          return {
            ...state,
            currentPage: action.payload,
          };
      case 'SET_SELECT_OPTION':
          return {
            ...state,
            status: action.payload,
      };
      default:
        return state;
    }
  };
  