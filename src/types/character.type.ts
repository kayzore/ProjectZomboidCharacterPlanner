import { Occupation } from "@app/types/occupation.type";
import { Skill } from "@app/types/skill.type";

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
   * Gets the character occupation.
   */
  skills: Skill[],
}
