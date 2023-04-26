import React from 'react'
import Project from './Project'

export default function Projects() {
  const projects = [
    {
      "id" : 1,
      "name" : "Todo",
      "date" : "dd/mm/yy",
      "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
      "skills" : ['HTML', 'CSS', 'JavaScript'],
      "header_img" : "#",
      "demo_link" : "https://todo-dashboard.netlify.app/",
      "src_link" : "https://github.com/ArLough/todo",
    },
    {
      "id" : 2,
      "name" : "TuneBot",
      "date" : "dd/mm/yy",
      "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
      "skills" : ['HTML', 'CSS', 'JavaScript'],
      "header_img" : "#",
      "demo_link" : "#",
      "src_link" : "https://github.com/mumichians/TuneBot-WebApp",
    },
    {
      "id" : 3,
      "name" : "Insta485",
      "date" : "/mm/yy",
      "summary" : "Built a social networking web application similar to Instagram with client-side and server-side dynamic pages as part of EECS 485: Web Systems at the University of Michigan",
      "skills" : ['Restful APIs', 'React.js', 'Python', 'Flask', 'SQLite'],
      "header_img" : "#",
      "demo_link" : "#",
      "src_link" : "",
    },
    {
      "id" : 4,
      "name" : "Portfolio Website V2",
      "date" : "dd/mm/yy",
      "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
      "skills" : ['HTML', 'CSS', 'JavaScript'],
      "header_img" : "#",
      "demo_link" : "#",
      "src_link" : "https://github.com/ArLough/Personal-Website-V2",
    },
    {
      "id" : 5,
      "name" : "Dummy",
      "date" : "dd/mm/yy",
      "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
      "skills" : ['HTML', 'CSS', 'JavaScript'],
      "header_img" : "#",
      "demo_link" : "#",
      "src_link" : "#",
    }
  ];
  return (
  
      <div id="projects" className='flex flex-col self-center h-auto mt-20 ml-20 mr-20 space-x-12 max-w-screen-2xl space-y-14 lg:grid lg:grid-cols-2 2xl:grid-cols-3'>
      {projects.map(project =>(
        <Project info={project}> </Project>
      ))}
    </div>
  )
}
