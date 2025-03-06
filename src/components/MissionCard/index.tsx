type MissionCardProps = {
  name: string;
  year: string;
  country: string;
  destination: string;
};

function MissionCard({ name, year, country, destination }: MissionCardProps) {
  return (
    <div className="card-container2" data-testid="mission-card">
      <p data-testid="mission-name">{name}</p>

      <p data-testid="mission-year">
        <img className="icon" src="src/public/images/schedule.svg" alt="calendário" />
        {year}
      </p>

      <p data-testid="mission-country">
        <img className="icon" src="src/public/images//map.svg" alt="maps" />
        {country}
      </p>

      <p data-testid="mission-destination">
        <img className="icon" src="/src/public/images//objective.svg" alt="destination" />
        {destination}
      </p>
    </div>
  );
}

export default MissionCard;
