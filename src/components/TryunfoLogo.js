import React from 'react';
import '../css/TryunfoLogo.css';

class TryunfoLogo extends React.Component {
  render() {
    return (
      <div className="TryunfoLogo">
        <div className="TryunfoLogo-innerBorder">
          <div className="TryunfoLogo-text">
            Try
            <span className="TryunfoLogo-text-unfo">unfo</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TryunfoLogo;
