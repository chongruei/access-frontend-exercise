import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Container, Header, FooterContainer, Row, Column } from './TableComponents';

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const Table = props => {
  const { columns, datas, pagination } = props;
  const [currPage, setCurrPage] = useState(1);
  const [eachSinceIds, setEachSinceIds] = useState([]);
  const [sinceId, setSinceId] = useState(0);
  const dispatch = useDispatch();
  const perPage = 20;

  const headerLabels = columns.map(col => col.label);
  const columnNames = columns.map(col => col.name);
  const options = columns.map(col => col.options);

  useEffect(() => {
    dispatch(pagination(sinceId));
  }, [sinceId]);

  const toNextPage = () => {
    if (currPage === 5 || datas.length === 0) return;
    setEachSinceIds(prevEachSinceIds => {
      if (currPage > prevEachSinceIds.length) return [...prevEachSinceIds, datas[0].id - 1];
    });
    setCurrPage(prevCurrPage => prevCurrPage + 1);
    setSinceId(datas[datas.length - 1].id);
  };

  const toPrevPage = () => {
    if (currPage === 1) return;
    setCurrPage(prevCurrPage => prevCurrPage - 1);
    setSinceId(eachSinceIds[currPage - 2]);
  };

  return (
    <Container>
      <Header>
        {headerLabels.map((label, index) => (
          <Column key={index}>{label}</Column>
        ))}
      </Header>

      {datas &&
        datas.map((data, rowIndex) => {
          return (
            <Row key={`row_${rowIndex}`}>
              {columnNames &&
                columnNames.map((label, colIndex) => {
                  const key = `col_${colIndex}`;
                  const option = options[colIndex];
                  const value = data[label];
                  return (
                    <Column key={key}>
                      {colIndex === 0 && (currPage - 1) * perPage + rowIndex + 1}
                      {option && option.isLink && (
                        <a href={value} onClick={option.onClick(value)}>
                          {value}
                        </a>
                      )}
                      {option && option.isImg && <Img src={value} />}
                      {option && option.isBoolean && (value === true ? 'true' : 'false')}
                      {!option && colIndex !== 0 && value}
                    </Column>
                  );
                })}
            </Row>
          );
        })}
      <FooterContainer toPrev={toPrevPage} toNext={toNextPage} />
    </Container>
  );
};

export { Table };
