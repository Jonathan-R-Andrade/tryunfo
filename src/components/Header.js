import PropTypes from 'prop-types';
import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
  renderPlayButton = () => {
    const { toggleScreen } = this.props;
    return (
      <button
        type="button"
        className="Header-btnPlay"
        onClick={ () => { toggleScreen(true); } }
      >
        Jogar
      </button>
    );
  }

  renderEditButton = () => {
    const { toggleScreen } = this.props;
    return (
      <button
        type="button"
        className="Header-btnEditCards"
        onClick={ () => { toggleScreen(false); } }
      >
        Editar/Ver Cartas
      </button>
    );
  }

  render() {
    return (
      <header className="Header">
        {this.renderPlayButton()}
        {this.renderEditButton()}
      </header>
    );
  }
}

Header.propTypes = {
  toggleScreen: PropTypes.func.isRequired,
};

export default Header;
