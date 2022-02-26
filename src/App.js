import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Filter from './components/Filter';
import Form from './components/Form';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [],
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
    } = this.state;

    return (
      <div className="App">
        <section className="App-addCard">
          <div className="App-addCard-Form">
            <h2>Adicionar nova carta</h2>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ this.hasTrunfo() }
              isSaveButtonDisabled={ this.hasError() }
              onInputChange={ this.handleFields }
              onSaveButtonClick={ this.saveCard }
            />
          </div>
          <div className="App-addCard-Card">
            <h2>Pré-visualização</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>
        <section className="App-listCard">
          <Filter
            onFilterChange={ this.handleFields }
            filterName={ filterName }
            filterRare={ filterRare }
            filterTrunfo={ filterTrunfo }
          />
          <CardList
            cards={ this.filterCards() }
            onDeleteButtonClick={ this.deleteCard }
          />
        </section>
      </div>
    );
  }
}

export default App;
