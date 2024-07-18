import { SET_CURRENT_PAGE, SET_SELECT_OPTION } from "../type";

export const setNewCurrentPage = (page: number) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
  });
export const setSelectedValue = (status: boolean | null) => ({
    type: SET_SELECT_OPTION,
    payload: status,
  });