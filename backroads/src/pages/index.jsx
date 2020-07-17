import React from 'react'
import Layout from '../components/Layout'
//import SimpleHero from "../components/SimpleHero"
import Banner from '../components/Banner'
//import { Link } from "gatsby"
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import FeaturedTours from '../components/Home/FeaturedTours'

export default function Home ({ data }) {
  return (
    <Layout>
      {/*
      <SimpleHero>
        <Banner
          title='continue exploring'
          info=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, odio.'
        >
          <Link to='/tours' className='btn-white'>
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
      */}
      <StyledHero home='true' img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title='continue exploring'
          info=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis.'
        >
          <AniLink fade to='/tours' className='btn-white'>
            explore tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About></About>
      <Services></Services>
      <FeaturedTours></FeaturedTours>
    </Layout>
  )
}
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
