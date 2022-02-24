import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = this.defaultCard();
    this.state.cards = [];

    this.handleFields = this.handleFields.bind(this);
    this.hasError = this.hasError.bind(this);
    this.save = this.save.bind(this);
    this.getCard = this.getCard.bind(this);
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

  hasError() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
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

    return false;
  }

  save(event) {
    event.preventDefault();
    const { cards } = this.state;
    cards.push(this.getCard());
    this.setState(this.defaultCard());
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
    } = this.state;

    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ this.hasError() }
          onInputChange={ this.handleFields }
          onSaveButtonClick={ this.save }
        />
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
      </>
    );
  }
}

export default App;
