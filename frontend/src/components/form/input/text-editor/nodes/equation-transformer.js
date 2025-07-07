import { $isEquationNode, EquationNode } from './EquationNode';
// equation-transformer.js

export const EQUATION_TRANSFORMER = {
	// ① required since 0.8
	dependencies: [EquationNode],

	// ② must be 'text-match' for regExp + replace style
	type: 'text-match',

	// ③ only run when user types/pastes '$'
	trigger: '$',

	// match either $$block$$ or $inline$
	// (you can split into two transformers if you want better control)
	regExp: /\$\$([^$]+)\$\$|\$([^$]+)\$/g,

	replace: (_textNode, match) => {
		// match[1] is block, match[2] is inline
		const content = (match[1] || match[2]).trim();
		const node = new EquationNode(content);
		// if you care about inline vs block you can flag it:
		node.__inline = !match[1];
		return node;
	},

	export: (node) => {
		if (!$isEquationNode(node)) {
			return null;
		}
		// use block if not flagged inline
		if (!node.__inline) {
			return `$$${node.__equation}$$`;
		} else {
			return `$${node.__equation}$`;
		}
	},
};



// inline-equation-transformer.js

export const INLINE_EQUATION_TRANSFORMER = {
	export: (node) => {
		if (!$isEquationNode(node)) return null;
		// Only export inline if it's marked inline
		return node.__inline
			? `$${node.__equation}$`
			: null;
	},
	type: 'inline-equation',
	format: ['equation'],
	regExp: /\$(.+?)\$/g,
	replace: (_textNode, match) => {
		const latex = match[1].trim();
		const node = new EquationNode(latex);
		node.__inline = true; // flag so export knows
		return node;
	},
};
