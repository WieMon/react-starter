import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Card from '../Card/Card.js';


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
        <section>
          <div>
            <h2>Card</h2>
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