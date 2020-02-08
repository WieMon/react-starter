import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

const Info = ({title, image, alt}) => (
  <Container>
    <Hero titleText={title} imageText={image} imageAlt={alt}/>
    {/*<h2>{settings.info.title}</h2>*/}
    <p>{settings.info.description}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.node,
};

Info.defaultProps = {
  title: settings.info.title,
  image: settings.info.image,
  alt: settings.info.alt,
};

export default Info;
