import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, id, value, onChange, dataTestid, label, checked } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          data-testid={ dataTestid }
          onChange={ onChange }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  value: '',
  checked: false,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Input;
