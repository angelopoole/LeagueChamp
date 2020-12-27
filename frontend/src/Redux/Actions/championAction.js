import axios from 'axios';

import {
	GET_ALL_CHAMPIONS_SUCCESS,
	GET_CHAMPION_BY_ID,
} from '../Consonants/championConsonants';

export const getAllChampions = () => {
	return async dispatch => {
		try {
			let res = await axios.get('api/datadragon/champions/');
			// let arr = [];
			// arr.push(res.data);

			// res.forEach(datum => console.log(datum));

			let newArrayDataOfOjbect = Object.values(res.data);

			// console.log([newArrayDataOfOjbect]);

			dispatch({
				type: GET_ALL_CHAMPIONS_SUCCESS,
				payload: newArrayDataOfOjbect,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
