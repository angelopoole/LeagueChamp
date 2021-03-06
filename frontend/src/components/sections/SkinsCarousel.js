/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Carousel, Image } from 'react-bootstrap';

import Loader from '../Loader';

const StyledImageContainer = styled(Image)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 70%;
`;

const SkinsCarousel = ({ skins, loading, error, match }) => {
  const paramsChampId = match.params.id;

  const carouselItems = () => {
    let items = null;
    if (loading) {
      items = <Loader />;
    } else if (error) {
      items = <div>error </div>;
    } else {
      items = skins.map(skin => (
        <Carousel.Item key={skin.id}>
          <StyledImageContainer
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${paramsChampId}_${skin.num}.jpg`}
          />
          <Carousel.Caption> {skin.name}! </Carousel.Caption>
        </Carousel.Item>
      ));
    }
    return items;
  };

  return (
    <Carousel slide={false} fade={false} style={{ height: '55%', width: '95%', margin: 'auto' }}>
      {carouselItems()}
    </Carousel>
  );
};

export default SkinsCarousel;
