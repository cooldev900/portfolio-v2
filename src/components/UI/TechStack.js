import iconAngular from '../../assets/img/angular.png';
import iconKafka from '../../assets/img/apachekafka-original.svg';
import iconAWS from '../../assets/img/aws.png';
import iconBootstrap from '../../assets/img/bootstrap.jpeg';
import iconDigitalOcean from '../../assets/img/digital-ocean.png';
import iconDocker from '../../assets/img/docker.png';
import iconEthereum from '../../assets/img/ethereum.png';
import iconExpress from '../../assets/img/express.png';
import iconFirebase from '../../assets/img/firebase.png';
import iconGit from '../../assets/img/git.png';
import iconGolang from '../../assets/img/golang.png';
import iconGraphql from '../../assets/img/graphql-plain.svg';
import iconGSAP from '../../assets/img/gsap.svg';
import iconHeroku from '../../assets/img/heroku.png';
import iconCSS3 from '../../assets/img/icon-css3.png';
import iconFigma from '../../assets/img/icon-figma.png';
import iconGitHub from '../../assets/img/icon-github.webp';
import iconHTML5 from '../../assets/img/icon-html5.png';
import iconJavaScript from '../../assets/img/icon-javascript-black.png';
import iconLinux from '../../assets/img/icon-linux.png';
import iconNetlify from '../../assets/img/icon-netlify.png';
import iconReact from '../../assets/img/icon-react.jpg';
import iconTailwind from '../../assets/img/icon-tailwind.svg';
import iconIonic from '../../assets/img/ionic.png';
import iconMongoDB from '../../assets/img/mongodb.png';
import iconNestJS from '../../assets/img/nestjs.png';
import iconNextJS from '../../assets/img/nextjs-original.svg';
import iconNginx from '../../assets/img/ngnix.png';
import iconNodeJS from '../../assets/img/nodejs.png';
import iconNuxt from '../../assets/img/nuxtjs-original.svg';
import iconPHP from '../../assets/img/php.png';
import iconPostgreSQL from '../../assets/img/postgre.png';
import iconRabbitMQ from '../../assets/img/rabbitmq.png';
import iconRedis from '../../assets/img/redis.png';
import iconSCSS from '../../assets/img/scss.png';
import iconSolana from '../../assets/img/solana.png';
import iconSolidity from '../../assets/img/solidity.png';
import iconSQL from '../../assets/img/sql.png';
import iconTypeScript from '../../assets/img/typescript.svg';
import iconVueJS from '../../assets/img/vuejs-original.svg';
import TechStackElement from './TechStackElement';

const techArray = [
    <TechStackElement key={`${Math.random()}`} icon={iconHTML5}>HTML5</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconCSS3}>CSS3</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconJavaScript}>JavaScript</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconTypeScript}>TypeScript</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconReact}>ReactJS</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconAngular}>Angular</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconNodeJS}>Node.js</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconExpress}>Express.js</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconNestJS}>NestJS</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconMongoDB}>MongoDB</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconPostgreSQL}>PostgreSQL</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconRedis}>Redis</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconRabbitMQ}>RabbitMQ</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconGit}>Git</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconGitHub}>GitHub</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconDocker}>Docker</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconAWS}>AWS</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconFirebase}>Firebase</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconDigitalOcean}>Digital Ocean</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconHeroku}>Heroku</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconNetlify}>Netlify & Vercel</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconNginx}>Nginx</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconTailwind}>TailwindCSS</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconBootstrap}>Bootstrap</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconSCSS}>SCSS</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconFigma}>Figma</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconPHP}>PHP</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconGolang}>Golang</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconSolidity}>Solidity</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconSQL}>SQL</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconIonic}>Ionic</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconGSAP}>GSAP</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconLinux}>Linux, Windows & macOS</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconGraphql}>GraphQL</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconKafka}>Kafka</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconVueJS}>VueJS</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconNuxt}>Nuxt</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconNextJS}>NextJS</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconEthereum}>Ethereum</TechStackElement>,
    <TechStackElement key={`${Math.random()}`} icon={iconSolana}>Solana</TechStackElement>,
];

const TechStack = props => {
    // Create a mapping of technology names to their indices in the original array
    const techMapping = {
        'HTML5': 0,
        'CSS3': 1,
        'JS': 2,
        'JavaScript': 2,
        'TypeScript': 3,
        'React': 4,
        'Angular': 5,
        'NodeJS': 6,
        'Express': 7,
        'NestJS': 8,
        'MongoDB': 9,
        'PostgreSQL': 10,
        'Redis': 11,
        'RabbitMQ': 12,
        'Git': 13,
        'GitHub': 14,
        'Docker': 15,
        'AWS': 16,
        'Firebase': 17,
        'DigitalOcean': 18,
        'Heroku': 19,
        'Netlify': 20,
        'Nginx': 21,
        'TailwindCSS': 22,
        'Bootstrap': 23,
        'SCSS': 24,
        'Figma': 25,
        'PHP': 26,
        'Golang': 27,
        'Solidity': 28,
        'SQL': 29,
        'Ionic': 30,
        'GSAP': 31,
        'Linux': 32,
        'GraphQL': 33,
        'Kafka': 34,
        'VueJS': 35,
        'Nuxt': 36,
        'NextJS': 37,
        'Ethereum': 38,
        'Solana': 39,
    };

    // Filter the array based on props.usedTech
    const filteredArray = techArray.filter((_, index) => {
        // Find the technology name for this index
        const techName = Object.keys(techMapping).find(key => techMapping[key] === index);
        
        // If we found a matching technology, check if it's in the usedTech array
        if (techName) {
            return props.usedTech.includes(techName);
        }
        
        // If no mapping found, keep the item (shouldn't happen with current setup)
        return true;
    });
    
    return filteredArray;
};

export default TechStack;