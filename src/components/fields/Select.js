import PropTypes from 'prop-types';
import React from 'react';

class Select extends React.Component {
  render() {
    const {
      name,
      id,
      value,
      onChange,
      dataTestid,
      label,
      options,
      className,
    } = this.props;

    return (
      <label htmlFor={ id } className={ `Select ${className}` }>
        { label ? <span className="Select-label">{ label }</span> : null }
        <select
          name={ name }
          id={ id }
          value={ value }
          data-testid={ dataTestid }
          onChange={ onChange }
          className="Select-field"
        >
          { options }
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  className: '',
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Select;
