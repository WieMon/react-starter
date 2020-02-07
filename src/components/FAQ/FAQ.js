import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';

class FAQ extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.node,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render () {
    const {title, image, alt} = this.props;
    console.log('title', title);

    return (
      <Container>
        <Hero titleText={title} imageText={image} imageAlt={alt}/>
        <h2>1. FAQ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>1. FAQ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>1. FAQ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>1. FAQ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Container>
    );
  }
}

{/*const FAQ = props => (
    <Container>
        <Hero titleText={title} imageText={image} imageAlt={alt}/>
        <h2>1. FAQ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>1. FAQ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>1. FAQ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h2>1. FAQ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Container>
);*/}


export default FAQ;