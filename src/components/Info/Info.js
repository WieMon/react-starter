import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} imageText={settings.info.image} imageAlt={settings.info.alt}/>
    <p>{settings.info.description}</p>
  </Container>
);

Info.defaultProps = {
  title: settings.info.title,
  image: settings.info.image,
  alt: settings.info.alt,
};

export default Info;
