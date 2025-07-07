import ParagraphLight from '../UI/ParagraphLight';
import SectionHeader from '../UI/SectionHeader';
import AboutMe from './AboutMe';

const AboutSection = props => {
    return (
        <div class='bg-black pb-32'>
            <section id='section-about'>
                <SectionHeader text={'About Me'} headerGradientStyle={'header-about-me'} />
                <AboutMe projectTitle={`Hi! 👋 I'm David`} bgImage={'bg-virus'} techStack={['TypeScript', 'React', 'Node.js', 'Solidity', 'Web3.js', 'Rust', 'Python', 'Next.js']}>
                    <ParagraphLight>
                        I'm a Senior Blockchain Engineer with over 8 years of experience in full-stack development and distributed computing. My passion for cryptocurrency and blockchain technology has driven me to master the creation of decentralized applications (dApps) on both public and private Ethereum networks.
                    </ParagraphLight>
                    <ParagraphLight>
                        Currently working as an Independent Contractor, I specialize in designing and implementing DeFi protocols, smart contracts, and blockchain infrastructure. My expertise spans from developing payment and NFT reward contracts using the Factory Pattern to building microservice-based systems with NestJS.
                    </ParagraphLight>
                    <ParagraphLight>
                        I've had the privilege of working with cutting-edge blockchain technologies, including the Fantom Opera Network at Hector Network, where I spearheaded the development of decentralized financial solutions. This included staking protocols, yield farming mechanisms, and liquidity pools that contributed significantly to the ecosystem's growth.
                    </ParagraphLight>
                    <ParagraphLight>
                        My technical journey began at NTT DATA in Singapore, where I worked on 12 responsive web applications using ReactJS and modern React Hooks. I've always been passionate about creating efficient, scalable solutions - whether it's implementing virtualized rows for high-volume data or building custom CRM systems for health insurance agents.
                    </ParagraphLight>
                    <ParagraphLight>
                        At Enuma Technologies in Hong Kong, I designed Layer 2 solutions leveraging Merkle Trees and collaborated with the OAX Foundation to develop next-generation decentralized exchange prototypes. This experience deepened my understanding of blockchain security and scalability challenges.
                    </ParagraphLight>
                    <ParagraphLight>
                        I'm not just technically proficient but also a strong team player who values clear communication and collaboration. I take the time to thoroughly understand project goals and work meticulously to achieve them with the highest standards of quality. My sharp problem-solving skills, attention to detail, and unwavering commitment to excellence make me an invaluable asset to any team.
                    </ParagraphLight>
                    <ParagraphLight>
                        I hold a Bachelor's Degree in Computer Science from the National University of Singapore, and I'm constantly expanding my knowledge in emerging blockchain technologies, including Solana development and cross-chain bridging solutions.
                    </ParagraphLight>
                </AboutMe>
            </section>
        </div>
    );
};

export default AboutSection;