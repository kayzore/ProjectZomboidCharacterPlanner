export interface Occupation {
  id: string,
  name: string,
  description: string,
  icon: string,
  startingPoints: number,
  skills?: [],
  traits?: [],
}

export const Occupations: Occupation[] = [
  {
    id: 'UNEMPLOYED',
    name: 'occupations.uneployed.title',
    description: 'occupations.unemployed.description',
    icon: '',
    startingPoints: 8
  },
  {
    id: 'FIRE_OFFICER',
    name: 'occupations.fireOfficer.title',
    description: 'occupations.fireOfficer.description',
    icon: 'Fire_Officer.png',
    startingPoints: 0
  },
  {
    id: 'POLICE_OFFICER',
    name: 'occupations.policeOfficer.title',
    description: 'occupations.policeOfficer.description',
    icon: 'Police_Officer.png',
    startingPoints: -4
  },
  {
    id: 'PARK_RANGER',
    name: 'occupations.parkRanger.title',
    description: 'occupations.parkRanger.description',
    icon: 'Park_Ranger.png',
    startingPoints: -4
  },
  {
    id: 'CONSTRUCTION_WORKER',
    name: 'occupations.constructionWorker.title',
    description: 'occupations.constructionWorker.description',
    icon: 'Construction_Worker.png',
    startingPoints: -2
  },
  {
    id: 'SECURITY_GUARD',
    name: 'occupations.securityGuard.title',
    description: 'occupations.securityGuard.description',
    icon: 'Security_Guard.png',
    startingPoints: -2
  },
  {
    id: 'CARPENTER',
    name: 'occupations.carpenter.title',
    description: 'occupations.carpenter.description',
    icon: 'Carpenter.png',
    startingPoints: 2
  },
  {
    id: 'BURGLAR',
    name: 'occupations.burglar.title',
    description: 'occupations.burglar.description',
    icon: 'Burglar.png',
    startingPoints: -6
  },
  {
    id: 'CHEF',
    name: 'occupations.chef.title',
    description: 'occupations.chef.description',
    icon: 'Chef.png',
    startingPoints: -4
  },
  {
    id: 'REPAIRMAN',
    name: 'occupations.repairman.title',
    description: 'occupations.repairman.description',
    icon: 'Repairman.png',
    startingPoints: -4
  },
  {
    id: 'FARMER',
    name: 'occupations.farmer.title',
    description: 'occupations.farmer.description',
    icon: 'Farmer.png',
    startingPoints: 2
  },
  {
    id: 'FISHERMAN',
    name: 'occupations.fisherman.title',
    description: 'occupations.fisherman.description',
    icon: 'Fisherman.png',
    startingPoints: -2
  },
  {
    id: 'DOCTOR',
    name: 'occupations.doctor.title',
    description: 'occupations.doctor.description',
    icon: 'Doctor.png',
    startingPoints: 2
  },
  {
    id: 'VETERAN',
    name: 'occupations.veteran.title',
    description: 'occupations.veteran.description',
    icon: 'Veteran.png',
    startingPoints: -8
  },
  {
    id: 'NURSE',
    name: 'occupations.nurse.title',
    description: 'occupations.nurse.description',
    icon: 'Nurse.png',
    startingPoints: 2
  },
  {
    id: 'LUMBERJACK',
    name: 'occupations.lumberjack.title',
    description: 'occupations.lumberjack.description',
    icon: 'Lumberjack.png',
    startingPoints: 0
  },
  {
    id: 'FITNESS_INSTRUCTOR',
    name: 'occupations.fitnessInstructor.title',
    description: 'occupations.fitnessInstructor.description',
    icon: 'FitnessInstructor.png',
    startingPoints: -6
  },
  {
    id: 'BURGER_FLIPPER',
    name: 'occupations.burgerFlipper.title',
    description: 'occupations.burgerFlipper.description',
    icon: 'BurgerFlipper.png',
    startingPoints: 2
  },
  {
    id: 'ELECTRICIAN',
    name: 'occupations.electrician.title',
    description: 'occupations.electrician.description',
    icon: 'Electrician.png',
    startingPoints: -4
  },
  {
    id: 'ENGINEER',
    name: 'occupations.engineer.title',
    description: 'occupations.engineer.description',
    icon: 'Engineer.png',
    startingPoints: -4
  },
  {
    id: 'METALWORKER',
    name: 'occupations.metalworker.title',
    description: 'occupations.metalworker.description',
    icon: 'Metalworker.png',
    startingPoints: -6
  },
  {
    id: 'MECHANIC',
    name: 'occupations.mechanic.title',
    description: 'occupations.mechanic.description',
    icon: 'Mechanic.png',
    startingPoints: -4
  },
];
