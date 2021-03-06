import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import AboutMe from '../components/about'

const Index = ({ data }) => {
  const { avatar } = data

  return (
    <>
      <SEO />
      <Layout>
        <div className="col-12">
          <AboutMe avatar={avatar} />
        </div>
      </Layout>
    </>
  )
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar2.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Index
