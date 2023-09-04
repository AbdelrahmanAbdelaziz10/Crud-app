import React from 'react'

const HeadTitle = ({title}) => {
  return (
    <div className='row'>
    <div className='col-12'>
        <h1 className='text-center display-1 mt-3 mb-5'>
            { title }
        </h1>
    </div>
    </div>
  )
}

export default HeadTitle;