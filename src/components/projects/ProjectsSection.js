import ProjectLeft from '../projects/ProjectLeft';
import ProjectRight from '../projects/ProjectRight';
import H4Header from '../UI/H4Header';
import ParagraphLight from '../UI/ParagraphLight';
import SectionHeader from '../UI/SectionHeader';

// import CodeLibraryItem from './components/projects/CodeLibraryItem';

const ProjectsSection = props => {
    return (
        <div class='bg-black'>
            <section id="section-projects">
                <SectionHeader text={'Projects'} headerGradientStyle={'header-projects'} />
                {/* <ProjectRight
                    projectTitle={'COVID-19 Dashboard'}
                    bgImage={'bg-virus'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://colo-codes.github.io/mini-projects/covid-19-dashboard-app/'}
                    buttonDescription={'https://blog.damiandemasi.com/my-second-vanilla-javascript-project-using-apis-promises-classes-error-handling-and-more'}
                    buttonGitHub={'https://github.com/Colo-Codes/mini-projects/tree/main/covid-19-dashboard-app'}>
                    <ParagraphLight>
                        <p>This project was one of my favourite tools for breaking my way out of tutorial hell 👹. I also wanted this project to serve me as a display of my JavaScript skills to potential employers or collaborators.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>By the time I decided to start working on this project I had just finished learning about Promises, async...await, APIs and error handling. I wanted to code a project to implement all of this knowledge.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Lessons learned</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>At the start, this project seemed simple, but it quickly got complicated, especially because I was dealing with three different APIs (and a couple more that didn’t work in the end).</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I didn’t spend much time on HTML, but CSS proved to be demanding once more 😅. Thanks to the challenges I faced I gain more CSS skills and learned how to better debug it.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Regarding JavaScript, I could have implemented MVC from the get-go, so I will do that in my next project. As I previously said, I prefer not to refactor this project and leave it as a witness of my skills at the time.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>APIs are reliable… most of the time 🤭. I’m sure paid APIs perform better, so if I need to use them in the future for a more serious project, I will research deeply what is the best API to get for the job.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>This project still has room for improvement, but I had to make the decision to stop working on it at some point. Overall, I think it’s functioning as expected.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/61NIjXcV5wg" title="COVID-19 Dashboard App Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
                        </div>
                    </ParagraphLight>
                </ProjectRight>
                <ProjectLeft
                    projectTitle={'To-Do app'}
                    bgImage={'bg-to-do'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://colo-codes.github.io/mini-projects/todo-app/'}
                    buttonDescription={'https://blog.damiandemasi.com/my-first-vanilla-javascript-project-making-a-simple-to-do-app'}
                    buttonGitHub={'https://github.com/Colo-Codes/mini-projects/tree/main/todo-app'}>
                    <ParagraphLight>
                        <p>Doing courses and tutorials is great, but sometimes is difficult to evaluate how much are we actually learning. Watching video after video and coding along with the instructor gives us very good guidance, but it is not a realistic scenario. In a real-world job, we will have to solve problems and start figuring things out by ourselves (with the help of Google, of course 😉). So, to test how much I was actually learning during the JavaScript course I was doing I decided to make a simple To-Do app in HTML, CSS and vanilla JavaScript.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Lessons learned</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Thanks to this project I could have a taste of how much work an application like this one takes.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I learned about the importance of structuring HTML in a meaningful semantic way, and how a good HTML structure can make our lives easy when we start working on CSS and JavaScript in later stages of the project.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I underestimated CSS 😅. The classes names are a bit funny and messy, so in the future, I'll try to implement BEM notation and maybe SASS. I discovered that some behaviour that initially thought of was in the realm of JavaScript can easily be achieved with CSS, such as animations on elements.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Regarding JavaScript, this was the first time I coded following the OOP paradigm and, despite feeling a bit out of my element, I now can see the potential that following this paradigm has.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The project has a lot of room for improvement, but I wanted to live it like that to have a "snapshot" of my knowledge and skills up to the point in time where I was working on it.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vAL7ocx5oZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
                        </div>
                    </ParagraphLight>
                </ProjectLeft> */}
                <ProjectRight
                    projectTitle={'ERC20 Token Subgraph'}
                    bgImage={'bg-virus'}
                    techStack={['TypeScript', 'NodeJS', 'GraphQL', 'Ethereum', 'SubGraph', 'Solidity', 'Docker']}
                    buttonWatchItLive={'https://github.com/cooldev900/ERC20-token-subgraph'}
                    buttonDescription={'https://github.com/cooldev900/ERC20-token-subgraph'}
                    buttonGitHub={'https://github.com/cooldev900/ERC20-token-subgraph'}>
                    <ParagraphLight>
                        <p>This project is a comprehensive subgraph designed to index and query information about ERC-20 tokens, including token holders, transfers, balance changes, and overall token metrics like total supply and volume. It uses The Graph protocol to provide efficient data retrieval for on-chain token activity.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The subgraph tracks detailed holder information including balances and historical balance changes, provides comprehensive token metrics like total supply and transfer volume, records all token transfers with sender, receiver, value, timestamp, and transaction hash, and captures historical data allowing querying over specific time periods.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Key Features</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Holder Information:</strong> Tracks token holders, their balances, and historical balance changes with detailed analytics.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Token Metrics:</strong> Provides comprehensive data including total supply and total volume of tokens transferred across the network.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Transfer Data:</strong> Records all token transfers with complete metadata including sender, receiver, value, timestamp, and transaction hash for full transparency.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Historical Data:</strong> Captures balance changes and allows querying over specific time periods for trend analysis and reporting.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Technical Implementation</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The project uses <strong>The Graph</strong> subgraph framework for indexing and querying blockchain data, <strong>GraphQL</strong> for efficient data querying, <strong>AssemblyScript</strong> for writing mapping functions, and integrates with <strong>Ethereum</strong> blockchain for real-time data.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The schema includes four main entities: <strong>Holder</strong> (token holder information), <strong>Transfer</strong> (individual token transfers), <strong>Token</strong> (overall token metrics), and <strong>BalanceChange</strong> (historical balance tracking).</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>This project demonstrates advanced blockchain development skills, including smart contract interaction, data indexing, and building scalable infrastructure for decentralized applications.</p>
                    </ParagraphLight>
                </ProjectRight>
                <ProjectLeft
                    projectTitle={'M-Token Viewer'}
                    bgImage={'bg-virus'}
                    techStack={['VueJS', 'Nuxt', 'TailwindCSS', 'TypeScript', 'GraphQL', 'Subgraph']}
                    buttonWatchItLive={'https://github.com/cooldev900/m-token-viewer'}
                    buttonDescription={'https://github.com/cooldev900/m-token-viewer'}
                    buttonGitHub={'https://github.com/cooldev900/m-token-viewer'}>
                    <ParagraphLight>
                        <p>M-Token Viewer is a comprehensive web application designed to showcase information about the M-Token on Ethereum networks (Mainnet and Sepolia). This project utilizes Viem, Wagmi, and Reowned Kit for wallet interaction and a Subgraph for querying token-related data like holders, balances, volume, and balance history.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The application provides seamless wallet integration with support for multiple Ethereum networks, real-time token data visualization, and comprehensive analytics for token holders and trading activity.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Key Features</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Wallet Integration:</strong> Set up using Viem, Wagmi, and Reowned Kit for seamless wallet connections and blockchain interactions across Mainnet and Sepolia networks.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Subgraph Deployment:</strong> Deployed separate subgraphs for Mainnet and Sepolia networks, providing efficient data retrieval for token holders, balances, volume, and balance history.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Data Visualization:</strong> Developed reusable components with integrated charts and tables to visualize token metrics like balance history and volume trends using ApexCharts.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Token Balance Display:</strong> Real-time display of current M-Token balance for connected wallets using Wagmi's useBalance hook with network switching capabilities.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Technical Implementation</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Built with <strong>Vue 3</strong> and <strong>Nuxt</strong> for the frontend framework, <strong>TailwindCSS</strong> for responsive UI design, and <strong>TypeScript</strong> for type-safe development. The application uses <strong>GraphQL</strong> for efficient data querying through the deployed Subgraphs.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The project demonstrates advanced blockchain integration skills, including wallet connection management, multi-network support, real-time data fetching from Subgraphs, and sophisticated data visualization for DeFi applications.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>This project showcases expertise in modern web development frameworks, blockchain technology integration, and building user-friendly interfaces for complex DeFi data visualization.</p>
                    </ParagraphLight>
                </ProjectLeft>
                <ProjectRight
                    projectTitle={'Distributed Task Scheduler'}
                    bgImage={'bg-virus'}
                    techStack={['React', 'Docker', 'Microservices', 'TypeScript', 'Kafka', 'MongoDB', 'NestJS', 'NextJS', 'NX', 'TailwindCSS']}
                    buttonWatchItLive={'http://localhost:4200'}
                    buttonDescription={'https://github.com/cooldev900/distributed-task-scheduler'}
                    buttonGitHub={'https://github.com/cooldev900/distributed-task-scheduler'}>
                    <ParagraphLight>
                        <p>A comprehensive distributed task scheduler system designed to handle both one-time and recurring tasks with high availability and scalability. The system ensures tasks are picked up and executed within 10 seconds of their scheduled time, making it suitable for calendar reminders, distributed cron jobs, and scheduled notifications.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The architecture implements a microservices-based approach with Kafka for message queuing, MongoDB for persistent storage, and Docker for containerization, ensuring high availability and fault tolerance across distributed components.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Key Features</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Task Types:</strong> Supports both one-time tasks (scheduled at specific times) and recurring tasks (using Cron syntax) with automatic execution according to schedule.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>High Availability:</strong> Designed with distributed architecture ensuring system resilience and fault tolerance across multiple components and services.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Real-Time Monitoring:</strong> Provides task execution status tracking and logging through a dedicated frontend interface accessible at localhost:4200/task-logs.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Scalable Architecture:</strong> Microservices-based design with Kafka message queuing, MongoDB persistence, and Docker containerization for easy scaling and deployment.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Technical Implementation</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Built with <strong>React</strong> and <strong>NextJS</strong> for the frontend, <strong>NestJS</strong> for backend microservices, <strong>Kafka</strong> for message queuing and task distribution, <strong>MongoDB</strong> for persistent data storage, and <strong>Docker</strong> with <strong>Docker Compose</strong> for containerization and orchestration.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The system includes <strong>Kafka producers and consumers</strong> for task distribution, <strong>gateway microservices</strong> for API management, <strong>NX monorepo</strong> structure for code organization, and <strong>Shadcn-UI</strong> for modern component design.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>This project demonstrates advanced distributed systems design, microservices architecture, real-time task scheduling, and building scalable infrastructure for high-availability applications.</p>
                    </ParagraphLight>
                </ProjectRight>
                <ProjectLeft
                    projectTitle={'Real-Time Chat Application'}
                    bgImage={'bg-virus'}
                    techStack={['React', 'TypeScript', 'Express', 'Socket.IO', 'Prisma', 'MongoDB', 'Docker', 'Turborepo', 'MUI', 'Redis']}
                    buttonWatchItLive={'http://localhost:3000'}
                    buttonDescription={'https://github.com/cooldev900/chat-app'}
                    buttonGitHub={'https://github.com/cooldev900/chat-app'}>
                    <ParagraphLight>
                        <p>A comprehensive real-time chat application built as a monorepo using Turborepo for efficient multi-package project management. The application features real-time communication powered by Socket.IO, with a React frontend and Express backend, all built with TypeScript for type safety.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The project demonstrates modern full-stack development practices with a microservices architecture, containerized database management, and efficient monorepo orchestration for scalable application development.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Key Features</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Real-time Communication:</strong> Powered by Socket.IO for instant messaging capabilities with live updates and real-time user interactions.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Database Management:</strong> MongoDB with Prisma ORM for efficient schema management and type-safe database operations.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Monorepo Architecture:</strong> Turborepo for efficient task orchestration across multiple workspaces and packages.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p><strong>Containerized Development:</strong> Docker integration for MongoDB database with persistent data storage and easy deployment.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Technical Implementation</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Built with <strong>React</strong> and <strong>TypeScript</strong> for the frontend with Material-UI components, <strong>Express</strong> and <strong>Socket.IO</strong> for the backend real-time server, <strong>Prisma</strong> ORM for database management, and <strong>MongoDB</strong> running in Docker containers.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The project uses <strong>Turborepo</strong> for monorepo management, enabling efficient development workflows with shared configurations, optimized builds, and streamlined testing across frontend and backend applications.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>This project showcases expertise in modern full-stack development, real-time application architecture, database design, and building scalable applications with containerized infrastructure.</p>
                    </ParagraphLight>
                </ProjectLeft>
            </section>
            {/* <section id="section-code-library">
          <SectionHeader text={'Code Library'} headerGradientStyle={'header-projects'} class={'mt-52'} />
          <div class='flex flex-wrap md:flex-nowrap gap-10 max-w-5xl m-auto mt-32 px-2'>
            <div>
              <CodeLibraryItem codeLibraryTitle={'5 use cases of the useState ReactJS hook'} goTo={'#'}>
                <ParagraphLight><p>useState is a Hook that needs to be called inside a function component to add some local state to it.React will preserve this state between component re-renders.</p></ParagraphLight>
                <ParagraphLight><p>There are many use cases for the useState hook, but in this article, I will focus on the following five: </p></ParagraphLight>
                <ParagraphLight>
                  <ul class='list-disc ml-4'>
                    <li>State management</li>
                    <li>Conditional rendering</li>
                    <li>Toggle flags (true/false)</li>
                    <li>Counter</li>
                    <li>Get API data and store it in state</li>
                  </ul>
                </ParagraphLight>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'JavaScript array methods'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'CSS Flex and Grid'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
          </div>
        </section> */}
        </div>
    );
};

export default ProjectsSection;