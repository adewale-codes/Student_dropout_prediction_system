import React from 'react'
import "./Styles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCommentDots, faBell, faUserTie, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import Styled from 'styled-components';
import Item1 from "./image/avatar.jpg"


const StyledHeader = Styled.div`
    height: 79px;
    background: #ffffff;
`;

// const StyledSearchIcon = Styled.div`
//     position: absolute;
//     width: 24.22px;
//     height: 24px;
//     left: 280px;
//     top: 27px;
// `


const StyledSearch = Styled.div`
    position: absolute;
    width: 650px;
    height: 49px;
    left: 20%;
    top: 17px;
`
const StyledLine = Styled.div`
    position: absolute;
    width: 40px;
    height: 0px;
    left: 70%;
    top: 39px;
    opacity: 0.2;
    border: 1px solid #07102F;
    transform: rotate(90deg);
`

const StyledMessage = Styled.div`
    position: absolute;
    width: 38px;
    height: 38px;
    left: 75%;
    top: 30px;
    color: #5855D6;
`

const StyledNotification = Styled.div`
    position: absolute;
    width: 38.34px;
    height: 38px;
    left: 78%;
    top: 30px;
    color: #5855D6;
`

const StyledAvatar = Styled.div`
    position: relative;
    width: 40.36px;
    height: 40px;
    border-radius: 50%;
    left: 78%;
    top: 26px;
    overflow: hidden;
`

const StyledName = Styled.div`
    position: absolute;
    width: 43px;
    height: 20px;
    left: 86%;
    top: 15px;

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #0A043C;
`

const StyledJob = Styled.div`
    position: absolute;
    width: 60px;
    height: 24px;
    left: 86%;
    top: 42px;

    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
/* or 100% */

    letter-spacing: 0.02em;

    color: #0A043C;

    opacity: 0.7;
`

const StyledDots = Styled.div`
    position: absolute;
    width: 3.03px;
    height: 14.96px;
    left: 92%;
    top: 30px;
    color: #5855D6;
`

function Header() {
  return (
    <StyledHeader>
      {/* <StyledSearchIcon>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      </StyledSearchIcon> */}
      <StyledSearch>
        <div className="search">
            <input type="text" className="searchTerm" placeholder="Search course, student or instructor" />
            <button type="submit" className="searchButton">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
      </StyledSearch>
      <StyledLine>
      </StyledLine>
      <StyledMessage>
        <FontAwesomeIcon icon={faCommentDots} />
      </StyledMessage>
      <StyledNotification>
        <FontAwesomeIcon icon={faBell} />
      </StyledNotification>
      <StyledAvatar>
          <img src={Item1} alt="" />
        {/* <FontAwesomeIcon icon={faUserTie} /> */}
      </StyledAvatar>
      <StyledName>
        <p>Mic</p>
      </StyledName>
      <StyledJob>
        <p>Counsellor</p>
      </StyledJob>
      <StyledDots>
      <FontAwesomeIcon icon={faEllipsisVertical} />
      </StyledDots>
    </StyledHeader>
  )
}

export default Header
