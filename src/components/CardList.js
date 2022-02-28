import PropTypes from 'prop-types';
import React from 'react';
import '../css/CardList.css';
import Card from './Card';

class cardList extends React.Component {
  render() {
    const { cards, onDeleteButtonClick } = this.props;

    return (cards.length > 0)
      ? (
        <ul className="cardList">
          {
            cards.map((card) => (
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                onDeleteButtonClick={ onDeleteButtonClick }
                showDeleteButton
                listContent
                key={ card.cardName }
              />
            ))
          }
        </ul>
      )
      : <p className="emptyList">Nenhuma carta encontrada.</p>;
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
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default cardList;
