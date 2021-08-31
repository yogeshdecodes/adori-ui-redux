import { FETCH_ALL } from '../constants/actionTypes';

import * as api from '../api';

//The reason why we use thunk is for ***asynchrous action***
//instead of returning object as action , in thunk we send dispatch
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
