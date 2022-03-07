import React from 'react';
import Edit from './components/Edit';
import Header from './components/Header';
import Play from './components/Play';

class App extends React.Component {
  constructor() {
    super();

    this.state = this.getStateInLocalStorage();
  }

  checkStateInLocalStorage = (state) => {
    if (!state || typeof state !== 'object') return false;
    const totalKeysToCheck = 5;
    if (Object.keys(state).length !== totalKeysToCheck) return false;
    const { cards, shuffledCards, currentCard, hasCardsChange, gameScreen } = state;
    if (!Array.isArray(cards)) return false;
    if (!Array.isArray(shuffledCards)) return false;
    if (typeof currentCard !== 'number') return false;
    if (typeof hasCardsChange !== 'boolean') return false;
    if (typeof gameScreen !== 'boolean') return false;
    return true;
  }

  getStateInLocalStorage = () => {
    const state = JSON.parse(localStorage.getItem('Tryunfo-state'));
    if (this.checkStateInLocalStorage(state)) {
      return state;
    }
    return {
      cards: [],
      shuffledCards: [],
      currentCard: -1,
      hasCardsChange: false,
      gameScreen: false,
    };
  }

  updateStateInLocalStorage = () => {
    localStorage.setItem('Tryunfo-state', JSON.stringify(this.state));
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
    }, this.updateStateInLocalStorage);
  }

  nextCard = () => {
    this.setState((state) => {
      const { currentCard } = state;
      return { currentCard: currentCard + 1 };
    }, this.updateStateInLocalStorage);
  }

  toggleScreen = (gameScreen) => {
    const { hasCardsChange } = this.state;
    if (gameScreen && hasCardsChange) {
      this.shuffleCards();
    }
    this.setState({ gameScreen }, this.updateStateInLocalStorage);
  }

  addCard = (card) => {
    const { cards } = this.state;
    this.setState({
      cards: [...cards, card],
      hasCardsChange: true,
    }, this.updateStateInLocalStorage);
  }

  deleteCard = (cardName) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.filter((card) => card.cardName !== cardName),
      hasCardsChange: true,
    }, this.updateStateInLocalStorage);
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
