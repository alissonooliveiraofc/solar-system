import './styles.css';

type TitleProps = {
  headline: string;
};

function Title({ headline }: TitleProps) {
  return (
    <h2 id="planet-title">{headline}</h2>
  );
}

export default Title;
