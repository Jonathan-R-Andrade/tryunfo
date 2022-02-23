import React from 'react';
import Input from './fields/Input';
import Select from './fields/Select';
import Textarea from './fields/Textarea';
import '../css/Form.css';

class Form extends React.Component {
  render() {
    return (
      <form className="Form">
        <Input
          label="Nome"
          type="text"
          name="name"
          id="field-name"
          dataTestid="name-input"
        />
        <Textarea
          label="Descrição"
          name="description"
          id="field-description"
          dataTestid="description-input"
        />
        <Input
          label="Atributo 1"
          type="number"
          name="attr1"
          id="field-attr1"
          dataTestid="attr1-input"
        />
        <Input
          label="Atributo 2"
          type="number"
          name="attr2"
          id="field-attr2"
          dataTestid="attr2-input"
        />
        <Input
          label="Atributo 3"
          type="number"
          name="attr3"
          id="field-attr3"
          dataTestid="attr3-input"
        />
        <Input
          label="Imagem"
          type="text"
          name="image"
          id="field-image"
          dataTestid="image-input"
        />
        <Select
          label="Raridade"
          name="rare"
          id="field-rare"
          dataTestid="rare-input"
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
          dataTestid="trunfo-input"
        />
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
