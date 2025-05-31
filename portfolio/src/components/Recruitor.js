import React from 'react'

function Recruitor(props) {

  let resetRole = (event) => {
    props.roleChange('not-set');
  }

  // State to track checkbox and animation
  const [checked, setChecked] = React.useState(false);

  // Handler for checkbox click
  const handleCVClick = () => {
    setChecked(true);
    // Wait for animation (adjust timeout as needed)
    setTimeout(() => {
      window.open('/Erick_Muthui_Mwangi_Professional_CV.pdf', '_blank', 'noopener,noreferrer');
      setChecked(false);
    }, 4500); // 700ms for animation, adjust if needed
  };

  return (
    <div className="recruitor-container">
      <section className='nav'>
        <button id='back-button' onClick={resetRole} title='Back to roles'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="none" stroke="#00aeff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M249.38 336L170 256l79.38-80m-68.35 80H342" /><path fill="none" stroke="#650094" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z" /></svg>
        </button>
      </section>
      <section className="my-intro">
        <div className='Details'>
          <h1>Hi, I’m Erick Mwangi</h1>
          <p>
            I'm a passionate full-stack developer with experience in building modern, scalable applications using React, Django, and more. I'm ready to bring value to your team.
          </p>
          <div>
            <div className="container">
              <label className="label">
                <input
                  type="checkbox"
                  className="input"
                  checked={checked}
                  onChange={handleCVClick}
                  disabled={checked}
                />
                <span className="circle"
                ><svg
                  className="icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 19V5m0 14-4-4m4 4 4-4"
                    ></path>
                  </svg>
                  <div className="square"></div>
                </span>
                <p className="title">Download CV</p>
                <p className="title">Openning</p>
              </label>
            </div>
          </div>
        </div>
        <div className='profile-image'>
          <div className='profile'></div>
        </div>
      </section>

      <section className="skills">
        <h2>Core Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>Springboot</li>
          <li>Django</li>
          <li>Flutter</li>
          <li>Git & GitHub</li>
          <li>Graphics and Design</li>
          <li>UI/UX</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Highlighted Projects</h2>
        <div className='my-projects'>
          <div className="project">
            <div className='project-image'>
              <img src="/placeholder.jpg" alt="Project Thumbnail" />
            </div>
            <div className='project-details'>
              <h3>Portfolio Website</h3>
              <p>
                The site you’re viewing now! Fully responsive, role-based React SPA with animated transitions.
              </p>
            </div>
            <div className='project-links'>
              <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project">
            <div className='project-image'>
              <img src="/placeholder.jpg" alt="Project Thumbnail" />
            </div>
            <div className='project-details'>
              <h3>SmartFarm ERP System</h3>
              <p>
                A farmer-broker platform with real-time sales tracking and M-Pesa integration. Built using React, Node.js, and Express.
              </p>
            </div>
            <div className='project-links'>
              <a href="https://github.com/yourusername/smartfarm-erp" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://live-demo-url.com" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>

          <div className="project">
            <div className='project-image'>
              <img src="/placeholder.jpg" alt="Project Thumbnail" />
            </div>
            <div className='project-details'>
              <h3>Online Voting App</h3>
              <p>
                A secure online voting application with user authentication and real-time results. Built with flutter, and MySQL.
              </p>
            </div>
            <div className='project-links'>
              <a href="https://github.com/yourusername/ballotify" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://live-demo-url.com" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>

          <div className="project">
            <div className='project-image'>
              <img src="/placeholder.jpg" alt="Project Thumbnail" />
            </div>
            <div className='project-details'>
              <h3>Land Sales Website</h3>
              <p>
                A platform for advertising and selling land with property listings and also recovery of land documents. Built with HTML, CSS, JS and Bootstrap.
              </p>
            </div>
            <div className='project-links'>
              <a href="https://github.com/yourusername/damjoproperties" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project">
            <div className='project-image'>
              <img src="/placeholder.jpg" alt="Project Thumbnail" />
            </div>
            <div className='project-details'>
              <h3>E-commerce platform</h3>
              <p>
                A full-stack e-commerce application with user authentication, product management, and payment integration. Built with Django, HTML, CSS, JS, Bootstrap, and MySQL.
              </p>
            </div>
            <div className='project-links'>
              <a href="https://github.com/yourusername/ecommerce" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://live-demo-url.com" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <div className='footer'>
          <div id='contact-info'>
            <img src='/avatar.jpg' alt='my_profile_pic' />
            <p>Phone</p>
            <a href="tel:+254710622406">+254 710 622 406</a>
            <p>Email</p>
            <a href="mailto:erickmwangi647@gmail.com">erickmwangi647@gmail.com</a>
            <p>LinkedIn</p>
             <a href="https://linkedin.com/in/erickmwangi" target="_blank" rel="noreferrer">/erickmwangi</a>
            <p>Location</p>
            <a href='https://www.google.com/maps/place/Juja,+Kenya/' target="_blank" rel="noreferrer">Juja, Kenya</a>
          </div>
          <div className='contact-form'>
            <form>
              <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input type="text" required autoComplete="off" />
              </div>
              <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" required autoComplete="off" />
              </div>
              <div className="inputGroup">
                <label htmlFor="message">Message</label>
                <textarea required autoComplete="off"></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Recruitor

