import PropTypes from 'prop-types';
import { Wrapper, Title } from './SectionStyled';

export const Section = ({ title, children }) => {
return (
<Wrapper>
        <Title>{title}</Title>
        {children}
</Wrapper>    
)}




Section.proptype = {
    title: PropTypes.string
}

