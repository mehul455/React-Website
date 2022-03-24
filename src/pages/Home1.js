import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import BackToTop from '../component/BackToTop'

const Home1 = () => {
    // const [clicked, setClicked] = useState(false);
    // const [clicked1, setClicked1] = useState(false);

    // useEffect(() => {
    //   if (clicked) {
    //     // do something meaningful, Promises, if/else, whatever, and then
    //     window.location.assign(
    //       "https://github.com/mehul455"
    //     );
    //   }
    //   if(clicked1){
    //     window.location.assign(
    //       "https://www.instagram.com/invites/contact/?i=z6noo8hx9iob&utm_content=3el2ade"
    //     );
    //   }
    // });
  
    return (
        <>
        <div className="header-wrapper">
            <div className="main-info">
                <h1>full stack web developer</h1>
                <Typed
                className="typed-text"
                strings={["Web Design", "Web Development","Full Stack Web Developer","hello"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />

                <div className="ddflex">
                <Link to="#" onClick={()=> window.open("https://www.instagram.com/invites/contact/?i=z6noo8hx9iob&utm_content=3el2ade", "_blank")} className="button button-1">Contact Me</Link>
                <Link to="#" onClick={()=> window.open("https://github.com/mehul455", "_blank")}   className="button2 button-2">Github</Link>
                </div>
            </div>
        </div>
        <BackToTop/>

        </>

    )
}

export default Home1
