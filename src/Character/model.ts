import { Trait } from "@trait/model";
import { Skill } from "@skill/model";

export type Character = {
	traits: Trait[],
	skills: Skill[],
};
