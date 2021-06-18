import React from 'react'
import Layout from '../components/Layout';
import './Home.css';
function Home() {
    return (
        <div>
            <Layout>
               <div className="Home d-flex justify-content-center" >
                   <div className='container'>

                      <h1 className='title'>
                       Hello, I'm Ciurea Gabriela.<br/>
                      </h1>
                      <h2 className='title-2'>  I'm a web developer</h2>
                   </div>
                
               </div>
            </Layout>
            
        </div>
    )
}

export default Home
