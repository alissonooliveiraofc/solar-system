import Title from '../Title';
import PlanetCard from '../PlanetCard';
import planets from '../../data/planets';
import './styles.css';

function SolarSystem() {
  return (
    <div className="container" data-testid="solar-system">
      <Title headline="Planetas" />
      <div className="card-container">
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>

    </div>
  );
}

export default SolarSystem;
