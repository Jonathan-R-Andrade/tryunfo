import PropTypes from 'prop-types';
import React from 'react';
import '../css/Play.css';
import Card from './Card';

class Play extends React.Component {
  render() {
    const {
      shuffledCards,
      currentCard,
      shuffleCards,
    } = this.props;

    const cardFront = shuffledCards.length > 0
      ? (
        <Card
          cardName={ shuffledCards[currentCard].cardName }
          cardDescription={ shuffledCards[currentCard].cardDescription }
          cardAttr1={ shuffledCards[currentCard].cardAttr1 }
          cardAttr2={ shuffledCards[currentCard].cardAttr2 }
          cardAttr3={ shuffledCards[currentCard].cardAttr3 }
          cardImage={ shuffledCards[currentCard].cardImage }
          cardRare={ shuffledCards[currentCard].cardRare }
          cardTrunfo={ shuffledCards[currentCard].cardTrunfo }
        />
      )
      : null;

    const cardBack = (
      <Card
        cardName=""
        cardDescription=""
        cardAttr1=""
        cardAttr2=""
        cardAttr3=""
        cardImage=""
        cardRare=""
        cardTrunfo={ false }
        back
      />
    );

    return (
      <div className="Play">
        <div className="Play-cards">
          {cardFront}
          {cardBack}
        </div>
        <button
          type="button"
          onClick={ () => { shuffleCards(); } }
        >
          Embaralhar
        </button>
      </div>
    );
  }
}

Play.propTypes = {
  shuffleCards: PropTypes.func.isRequired,
  currentCard: PropTypes.number.isRequired,
  shuffledCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Play;
