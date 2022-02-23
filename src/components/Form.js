import React from 'react';
import PropTypes from 'prop-types';
import Input from './fields/Input';
import Select from './fields/Select';
import Textarea from './fields/Textarea';
import '../css/Form.css';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="Form">
        <Input
          label="Nome"
          type="text"
          name="name"
          id="field-name"
          value={ cardName }
          dataTestid="name-input"
          onChange={ onInputChange }
        />
        <Textarea
          label="Descrição"
          name="description"
          id="field-description"
          value={ cardDescription }
          dataTestid="description-input"
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 1"
          type="number"
          name="attr1"
          id="field-attr1"
          value={ cardAttr1 }
          dataTestid="attr1-input"
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 2"
          type="number"
          name="attr2"
          id="field-attr2"
          value={ cardAttr2 }
          dataTestid="attr2-input"
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 3"
          type="number"
          name="attr3"
          id="field-attr3"
          value={ cardAttr3 }
          dataTestid="attr3-input"
          onChange={ onInputChange }
        />
        <Input
          label="Imagem"
          type="text"
          name="image"
          id="field-image"
          value={ cardImage }
          dataTestid="image-input"
          onChange={ onInputChange }
        />
        <Select
          label="Raridade"
          name="rare"
          id="field-rare"
          value={ cardRare }
          dataTestid="rare-input"
          onChange={ onInputChange }
          options={
            <>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </>
          }
        />
        <Input
          label="Super Trunfo"
          type="checkbox"
          name="trunfo"
          id="field-trunfo"
          checked={ cardTrunfo }
          dataTestid="trunfo-input"
          onChange={ onInputChange }
        />
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
