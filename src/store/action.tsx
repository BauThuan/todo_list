import { BookType } from "../type";
import { INFOR_ACTION_STORE } from "../constants";

export const setNewCurrentPage = (page: number) => ({
    type: INFOR_ACTION_STORE.SET_CURRENT_PAGE,
    payload: page,
  });
export const setSelectedValue = (status: boolean) => ({
    type: INFOR_ACTION_STORE.SET_SELECT_OPTION,
    payload: status,
  });
export const setStatusModal = (status: boolean) => ({
  type: INFOR_ACTION_STORE.SET_STATUS_MODAL,
  payload: status
})
export const setDataModal = (data: BookType) => ({
  type: INFOR_ACTION_STORE.SET_DATA_MODAL,
  payload: data
})
export const setFeatureModal = (title: string) => ({
  type: INFOR_ACTION_STORE.SET_FEATURE_MODAL,
  payload: title
})
export const setRenderScreen = (status: boolean ) => ({
  type: INFOR_ACTION_STORE.SET_FEATURE_MODAL,
  payload: status
})