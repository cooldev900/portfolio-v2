import iconGitHub from '../../assets/img/icon-github.webp';
import iconLinkedIn from '../../assets/img/icon-linkedin.webp';
import iconReact from '../../assets/img/icon-react.svg';
import iconTailwind from '../../assets/img/icon-tailwind.svg';
import iconTwitter from '../../assets/img/icon-twitter.webp';
import locationPin from '../../assets/img/locationPin.webp';
import resume from '../../assets/pdf/david-park-resume.pdf';
import EmailOptions from './EmailOptions';
import IconBlack from './IconBlack';
import NavbarFooter from './NavbarFooter';

const Footer = props => {
    return (
        <footer class='flex flex-wrap justify-evenly gap-5 lg:gap-10 max-w-5xl m-auto mt-32'>
            <NavbarFooter />
            <div class='text-left hero-content items-start'>
                <div class='max-w-2xl'>
                    <p class='mb-5'><span><img src={locationPin} class='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Novi Sad, Serbia</p>
                    <h1 class='mb-5 font-bold font-poppins'>
                        <span class='block text-lg lg:text-2xl'>David Park,</span><span class='text-4xl lg:text-6xl subpixel-antialiased'>Blockchain<br />Engineer</span>
                    </h1>
                    <a href={resume} target='_blank' rel="noreferrer" class='btn mr-10 btn-md mb-5 sm:mb-0'>Get my Resume</a>
                    <div class="dropdown dropdown-hover">
                        <a href='mailto:davdpark1026@gmail.com' target='_blank' rel="noreferrer" class="btn btn-outline btn-md">davdpark1026@gmail.com</a>
                        <EmailOptions />
                    </div>
                    <div class="mt-14 flex justify-between">
                        <IconBlack icon={iconLinkedIn} goTo='https://www.linkedin.com/in/damian-demasi/' ariaLabel='LinkedIn'>LinkedIn</IconBlack>
                        <IconBlack icon={iconTwitter} goTo='https://twitter.com/DamianDemasi' ariaLabel='Twitter'>Twitter</IconBlack>
                        <IconBlack icon={iconGitHub} goTo='https://github.com/Colo-Codes' ariaLabel='GitHub'>GitHub</IconBlack>
                    </div>
                    <div class='mt-10 text-xs'>
                        <p>👨‍💻 Portfolio site made by David Park, using<img src={iconReact} alt="" class='w-7 inline -mx-1' />ReactJS, <img src={iconTailwind} alt="" class='w-4 inline mx-1' />TailwindCSS and DaisyUI.</p>
                        <p>Icons from <a href='https://www.flaticon.com/' target='_blank' rel='noreferrer' class='link ' >Flaticon.</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;