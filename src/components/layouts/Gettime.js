import React, { useState } from 'react'

function Gettime() {
    const [date,setDate]=useState(new Date())
    setInterval(()=>setDate(new Date(),1000))
    return (
        <div>
           <h3>Hello</h3>
           <p>Time: {date.toLocaleTimeString()}</p>
           <p>Date: {date.toLocaleDateString()}</p>
        </div>
    )
}

export default Gettime
