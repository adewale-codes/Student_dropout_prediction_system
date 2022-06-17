import React from 'react'
import ReactDom from "react-dom"
import {BrowserRouter} from "react-router-dom"
import {createGlobalStyle} from 'styled-components'
import Layout from './components/Layout'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #E5E5E5;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
        <div>This is a child</div>
    </Layout>
    </>
  )
}

export default App
