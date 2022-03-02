import React from 'react'
import CardStyle from "../styles/CardStyle.scss"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEducations, updateEducations } from '../redux/educations/educationSlice';

const EducationCard = (props) =>{
    const {data} = props;

    const dispatch = useDispatch();

    const handleEdit = (id) => {
      dispatch(updateEducations())
    }

  return (
    <div className='card-item'>
      <div className='card-lists'>
        <h1 id="university">{data.university_name}</h1>
        <h1 id="faculty">Faculty Name: {data.faculty}</h1>
        <h1 id="department">Department Name: {data.department_name}</h1>
        <h1 id="startyear">StartYear: {data.startyear}</h1>
        <h1 id="endyear">EndYear: {data.endyear}</h1>
        <h1 id="GPA">Grade: {data.GPA}</h1>
      </div>
      <button className='btn-gradient-border'><Link to={`/dashboard/editEducation/${data.id}`} className="text-white">Edit</Link></button>
        
    </div>
  )
}

export default EducationCard;