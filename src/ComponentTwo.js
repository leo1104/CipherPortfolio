import React from 'react'
import Card from './Card'

function ComponentTwo() {
    const a='something';
    const arr=[
        {
            title:'title 1',
            desc:'desc1'
        },
        {
            title:'title 2',
            desc:'desc2'
        },
        {
            title:'title 3',
            desc:'desc3'
        }
    ]
  return (
    <div>
        {arr.map((ele)=><Card title={ele.title} desc={ele.desc} />)}
        
    </div>
  )
}

///render card component 10 times inside another component without repeating the same component or without writing the same  compoennt 10 times

export default ComponentTwo