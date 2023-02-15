import React, { useState } from 'react'

function Clints() {
  
  const clint=[
    {
      img:'https://cdn.logojoy.com/wp-content/uploads/20220422150114/airtable-square-cube-logo.png'
    },
    {
      img:'https://cdn.logojoy.com/wp-content/uploads/20220422150114/airtable-square-cube-logo.png'
    },
    {
      img:'https://cdn.logojoy.com/wp-content/uploads/20220422150114/airtable-square-cube-logo.png'
    },
    {
      img:'https://cdn.logojoy.com/wp-content/uploads/20220422150114/airtable-square-cube-logo.png'
    },
    {
      img:'https://cdn.logojoy.com/wp-content/uploads/20220422150114/airtable-square-cube-logo.png'
    },
    {
      img:'https://cdn.logojoy.com/wp-content/uploads/20220422150114/airtable-square-cube-logo.png'
    },
  ]

  return (
    <>
    <div className="clints mt-14">
      <h1 className='text-5xl text-center'>Our Clints</h1>
    </div>
    <div className="flex">
      {clint.map((e)=>
        <div className="card w-56 border m-3">
          <img src={e.img} alt="" />
        </div>
      )}
    </div>
    </>
  )
}

export default Clints