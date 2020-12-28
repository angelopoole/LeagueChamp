import axios from 'axios';

//@desc
//@route
//@access

// @desc    Fetch all Champions
// @route   GET /api/datadragon/Champions
// @access  Public

const getAllChampionData = async (req, res) => {
	let data = await axios.get(
		'http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json'
	);

	let newArrayDataOfOjbect = Object.values(data.data.data);

	res.send(newArrayDataOfOjbect);
};

//@desc     Get one champion
//@route    GET /api/dataDragon/:id
//@access   public

const getChampionById = async (req, res) => {
	console.log('hit');
	try {
		let champIdCapitalized =
			(await req.params.id[0].toUpperCase()) + req.params.id.slice(1);
		// console.log(req);
		let { data } = await axios.get(
			`http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion/${champIdCapitalized}.json`
		);

		let key = Object.keys(data.data)[0];
		let formattedData = data.data[key];
		console.log(formattedData);

		res.send(formattedData);
	} catch (error) {
		console.log(error);
	}

	res.send(data.data);
};

export { getAllChampionData, getChampionById };
