import React from 'react';
import { RightArrowIcon } from './RightArrowIcon';
import { Link } from 'react-router-dom';

export const CourseCard = ({
  name,
  link
})=>{
  return <Link className="block" to={link}>
    <article className="p-4 bg-white rounded-md shadow-md flex justify-between">
    <div>
      <div>
        {name}
      </div>
    </div>
    <RightArrowIcon size={48} className="text-ada" />
  </article>
  </Link>
}