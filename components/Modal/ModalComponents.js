import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 90%;
  background: ${props => (props.isTitle ? '#46a049' : '#ffffff')};
  color: ${props => (props.isTitle ? '#ffffff' : '#000000')};
  padding: 5px;
`;

export { Container, Row };
