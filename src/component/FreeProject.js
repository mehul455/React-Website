

import React from 'react'
import { useSelector } from 'react-redux';
import '../css/card_project.css'
import { Link } from 'react-router-dom';
import Header from '../component/header';
const FreeProject = () => {
  const data = [
    {
      id: 1,
      image: "https://i.redd.it/b3esnz5ra34y.jpg",
      title: 'This is a portfolio item title',
      // download: 'https://github.com/mehul455',
      Preview: 'https://github.com/mehul455'
    },
    {
      id: 2,
      image: "https://i.redd.it/b3esnz5ra34y.jpg",
      title: 'This is a portfolio item title',
      // download: 'https://github.com/mehul455',
      Preview: 'https://github.com/mehul455'
    },
    {
      id: 3,
      image: "https://i.redd.it/b3esnz5ra34y.jpg",
      title: 'This is a portfolio item title',
      // download: 'https://github.com/mehul455',
      Preview: 'https://github.com/mehul455'
    },
    {
      id: 4,
      image: "https://i.redd.it/b3esnz5ra34y.jpg",
      title: 'This is a portfolio item title',
      // download: 'https://github.com/mehul455',
      Preview: 'https://github.com/mehul455'
    },
    {
      id: 5,
      image: "https://i.redd.it/b3esnz5ra34y.jpg",
      title: 'This is a portfolio item title',
      // download: 'https://github.com/mehul455',
      Preview: 'https://github.com/mehul455'
    },
    {
      id: 6,
      image: "https://i.redd.it/b3esnz5ra34y.jpg",
      title: 'This is a portfolio item title',
      // download: 'https://github.com/mehul455',
      Preview: 'https://github.com/mehul455'
    }
  ]
  const themeReducer = useSelector((themeReducer) => themeReducer.Darkreducer);
  let { theme } = themeReducer;
  return (
    <>
      <section id='portfolio'>

        <Header heading="Project" theory="Free Download Don't need to pay" />

        <div className='container portfolio_container'>

          {

            data.map(({ id, image, title, download, Preview }) => {
              // console.log(id, "kk")
              return (

                <article key={id} >
                  <div className={` ${theme ? 'dark  portfolio_item' : 'portfolio_item'}`}>
                    <div className='portfolio_item_img'>
                      <img src={image} style={{ height: "250px", width: '300px' }} alt="pic" />
                    </div>
                    <h3 style={theme ? { color: 'white' } : { color: "black" }}>{title}</h3>
                    <div className='portfolio_item_cta'>
                      {/* <a href={download} className={`${theme ? 'btn btn-light rounded-pill' : 'btn btn-dark rounded-pill'}`} rel="noopener noreferrer"target='_blank'>Download</a> */}
                      {/* <a href={Preview} className={`${theme ? 'btn btn-danger rounded-pill' : 'btn btn-danger rounded-pill'}`} rel="noopener noreferrer"target='_blank'>demo</a> */}
                      <Link className={`${theme ? 'btn btn-light rounded-pill' : 'btn btn-dark rounded-pill'}`} rel="noopener noreferrer" target='_blank'>Html</Link>
                      <Link className={`${theme ? 'btn btn-light rounded-pill' : 'btn btn-dark rounded-pill'}`} rel="noopener noreferrer" target='_blank'>React</Link>
                      
                    </div>
                  </div>
                </article>
              )
            })
          }



        </div>
      </section>
    </>
  )
}

export default FreeProject