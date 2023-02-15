import { useEffect, useState } from 'react'

export default function Home(props) {

  return (
    <>
    <div className="main flex justify-around">
      <div className="content my-16 mx-2 space-y-4">
        <h1 className='text-3xl'>Hi! I am Anwar</h1>
        <h3 className='text-3xl'>Front-End Web Developer</h3>
        <h1 className='capitalize text-2xl'>Talk is cheap. <br/>Show me the code</h1>
        <p className='capitalize text-2x1'>I design and code beautifully simple things,
          and I love what I do.</p>
          <div className="btns space-x-2">
          <button className='btn btn-accent bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500'>Hire Me</button>
          <a target='blank' href="https://assets.website-files.com/5e9aa66fd3886aa2b4ec01ca/60477cc966a0143b2dd400b0_developer-cv-example.jpg"><button className='btn btn-accent bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500'>My CV</button></a>
          </div>
          </div>
          <div className="image mt-16 h-64">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/352/773/small/devops-engineer-flat-illustration-concept-on-white-background-vector.jpg" alt="" />
      </div>
      </div>
    </>
  )
}