import PropTypes from 'prop-types';
import React from 'react';
import '../css/Filter.css';
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
      <div className="Filter">
        <Input
          label="Nome:"
          type="text"
          name="filterName"
          id="field-filterName"
          className="Filter-filterName"
          value={ filterName }
          dataTestid="name-filter"
          onChange={ onFilterChange }
        />
        <Select
          label="Raridade:"
          name="filterRare"
          id="field-filterRare"
          className="Filter-filterRare"
          value={ filterRare }
          dataTestid="rare-filter"
          onChange={ onFilterChange }
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
          labelEnd
          type="checkbox"
          name="filterTrunfo"
          id="field-filterTrunfo"
          className="Filter-filterTrunfo"
          checked={ filterTrunfo }
          dataTestid="trunfo-filter"
          onChange={ onFilterChange }
        />
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
