import PropTypes from 'prop-types';
import React from 'react';
import '../css/Edit.css';
import Card from './Card';
import CardList from './CardList';
import Filter from './Filter';
import Form from './Form';

class Edit extends React.Component {
  constructor() {
    super();

    this.state = {
      ...this.defaultCard(),
      ...this.defaultFilter(),
    };
  }

  defaultCard = () => ({
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
  });

  defaultFilter = () => ({
    filterName: '',
    filterRare: 'todas',
    filterTrunfo: false,
  });

  handleFields = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  getCard = () => {
    const cardKeys = Object.keys(this.defaultCard());
    const card = {};
    cardKeys.forEach((key) => {
      const { [key]: cardValue } = this.state;
      card[key] = cardValue;
    });
    return card;
  }

  hasError = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const { cards } = this.props;

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

  hasTrunfo = () => {
    const { cards } = this.props;
    return cards.some((card) => card.cardTrunfo);
  }

  saveCard = (event) => {
    event.preventDefault();
    const { addCard } = this.props;
    addCard(this.getCard());
    this.setState({
      ...this.defaultCard(),
      ...this.defaultFilter(),
    });
  }

  filterCards = () => {
    const {
      filterName,
      filterRare,
      filterTrunfo,
    } = this.state;

    const { cards } = this.props;

    return cards.filter((card) => {
      const filterByName = filterName
        ? card.cardName.toLowerCase().includes(filterName.toLowerCase())
        : true;
      const filterByRare = filterRare === 'todas' ? true : card.cardRare === filterRare;
      const filterByTrunfo = filterTrunfo ? card.cardTrunfo : true;
      return filterByName && filterByRare && filterByTrunfo;
    });
  }

  cleanFilter = () => {
    this.setState(this.defaultFilter());
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

    const { deleteCard } = this.props;

    return (
      <div className="Edit">
        <section className="Edit-addCard">
          <div className="Edit-addCard-Form">
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
          <div className="Edit-addCard-Card">
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
        <section className="Edit-listCard">
          <div className="Edit-listCard-Filter">
            <div className="Edit-listCard-Filter-sticky">
              <h2>Filtros de busca</h2>
              <Filter
                onFilterChange={ this.handleFields }
                filterName={ filterName }
                filterRare={ filterRare }
                filterTrunfo={ filterTrunfo }
                onCleanButtonClick={ this.cleanFilter }
              />
            </div>
          </div>
          <div className="Edit-listCard-CardList">
            <h2>Suas cartas</h2>
            <CardList
              cards={ this.filterCards() }
              onDeleteButtonClick={ deleteCard }
            />
          </div>
        </section>
      </div>
    );
  }
}

Edit.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Edit;
