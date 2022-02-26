import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const { type,
      name,
      id,
      value,
      onChange,
      dataTestid,
      label,
      checked,
      labelEnd,
      className,
      fieldContainer,
    } = this.props;

    return (
      <label htmlFor={ id } className={ `Input ${className}` }>
        {labelEnd ? null : <span className="Input-label">{label}</span>}
        {
          fieldContainer
            ? (
              <div className="Input-field-container">
                <input
                  type={ type }
                  name={ name }
                  id={ id }
                  value={ value }
                  data-testid={ dataTestid }
                  onChange={ onChange }
                  checked={ checked }
                  className="Input-field"
                />
              </div>
            )
            : (
              <input
                type={ type }
                name={ name }
                id={ id }
                value={ value }
                data-testid={ dataTestid }
                onChange={ onChange }
                checked={ checked }
                className="Input-field"
              />
            )
        }
        {labelEnd ? <span className="Input-label">{label}</span> : null}
      </label>
    );
  }
}

Input.defaultProps = {
  value: '',
  className: '',
  checked: false,
  labelEnd: false,
  fieldContainer: false,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  labelEnd: PropTypes.bool,
  fieldContainer: PropTypes.bool,
};

export default Input;
