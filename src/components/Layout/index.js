import React from 'react'
import Styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'

const Container = Styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
`;

function index(props) {
  return (
    <Container>
      <Sidebar />
      <div>
        <Header />
        {props.children}
      </div>

    </Container>
  )
}

export default index
