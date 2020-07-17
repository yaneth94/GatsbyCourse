import React, { Component } from 'react'
import Layout from '../components/Layout'
/*import Button from "../examples/Button"*/
//use useStaticQuery
/*import Header from "../examples/Header"*/
//use StaticQuery
/*import RegularHeader from "../examples/RegularHeader"*/
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Tours from '../components/Tours/Tours'

class tours extends Component {
  render () {
    return (
      <Layout>
        <StyledHero
          img={this.props.data.defaultBcg.childImageSharp.fluid}
        ></StyledHero>
        {/*
        <div>
          <Button letter="red" background="black">
            first button
          </Button>
          <Button background="red" big>
            second button
          </Button>
        </div>
        */}
        {/*<Header></Header>
        <RegularHeader></RegularHeader>*/}
        <Tours></Tours>
      </Layout>
    )
  }
}

export default tours

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
