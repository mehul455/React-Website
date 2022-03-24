import React from "react";
import web from "../images/Ggtt.png";
// import {Link} from 'react-router-dom'
const About = () => {
  // const [clicked, setClicked] = useState(false);
  // useEffect(() => {
  //   if (clicked) {
  //     // do something meaningful, Promises, if/else, whatever, and then
  //     window.location.assign(
  //       "https://stackoverflow.com/questions/31095759/react-router-redirect-to-a-different-domain-url"
  //     );
  //   }
  // });
  return (
    <>
      <section>
        <div className="container">
          <div className="abou">
            <h2>About</h2>
          </div>
          <div className="flex-container">
            <img src={web} alt="jkh" />
          </div>
          <div className="heading">
            <p style={{ fontSize: "20px", fontWeight: "bold"}}>Hi! I'm Mehul</p>
            <p style={{ fontSize: "15px", fontWeight: "bold"}}>#Fullstack Developer #Self Learner #Student</p>
          </div>
          <div className="theory">
            <p>
              I am doing My Bsc(IT) from Nagindas Khandwala College in
              information technology and I'm proficient in Java, Python, HTML5 ,
              CSS3 , JavaScript(React Js , Node.js, Mongo DB,Express.js), PHP,
              Mysql, PL SQL . Out of these, I would say I am most comfortable
              using Javascript , Python. {"   "}<br/>
              {/* <span style={{color:"blue" , borderBottom:"2px solid blue"}} onClick={() => setClicked(true)}  target="_blank">For More Information</span> */}
              <span style={{color:"blue" , borderBottom:"2px solid blue"}} onClick={()=> window.open("https://www.linkedin.com/in/mehul-gohil-4631a820a/", "_blank")}>For More Information</span>

            </p>
          </div>
        </div>
        <div className="container skills">
          <div className="skill">
            <div className="skill-info">
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div className="skill-bar html"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>CSS</span>
              <span>80%</span>
            </div>
            <div className="skill-bar css"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>javascript</span>
              <span>70%</span>
            </div>
            <div className="skill-bar js"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>php</span>
              <span>60%</span>
            </div>
            <div className="skill-bar php"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>Mysql</span>
              <span>90%</span>
            </div>
            <div className="skill-bar Mysql"></div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>C#</span>
              <span>80%</span>
            </div>
            <div className="skill-bar cs"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>No SQL</span>
              <span>90%</span>
            </div>
            <div className="skill-bar html"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>Node Js</span>
              <span>80%</span>
            </div>
            <div className="skill-bar css"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>Express Js</span>
              <span>70%</span>
            </div>
            <div className="skill-bar js"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>MongoDB</span>
              <span>60%</span>
            </div>
            <div className="skill-bar php"></div>
          </div>
          <div className="skill">
            <div className="skill-info">
              <span>MS Office</span>
              <span>90%</span>
            </div>
            <div className="skill-bar Mysql"></div>
          </div>

          <div className="skill">
            <div className="skill-info">
              <span>Postmen</span>
              <span>80%</span>
            </div>
            <div className="skill-bar cs"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
