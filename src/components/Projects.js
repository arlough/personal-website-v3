import React from 'react'
import Project from './Project'

export default function Projects() {
  const projects = [
    {
      "name" : "Todo",
      "date" : "dd/mm/yy",
      "summary" : "lorem ipsum lorem ipsum lorem ipsum",
      "skills" : ['HTML', 'CSS', 'JavaScript'],
      "header-img" : "#",
      "demo-link" : "#",
      "src-link" : "#",
    },
    {
      "name" : "TuneBot",
      "date" : "dd/mm/yy",
      "summary" : "lorem ipsum lorem ipsum lorem ipsum",
      "skills" : ['HTML', 'CSS', 'JavaScript'],
      "header-img" : "#",
      "demo-link" : "#",
      "src-link" : "#",
    }
  ];
  return (
    <div>
      <div>Projects</div>
      <div className='flex space-x-6'>
      {projects.map(project =>(
        <Project info={project}> </Project>
      ))}
      </div>
    </div>
  )
}
