import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, id, dataTestid, label, options } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <select
          name={ name }
          id={ id }
          data-testid={ dataTestid }
        >
          { options }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.element.isRequired,
};

export default Select;
