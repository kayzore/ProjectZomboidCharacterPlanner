import { Occupation } from "@app/types/occupation.type";

export interface Character {
  /**
   * Gets the character id.
   */
  id: string,
  /**
   * Gets the character occupation.
   */
  occupation: Occupation | null,
}
