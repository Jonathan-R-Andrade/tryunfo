import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class cardList extends React.Component {
  render() {
    const { cards } = this.props;

    return (
      <ul className="cardList">
        {
          cards.map((card, index) => (
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              key={ index }
            />
          ))
        }
      </ul>
    );
  }
}

cardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.exact({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default cardList;
