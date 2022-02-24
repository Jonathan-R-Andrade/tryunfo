import React from 'react';
import PropTypes from 'prop-types';
import Input from './fields/Input';

class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      filterName: '',
    };

    this.handleFields = this.handleFields.bind(this);
  }

  handleFields({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  render() {
    const { filterName } = this.state;
    const { onFilterChange } = this.props;

    return (
      <div className="Filter-container">
        <h3>Filtros de busca</h3>
        <form className="Filter">
          <Input
            label="Nome"
            type="text"
            name="filterName"
            id="field-filterName"
            value={ filterName }
            dataTestid="name-filter"
            onChange={ (event) => {
              this.handleFields(event);
              onFilterChange(event);
            } }
          />
        </form>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
