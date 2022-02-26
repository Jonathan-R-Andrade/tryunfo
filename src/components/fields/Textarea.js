import PropTypes from 'prop-types';
import React from 'react';

class Textarea extends React.Component {
  render() {
    const {
      name,
      id,
      value,
      onChange,
      dataTestid,
      label,
      className,
    } = this.props;

    return (
      <label htmlFor={ id } className={ `Textarea ${className}` }>
        { label ? <span className="Textarea-label">{ label }</span> : null }
        <textarea
          name={ name }
          id={ id }
          value={ value }
          data-testid={ dataTestid }
          onChange={ onChange }
          className="Textarea-field"
        />
      </label>
    );
  }
}

Textarea.defaultProps = {
  className: '',
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Textarea;
