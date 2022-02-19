import * as React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContianer } from "../styles/Homepage.style";
import "../styles/Homepage.css"
import { useSelector, useDispatch } from 'react-redux';
import { getAllEducations } from '../redux/educations/educationSlice';
import EducationCard from '../components/EducationCard';

export default function Education() {
  const educations = useSelector(getAllEducations);
  const dispatch = useDispatch();
  let renderEducations =
    educations.Response === "True"
      ? (console.log(educations.data),
        educations.data.map((items, index) => (
          <EducationCard key={index} data={items} />
        )))
      : null;
  return (
    <div className="education">
      <HeaderContianer>
        <h1>Education</h1>
        <div>
        <div className="education-container">{renderEducations}</div>
        </div>
      </HeaderContianer>
      
    </div>
  );
}
