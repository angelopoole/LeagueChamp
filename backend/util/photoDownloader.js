import download from 'image-downloader';
import axios from 'axios';

const champNameGenerator = async () => {
	// console.log('arr', arrayOfNames);
};

export const imageDownloader = async () => {
	let data = await axios.get(
		'http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json'
	);

	let newArrayDataOfOjbect = Object.values(data.data.data);

	let arrayOfNames = newArrayDataOfOjbect.map(obj => obj.id);

	let namedImageAddresses = arrayOfNames.map(obj => {
		const options = {
			url: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${obj}_0.jpg`,
			dest: './backend/images', // will be saved to /path/to/dest/image.jpg
		};
		return options;
	});

	let mapDownloads = namedImageAddresses.map(options => {
		download
			.image(options)
			.then(({ filename }) => {
				console.log('Saved to', filename); // saved to /path/to/dest/image.jpg
			})
			.catch(err => console.error(err));
	});

	mapDownloads();
};
