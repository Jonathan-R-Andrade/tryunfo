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
      nextCard,
    } = this.props;

    let remainingCards = (shuffledCards.length - currentCard) - 1;
    remainingCards = remainingCards < 0 ? 0 : remainingCards;

    const cardFront = currentCard < shuffledCards.length && currentCard >= 0
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
      remainingCards > 0
        ? (
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
        )
        : null
    );

    const btnNext = (
      remainingCards > 0
        ? (
          <button
            type="button"
            className="Play-btnNextCard"
            onClick={ () => { nextCard(); } }
          >
            {'Próxima Carta >'}
          </button>
        )
        : null
    );

    const play = (
      <>
        <div className="Play-cards">
          <div className="Play-cards-current">
            {cardFront}
            {btnNext}
          </div>
          <div className="Play-cards-next">
            {cardBack}
            <p className="Play-remainingCards">{`Cartas Restantes: ${remainingCards}`}</p>
          </div>
        </div>
        <button
          type="button"
          className="Play-btnShuffleCards"
          onClick={ () => { shuffleCards(); } }
        >
          Embaralhar
        </button>
      </>
    );

    return (
      <div className="Play">
        {
          shuffledCards.length > 0
            ? play
            : <p className="Play-warnerNoCards">Adicione novas cartas para jogar</p>
        }
      </div>
    );
  }
}

Play.propTypes = {
  shuffledCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCard: PropTypes.number.isRequired,
  shuffleCards: PropTypes.func.isRequired,
  nextCard: PropTypes.func.isRequired,
};

export default Play;
