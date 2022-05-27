import styled from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Itim']
  }
});

export const MainSection = styled.main`
  @import "normalize.css";

  margin: 0 auto;
  max-width: 400px;

  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  /* border: 2px solid tomato; */
`;