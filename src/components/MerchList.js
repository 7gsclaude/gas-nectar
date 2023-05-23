import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.div`
color: white;


`;

function MerchList() {
  return (
    <>
      <h1>MerchList List </h1>
      <List>
        <Link to="/merch/1">Merch 1</Link>
      </List>
    </>
  );
}

export default MerchList