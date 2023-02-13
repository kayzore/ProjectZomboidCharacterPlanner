import { Character } from "./model";
import { Trait, TraitEffect } from "@trait/model";

export const getNewCharacter = (): Character => {
	return {
		traits: [],
		skills: [],
	};
};

export const getTraitEffectBySkillName = (skillName: string, traits: Trait[]): TraitEffect | null => {
	let foundedTraitEffect: TraitEffect | null = null;

	traits.forEach((trait) => {
		if (foundedTraitEffect) {
			return;
		}

		const traitEffect = trait.effects.filter((effect) => effect.skill === skillName)[0] || null;

		if (traitEffect) {
			foundedTraitEffect = traitEffect;
		}
	});

	return foundedTraitEffect;
};
