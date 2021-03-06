/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import { tableProps } from '../interfaces';
import setting from '../../config';

const StyledTable = styled.table`
  width: 100%;
  max-width: 100%;
  item-align: center;
  text-align: center;
`;

const StyledTD = styled.td`
  max-width: 350px;
  border: 1px solid black;
`;

const TDinnerDiv = styled.div`
  width: 100%;
  max-height: 100px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTH = styled.th`
  border: 1px solid red;
`;

const Table = (props: tableProps): JSX.Element => {
  const data: any = props.data;
  // let dataKeys = [];
  if (!data || data.length === 0) {
    return <div>데이터를 불러오는 중이거나 없습니다.</div>;
  }
  const headers = Object.keys(data[0]);

  const deleteData = (API_PATH: string) => {
    const cookie = localStorage.getItem('token');

    return async () => {
      await fetch(setting.FETCH_ADDRESS + API_PATH, {
        method: 'DELETE',
        headers: {
          authorization: cookie || '',
        },
      });
    };
  };

  return (
    <StyledTable style={{ border: '1px solid black' }}>
      <thead>
        <tr>
          {headers.map((el, index: number) => (
            <StyledTH key={index}>{el}</StyledTH>
          ))}
          <StyledTH>delete</StyledTH>
        </tr>
      </thead>
      <tbody>
        {data.map((el: any, index: number) => (
          <tr key={index}>
            {Object.values(data[index]).map((el: any, index: number) => (
              <StyledTD key={index}>
                <TDinnerDiv>{el}</TDinnerDiv>
              </StyledTD>
            ))}
            <StyledTD>
              <button
                style={{ width: '100%', height: '100%' }}
                onClick={deleteData(`/api/${props.dataName}/${el.ID}`)}
              >
                삭제
              </button>
            </StyledTD>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
