import Title from '../Title';
import MissionCard from '../MissionCard';
import missions from '../../data/missions';
import './styles.css';

function Missions() {
  return (
    <div id="missoes" data-testid="missions">
      <Title headline="Missões" />
      {missions.map(({ name, year, country, destination }) => (
        <MissionCard
          key={ name }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      ))}

    </div>
  );
}

export default Missions;
