import {
	GET_ALL_CHAMPIONS,
	GET_CHAMPION_BY_ID,
} from '../Consonants/championConsonants';

let initialState = {};

const championReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'GetAllChampions':
			return { state: payload };

		default:
			return state;
	}
};

export default championReducer;
