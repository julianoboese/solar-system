import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planets">
          {planets.map((planet) => {
            const { name, image } = planet;
            return (
              <PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
