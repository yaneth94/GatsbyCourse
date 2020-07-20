import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import HeroSlider from '../components/index/HeroSlider'
import CTAImages from '../components/index/CTAImages'
import LatestTrend from '../components/index/LatestTrend'
import Citat from '../components/index/Citat'
import About from '../components/index/About'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={['tango', 'brand', 'alliance']} />
    <HeroSlider></HeroSlider>
    <CTAImages></CTAImages>
    <LatestTrend></LatestTrend>
    <Citat></Citat>
    <About></About>
  </Layout>
)

export default IndexPage
