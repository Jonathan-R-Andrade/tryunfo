import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { name, id, dataTestid, label } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <textarea
          name={ name }
          id={ id }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Textarea;
