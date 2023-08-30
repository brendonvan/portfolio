import './Project.css';

const Project = () => {
    return (
        <section id='projects'>
          <div className='project__header'>
            <h2>My Work</h2>
          </div>
          <div className='project__portfolio'>
            <div className='project__card featured stacked'>
              <a className='project__card-img' href='https://tesla-reimagined.vercel.app/' target="_blank" rel="noopener noreferrer">
                <img src="./projects/tesla.png" alt="tesla-project" />
              </a>
              <div className='project__card-container'>
                <div className="project__card-content">
                  <h5>Tesla Reimagined</h5>
                  <p>Tesla Clone but with UI/UX inspired by Nickelfox & Kushanthi Hasinika. CRUD funcationality for user authentication and cultivating car designs using Spring Boot.</p>
                  <a href='https://github.com/brendonvan/Tesla-Reimagined/' target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className="project__card-tech">
                  <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='html'></img>
                  <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='css'></img>
                  <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='javascript'></img>
                  <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='react'></img>
                  <img src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white' alt='redux'></img>
                  <img src='https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white' alt='three.js'></img>
                  <img src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white' alt='java'></img>
                  <img src='https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white' alt='spring'></img>
                  <img src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' alt='sql'></img>
                </div>
              </div>
            </div>
            <div className='project__card stacked'>
              <a className='project__card-img' href='https://netflix-reimagined.netlify.app/' target="_blank" rel="noopener noreferrer">
                <img src="./projects/netflix.png" alt="netflix-project" />
              </a>
              <div className='project__card-container'>
                <div className="project__card-content">
                  <h5>Netflix Reimagined</h5>
                  <p>Netflix Clone but with UI/UX inspired by Jurre Houtkamp & Serge Strokov. CRUD funcationality for user authentication and cultivating watchlists. </p>
                  <a href='https://github.com/brendonvan/Netflix-Reimagined/' target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className="project__card-tech">
                  <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='html'></img>
                  <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='css'></img>
                  <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='javascript'></img>
                  <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='react'></img>
                  <img src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white' alt='redux'></img>
                  <img src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' alt='mongodb'></img>
                  <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='node'></img>
                  <img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' alt='express'></img>
                </div>
              </div>
            </div>
            <div className='project__card stacked'>
              <a className='project__card-img' href='https://brendonvan.github.io/2048-clone/' target="_blank" rel="noopener noreferrer">
                <img src="./projects/2048.png" alt="2048-project" />
              </a>
              <div className='project__card-container'>
                <div className="project__card-content">
                  <h5>2048 Clone</h5>
                  <p>The objective of the game is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.</p>
                  <a href='https://github.com/brendonvan/2048-clone/' target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className="project__card-tech">
                  <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='html'></img>
                  <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='css'></img>
                  <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='javascript'></img>
                  <img src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' alt='node'></img>
                  <img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' alt='express'></img>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Project;