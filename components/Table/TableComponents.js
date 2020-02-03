import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: table;
  margin: 2em;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  color: #ffffff;
  background: #46a049;
  border-top: solid 1px #46a049;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 0;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-left: solid 1px #d9d9d9;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vh;
  padding: 0.5em 0.5em;
  border-right: solid 1px #d9d9d9;
  border-bottom: solid 1px #d9d9d9;
`;

const ArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 1px;
  width: 25px;
  height: 25px;

  &:hover {
    background: #dde8de;
  }
`;

const LeftArrow = styled.i`
  border: solid #46a049;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
`;

const RightArrow = styled.i`
  border: solid #46a049;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
`;

const FooterContainer = prop => {
  const { toPrev, toNext } = prop;
  return (
    <Footer>
      <ArrowBox onClick={toPrev}>
        <LeftArrow />
      </ArrowBox>
      <ArrowBox onClick={toNext}>
        <RightArrow />
      </ArrowBox>
    </Footer>
  );
};

export { Container, Header, FooterContainer, Row, Column };
