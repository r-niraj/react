import React from 'react'

export default function Nested() {
    // return React.createElement('div',null, React.createElement('p', null,'THis is inner content'))

return(
 <>
    <div>
        <p>THis is inner {10+20} </p>
    </div>
  </>
)
  
}
