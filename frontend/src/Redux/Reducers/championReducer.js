import {
  GET_ALL_CHAMPIONS_REQUEST,
  GET_ALL_CHAMPIONS_SUCCESS,
  GET_ALL_CHAMPIONS_FAIL,
  GET_CHAMPION_BY_ID_REQUEST,
  GET_CHAMPION_BY_ID_SUCCESS,
  GET_CHAMPION_BY_ID_FAIL,
} from '../Consonants/championConsonants';

let initialState = {
  champions: [],
};

export const championReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CHAMPIONS_REQUEST:
      return { loading: true, champions: [] };
    case GET_ALL_CHAMPIONS_SUCCESS:
      return { loading: false, champions: payload };
    case GET_ALL_CHAMPIONS_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const championDetailsReducer = (
  state = { currentChamp: { skins: [] } },
  { type, payload },
) => {
  switch (type) {
    case GET_CHAMPION_BY_ID_REQUEST:
      return { loading: true, currentChamp: { skins: [] } };
    case GET_CHAMPION_BY_ID_SUCCESS:
      return { loading: false, currentChamp: payload };
    case GET_CHAMPION_BY_ID_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
