import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <Item>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
        </Item>
        <Item>
          Made by <a href="https://github.com/edgarMejia" target="_blank" rel="noopener noreferrer">Edgar Mejía</a>
        </Item>
        <Item>
          <a href="https://twitter.com/edgar_mmejia" target="_blank" rel="noopener noreferrer">Twitter</a>
          &nbsp;•&nbsp;
          <a href="https://github.com/edgarMejia" target="_blank" rel="noopener noreferrer">GitHub</a>
          &nbsp;•&nbsp;
          <a href="https://stackoverflow.com/users/9200447" target="_blank" rel="noopener noreferrer">StackOverflow</a>
        </Item>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer

const Item = styled.span`
  &:not(:first-of-type) {
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid;
  }
`
