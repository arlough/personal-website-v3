import React from 'react'

export default function Project(props) {
  return (
    <div id={"project-" + props.info.id} className="flex flex-col justify-between flex-grow px-8 py-8 space-y-8 border shadow-2xl rounded-3xl bg-primary">
    <div className="flex flex-row space-x-8 ">
    <div className="text-2xl font-bold text-white self-left md:text-4xl">
        {props.info.name}
    </div>
    <div className="self-center">
    {props.info.src_link.length > 1 ? 
          <a  href={props.info.src_link}>
          <svg className=" fill-white hover:fill-hover" xmlns="http://www.w3.org/2000/svg" width="48" height="48" 
          viewBox="0 0 24 24"></svg>
          </a>
          :
          <a href="mailto:loughneyaidan@gmail.com?subject=Requesting {props.info.name} source code">
          <svg className="fill-white hover:fill-hover" xmlns="http://www.w3.org/2000/svg" width="48" height="48"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          </a>
        }
          </div>
    </div>
    <div className="flex flex-col flex-grow space-y-5 text-white text-l md:text-2xl">
      <div>{props.info.summary}</div>
      <div><b>Skills</b>: {props.info.skills.join(', ')}</div>
      
          </div>
    <div className="flex self-center my-auto space-x-8 text-black h-1/4">
          <a className="self-center px-1 py-1 text-lg bg-white rounded-lg hover:bg-hover" href="#" >
          See More
          </a>
        
    </div>
</div>
  )
}
