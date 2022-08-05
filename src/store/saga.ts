import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { instance } from "../axios-instance";
import { IPost } from "../types/post";

const getPosts = () => instance.get<IPost[]>("/posts");

function* fetchPosts() {
  try {
    // const response = yield call(getPosts);
  } catch (e) {
    // yield put({type: });
  }
}
