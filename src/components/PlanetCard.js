import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const startOfName = 14;
    const endOfName = -25;
    const planetId = planetImage.slice(startOfName, endOfName).toLowerCase();
    return (
      <div
        data-testid="planet-card"
        className={`planet-card ${planetId}`}
      >
        <div><img src={planetImage} alt={`Planeta ${planetName}`} /></div>
        <h3 data-testid="planet-name">{planetName}</h3>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
