
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'https://654b8b5b5b38a59f28ef4924.mockapi.io/api/books');
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', error});
  }
}
function* deleteBookSaga(action: any) {
  try {
    const response = yield call(axios.delete, `https://654b8b5b5b38a59f28ef4924.mockapi.io/api/books/${action.payload.id}`);
    yield put({ type: 'DELETE_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'DELETE_DATA_FAILURE', error });
  }
}
function* addBookSaga(action: any) {
  try {
    const response = yield call(axios.post, 'https://654b8b5b5b38a59f28ef4924.mockapi.io/api/books', action.payload);
    yield put({ type: 'ADD_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'ADD_DATA_FAILURE', error });
  }
}
function* updateBookSaga(action : any) {
  try {
    const response = yield call(axios.put, `https://654b8b5b5b38a59f28ef4924.mockapi.io/api/books/${action.payload.id}`, action.payload);
    yield put({ type: 'UPDATE_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'UPDATE_DATA_FAILURE', error });
  }
}
function* rootSaga() {
  yield takeLatest('FETCH_DATA_REQUEST', fetchDataSaga);
  yield takeLatest('DELETE_DATA_REQUEST', deleteBookSaga);
  yield takeLatest('ADD_DATA_REQUEST', addBookSaga);
  yield takeLatest('UPDATE_DATA_REQUEST', updateBookSaga);
}

export default rootSaga;
