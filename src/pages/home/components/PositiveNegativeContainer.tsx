import { useLocale } from "@app/hooks";
import { Column } from "@app/layout/components";
import TraitsList from "./TraitsList";

const PositiveNegativeContainer: React.FunctionComponent = () => {
  const { translate } = useLocale();

  return (
    <Column className="flex justify-between gap-8 overflow-y-auto">
      <div className="h-1/2 overflow-y-auto">
        <h2>{translate("positive")}</h2>
        <TraitsList traitType="Positive" onTraitClick={(): void => void 0} />
      </div>

      <hr />

      <div className="h-1/2 overflow-y-auto">
        <h2>{translate("negative")}</h2>
        <TraitsList traitType="Negative" onTraitClick={(): void => void 0} />
      </div>
    </Column>
  );
};

export default PositiveNegativeContainer;
