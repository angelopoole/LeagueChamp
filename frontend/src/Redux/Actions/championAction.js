import api from '../../api';
import {
	GET_ALL_CHAMPIONS,
	GET_CHAMPION_BY_ID,
} from '../Consonants/championConsonants';

export const getAllChampions = () => {
	return async dispatch => {
		try {
			let res = await api.get('/datadragon/champions');

			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
};
