import { useContext } from 'react';
import { LangContext } from '../../contexts/LanguageContext';

const About = () => {

    const { lang } = useContext(LangContext);

    return (
        <div>
            <h2>About Page</h2>
        </div>
    );
};

export default About;