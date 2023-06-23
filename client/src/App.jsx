import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <a href="" className='logo'>My Blog</a>
          <nav>
            <a href="">Login</a>
            <a href="">Register</a>
          </nav>
        </header>
        <div className="post">
          <div className="image">
            <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='image entry number 1' />
          </div>
          <div className="text">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className="info">
              <a href="#">Drakkar</a>
              <time>06-23-2023</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odit labore nisi debitis asperiores aliquam?</p>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='image entry number 1' />
          </div>
          <div className="text">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className="info">
              <a href="#">Drakkar</a>
              <time>06-23-2023</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odit labore nisi debitis asperiores aliquam?</p>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='image entry number 1' />
          </div>
          <div className="text">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className="info">
              <a href="#">Drakkar</a>
              <time>06-23-2023</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odit labore nisi debitis asperiores aliquam?</p>
          </div>
        </div>



        
        <div className="post">
          <div className="image">
            <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='image entry number 1' />
          </div>
          <div className="text">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odit labore nisi debitis asperiores aliquam?</p>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='image entry number 1' />
          </div>
          <div className="text">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odit labore nisi debitis asperiores aliquam?</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
