import React from 'react'

const Post = () => {
    return (
        <>
            <div className="post">
                <div className="image">
                    <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='image entry number 1' />
                </div>
                <div className="text">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className="info">
                        <a href="#">Drakkar </a>
                        <time>06-23-2023</time>
                    </p>
                    <p className='summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odit labore nisi debitis asperiores aliquam?</p>
                </div>
            </div>
        </>
    )
}

export default Post