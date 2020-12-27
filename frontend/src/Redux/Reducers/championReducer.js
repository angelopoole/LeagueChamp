import {
	GET_ALL_CHAMPIONS_REQUEST,
	GET_ALL_CHAMPIONS_SUCCESS,
	GET_CHAMPION_BY_ID,
	GET_ALL_CHAMPIONS_FAIL,
} from '../Consonants/championConsonants';

let initialState = {
	champions: [],
};

const championReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALL_CHAMPIONS_REQUEST:
			console.log(payload);
			return { loading: true, champions: [] };
		case GET_ALL_CHAMPIONS_SUCCESS:
			console.log(payload);
			return { loading: false, champions: payload };
		case GET_ALL_CHAMPIONS_FAIL:
			return { loafing: false, error: payload };
		default:
			return state;
	}
};

export default championReducer;
