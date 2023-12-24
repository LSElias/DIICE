import React from 'react'

const LoadingImage = () => {
  return (
    <div className='flex-center w-full'>
        <img
            src='public\img\loader.gif'
            alt='loading...'
            width={42}
            height={42}
        />
    </div>
  )
}

export default LoadingImage