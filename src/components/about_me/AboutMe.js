import hero1 from '../../assets/img/hero.png';
import iconGitHub from '../../assets/img/icon-github.webp';
import iconLinkedIn from '../../assets/img/icon-linkedin.webp';
import iconTwitter from '../../assets/img/icon-twitter.webp';
import resume from '../../assets/pdf/david-park-resume.pdf';
import ButtonLight from '../UI/ButtonLight';
import H3Header from '../UI/H3Header';
import IconWhite from '../UI/IconWhite';
import TechStack from '../UI/TechStack';

const AboutMe = props => {
    return (
        <div class="mt-32 flex gap-6 max-w-5xl mx-auto text-white px-2 flex-wrap md:flex-nowrap">
            <div data-theme="mytheme" class="mx-auto">
                <div class="w-full flex justify-center">
                    <img src={hero1} alt='David Park with a hat in a park on a sunny day.' class='rounded-full border-2 border-white shadow-lg object-cover ring-4 ring-blue-400' />
                </div>
                <div class="w-3/5 mx-auto mt-14">
                    <ButtonLight goTo={resume} target='_blank' rel="noreferrer">Get my Resume</ButtonLight>
                </div>
                <div class="w-4/5 mx-auto mt-14 flex justify-around">
                    <IconWhite icon={iconLinkedIn} goTo='https://www.linkedin.com/' ariaLabel='LinkedIn'>LinkedIn</IconWhite>
                    <IconWhite icon={iconTwitter} goTo='https://x.com/davdpark1026' ariaLabel='Twitter'>Twitter</IconWhite>
                    <IconWhite icon={iconGitHub} goTo='https://github.com/cooldev900' ariaLabel='GitHub'>GitHub</IconWhite>
                </div>
            </div>
            <div class="">
                <H3Header>
                    {props.projectTitle}
                </H3Header>
                {props.children}
                <h4 class="text-xl font-bold mt-5 mb-3">My tech stack</h4>
                <p data-theme="mytheme" class="text-secondary mb-5">I'm proficient with the following relevant technologies:</p>
                <div class="grid grid-cols-5 gap-4">
                    <TechStack usedTech={props.techStack} />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;