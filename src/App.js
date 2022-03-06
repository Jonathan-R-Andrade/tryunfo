import React from 'react';
import Edit from './components/Edit';
import Header from './components/Header';
import Play from './components/Play';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      gameScreen: false,
      shuffledCards: [],
      currentCard: -1,
      hasCardsChange: false,
    };
  }

  shuffleCards = () => {
    const { cards } = this.state;
    const shuffledCards = [...cards].sort(() => {
      const subtract = 0.5;
      return Math.random() - subtract;
    });
    this.setState({
      shuffledCards,
      currentCard: -1,
      hasCardsChange: false,
    });
  }

  nextCard = () => {
    this.setState((state) => {
      const { currentCard } = state;
      return { currentCard: currentCard + 1 };
    });
  }

  toggleScreen = (gameScreen) => {
    const { hasCardsChange } = this.state;
    if (gameScreen && hasCardsChange) {
      this.shuffleCards();
    }
    this.setState({ gameScreen });
  }

  addCard = (card) => {
    const { cards } = this.state;
    this.setState({
      cards: [...cards, card],
      hasCardsChange: true,
    });
  }

  deleteCard = (cardName) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.filter((card) => card.cardName !== cardName),
      hasCardsChange: true,
    });
  }

  render() {
    const {
      cards,
      gameScreen,
      shuffledCards,
      currentCard,
    } = this.state;

    const editComponent = (
      <Edit
        cards={ cards }
        addCard={ this.addCard }
        deleteCard={ this.deleteCard }
      />
    );

    const playComponent = (
      <Play
        shuffledCards={ shuffledCards }
        currentCard={ currentCard }
        shuffleCards={ this.shuffleCards }
        nextCard={ this.nextCard }
      />
    );

    return (
      <div className="App">
        <Header toggleScreen={ this.toggleScreen } />
        {gameScreen ? playComponent : editComponent}
      </div>
    );
  }
}

export default App;
