import React from 'react'
import Project from './Project'

export default function Projects() {
  const projects = [
    {
      "name" : "Todo",
      "date" : "dd/mm/yy",
      "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
      "skills" : ['HTML', 'CSS', 'JavaScript'],
      "header-img" : "#",
      "demo-link" : "#",
      "src-link" : "#",
    },
    {
      "name" : "TuneBot",
      "date" : "dd/mm/yy",
      "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
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
