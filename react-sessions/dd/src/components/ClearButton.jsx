import React,{memo} from 'react'

const ClearButton = memo(({handleClear}) => {
    console.log("Render => ClearButton Compo.")
    return (
        <div>
            <button className='btn btn-warning' onClick={handleClear}>Clear Button</button>
        </div>
    )
})

export default ClearButton