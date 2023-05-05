import React from 'react'
import Project from './Project'

export default function Projects() {

  // Eventually I want to replace this with markdown files for each project
  // Temp solution is a list of dictionaries
  // Dict format
  // {
  //   "id" : (int)
  //   "name" :  (string),
  //   "date" : When this project was done (string),
  //   "summary" : Short description of project, displays on main page (string)
  //   "description" : TBA - Longer description of project, displays on project page (string)
  //   "skills" : List of skills learned while making this app (list[string])
  //   "header_img" : Header image to be shown as part of card on main page (string)
  //   "media" : TBA - Additional images and videos showing off project, displays on project page (list[string])
  //   "demo_link" : TBA - Additonal direct link to demo, displays on project page
  //   "src_link" : Link to git repo (string)
  // },

  const projects = [
    
    {
      "id" : 1,
      "name" : "TuneBot",
      "date" : "dd/mm/yy",
      "summary" : "Worked as part of a team of Computer Science students to develop a web application that generates music lyrics from a prompt using a fine-tuned GPT-2 model and an NER model for accurate extraction of relevant information from the prompt",
      "skills" : ['React.js, Python, FastAPI'],
      "header_img" : "#",
      "src_link" : "https://github.com/mumichians/TuneBot-WebApp",
    },
    {
      "id" : 2,
      "name" : "Insta485",
      "date" : "/mm/yy",
      "summary" : "Built a social networking web application similar to Instagram with client-side and server-side dynamic pages as part of EECS 485: Web Systems at the University of Michigan",
      "skills" : ['Restful APIs', 'React.js', 'Python', 'Flask', 'SQLite'],
      "header_img" : "#",
      "src_link" : "",
    },
    {
      "id" : 3,
      "name" : "Todo Dashboard",
      "date" : "dd/mm/yy",
      "summary" : "A dashboard featuring a todo list, weather in your area, and a greeting based on the time of day.",
      "skills" : ['HTML', 'CSS', 'JavaScript'],
      "header_img" : "#",
      "src_link" : "https://github.com/ArLough/todo",
    }
    // {
    //   "id" : 4,
    //   "name" : "Portfolio Website V2",
    //   "date" : "dd/mm/yy",
    //   "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
    //   "skills" : ['HTML', 'CSS', 'JavaScript'],
    //   "header_img" : "#",
    //   "src_link" : "https://github.com/ArLough/Personal-Website-V2",
    // },
    // {
    //   "id" : 5,
    //   "name" : "Wiki Search Engine",
    //   "date" : "dd/mm/yy",
    //   "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
    //   "skills" : ['HTML', 'CSS', 'JavaScript'],
    //   "header_img" : "#",
    //   "src_link" : "#",
    // },
    // {
    //   "id" : 5,
    //   "name" : "Ann Arbor Adventure",
    //   "date" : "dd/mm/yy",
    //   "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
    //   "skills" : ["Vue.js"],
    //   "header_img" : "#",
    //   "src_link" : "#",
    // },
    // {
    //   "id" : 5,
    //   "name" : "SQL Simulator",
    //   "date" : "dd/mm/yy",
    //   "summary" : "Laboris veniam dolore cupidatat et nostrud amet ad lorem aliqua ipsum officia dolore velit ad pariatur. Qui nostrud adipiscing deserunt esse ex laboris commodo irure dolor sint duis occaecat",
    //   "skills" : ['HTML', 'CSS', 'JavaScript'],
    //   "header_img" : "#",
    //   "src_link" : "#",
    //}
  ];
  return (
  
      <section id="projects" className='self-center h-auto ml-20 mr-20 max-w-screen-2xl'>
      <h2 className='text-4xl font-bold text-center text-white'>Projects</h2>
      <div className='flex flex-col self-center h-auto gap-12 mt-20 lg:grid lg:grid-cols-2 2xl:grid-cols-3'>
      {projects.map(project =>(
        <Project info={project}> </Project>
      ))}
      </div>
    </section>
  )
}
