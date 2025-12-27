import Home from '../Pages/Home';
import Galleries from '../Pages/Galleries';
import Contact from '../Pages/Contact';

function Section(props) {
    switch (props.section) {
        case 'Home':
            return <Home />;
        case 'Galleries':
            return <Galleries />;
        case 'Contact':
            return <Contact />;
        default:
            return <Home />;
    }
}

export default Section;