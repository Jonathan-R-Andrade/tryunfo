import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { name, id, value, onChange, dataTestid, label } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <textarea
          name={ name }
          id={ id }
          value={ value }
          data-testid={ dataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
