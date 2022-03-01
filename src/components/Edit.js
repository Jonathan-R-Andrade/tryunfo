import PropTypes from 'prop-types';
import React from 'react';
import '../css/Edit.css';
import Card from './Card';
import CardList from './CardList';
import Filter from './Filter';
import Form from './Form';

class Edit extends React.Component {
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
      hasTrunfo,
      hasError,
      cards,
      onInputChange,
      onSaveButtonClick,
      onFilterChange,
      onDeleteButtonClick,
      onCleanButtonClick,
    } = this.props;

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
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ hasError }
              onInputChange={ onInputChange }
              onSaveButtonClick={ onSaveButtonClick }
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
                onFilterChange={ onFilterChange }
                filterName={ filterName }
                filterRare={ filterRare }
                filterTrunfo={ filterTrunfo }
                onCleanButtonClick={ onCleanButtonClick }
              />
            </div>
          </div>
          <div className="Edit-listCard-CardList">
            <h2>Suas cartas</h2>
            <CardList
              cards={ cards }
              onDeleteButtonClick={ onDeleteButtonClick }
            />
          </div>
        </section>
      </div>
    );
  }
}

Edit.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onCleanButtonClick: PropTypes.func.isRequired,
};

export default Edit;
