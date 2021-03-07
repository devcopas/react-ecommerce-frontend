import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const About = () => {
    // const isClientSide = () => ![typeof window, typeof document].includes('undefined');
    // console.log('>>', isClientSide());

    return (
        <div>
            <h1>About Page!</h1>
            <Link href="/">
                <a>To Homepage</a>
            </Link>
            <Avatar
                alt="Goku"
                src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/25/25cb5457e17030ed7082576e6283e1b36b857967_full.jpg"
            />
            <Chip label="This is a chip" />
        </div>
    );
};

export default About;
