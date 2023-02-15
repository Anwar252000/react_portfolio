import React, { useState, useEffect } from 'react'

function Skills() {

    let skills = [
        {
            name:'HTML',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU'
        },
        {
            name:'CSS',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU'
        },
        {
            name:'JavaScript',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU'
        }
    ]

  return (
    <>
    <div className="cards flex mt-16">
        {skills.map((e)=>
        <div className="flex flex-col items-center m-4 border shadow-lg w-1/3">
            <h1 className='text-6xl'>{e.name}</h1>
            <img className='w-56' src={e.img} alt="" />
        </div>
        )}
    </div>
    </>
  )
}

export default Skills