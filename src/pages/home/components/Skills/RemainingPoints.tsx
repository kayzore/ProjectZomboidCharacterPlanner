import { FunctionComponent } from "react";

type Props = {
  points: number,
};

const RemainingPoints: FunctionComponent<Props> = (props: Props) => {
  const { points } = props;

  return (
    <div data-testid="character-remaining-points">
      {points}
    </div>
  );
};

export default RemainingPoints;
