import styled from 'styled-components';

const Gallery = styled.div`
  flex: 3;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 2%;
  border-radius: 10px;
  max-height: 80vh;
  width: 65vw;
  height: 80 vw;
  object-fit: scale-down;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  cursor: zoom-in;
`;

const Carousel = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  object-fit: scale-down;
  height: 100%;
`;

const Arrow = styled.span`
  font-size: 5vh;
  cursor: pointer;
  text-align: center;
`;

const Thumbnails = styled.div`
  position: absolute;
  bottom: 0px;
  width: 50%;
  left: 25%;
  display: flex;
  justify-content: space-evenly;
  gap: 1%;
  z-index: 2;
`;

const ActiveThumbnail = styled.div`
  height: 7.5vw;
  border-radius: 1vw;
  width: 7.5vw;
  border: solid green 4px;
  cursor: pointer;
  background-image: url(${props => props.src});
  background-size: cover;
`;

const Thumbnail = styled.div`
  height: 5vw;
  border-radius: 1vw;
  width: 5vw;
  cursor: pointer;
  border: solid 2px;
  background-image: url(${props => props.src});
  background-size: cover;
`;

export { Gallery, Carousel, Arrow, Thumbnails, ActiveThumbnail, Thumbnail };