import { Trait } from "@app/types";

export const AgoraphobicTrait: Trait = {
  id: 'AGORAPHOBIC',
  name: 'traits.negative.agoraphobic.title',
  description: 'traits.positive.agoraphobic.description',
  icon: 'negative/TraitAgoraphobic.png',
  points: +4,
  effect: null,
  excluded: ['ADRENALINE_JUNKIE', 'CLAUSTROPHOBIC', 'DESENSITIZED'],
  type: ["Negative"],
};

export const AllThumbsTrait: Trait = {
  id: 'ALL_THUMBS',
  name: 'traits.negative.allThumbs.title',
  description: 'traits.positive.allThumbs.description',
  icon: 'negative/TraitAllThumbs.png',
  points: +2,
  effect: null,
  excluded: ['DEXTROUS'],
  type: ["Negative"],
};

export const AsthmaticTrait: Trait = {
  id: 'ASTHMATIC',
  name: 'traits.negative.asthmatic.title',
  description: 'traits.positive.asthmatic.description',
  icon: 'negative/TraitAsthmatic.png',
  points: +5,
  effect: null,
  excluded: [],
  type: ["Negative"],
};

export const ClaustrophobicTrait: Trait = {
  id: 'CLAUSTROPHOBIC',
  name: 'traits.negative.claustrophobic.title',
  description: 'traits.positive.claustrophobic.description',
  icon: 'negative/TraitClaustrophobic.png',
  points: +4,
  effect: null,
  excluded: ['ADRENALINE_JUNKIE', 'AGORAPHOBIC', 'DESENSITIZED'],
  type: ["Negative"],
};

export const ClumsyTrait: Trait = {
  id: 'CLUMSY',
  name: 'traits.negative.clumsy.title',
  description: 'traits.positive.clumsy.description',
  icon: 'negative/TraitClumsy.png',
  points: +2,
  effect: null,
  excluded: ['GRACEFUL'],
  type: ["Negative"],
};

export const ConspicuousTrait: Trait = {
  id: 'CONSPICUOUS',
  name: 'traits.negative.conspicuous.title',
  description: 'traits.positive.conspicuous.description',
  icon: 'negative/TraitConspicuous.png',
  points: +4,
  effect: null,
  excluded: ['INCONSPICUOUS'],
  type: ["Negative"],
};

export const CowardlyTrait: Trait = {
  id: 'COWARDLY',
  name: 'traits.negative.cowardly.title',
  description: 'traits.positive.cowardly.description',
  icon: 'negative/TraitCowardly.png',
  points: +2,
  effect: null,
  excluded: ['ADRENALINE_JUNKIE', 'BRAVE', 'DESENSITIZED'],
  type: ["Negative"],
};

export const DeafTrait: Trait = {
  id: 'DEAF',
  name: 'traits.negative.deaf.title',
  description: 'traits.positive.deaf.description',
  icon: 'negative/TraitDeaf.png',
  points: +12,
  effect: null,
  excluded: ['HARD_OF_HEARING', 'KEEN_HEARING'],
  type: ["Negative"],
};

export const DisorganizedTrait: Trait = {
  id: 'DISORGANIZED',
  name: 'traits.negative.disorganized.title',
  description: 'traits.positive.disorganized.description',
  icon: 'negative/TraitDisorganized.png',
  points: +4,
  effect: null,
  excluded: ['ORGANIZED'],
  type: ["Negative"],
};

export const EmaciatedTrait: Trait = {
  id: 'EMACIATED',
  name: 'traits.negative.emaciated.title',
  description: 'traits.positive.emaciated.description',
  icon: 'negative/TraitEmaciated.png',
  points: 0, // weird behavior. Check https://pzwiki.net/wiki/Traits
  effect: null,
  excluded: [],
  type: ["Negative"],
};

export const FeebleTrait: Trait = {
  id: 'FEEBLE',
  name: 'traits.negative.feeble.title',
  description: 'traits.positive.feeble.description',
  icon: 'negative/TraitFeeble.png',
  points: +6,
  effect: null,
  excluded: ['STRONG', 'STOUT', 'WEAK'],
  type: ["Negative"],
};

export const HardOfHearingTrait: Trait = {
  id: 'HARD_OF_HEARING',
  name: 'traits.negative.hardOfHearing.title',
  description: 'traits.positive.hardOfHearing.description',
  icon: 'negative/TraitHardOfHearing.png',
  points: +4,
  effect: null,
  excluded: ['DEAF', 'KEEN_HEARING'],
  type: ["Negative"],
};

export const HeartyAppetiteTrait: Trait = {
  id: 'HEARTY_APPETITE',
  name: 'traits.negative.heartyAppetite.title',
  description: 'traits.positive.heartyAppetite.description',
  icon: 'negative/TraitHeartyAppetite.png',
  points: +4,
  effect: null,
  excluded: ['LIGHT_EATER'],
  type: ["Negative"],
};

export const FearOfBloodTrait: Trait = {
  id: 'FEAR_OF_BLOOD',
  name: 'traits.negative.fearOfBlood.title',
  description: 'traits.positive.fearOfBlood.description',
  icon: 'negative/TraitHemophobic.png',
  points: +5,
  effect: null,
  excluded: ['DESENSITIZED'],
  type: ["Negative"],
};

export const HighThirstTrait: Trait = {
  id: 'HIGH_THIRST',
  name: 'traits.negative.highThirst.title',
  description: 'traits.positive.highThirst.description',
  icon: 'negative/TraitHighThirst.png',
  points: +6,
  effect: null,
  excluded: ['LOW_THIRST'],
  type: ["Negative"],
};

export const IlliterateTrait: Trait = {
  id: 'ILLITERATE',
  name: 'traits.negative.illiterate.title',
  description: 'traits.positive.illiterate.description',
  icon: 'negative/TraitIlliterate.png',
  points: +8,
  effect: null,
  excluded: ['FAST_READER', 'SLOW_READER'],
  type: ["Negative"],
};

export const OutOfShapeTrait: Trait = {
  id: 'OUT_OF_SHAPE',
  name: 'traits.negative.outOfShape.title',
  description: 'traits.positive.outOfShape.description',
  icon: 'negative/TraitOutOfShape.png',
  points: +6,
  effect: null,
  excluded: ['ATHLETIC', 'FIT', 'UNFIT'],
  type: ["Negative"],
};

export const ObeseTrait: Trait = {
  id: 'OBESE',
  name: 'traits.negative.obese.title',
  description: 'traits.positive.obese.description',
  icon: 'negative/TraitObese.png',
  points: +10,
  effect: null,
  excluded: ['ATHLETIC', 'FIT', 'OUT_OF_SHAPE', 'OVERWEIGHT', 'UNDERWEIGHT', 'VERY_UNDERWEIGHT'],
  type: ["Negative"],
};

export const OverWeightTrait: Trait = {
  id: 'OVERWEIGHT',
  name: 'traits.negative.overweight.title',
  description: 'traits.positive.overweight.description',
  icon: 'negative/TraitOverweight.png',
  points: +6,
  effect: null,
  excluded: ['ATHLETIC', 'FIT', 'OUT_OF_SHAPE', 'OBESE', 'UNDERWEIGHT', 'VERY_UNDERWEIGHT'],
  type: ["Negative"],
};

export const PacifistTrait: Trait = {
  id: 'PACIFIST',
  name: 'traits.negative.pacifist.title',
  description: 'traits.positive.pacifist.description',
  icon: 'negative/TraitPacifist.png',
  points: +4,
  effect: null,
  excluded: [],
  type: ["Negative"],
};

export const ProneToIllnessTrait: Trait = {
  id: 'PRONE_TO_ILLNESS',
  name: 'traits.negative.proneToIllness.title',
  description: 'traits.positive.proneToIlleness.description',
  icon: 'negative/TraitHypochondriac.png',
  points: +4,
  effect: null,
  excluded: ['RESILIENT'],
  type: ["Negative"],
};

export const RestlessSleeperTrait: Trait = {
  id: 'RESTLESS_SLEEPER',
  name: 'traits.negative.restlessSleeper.title',
  description: 'traits.positive.restlessSleeper.description',
  icon: 'negative/TraitRestlessSleeper.png',
  points: +6,
  effect: null,
  excluded: [],
  type: ["Negative"],
};

export const ShortSightedTrait: Trait = {
  id: 'SHORT_SIGHTED',
  name: 'traits.negative.shortSighted.title',
  description: 'traits.positive.shortSighted.description',
  icon: 'negative/TraitShortSighted.png',
  points: +2,
  effect: null,
  excluded: ['EAGLE_EYED'],
  type: ["Negative"],
};

export const SleepyheadTrait: Trait = {
  id: 'SLEEPYHEAD',
  name: 'traits.negative.sleepyhead.title',
  description: 'traits.positive.sleepyhead.description',
  icon: 'negative/TraitSleepyhead.png',
  points: +4,
  effect: null,
  excluded: ['WAKEFUL'],
  type: ["Negative"],
};

export const SmokerTrait: Trait = {
  id: 'SMOKER',
  name: 'traits.negative.smoker.title',
  description: 'traits.positive.smoker.description',
  icon: 'negative/TraitSmoker.png',
  points: +4,
  effect: null,
  excluded: [],
  type: ["Negative"],
};

export const SlowHealerTrait: Trait = {
  id: 'SLOW_HEALER',
  name: 'traits.negative.slowHealer.title',
  description: 'traits.positive.slowHealer.description',
  icon: 'negative/TraitSlowHealer.png',
  points: +6,
  effect: null,
  excluded: ['FAST_HEALER'],
  type: ["Negative"],
};

export const SlowLearnerTrait: Trait = {
  id: 'SLOW_LEARNER',
  name: 'traits.negative.slowLearner.title',
  description: 'traits.positive.slowLearner.description',
  icon: 'negative/TraitSlowLearner.png',
  points: +6,
  effect: null,
  excluded: ['FAST_LEARNER'],
  type: ["Negative"],
};

export const SlowReaderTrait: Trait = {
  id: 'SLOW_READER',
  name: 'traits.negative.slowReader.title',
  description: 'traits.positive.slowReader.description',
  icon: 'negative/TraitSlowReader.png',
  points: +2,
  effect: null,
  excluded: ['FAST_READER', 'ILLITERATE'],
  type: ["Negative"],
};

export const SundayDriverTrait: Trait = {
  id: 'SUNDAY_DRIVER',
  name: 'traits.negative.sundayDriver.title',
  description: 'traits.positive.sundayDriver.description',
  icon: 'negative/TraitSundayDriver.png',
  points: +1,
  effect: null,
  excluded: ['SPEED_DEMON'],
  type: ["Negative"],
};

export const ThinSkinnedTrait: Trait = {
  id: 'THIN_SKINNED',
  name: 'traits.negative.thinSkinned.title',
  description: 'traits.positive.thinSkinned.description',
  icon: 'negative/TraitThinSkinned.png',
  points: +8,
  effect: null,
  excluded: ['THICK_SKINNED'],
  type: ["Negative"],
};

export const UnderweightTrait: Trait = {
  id: 'UNDERWEIGHT',
  name: 'traits.negative.underweight.title',
  description: 'traits.positive.underweight.description',
  icon: 'negative/TraitUnderweight.png',
  points: +6,
  effect: null,
  excluded: ['OBESE', 'OVERWEIGHT', 'VERY_UNDERWEIGHT', 'HEARTY_APPETITE'],
  type: ["Negative"],
};

export const UnfitTrait: Trait = {
  id: 'UNFIT',
  name: 'traits.negative.unfit.title',
  description: 'traits.positive.unfit.description',
  icon: 'negative/TraitUnfit.png',
  points: +10,
  effect: null,
  excluded: ['ATHLETIC', 'FIT', 'OUT_OF_SHAPE'],
  type: ["Negative"],
};

export const UnluckyTrait: Trait = {
  id: 'UNLUCKY',
  name: 'traits.negative.unlucky.title',
  description: 'traits.positive.unlucky.description',
  icon: 'negative/TraitUnlucky.png',
  points: +4,
  effect: null,
  excluded: ['LUCKY'],
  type: ["Negative"],
};

export const VeryUnderweightTrait: Trait = {
  id: 'VERY_UNDERWEIGHT',
  name: 'traits.negative.veryUnderweight.title',
  description: 'traits.positive.veryUnderweight.description',
  icon: 'negative/TraitVeryUnderweight.png',
  points: +10,
  effect: null,
  excluded: ['ATHLETIC', 'OBESE', 'OVERWEIGHT', 'UNDERWEIGHT'],
  type: ["Negative"],
};

export const WeakTrait: Trait = {
  id: 'WEAK',
  name: 'traits.negative.weak.title',
  description: 'traits.positive.weak.description',
  icon: 'negative/TraitWeak.png',
  points: +10,
  effect: null,
  excluded: ['FEEBLE', 'STRONG', 'STOUT'],
  type: ["Negative"],
};

export const WeakStomachTrait: Trait = {
  id: 'WEAK_STOMACH',
  name: 'traits.negative.weakStomach.title',
  description: 'traits.positive.weakStomach.description',
  icon: 'negative/TraitWeakStomach.png',
  points: +3,
  effect: null,
  excluded: ['IRON_GUT'],
  type: ["Negative"],
};

export const NegativeTraits: Trait[] = [
  AgoraphobicTrait,
  AllThumbsTrait,
  AsthmaticTrait,
  ClaustrophobicTrait,
  ClumsyTrait,
  ConspicuousTrait,
  CowardlyTrait,
  DeafTrait,
  DisorganizedTrait,
  EmaciatedTrait,
  FeebleTrait,
  HardOfHearingTrait,
  HeartyAppetiteTrait,
  FearOfBloodTrait,
  HighThirstTrait,
  IlliterateTrait,
  OutOfShapeTrait,
  ObeseTrait,
  OverWeightTrait,
  PacifistTrait,
  ProneToIllnessTrait,
  RestlessSleeperTrait,
  ShortSightedTrait,
  SleepyheadTrait,
  SmokerTrait,
  SlowHealerTrait,
  SlowLearnerTrait,
  SlowReaderTrait,
  SundayDriverTrait,
  ThinSkinnedTrait,
  UnderweightTrait,
  UnfitTrait,
  UnluckyTrait,
  VeryUnderweightTrait,
  WeakTrait,
  WeakStomachTrait,
];
