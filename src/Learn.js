import React from 'react';
import styled from 'styled-components';
import './app.css';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  // margin-left: 2em;
  // margin-right: 8em;
//   grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const Learn = () => (
  <GridWrapper>
    <div className="box">
    <h1>Looking for resources?</h1>
    <ul>
    <h2><a href="https://enlight.nyc/">Enlight</a></h2>
    <h2>Sports</h2>
    <h2>Politics</h2>
    <h2>History</h2>
    </ul>
  </div>
  </GridWrapper>
)