import styled from "styled-components";

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  width: 80%;
  margin: 0 auto;
`;

export const MoviePoster = styled.img`
  border-radius: 20px;
  max-width: 70%;
  place-self: center;
`;

export const MovieTitle = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: 600;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;

export const VideoContianer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 100px;
  padding-bottom: 100px;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }

  iframe:hover {
    opacity: 1;
  }
`;
