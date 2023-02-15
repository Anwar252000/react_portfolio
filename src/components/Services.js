import React from 'react'

function Services() {

  const services=[
    {
      name:'Front-End Web Development'
    },
    {
      name:'Back-End Web Development'
    },
    {
      name:'Web Designing Services'
    },
    {
      name:'Digital Marketing Services'
    },
    {
      name:'Digital Marketing Services'
    },
    {
      name:'Digital Marketing Services'
    },
    {
      name:'Digital Marketing Services'
    },
    {
      name:'Digital Marketing Services'
    },
    {
      name:'Digital Marketing Services'
    }
  ]

  return (
    <>
      <div className="mt-16 flex flex-wrap">
        {services.map((e)=>
        <div className="card m-2 text-center flex justify-center text-4xl border shadow-lg p-5">
          <h1>{e.name}</h1>
        </div>
        )}
      </div>
    </>
  )
}

export default Services