import ButtonLight from '../UI/ButtonLight';
import EmailOptions from '../UI/EmailOptions';
import H3Header from '../UI/H3Header';
import ParagraphLight from '../UI/ParagraphLight';
import SectionHeader from '../UI/SectionHeader';
import ContactForm from './ContactForm';

const ContactSection = props => {
    return (<div class='bg-black pb-32'>
        <section id='section-contact'>
            <SectionHeader text={'Contact'} headerGradientStyle={'header-contact'} />
            <div class="flex flex-col gap-10 max-w-2xl mx-auto px-2">
                <H3Header class='text-white mt-32'>
                    Let's get in touch!
                </H3Header>
                <p class='text-6xl text-center'>📣</p>
                <div data-theme="mytheme" class='flex flex-wrap-reverse justify-around'>
                    {/* <ButtonLight class='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>davdpark1026@gmail.com</ButtonLight> */}
                    <div class="dropdown dropdown-hover">
                        <a href='mailto:davdpark1026@gmail.com' target='_blank' rel="noreferrer" class="btn btn-primary mb-1 w-full z-1 relative lg:btn-md">davdpark1026@gmail.com</a>
                        <EmailOptions />
                    </div>
                    <ButtonLight class='w-max btn-md sm:mb-0' goTo='https://www.linkedin.com/in/david-park-1026/' target='_blank' rel="noreferrer">Message me on LinkedIn</ButtonLight>
                </div>
                <ParagraphLight>You can shoot me an email, send me a message on LinkedIn, or, if you prefer, use the contact form below.</ParagraphLight>
                <ContactForm />
            </div>
        </section>
    </div>);
};

export default ContactSection;