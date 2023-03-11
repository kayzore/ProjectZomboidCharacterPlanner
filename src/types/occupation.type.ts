export interface Occupation {
  /**
   * Gets the occupation id.
   */
  id: string,

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
  skills?: [],

  /**
   * Gets the occupation traits.
   */
  traits?: [],
}
