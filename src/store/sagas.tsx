
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
function* rootSaga() {
  yield takeLatest('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default rootSaga;
