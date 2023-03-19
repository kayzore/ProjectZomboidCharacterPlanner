export interface Trait {
  /**
   * Gets the trait id.
   */
  id: string;

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
   * Gets the mutually exclusive traits.
   */
  excluded: string[] | null;

  /**
   * Gets the trait points.
   */
  points: number;

  /**
   * Gets the trait additional effects.
   */
  effect: object[] | null; // TODO: type
}
