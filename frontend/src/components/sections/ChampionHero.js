import React from 'react';
// import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Section = styled.section`
  /* position: relative; */
  /* min-height: 75vh !important ; */
  padding: 120px 0px 75px;
  /* background: rgb(0, 9, 19); */
`;

// whole container ^

const BackgroundAsset = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80vh;
  max-height: 800px;
  /* overflow: hidden; */
`;

const StyledBackgroundImage = styled.div`
  position: absolute;
  left: -5%;
  top: -5%;
  width: 110%;
  height: 110%;
`;

const StyledBackgroundImagePure = styled.img`
  object-fit: cover;
  object-position: center 20%;
  display: block;
  width: 100%;
  height: 100%;
  filter: blur(8px);
  animation: 3000ms cubic-bezier(0.215, 0.61, 0.355, 1) 500ms 1 normal both running fCjpPs;
`;
// bgasset bgimage bgpure bgimage bgasset
// above for styled blured image

const StyleWrapper = styled.div`
  position: absolute;
  top: 31%;
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyleTile = styled.div`
  width: 12px;
  flex: 0 0 auto;
  position: relative;
  /* overflow: hidden; */
`;

const StyledTextContainer = styled.div`
  z-index: 10;
  position: relative;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%) rotate(270deg);
  color: white;
`;

const StyleText = styled.div`
  text-transform: uppercase;
`;
// wrapper tile container text text container tile wrapper
//

const StyleSectionInner = styled.div`
  padding: 0px 0.625rem;
  box-sizing: border-box;
  max-width: 1335px;
  padding: 0px 3.75rem;
  margin: 0px auto;
`;

const StyleForegroundAsset = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-bottom: 59.01%;
  -webkit-mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 98%);
  mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 98%);
`;

const StyleForegroundAssetPure = styled.img`
  object-fit: cover;
  object-position: center 20%;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  animation: 2000ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms 1 normal both running bcCCNc;
`;
// style sectioninner foregroundasset sectioninner
// end image

// style dock sits next to image aswell as champion button

// const StyleDock = styled.div`
//   position: relative;
//   margin: -5.625rem 3.75rem 0px;
// `;

// const StyledImgBackgroundBG = styled.div`
//   position: absolute;
//   left: -5%;
//   top: -5%;
//   width: 110%;
//   height: 110%;
// `;

// const StyledImgBk = styled.img`
//   object-fit: cover;
//   object-position: center 20%;
//   display: block;
//   width: 100%;
//   height: 100%;
//   filter: blur(8px);
//   animation: 3000ms cubic-bezier(0.215, 0.61, 0.355, 1) 500ms 1 normal both running fCjpPs;
// `;

// const ForegroundAsset = styled.div`
//   overflow: hidden;
//   position: relative;
//   width: 100%;
//   padding-bottom: 59.01%;
//   -webkit-mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 98%);
// `;

// const StyledImgFG = styled.img`
//   object-fit: cover;
//   object-position: center 20%;
//   position: absolute;
//   left: 0px;
//   top: 0px;
//   width: 100%;
//   height: 100%;
//   animation: 2000ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms 1 normal both running bcCCNc;
// `;

const ChampionHero = id => (
  <>
    <Section>
      <BackgroundAsset>
        <StyledBackgroundImage>
          <StyledBackgroundImagePure
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id.id}_0.jpg`}
            alt={id.id}
          />
        </StyledBackgroundImage>
      </BackgroundAsset>
      <StyleWrapper>
        <StyleTile>
          <StyledTextContainer>
            <StyleText>overveiw</StyleText>
          </StyledTextContainer>
        </StyleTile>
      </StyleWrapper>
      <StyleSectionInner>
        <StyleForegroundAsset>
          <StyleForegroundAssetPure
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id.id}_0.jpg`}
            alt={id.id}
          />
        </StyleForegroundAsset>
      </StyleSectionInner>
    </Section>
  </>
);

export default ChampionHero;

// src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${paramsChampId}_${skin.num}.jpg`}

// <StyledImgBk
//   src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id.id}_0.jpg`}
//   alt={id.id}
// />