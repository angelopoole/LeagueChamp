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
	// console.log('hit');
	// console.log(data.data);
	res.send(data.data.data);
};

//@desc     Get one champion
//@route    GET /api/dataDragon/:id
//@access   public

const getChampionById = async (req, res) => {
	let champIdCapitalized =
		req.params.id[0].toUpperCase() + req.params.id.slice(1);

	let data = await axios.get(
		`http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion/${champIdCapitalized}.json`
	);

	res.send(data.data);
};

export { getAllChampionData, getChampionById };
