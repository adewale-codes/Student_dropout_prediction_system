import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faGraduationCap, faBook, faUserTie, faCalendarDays, faStar, faUserCheck, faGear } from '@fortawesome/free-solid-svg-icons'
import Item from "./image/bowen.png"

import Styled from 'styled-components'

const StyledSidebar = Styled.div`
  background-color: #333269;
  padding: 46px 0 40px 0;
  height: 100vh;
`;

// const StyledItem = Styled.div`
//   position: absolute;
//   width: 0.2px;
//   height: 0.8px;
//   left: 0.3px;
//   top: 0.3px;

// `

const StyledMini = Styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 210px;
  top: 16px;
  color: #FFFFFF;
`;

const StyledLogo = Styled.div`
  position: absolute;
  width: 114px;
  height: 24px;
  left: 85px;
  top: 51px;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 48px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const StyledDashboard = Styled.div`
  position: absolute;
  width: 106px;
  height: 21px;
  left: 79px;
  top: 158px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`;

const StyledCourses = Styled.div`
  position: absolute;
  width: 58.04px;
  height: 18px;
  left: 79.05px;
  top: 218px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const StyledStudents = Styled.div`
  position: absolute;
  width: 64.04px;
  height: 18px;
  left: 79.05px;
  top: 275px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const StyledCalendar = Styled.div`
  position: absolute;
  width: 63.04px;
  height: 18px;
  left: 79.05px;
  top: 330px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const StyledTranscripts = Styled.div`
  position: absolute;
  width: 81.06px;
  height: 18px;
  left: 79.05px;
  top: 385px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const StyledGrades = Styled.div`
  position: absolute;
  width: 51.04px;
  height: 18px;
  left: 79.05px;
  top: 440px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const StyledAttendance = Styled.div`
  position: absolute;
  width: 81.06px;
  height: 18px;
  left: 79.05px;
  top: 495px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const StyledSettings = Styled.div`
  position: absolute;
  width: 58.04px;
  height: 18px;
  left: 79.05px;
  top: 551px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.02em;

  color: #FFFFFF;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      {/* <StyledItem>
        <img src={Item} alt="" />
      </StyledItem> */}
      <StyledMini>
        <FontAwesomeIcon icon={faArrowLeft} />
      </StyledMini>
      <StyledLogo>
        Bowen
      </StyledLogo>
      <StyledDashboard>
        <div className='dashboard'>
          <p>Dashboard</p>
          <span><FontAwesomeIcon icon={faGraduationCap} /></span>
          
        </div>
      </StyledDashboard>
      <StyledCourses>
      <div>
          <p>Courses</p>
          <span><FontAwesomeIcon icon={faBook} /></span>
          
        </div>
      </StyledCourses>
      <StyledStudents>
      <div>
          <p>Students</p>
          <span><FontAwesomeIcon icon={faUserTie} /></span>
          
        </div>
      </StyledStudents>
      <StyledCalendar>
      <div>
          <p>Calendar</p>
          <span><FontAwesomeIcon icon={faCalendarDays} /></span>
          
        </div>
      </StyledCalendar>
      <StyledTranscripts>
      <div>
          <p>Transcripts</p>
          <span><FontAwesomeIcon icon={faGraduationCap} /></span>
          
        </div>
      </StyledTranscripts>
      <StyledGrades>
      <div>
          <p>Grades</p>
          <span><FontAwesomeIcon icon={faStar} /></span>
          
        </div>
      </StyledGrades>
      <StyledAttendance>
      <div>
          <p>Attendance</p>
          <span><FontAwesomeIcon icon={faUserCheck} /></span>
          
        </div>
      </StyledAttendance>
      <StyledSettings>
      <div>
          <p>settings</p>
          <span><FontAwesomeIcon icon={faGear} /></span>
          
        </div>
      </StyledSettings>
    </StyledSidebar>
  )
}

export default Sidebar
