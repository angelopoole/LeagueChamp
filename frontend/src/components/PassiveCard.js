import React from 'react';

import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ImageWrapper = styled(Image)`
  align-content: center;
`;

const PassiveCard = ({ passive }) => {
  const { description, image, name } = passive;

  return (
    <>
      <ImageWrapper
        src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/passive/${image.full}`}
      />
      <strong>{name}</strong>
      <div>{description}</div>
    </>
  );
};

PassiveCard.defaultProps = {
  passive: {
    description: 'desc',
    name: 'name',
    image: {
      full: 'Ahri_SoulEater2.png',
      group: 'passive',
      h: 48,
      sprite: 'passive0.png',
      w: 48,
      x: 48,
      y: 0,
    },
  },
};

PassiveCard.propTypes = {
  passive: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.shape({
      full: PropTypes.string,
      group: PropTypes.string,
      h: PropTypes.number,
      sprite: PropTypes.string,
      w: PropTypes.number,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  }),
};

export default PassiveCard;
