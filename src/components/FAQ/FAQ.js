import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { settings } from '../../data/dataStore';
import styles from './FAQ.scss';

{/*class FAQ extends React.Component {

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
}*/}

const FAQ = () => (
  <Container >
    <Hero titleText={settings.FAQ.title} imageText={settings.FAQ.image} imageAlt={settings.FAQ.alt}/>
    <div className={styles.wrapper}>
      <h2>{settings.FAQ.question1}</h2>
      <p>{settings.FAQ.answer1}</p>
      <h2>{settings.FAQ.question2}</h2>
      <p>{settings.FAQ.answer2}</p>
      <h2>{settings.FAQ.question3}</h2>
      <p>{settings.FAQ.answer3}</p>
    </div>
  </Container>
);

FAQ.defaultProps = {
  title: settings.FAQ.title,
  image: settings.FAQ.image,
  alt: settings.FAQ.alt,
};

export default FAQ;