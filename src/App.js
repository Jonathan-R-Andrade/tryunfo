import React from 'react';
import Edit from './components/Edit';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      play: false,
    };
    Object.assign(this.state, this.defaultCard());
    Object.assign(this.state, this.defaultFilter());

    this.handleFields = this.handleFields.bind(this);
    this.hasError = this.hasError.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.getCard = this.getCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.hasTrunfo = this.hasTrunfo.bind(this);
    this.filterCards = this.filterCards.bind(this);
    this.cleanFilter = this.cleanFilter.bind(this);
    this.seeScreenPlay = this.seeScreenPlay.bind(this);
  }

  handleFields({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  getCard() {
    const cardKeys = Object.keys(this.defaultCard());
    const card = {};
    cardKeys.forEach((key) => {
      const { [key]: cardValue } = this.state;
      card[key] = cardValue;
    });
    return card;
  }

  seeScreenPlay(see) {
    this.setState({ play: see });
  }

  defaultCard() {
    return {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
  }

  defaultFilter() {
    return {
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }

  cleanFilter() {
    this.setState(this.defaultFilter());
  }

  hasError() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cards,
    } = this.state;

    const attr1Number = Number(cardAttr1);
    const attr2Number = Number(cardAttr2);
    const attr3Number = Number(cardAttr3);
    const sumOfAttr = attr1Number + attr2Number + attr3Number;
    const maxSumOfAttr = 210;
    const minAttr = 0;
    const maxAttr = 90;

    if (!cardName || !cardDescription || !cardImage || !cardRare) return true;
    if ((sumOfAttr > maxSumOfAttr)) return true;
    if (attr1Number < minAttr || attr1Number > maxAttr) return true;
    if (attr2Number < minAttr || attr2Number > maxAttr) return true;
    if (attr3Number < minAttr || attr3Number > maxAttr) return true;
    if (cards.some((card) => card.cardName === cardName)) return true;

    return false;
  }

  hasTrunfo() {
    const { cards } = this.state;
    return cards.some((card) => card.cardTrunfo);
  }

  saveCard(event) {
    event.preventDefault();
    const { cards } = this.state;
    const newState = this.defaultCard();
    Object.assign(newState, this.defaultFilter());
    newState.cards = [...cards, this.getCard()];
    this.setState(newState);
  }

  deleteCard(cardName) {
    const { cards } = this.state;
    this.setState({
      cards: [...cards.filter((card) => card.cardName !== cardName)],
    });
  }

  filterCards() {
    const {
      cards,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.state;

    return cards.filter((card) => {
      const filterByName = filterName
        ? card.cardName.toLowerCase().includes(filterName.toLowerCase())
        : true;
      const filterByRare = filterRare === 'todas' ? true : card.cardRare === filterRare;
      const filterByTrunfo = filterTrunfo ? card.cardTrunfo : true;
      return filterByName && filterByRare && filterByTrunfo;
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      filterName,
      filterRare,
      filterTrunfo,
      play,
    } = this.state;

    const edit = (
      <Edit
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        hasTrunfo={ this.hasTrunfo() }
        hasError={ this.hasError() }
        onInputChange={ this.handleFields }
        onSaveButtonClick={ this.saveCard }
        onFilterChange={ this.handleFields }
        filterName={ filterName }
        filterRare={ filterRare }
        filterTrunfo={ filterTrunfo }
        onCleanButtonClick={ this.cleanFilter }
        cards={ this.filterCards() }
        onDeleteButtonClick={ this.deleteCard }
      />
    );

    return (
      <div className="App">
        <div className="App-changeScreen">
          <button
            type="button"
            className="App-changeScreen-btnPlay"
            onClick={ () => { this.seeScreenPlay(true); } }
          >
            Jogar
          </button>
          <button
            type="button"
            className="App-changeScreen-btnEditSeeCards"
            onClick={ () => { this.seeScreenPlay(false); } }
          >
            Editar/Ver Cartas
          </button>
        </div>
        {play ? <>TESTE</> : edit}
      </div>
    );
  }
}

export default App;
