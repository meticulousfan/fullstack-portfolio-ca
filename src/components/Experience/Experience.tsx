import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Work Experiences</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/magnetoasher"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Web development intern</h3>
              <ul>
                <li>
                  Improved the codebase by following software engineering best
                  practices
                </li>
                <li>
                  Contributing automated testing and participating in team code
                  reviews
                </li>
                <li>
                  Participated in API design and development of RESTful Services
                  For the enterprise product in business
                </li>
                <li>
                  Collaborated and managed projects using Git, GitHub and
                  Bitbucket
                </li>
                <li>
                  Automated unit and E2E testing and saving over 10h of work per
                  week
                </li>
                <li>
                  Designed and implemented a RESTful API to connect the Amazon
                  S3 service to store and retrieve customer data.
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>React</li>
                <li>Vue</li>
                <li>Express</li>
                <li>MySql</li>
                <li>Ejs</li>
                <li>GraphQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/joaotuliojt/github-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://github-search-blond.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Full Stack Engineer</h3>
              <ul>
                <li>
                  Worked on building, shipping, and maintaining a single page
                  application
                </li>
                <li>
                  Updated Vue based legacy platform into React/Redux based
                  applications
                </li>
                <li>
                  Built React based User Admin Portal that interfaced with AWS
                  serverless to perform changes to user content
                </li>
                <li>
                  Built RESTful APIs to automate real-time reporting of
                  healthcare data to custom built dashboards improving trend
                  prediction accuracy by 75%,
                </li>
                <li>
                  Worked on deconstructing complex features into actionable
                  prioritized tasks with estimated timeline
                </li>
                <li>
                  Delivered highly maintainable and reliable code using unit
                  testing integration testing, proper code documentation, and
                  the best design patterns
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>AWS</li>
                <li>Vue</li>
                <li>Typescript</li>
                <li>Styled Components</li>
                <li>GraphQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://joaotuliojt.github.io/sunnyside-agency/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Frontend Engineer</h3>
              <ul>
                <li>
                  Involved in a real estate project that gives customers the
                  ability to find perfect apartments
                </li>
                <li>
                  Worked directly with clients to determine pain points in their
                  jobs and deliver custom solutions to improve their ability to
                  deliver finished products
                </li>
                <li>
                  Built an application to browse and watch videos using Next.js
                  and streaming technology
                </li>
                <li>
                  Participated in the initial wave of developers learning and
                  utilizing React and Vue
                </li>
                <li>
                  Created a web application which let customers efficiently
                  browse media and buy them
                </li>
                <li>
                  Collaborated with designers, back-end developers and UX
                  experts to build, test and improve products
                </li>
                <li>
                  Implemented SSR (server-side rendering) and SSG (static
                  rendering) on Single Page Applications to increase SEO and
                  initial page loading speed using Next.js
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>NextJs</li>
                <li>TypeScript</li>
                <li>SSR</li>
                <li>GraphQL</li>
                <li>Vue/Quasar</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://joaotulio.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Full Stack Engineer</h3>
              <ul>
                <li>
                  Designed, built and maintained web applications, modeling
                  tools, and high-quality deliverable
                </li>
                <li>
                  Worked on 3 MVPs while working with young startups and
                  individual clients
                </li>
                <li>
                  Built a fully-integrated one-to-one live video co-shopping
                  platform for customers and associates using React, Next.js,
                  TypeScript, and GraphQL
                </li>
                <li>
                  Implemented work studio platform and OKR dashboard using
                  React, TypeScript, AWS (lambda, API gateway, rest API, S3,
                  Amplify), Node, MongoDB
                </li>
                <li>
                  Built PWA for healthcare & fitness application using React,
                  JavaScript, Ionic/React and several chrome extension apps in
                  cross browsers
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>VueJs</li>
                <li>NestJs</li>
                <li>GraphQL</li>
                <li>TypeORM</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/joaotuliojt/dtmoney-trilha-reactjs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>NodeJs Backend Developer</h3>
              <ul>
                <li>
                  Designed, implemented and integrated GraphQL APIs using
                  Apollo, Nest.js, TypeORM, PostgreSQL
                </li>
                <li>Participated in code review and team design sessions</li>
                <li>
                  Contributed ideas and suggestions in team meetings and
                  delivered updates on deadlines, designs and enhancements,
                </li>
                <li>
                  Implemented work studio platform and OKR dashboard using
                  React, TypeScript, AWS (lambda, API gateway, rest API, S3,
                  Amplify), Node, MongoDB
                </li>
                <li>
                  Monitored and tracked server bugs on AWS CloudWatch and fixed
                  them
                </li>
                <li>Used testing frameworks like Jest/Mocha to test APIs</li>
                <li>Performed migration from MySQL to MongoDB</li>
                <li>
                  Worked on creating different type of indexes based on
                  different collections to get good performance in MongoDB
                </li>
                <li>
                  Containerized all the Ticketing related applications using
                  Docker
                </li>
                <li>
                  Managed Container using Docker by writing Dockerfiles and set
                  up the automated build on Docker HUB and installed and
                  configured kubernets Used infrastructure tools like Terraform
                  and AWS
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Vue</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Jest/Mocha</li>
                <li>MySQL/MongoDB</li>
                <li>Docker</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/joaotuliojt/dv-musica-library-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a
                  href="https://joaotuliojt.github.io/dv-musica-library-page/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Music Library</h3>
              <p>
                Uma interface para uma biblioteca de músicas, semelhante ao
                Spotify.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
