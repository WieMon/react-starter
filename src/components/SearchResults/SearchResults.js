import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Card from '../Card/Card.js';
import styles from './SearchResults.scss';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }

  static defaultProps = { 
    cards: settings.defaultColumnIcon,
  }

  render() {
    const {cards} = this.props;

    return (
      <Container>
        <section className={styles.wrapper}>
          <div>
            <h2>Cards</h2>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;