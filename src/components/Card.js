import PropTypes from 'prop-types';
import React from 'react';
import '../css/Card.css';
import TryunfoLogo from './TryunfoLogo';

class Card extends React.Component {
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
      showDeleteButton,
      onDeleteButtonClick,
      listContent,
      back,
    } = this.props;

    const cardFront = (
      <div className="Card-container">
        <div className="Card-content">
          <p className="Card-name" data-testid="name-card">{cardName}</p>
          <div className="Card-image-container">
            <img
              className="Card-image"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
            {
              (cardTrunfo)
                ? <p className="Card-trunfo" data-testid="trunfo-card">Super Trunfo</p>
                : null
            }
          </div>
          <p
            className="Card-description"
            data-testid="description-card"
          >
            {cardDescription}
          </p>
          <p className="Card-attr" data-testid="attr1-card">
            <span className="Card-attr-label">Atributo 1</span>
            <span className="Card-attr-value">{cardAttr1}</span>
          </p>
          <p className="Card-attr" data-testid="attr2-card">
            <span className="Card-attr-label">Atributo 2</span>
            <span className="Card-attr-value">{cardAttr2}</span>
          </p>
          <p className="Card-attr" data-testid="attr3-card">
            <span className="Card-attr-label">Atributo 3</span>
            <span className="Card-attr-value">{cardAttr3}</span>
          </p>
          <p className="Card-rare" data-testid="rare-card">
            <span className="Card-rare-label">Raridade</span>
            <span className="Card-rare-value">{cardRare}</span>
          </p>
        </div>
      </div>
    );

    const cardBack = (
      <div className="Card-container">
        <div className="Card-content">
          <TryunfoLogo />
        </div>
      </div>
    );

    const btnDeleteCard = showDeleteButton
      ? (
        <button
          className="Card-delete"
          type="button"
          data-testid="delete-button"
          onClick={ () => {
            onDeleteButtonClick(cardName);
          } }
        >
          Excluir
        </button>
      )
      : null;

    return (
      (listContent)
        ? (
          <li className="Card">
            {back ? cardBack : cardFront}
            {btnDeleteCard}
          </li>
        )
        : (
          <div className="Card">
            {back ? cardBack : cardFront}
            {btnDeleteCard}
          </div>
        )
    );
  }
}

Card.defaultProps = {
  showDeleteButton: false,
  listContent: false,
  back: false,
  onDeleteButtonClick: () => { },
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  showDeleteButton: PropTypes.bool,
  listContent: PropTypes.bool,
  onDeleteButtonClick: PropTypes.func,
  back: PropTypes.bool,
};

export default Card;
