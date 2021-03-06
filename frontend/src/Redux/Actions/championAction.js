import axios from 'axios';

import {
  GET_ALL_CHAMPIONS_REQUEST,
  GET_ALL_CHAMPIONS_SUCCESS,
  GET_ALL_CHAMPIONS_FAIL,
  GET_CHAMPION_BY_ID_REQUEST,
  GET_CHAMPION_BY_ID_SUCCESS,
  GET_CHAMPION_BY_ID_FAIL,
} from '../Consonants/championConsonants';

export const getAllChampions = () => async dispatch => {
  try {
    dispatch({ type: GET_ALL_CHAMPIONS_REQUEST });
    const res = await axios.get('api/datadragon/champions/');
    // let newArrayDataOfOjbect = Object.values(res.data);

    dispatch({
      type: GET_ALL_CHAMPIONS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CHAMPIONS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getChampionById = id => async dispatch => {
  try {
    dispatch({ type: GET_CHAMPION_BY_ID_REQUEST });
    const res = await axios.get(`/api/datadragon/champions/${id}`);

    dispatch({ type: GET_CHAMPION_BY_ID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_CHAMPION_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// export const listProducts = (keyword = '', pageNumber = '') => async (
//   dispatch
// ) => {
//   try {
//     dispatch({ type: PRODUCT_LIST_REQUEST })

//     const { data } = await axios.get(
//       `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
//     )

//     dispatch({
//       type: PRODUCT_LIST_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
