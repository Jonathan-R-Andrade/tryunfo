import React from 'react';
import PropTypes from 'prop-types';
import Input from './fields/Input';
import Select from './fields/Select';

class Filter extends React.Component {
  render() {
    const {
      onFilterChange,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.props;

    return (
      <div className="Filter-container">
        <h3>Filtros de busca</h3>
        <div className="Filter">
          <Input
            label="Nome"
            type="text"
            name="filterName"
            id="field-filterName"
            value={ filterName }
            dataTestid="name-filter"
            onChange={ (event) => {
              onFilterChange(event);
            } }
          />
          <Select
            label="Raridade"
            name="filterRare"
            id="field-filterRare"
            value={ filterRare }
            dataTestid="rare-filter"
            onChange={ (event) => {
              onFilterChange(event);
            } }
            options={
              <>
                <option value="todas">Todas</option>
                <option value="normal">Normal</option>
                <option value="raro">Raro</option>
                <option value="muito raro">Muito Raro</option>
              </>
            }
          />
          <Input
            label="Super Trunfo"
            type="checkbox"
            name="filterTrunfo"
            id="field-trunfo"
            checked={ filterTrunfo }
            dataTestid="trunfo-filter"
            onChange={ (event) => {
              onFilterChange(event);
            } }
          />
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default Filter;
