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
      <p data-testid="mission-year">{year}</p>
      <p data-testid="mission-country">{country}</p>
      <p data-testid="mission-destination">{destination}</p>
    </div>
  );
}

export default MissionCard;
