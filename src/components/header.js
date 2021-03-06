import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Menu from './menu'
import octocat from '../../static/octocat.png'

const Header = props => {
  const {
    logoText,
    mainMenu,
    mainMenuItems,
    menuMoreText,
  } = props

  const [isMobileMenuVisible, toggleMobileMenu] = useState(false)
  const [isSubMenuVisible, toggleSubMenu] = useState(false)
  const onToggleMobileMenu = () => toggleMobileMenu(!isMobileMenuVisible)
  const onToggleSubMenu = () => toggleSubMenu(!isSubMenuVisible)

  return (
    <>
      <HeaderContainer>
        <Inner>
          <Link to="/">
            <Logo>
              <>
                <img
                  src={octocat}
                  style={{ width: '25px', height: '25px' }}
                  alt="Hi 👋🏼"
                />
                &nbsp;
                <Text>{logoText}</Text>
              </>
            </Logo>
          </Link>

          <Right>
            <Menu
              mainMenu={mainMenu}
              mainMenuItems={mainMenuItems}
              isMobileMenuVisible={isMobileMenuVisible}
              isSubMenuVisible={isSubMenuVisible}
              menuMoreText={menuMoreText}
              onToggleMobileMenu={onToggleMobileMenu}
              onToggleSubMenu={onToggleSubMenu}
            />
          </Right>
        </Inner>
      </HeaderContainer>
    </>
  )
}

Header.propTypes = {
  logoText: PropTypes.string,
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
  mainMenuItems: PropTypes.number,
  menuMoreText: PropTypes.string,
}

export default Header

const HeaderContainer = styled.header`
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  width: 100%;
  height: 4rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-top: 2px solid #f875b4;
  transform: translateZ(0);
  z-index: 1;

  .dark & {
    background-color: rgb(41, 42, 45, 0.95);
  }
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 90%;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;

  & img {
    height: 44px;
  }
`

const Text = styled.span`
  font-size: 25px;

  //transform: rotate(10deg);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const Right = styled.span`
  display: flex;
  position: relative;
`
