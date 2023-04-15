import { Skill } from "@app/types/skill.type";
import { HobbyTrait, Trait } from "@app/types/trait.type";

export type OccupationId =
  | 'UNEMPLOYED'
  | 'FIRE_OFFICER'
  | 'POLICE_OFFICER'
  | 'PARK_RANGER'
  | 'CONSTRUCTION_WORKER'
  | 'SECURITY_GUARD'
  | 'CARPENTER'
  | 'BURGLAR'
  | 'CHEF'
  | 'REPAIRMAN'
  | 'FARMER'
  | 'FISHERMAN'
  | 'DOCTOR'
  | 'VETERAN'
  | 'NURSE'
  | 'LUMBERJACK'
  | 'FITNESS_INSTRUCTOR'
  | 'BURGER_FLIPPER'
  | 'ELECTRICIAN'
  | 'ENGINEER'
  | 'METALWORKER'
  | 'MECHANIC';

export interface Occupation {
  /**
   * Gets the occupation id.
   */
  id: OccupationId,

  /**
   * Gets the occupation name.
   */
  name: string,

  /**
   * Gets the occupation description.
   */
  description: string,

  /**
   * Gets the occupation icon.
   */
  icon: string,

  /**
   * Gets the starting points amount when selecting this occupation.
   */
  startingPoints: number,

  /**
   * Gets the occupation skills.
   */
  skills: Skill[],

  /**
   * Gets the occupation traits.
   */
  traits: Trait[] | HobbyTrait[],
}
