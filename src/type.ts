import { INFOR_ACTION_STORE } from "./constants";
export type BookType = {
    dataModal: any;
    data: any;
    id: number,
    status: boolean,
    bookTitle:  string,
    borrower: string,
    borrowDate: Date,
    returnDate: Date,
}

export const FETCH_DATA_REQUEST = INFOR_ACTION_STORE.FETCH_DATA_REQUEST;
export const FETCH_DATA_SUCCESS = INFOR_ACTION_STORE.FETCH_DATA_SUCCESS;
export const FETCH_DATA_FAILURE = INFOR_ACTION_STORE.FETCH_DATA_FAILURE;
export const SET_CURRENT_PAGE = INFOR_ACTION_STORE.SET_CURRENT_PAGE;
export const SET_SELECT_OPTION = INFOR_ACTION_STORE.SET_SELECT_OPTION;
export const SET_STATUS_MODAL = INFOR_ACTION_STORE.SET_STATUS_MODAL;
export const SET_DATA_MODAL = INFOR_ACTION_STORE.SET_DATA_MODAL;
export const SET_FEATURE_MODAL = INFOR_ACTION_STORE.SET_FEATURE_MODAL;
export const SET_RENDER_SCREEN = INFOR_ACTION_STORE.SET_RENDER_SCREEN;

export type FetchDataRequestAction = {
  type: typeof FETCH_DATA_REQUEST;
  payload: any;
};

export type FetchDataSuccessAction = {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any; 
};

export type FetchDataFailureAction = {
  type: typeof FETCH_DATA_FAILURE;
  error: string;
};

export type CurrentPage = {
  type: typeof SET_CURRENT_PAGE,
  payload: number,
}
export type SelectOption = {
  type: typeof SET_SELECT_OPTION,
  payload: boolean,
}
export type StatusModal = {
  type: typeof SET_STATUS_MODAL,
  payload: boolean
}
export type DataModal = {
  type: typeof SET_DATA_MODAL,
  payload: BookType
}
export type FeatureModal = {
  type: typeof SET_FEATURE_MODAL,
  payload: string
}

export type RenderScreen = {
  type: typeof SET_RENDER_SCREEN,
  payload: boolean
}

export type ActionTypes = 
      FetchDataRequestAction | 
      FetchDataSuccessAction | 
      FetchDataFailureAction | 
      CurrentPage | 
      SelectOption |
      StatusModal |
      DataModal |
      FeatureModal |
      RenderScreen
      ;
export type  INITIAL_STATE = {
  data?: any,
  currentPage: number ,
  status?: boolean,
  statusModal?: boolean,
  dataModal?: BookType,
  featureModal?: string,
  reRenderScreen?: boolean
}
