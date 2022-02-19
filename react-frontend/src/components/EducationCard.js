import React from 'react'
import CardStyle from "../styles/CardStyle.scss"

const EducationCard = (props) =>{
    const {data} = props;

  return (
    <div className='card-item'>
      <div className='card-lists'>
        <h1 id="university">{data.university_name}</h1>
        <h1 id="department">{data.department_name}</h1>
        <h1 id="faculty">{data.faculty}</h1>
        <h1 id="startyear">{data.startyear}</h1>
        <h1 id="endyear">{data.endyear}</h1>
        <h1 id="GPA">{data.GPA}</h1>
      </div>
      <button>Edit</button>
      <button>Delete</button>
        
    </div>
  )
}

export default EducationCard;