/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';

const ChampionAbilityCards = ({ spell }) => {
  const {
    cooldown,
    cooldownBurn,
    cost,
    costBurn,
    costType,
    datavalues,
    description,
    effect,
    effectBurn,
    id,
    image,
    leveltip,
    maxammo,
    maxrank,
    name,
    range,
    rangeBurn,
    resource,
    tooltip,
  } = spell;

  // console.log(spell);

  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Img src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${image.full}`} />
    </Card>
  );
};

export default ChampionAbilityCards;

// cooldown: (5) [11, 10, 9, 8, 7]
// cooldownBurn: "11/10/9/8/7"
// cost: (5) [80, 85, 90, 95, 100]
// costBurn: "80/85/90/95/100"
// costType: " {{ abilityresourcename }}"
// datavalues: {}
// description: "Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area."
// effect: (11) [null, Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5), Array(5)]
// effectBurn: (11) [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
// id: "FlashFrost"
// image: {full: "FlashFrost.png", sprite: "spell0.png", group: "spell", x: 192, y: 144, …}
// leveltip: {label: Array(5), effect: Array(5)}
// maxammo: "-1"
// maxrank: 5
// name: "Flash Frost"
// range: (5) [1075, 1075, 1075, 1075, 1075]
// rangeBurn: "1075"
// resource: "{{ cost }} {{ abilityresourcename }}"
// tooltip: "Anivia fires a massi
