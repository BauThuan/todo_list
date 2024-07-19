export const LIST_TITLE_TABLE = {
    SERIAL_NUMBER : "STT",
    BOOK_TITLE: "Tên sách",
    BORROWER: "Sinh viên mượn",
    BORROW_DATE: "Ngày mượn",
    RETURN_DATE: "Ngày trả",
    STATUS: "Trạng thái",
    FEATURE: "Chức năng"
} as const;
export const TOAST_TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error"
} as const;
export const BTN_TITLE = {
    EDIT: "Sửa",
    ADD: "Thêm",
    ADD_INFORMATION: "Thêm thông tin",
    DELETE: "Xóa"
} as const;
export const STATUS_BRROW_BOOK = {
    ALL: 'Tất cả',
    PAID: "Đã trả",
    UN_PAID: "Chưa trả"
} as const;

export const INFOR_ACTION_STORE = {
    FETCH_DATA_REQUEST: 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_SELECT_OPTION: 'SET_SELECT_OPTION',
    SET_STATUS_MODAL: 'SET_STATUS_MODAL',
    SET_DATA_MODAL: 'SET_DATA_MODAL',
    SET_FEATURE_MODAL: 'SET_FEATURE_MODAL',
    SET_RENDER_SCREEN: 'SET_RENDER_SCREEN',
} as const
