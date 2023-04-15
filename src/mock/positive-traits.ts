import { Trait } from "@app/types";

export const AdrenalineJunkieTrait: Trait = {
  id: 'ADRENALINE_JUNKIE',
  name: 'traits.positive.adrenalineJunkie.title',
  description: 'traits.positive.adrenalineJunkie.description',
  icon: 'positive/TraitAdrenalineJunkie.png',
  points: -8,
  effect: null,
  excluded: ['AGORAPHOBIC', 'CLAUSTROPHOBIC', 'COWARDLY', 'DESENSITIZED'],
  type: ["Positive"],
};

export const AthleticTrait: Trait = {
  id: 'ATHLETIC',
  name: 'traits.positive.athletic.title',
  description: 'traits.positive.athletic.description',
  icon: 'positive/TraitAthletic.png',
  points: -10,
  effect: null,
  excluded: ['FIT', 'OUT_OF_SHAPE', 'OBESE', 'OVERWEIGHT', 'UNFIT'],
  type: ["Positive"],
};

export const BraveTrait: Trait = {
  id: 'BRAVE',
  name: 'traits.positive.brave.title',
  description: 'traits.positive.brave.description',
  icon: 'positive/TraitBrave.png',
  points: -4,
  effect: null,
  excluded: ['AGORAPHOBIC', 'DESENSITIZED'],
  type: ["Positive"],
};

export const CatsEyesTrait: Trait = {
  id: 'CATS_EYES',
  name: 'traits.positive.catsEyes.title',
  description: 'traits.positive.catsEyes.description',
  icon: 'positive/TraitCatsEyes.png',
  points: -2,
  effect: null,
  excluded: [],
  type: ["Positive"],
};

export const DextrousTrait: Trait = {
  id: 'DEXTROUS',
  name: 'traits.positive.dextrous.title',
  description: 'traits.positive.dextrous.description',
  icon: 'positive/TraitDextrous.png',
  points: -2,
  effect: null,
  excluded: ['ALL_THUMBS'],
  type: ["Positive"],
};

export const EagleEyedTrait: Trait = {
  id: 'EAGLE_EYED',
  name: 'traits.positive.eagleEyed.title',
  description: 'traits.positive.eagleEyed.description',
  icon: 'positive/TraitEagleEyed.png',
  points: -6,
  effect: null,
  excluded: ['SHORT_SIGHTED'],
  type: ["Positive"],
};

export const FastHealerTrait: Trait = {
  id: 'FAST_HEALER',
  name: 'traits.positive.fastHealer.title',
  description: 'traits.positive.fastHealer.description',
  icon: 'positive/TraitFastHealer.png',
  points: -6,
  effect: null,
  excluded: ['SLOW_HEALER'],
  type: ["Positive"],
};

export const FastLearnerTrait: Trait = {
  id: 'FAST_LEARNER',
  name: 'traits.positive.fastLearner.title',
  description: 'traits.positive.fastLearner.description',
  icon: 'positive/TraitFastLearner.png',
  points: -6,
  effect: null,
  excluded: ['SLOW_LEARNER'],
  type: ["Positive"],
};

export const FastReaderTrait: Trait = {
  id: 'FAST_READER',
  name: 'traits.positive.fastReader.title',
  description: 'traits.positive.fastReader.description',
  icon: 'positive/TraitFastReader.png',
  points: -2,
  effect: null,
  excluded: ['ILLITERATE', 'SLOW_READER'],
  type: ["Positive"],
};

export const FitTrait: Trait = {
  id: 'FIT',
  name: 'traits.positive.fit.title',
  description: 'traits.positive.fit.description',
  icon: 'positive/TraitFit.png',
  points: -6,
  effect: null,
  excluded: ['ATHLETIC', 'OUT_OF_SHAPE', 'OBESE', 'OVERWEIGHT', 'UNFIT'],
  type: ["Positive"],
};

export const GracefulTrait: Trait = {
  id: 'GRACEFUL',
  name: 'traits.positive.graceful.title',
  description: 'traits.positive.graceful.description',
  icon: 'positive/TraitGraceful.png',
  points: -4,
  effect: null,
  excluded: ['CLUMSY'],
  type: ["Positive"],
};

export const InconspicuousTrait: Trait = {
  id: 'INCONSPICUOUS',
  name: 'traits.positive.inconspicuous.title',
  description: 'traits.positive.inconspicuous.description',
  icon: 'positive/TraitInconspicuous.png',
  points: -4,
  effect: null,
  excluded: ['CONSPICUOUS'],
  type: ["Positive"],
};

export const IronGutTrait: Trait = {
  id: 'IRON_GUT',
  name: 'traits.positive.ironGut.title',
  description: 'traits.positive.ironGut.description',
  icon: 'positive/TraitIronGut.png',
  points: -3,
  effect: null,
  excluded: ['WEAK_STOMACH'],
  type: ["Positive"],
};

export const KeenHearingTrait: Trait = {
  id: 'KEEN_HEARING',
  name: 'traits.positive.keenHearing.title',
  description: 'traits.positive.keenHearing.description',
  icon: 'positive/TraitKeenHearing.png',
  points: -6,
  effect: null,
  excluded: ['DEAF', 'HARD_OF_HEARING'],
  type: ["Positive"],
};

export const LightEaterTrait: Trait = {
  id: 'LIGHT_EATER',
  name: 'traits.positive.lightEater.title',
  description: 'traits.positive.lightEater.description',
  icon: 'positive/TraitLightEater.png',
  points: -4,
  effect: null,
  excluded: ['HEARTY_APPETITE'],
  type: ["Positive"],
};

export const LowThirstTrait: Trait = {
  id: 'LOW_THIRST',
  name: 'traits.positive.lowThirst.title',
  description: 'traits.positive.lowThirst.description',
  icon: 'positive/TraitLowThirst.png',
  points: -6,
  effect: null,
  excluded: ['HIGH_THIRST'],
  type: ["Positive"],
};

export const LuckyTrait: Trait = {
  id: 'LUCKY',
  name: 'traits.positive.lucky.title',
  description: 'traits.positive.lucky.description',
  icon: 'positive/TraitLucky.png',
  points: -4,
  effect: null,
  excluded: ['UNLUCKY'],
  type: ["Positive"],
};

export const OrganizedTrait: Trait = {
  id: 'ORGANIZED',
  name: 'traits.positive.organized.title',
  description: 'traits.positive.organized.description',
  icon: 'positive/TraitOrganized.png',
  points: -6,
  effect: null,
  excluded: ['DISORGANIZED'],
  type: ["Positive"],
};

export const OutdoorsManTrait: Trait = {
  id: 'OUTDOORSMAN',
  name: 'traits.positive.outdoorsman.title',
  description: 'traits.positive.outdoorsman.description',
  icon: 'positive/TraitOutdoorsman.png',
  points: -2,
  effect: null,
  excluded: [],
  type: ["Positive"],
};

export const ResilientTrait: Trait = {
  id: 'RESILIENT',
  name: 'traits.positive.resilient.title',
  description: 'traits.positive.resilient.description',
  icon: 'positive/TraitResilient.png',
  points: -4,
  effect: null,
  excluded: ['PRONE_TO_ILLNESS'],
  type: ["Positive"],
};

export const SpeedDemonTrait: Trait = {
  id: 'SPEED_DEMON',
  name: 'traits.positive.speedDemon.title',
  description: 'traits.positive.speedDemon.description',
  icon: 'positive/TraitRoadRage.png',
  points: -1,
  effect: null,
  excluded: ['SUNDAY_DRIVER'],
  type: ["Positive"],
};

export const StoutTrait: Trait = {
  id: 'STOUT',
  name: 'traits.positive.stout.title',
  description: 'traits.positive.stout.description',
  icon: 'positive/TraitStout.png',
  points: -6,
  effect: null,
  excluded: ['FEEBLE', 'STRONG', 'WEAK'],
  type: ["Positive"],
};

export const StrongTrait: Trait = {
  id: 'STRONG',
  name: 'traits.positive.strong.title',
  description: 'traits.positive.strong.description',
  icon: 'positive/TraitStrong.png',
  points: -10,
  effect: null,
  excluded: ['FEEBLE', 'STRONG', 'WEAK'],
  type: ["Positive"],
};

export const ThickSkinnedTrait: Trait = {
  id: 'THICK_SKINNED',
  name: 'traits.positive.thickSkinned.title',
  description: 'traits.positive.thickSkinned.description',
  icon: 'positive/TraitThickSkinned.png',
  points: -8,
  effect: null,
  excluded: ['THIN_SKINNED'],
  type: ["Positive"],
};

export const WakefulTrait: Trait = {
  id: 'WAKEFUL',
  name: 'traits.positive.wakeful.title',
  description: 'traits.positive.wakeful.description',
  icon: 'positive/TraitWakeful.png',
  points: -2,
  effect: null,
  excluded: ['SLEEPYHEAD'],
  type: ["Positive"],
};

export const PositiveTraits: Trait[] = [
  AdrenalineJunkieTrait,
  AthleticTrait,
  BraveTrait,
  CatsEyesTrait,
  DextrousTrait,
  EagleEyedTrait,
  FastHealerTrait,
  FastLearnerTrait,
  FastReaderTrait,
  FitTrait,
  GracefulTrait,
  InconspicuousTrait,
  IronGutTrait,
  KeenHearingTrait,
  LightEaterTrait,
  LowThirstTrait,
  LuckyTrait,
  OrganizedTrait,
  OutdoorsManTrait,
  ResilientTrait,
  SpeedDemonTrait,
  StoutTrait,
  StrongTrait,
  ThickSkinnedTrait,
  WakefulTrait,
];
