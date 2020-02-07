import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (

  //const {title, image} = props;
  <header className={styles.component} >
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imageText} alt={props.imageAlt}></img>
  </header>
 
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageText: PropTypes.string.isRequired,
  imageAlt: PropTypes.node,
};

export default Hero;