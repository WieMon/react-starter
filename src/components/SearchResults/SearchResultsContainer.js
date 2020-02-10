import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { searchCardsForColumn } from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => {
  const id = props.match.params.id;

  return {
    cards: searchCardsForColumn(state, id),
  };
};


export default connect(mapStateToProps)(SearchResults);