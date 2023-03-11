export type HobbyType = 'Occuptation' | 'Hobby';

export interface HobbyEffect {
  description: string;
}

export interface Hobby {
  name: string;
  description: string;
  icon: string;
  type: HobbyType;
  points: number;
  effects: HobbyEffect[];
}
