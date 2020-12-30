import axios from 'axios';

// @desc
// @route
// @access

// @desc    Fetch all Champions
// @route   GET /api/datadragon/Champions
// @access  Public

const getAllChampionData = async (req, res) => {
  const data = await axios.get(
    'http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json',
  );

  const newArrayDataOfOjbect = Object.values(data.data.data);

  res.send(newArrayDataOfOjbect);
};

// @desc     Get one champion
// @route    GET /api/dataDragon/:id
// @access   public

const getChampionById = async (req, res) => {
  try {
    const champIdCapitalized = (await req.params.id[0].toUpperCase()) + req.params.id.slice(1);

    const { data } = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion/${champIdCapitalized}.json`,
    );

    const key = Object.keys(data.data)[0];
    const formattedData = data.data[key];

    res.send(formattedData);
  } catch (error) {
    res.send(error);
  }
};

export { getAllChampionData, getChampionById };
