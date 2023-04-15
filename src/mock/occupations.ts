import { Occupation } from "@app/types";
import {
  AimingSkill,
  AxeSkill,
  CarpentrySkill,
  CookingSkill,
  ElectricalSkill,
  FarmingSkill,
  FirstAidSkill,
  FishingSkill,
  FitnessSkill,
  ForagingSkill,
  LightFootedSkill,
  MaintenanceSkill,
  MechanicsSkill,
  MetalWorkingSkill,
  NimbleSkill,
  ReloadingSkill,
  ShortBladeSkill,
  ShortBluntSkill,
  SneakingSkill,
  SprintingSkill,
  StrengthSkill,
  TrappingSkill
} from "@mock/skills";
import {
  AmateurMechanicOccupationTrait,
  AxeManTrait,
  BurglarTrait,
  CookOccupationTrait,
  DesensitizedTrait,
  NightOwlTrait,
  NutritionistTrait
} from "@mock/hobby-traits";

export const UnemployedOccupation: Occupation = {
  id: 'UNEMPLOYED',
  name: 'occupations.unemployed.title',
  description: 'occupations.unemployed.description',
  icon: '',
  startingPoints: 8,
  skills: [],
  traits: [],
};

export const FireOfficerOccupation: Occupation = {
  id: 'FIRE_OFFICER',
  name: 'occupations.fireOfficer.title',
  description: 'occupations.fireOfficer.description',
  icon: 'Fire_Officer.png',
  startingPoints: 0,
  skills: [
    { ...AxeSkill },
    { ...FitnessSkill, startingLevel: 6 },
    { ...SprintingSkill, multiplier: 1.75, startingLevel: 1 },
    { ...StrengthSkill, startingLevel: 6 },
  ],
  traits: [],
};

export const PoliceOfficerOccupation: Occupation = {
  id: 'POLICE_OFFICER',
  name: 'occupations.policeOfficer.title',
  description: 'occupations.policeOfficer.description',
  icon: 'Police_Officer.png',
  startingPoints: -4,
  skills: [
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...ReloadingSkill, multiplier: 2, startingLevel: 2 },
    { ...AimingSkill, multiplier: 2.25, startingLevel: 3 },
    { ...NimbleSkill, multiplier: 1.75, startingLevel: 1 },
  ],
  traits: [],
};

export const ParkRangerOccupation: Occupation = {
  id: 'PARK_RANGER',
  name: 'occupations.parkRanger.title',
  description: 'occupations.parkRanger.description',
  icon: 'Park_Ranger.png',
  startingPoints: -4,
  skills: [
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...AxeSkill, multiplier: 1.75, startingLevel: 1 },
    { ...CarpentrySkill, multiplier: 1.75, startingLevel: 1 },
    { ...TrappingSkill, multiplier: 2, startingLevel: 2 },
    { ...ForagingSkill, multiplier: 2, startingLevel: 2 },
  ],
  traits: [],
};

export const ConstructionWorkerOccupation: Occupation = {
  id: 'CONSTRUCTION_WORKER',
  name: 'occupations.constructionWorker.title',
  description: 'occupations.constructionWorker.description',
  icon: 'Construction_Worker.png',
  startingPoints: -2,
  skills: [
    { ...ShortBluntSkill, multiplier: 2.25, startingLevel: 3 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...CarpentrySkill, multiplier: 1.75, startingLevel: 1 },
  ],
  traits: [],
};

export const SecurityGuardOccupation: Occupation = {
  id: 'SECURITY_GUARD',
  name: 'occupations.securityGuard.title',
  description: 'occupations.securityGuard.description',
  icon: 'Security_Guard.png',
  startingPoints: -2,
  skills: [
    { ...SprintingSkill, multiplier: 2, startingLevel: 2 },
    { ...LightFootedSkill, multiplier: 1.75, startingLevel: 1 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
  ],
  traits: [NightOwlTrait],
};

export const CarpenterOccupation: Occupation = {
  id: 'CARPENTER',
  name: 'occupations.carpenter.title',
  description: 'occupations.carpenter.description',
  icon: 'Carpenter.png',
  startingPoints: 2,
  skills: [
    { ...ShortBluntSkill, multiplier: 1.75, startingLevel: 1 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...CarpentrySkill, multiplier: 2.25, startingLevel: 3 },
  ],
  traits: [],
};

export const BurglarOccupation: Occupation = {
  id: 'BURGLAR',
  name: 'occupations.burglar.title',
  description: 'occupations.burglar.description',
  icon: 'Burglar.png',
  startingPoints: -6,
  skills: [
    { ...LightFootedSkill, multiplier: 2, startingLevel: 2 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...SneakingSkill, multiplier: 2, startingLevel: 2 },
    { ...NimbleSkill, multiplier: 2, startingLevel: 2 },
  ],
  traits: [BurglarTrait],
};

export const ChefOccupation: Occupation = {
  id: 'CHEF',
  name: 'occupations.chef.title',
  description: 'occupations.chef.description',
  icon: 'Chef.png',
  startingPoints: -4,
  skills: [
    { ...ShortBladeSkill, multiplier: 1.75, startingLevel: 1 },
    { ...CookingSkill, multiplier: 1.25, startingLevel: 3 },
    { ...MaintenanceSkill, multiplier: 1.75, startingLevel: 1 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
  ],
  traits: [CookOccupationTrait],
};

export const RepairmanOccupation: Occupation = {
  id: 'REPAIRMAN',
  name: 'occupations.repairman.title',
  description: 'occupations.repairman.description',
  icon: 'Repairman.png',
  startingPoints: -4,
  skills: [
    { ...ShortBluntSkill, multiplier: 1.75, startingLevel: 1 },
    { ...MaintenanceSkill, multiplier: 2, startingLevel: 2 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...CarpentrySkill, multiplier: 1.75, startingLevel: 1 },
  ],
  traits: [],
};

export const FarmerOccupation: Occupation = {
  id: 'FARMER',
  name: 'occupations.farmer.title',
  description: 'occupations.farmer.description',
  icon: 'Farmer.png',
  startingPoints: 2,
  skills: [
    { ...FarmingSkill, multiplier: 2.25, startingLevel: 3 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
  ],
  traits: [],
};

export const FishermanOccupation: Occupation = {
  id: 'FISHERMAN',
  name: 'occupations.fisherman.title',
  description: 'occupations.fisherman.description',
  icon: 'Fisherman.png',
  startingPoints: -2,
  skills: [
    { ...FitnessSkill, startingLevel: 4 },
    { ...FishingSkill, startingLevel: 4 },
    { ...StrengthSkill, multiplier: 2.25, startingLevel: 3 },
    { ...ForagingSkill, multiplier: 1.75, startingLevel: 1 },
  ],
  traits: [],
};

export const DoctorOccupation: Occupation = {
  id: 'DOCTOR',
  name: 'occupations.doctor.title',
  description: 'occupations.doctor.description',
  icon: 'Doctor.png',
  startingPoints: 2,
  skills: [
    { ...ShortBladeSkill, multiplier: 1.75, startingLevel: 1 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...FirstAidSkill, multiplier: 2.25, startingLevel: 3 },
  ],
  traits: [],
};

export const VeteranOccupation: Occupation = {
  id: 'VETERAN',
  name: 'occupations.veteran.title',
  description: 'occupations.veteran.description',
  icon: 'Veteran.png',
  startingPoints: -8,
  skills: [
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...ReloadingSkill, multiplier: 2, startingLevel: 2 },
    { ...AimingSkill, multiplier: 2, startingLevel: 2 },
  ],
  traits: [DesensitizedTrait],
};

export const NurseOccupation: Occupation = {
  id: 'NURSE',
  name: 'occupations.nurse.title',
  description: 'occupations.nurse.description',
  icon: 'Nurse.png',
  startingPoints: 2,
  skills: [
    { ...LightFootedSkill, multiplier: 1.75, startingLevel: 1 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...FirstAidSkill, multiplier: 2, startingLevel: 2 },
  ],
  traits: [],
};

export const LumberjackOccupation: Occupation = {
  id: 'LUMBERJACK',
  name: 'occupations.lumberjack.title',
  description: 'occupations.lumberjack.description',
  icon: 'Lumberjack.png',
  startingPoints: 0,
  skills: [
    { ...FitnessSkill, startingLevel: 5 },
    { ...StrengthSkill, startingLevel: 6 },
    { ...AxeSkill, multiplier: 2, startingLevel: 2 },
  ],
  traits: [AxeManTrait],
};

export const FitnessInstructorOccupation: Occupation = {
  id: 'FITNESS_INSTRUCTOR',
  name: 'occupations.fitnessInstructor.title',
  description: 'occupations.fitnessInstructor.description',
  icon: 'FitnessInstructor.png',
  startingPoints: -6,
  skills: [
    { ...SprintingSkill, multiplier: 2, startingLevel: 2 },
    { ...FitnessSkill, startingLevel: 8 },
    { ...StrengthSkill, startingLevel: 4 },
  ],
  traits: [NutritionistTrait],
};

export const BurgerFlipperOccupation: Occupation = {
  id: 'BURGER_FLIPPER',
  name: 'occupations.burgerFlipper.title',
  description: 'occupations.burgerFlipper.description',
  icon: 'BurgerFlipper.png',
  startingPoints: 2,
  skills: [
    { ...ShortBladeSkill, multiplier: 1.75, startingLevel: 1 },
    { ...CookingSkill, multiplier: 2, startingLevel: 2 },
    { ...MaintenanceSkill, multiplier: 1.75, startingLevel: 1 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
  ],
  traits: [CookOccupationTrait],
};

export const ElectricianOccupation: Occupation = {
  id: 'ELECTRICIAN',
  name: 'occupations.electrician.title',
  description: 'occupations.electrician.description',
  icon: 'Electrician.png',
  startingPoints: -4,
  skills: [
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...ElectricalSkill, multiplier: 2.25, startingLevel: 3 },
  ],
  traits: [],
};

export const EngineerOccupation: Occupation = {
  id: 'ENGINEER',
  name: 'occupations.engineer.title',
  description: 'occupations.engineer.description',
  icon: 'Engineer.png',
  startingPoints: -4,
  skills: [
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...CarpentrySkill, multiplier: 1.75, startingLevel: 1 },
    { ...ElectricalSkill, multiplier: 1.75, startingLevel: 1 },
  ],
  traits: [],
};

export const MetalworkerOccupation: Occupation = {
  id: 'METALWORKER',
  name: 'occupations.metalworker.title',
  description: 'occupations.metalworker.description',
  icon: 'Metalworker.png',
  startingPoints: -6,
  skills: [
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...MetalWorkingSkill, multiplier: 2.25, startingLevel: 3 },
  ],
  traits: [],
};

export const MechanicOccupation: Occupation = {
  id: 'MECHANIC',
  name: 'occupations.mechanic.title',
  description: 'occupations.mechanic.description',
  icon: 'Mechanic.png',
  startingPoints: -4,
  skills: [
    { ...ShortBluntSkill, multiplier: 1.75, startingLevel: 1 },
    { ...FitnessSkill, startingLevel: 4 },
    { ...StrengthSkill, startingLevel: 4 },
    { ...MechanicsSkill, multiplier: 2.25, startingLevel: 3 },
  ],
  traits: [AmateurMechanicOccupationTrait],
};

export const Occupations: Occupation[] = [
  UnemployedOccupation,
  FireOfficerOccupation,
  PoliceOfficerOccupation,
  ParkRangerOccupation,
  ConstructionWorkerOccupation,
  SecurityGuardOccupation,
  CarpenterOccupation,
  BurglarOccupation,
  ChefOccupation,
  RepairmanOccupation,
  FarmerOccupation,
  FishermanOccupation,
  DoctorOccupation,
  VeteranOccupation,
  NurseOccupation,
  LumberjackOccupation,
  FitnessInstructorOccupation,
  BurgerFlipperOccupation,
  ElectricianOccupation,
  EngineerOccupation,
  MetalworkerOccupation,
  MechanicOccupation,
];
