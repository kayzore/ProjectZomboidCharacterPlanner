import { OccupationId } from "@app/types/occupation.type";

type TraitId =
  | 'ADRENALINE_JUNKIE'
  | 'ATHLETIC'
  | 'BRAVE'
  | 'CATS_EYES'
  | 'DEXTROUS'
  | 'EAGLE_EYED'
  | 'FAST_HEALER'
  | 'FAST_LEARNER'
  | 'FAST_READER'
  | 'FIT'
  | 'GRACEFUL'
  | 'INCONSPICUOUS'
  | 'IRON_GUT'
  | 'KEEN_HEARING'
  | 'LIGHT_EATER'
  | 'LOW_THIRST'
  | 'LUCKY'
  | 'ORGANIZED'
  | 'OUTDOORSMAN'
  | 'RESILIENT'
  | 'SPEED_DEMON'
  | 'STOUT'
  | 'STRONG'
  | 'THICK_SKINNED'
  | 'WAKEFUL'
  | 'AMATEUR_MECHANIC_OCCUPATION'
  | 'AMATEUR_MECHANIC_HOBBY'
  | 'ANGLER'
  | 'AXE_MAN'
  | 'BASEBALL_PLAYER'
  | 'BURGLAR'
  | 'BRAWLER'
  | 'COOK_HOBBY'
  | 'COOK_OCCUPATION'
  | 'DESENSITIZED'
  | 'FIRST_AIDER'
  | 'FORMER_SCOUT'
  | 'GARDENER'
  | 'GYMNAST'
  | 'HANDY'
  | 'HERBALIST'
  | 'HIKER'
  | 'HUNTER'
  | 'NIGHT_OWL'
  | 'NUTRITIONIST'
  | 'RUNNER'
  | 'SEWER'
  | 'AGORAPHOBIC'
  | 'ALL_THUMBS'
  | 'ASTHMATIC'
  | 'CLAUSTROPHOBIC'
  | 'CLUMSY'
  | 'CONSPICUOUS'
  | 'COWARDLY'
  | 'DEAF'
  | 'DISORGANIZED'
  | 'EMACIATED'
  | 'FEEBLE'
  | 'HARD_OF_HEARING'
  | 'HEARTY_APPETITE'
  | 'FEAR_OF_BLOOD'
  | 'HIGH_THIRST'
  | 'ILLITERATE'
  | 'OUT_OF_SHAPE'
  | 'OBESE'
  | 'OVERWEIGHT'
  | 'PACIFIST'
  | 'PRONE_TO_ILLNESS'
  | 'RESTLESS_SLEEPER'
  | 'SHORT_SIGHTED'
  | 'SLEEPYHEAD'
  | 'SMOKER'
  | 'SLOW_HEALER'
  | 'SLOW_LEARNER'
  | 'SLOW_READER'
  | 'SUNDAY_DRIVER'
  | 'THIN_SKINNED'
  | 'UNDERWEIGHT'
  | 'UNFIT'
  | 'UNLUCKY'
  | 'VERY_UNDERWEIGHT'
  | 'WEAK'
  | 'WEAK_STOMACH';

type TraitType = 'Occupation' | 'Hobby' | 'Positive' | 'Negative';

interface BaseTrait {
  /**
   * Gets the trait id.
   */
  id: TraitId;

  /**
   * Gets the trait name.
   */
  name: string;

  /**
   * Gets the trait description.
   */
  description: string;

  /**
   * Gets the trait icon.
   */
  icon: string;

  /**
   * Gets the trait points.
   */
  points: number;

  /**
   * Gets the trait additional effects.
   */
  effect: object[] | null; // TODO: type
  /**
   * Gets the trait type.
   */
  type: TraitType[];
}

export interface Trait extends BaseTrait {
  /**
   * Gets the mutually exclusive traits.
   */
  excluded: TraitId[];
}

export interface HobbyTrait extends BaseTrait {
  /**
   * Gets the hobbies occupation.
   */
  occupations: OccupationId[];
}
