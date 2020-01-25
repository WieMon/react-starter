import React from 'react';
import styles from './Card.scss';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  render() {
    return (
      <section className={styles.component}>
        <h3>{this.props.title}</h3>
      </section>
    )
  }
  
}


export default Card;
