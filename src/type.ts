export type BookType = {
    data: any;
    id: number,
    status: boolean,
    bookTitle:  string,
    borrower: string,
    borrowDate: Date,
    returnDate: Date,
}

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_SELECT_OPTION = 'SET_SELECT_OPTION';

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

export type ActionTypes = FetchDataRequestAction | FetchDataSuccessAction | FetchDataFailureAction | CurrentPage | SelectOption;
