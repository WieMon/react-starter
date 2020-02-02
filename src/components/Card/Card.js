import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

  static propTypes = {
    title: PropTypes.node,
  }

  render () {
    const {title} = this.props;

    //{console.log(this.props);}

    return (
      <section className={styles.component}>
        <h3>{title}</h3>
      </section>
    );
  }
}

{/*const Card = props => ( //error przy destrukturyzacji (zamianie props na title)

  <section className={styles.component}>
    <h3>{props.title}</h3>
  </section>
);

Card.propTypes = {
  title: PropTypes.node,
};*/}


export default Card;
