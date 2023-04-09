import { FunctionComponent } from "react";
import { pointsStyle } from "@shared/styles/points.style";

type Props = {
  points: number,
};

const RemainingPoints: FunctionComponent<Props> = (props: Props) => {
  const { points } = props;

  return (
    <div className={pointsStyle(points)} data-testid="character-remaining-points">
      {points}
    </div>
  );
};

export default RemainingPoints;
