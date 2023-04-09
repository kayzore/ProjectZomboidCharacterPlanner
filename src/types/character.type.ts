import { Occupation } from "@app/types/occupation.type";
import { Skill } from "@app/types/skill.type";
import { Trait } from "@app/types/trait.type";

export interface Character {
  /**
   * Gets the character id.
   */
  id: string,
  /**
   * Gets the character occupation.
   */
  occupation: Occupation | null,
  /**
   * Gets the character skills.
   */
  skills: Skill[],
  /**
   * Gets the character traits.
   */
  traits: Trait[],
}
