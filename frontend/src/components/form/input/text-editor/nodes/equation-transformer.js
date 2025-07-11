import { $isEquationNode, EquationNode } from './EquationNode';

export const INLINE_EQUATION_TRANSFORMER = {
	dependencies: [EquationNode],
	type: 'text-match',
	trigger: '\\',  // Trigger when user types \
	regExp: /\\([^\\]+)\\/,  // Match \ ... \
	replace: (_textNode, match) => {
		console.log('[Transformer fired] match:', match);
		if (!match || !match[1]) return null;
		const latex = match[1].trim();
		console.log('[Transformer] Creating EquationNode:', latex);
		const node = new EquationNode(latex);
		node.__inline = true;
	},
	export: (node) => {
		if (!$isEquationNode(node)) return null;
		return node.__inline ? `\\${node.__equation}\\` : null;
	}
};

export const BLOCK_EQUATION_TRANSFORMER = {
	dependencies: [EquationNode],
	type: 'text-match',
	trigger: '\\',  // Trigger when user types \
	regExp: /\\\[([^\\]+)\\\]/,  // Match \[ ... \]
	replace: (_textNode, match) => {
		console.log('Block Trigger fired:', match);
		if (!match || !match[1]) {
			console.warn('No block match:', match);
			return null;
		}
		const latex = match[1].trim();
		console.log('Block LaTeX:', latex);
		const node = new EquationNode(latex);
		node.__inline = false;
		return node;
	},
	export: (node) => {
		if (!$isEquationNode(node)) return null;
		return !node.__inline ? `\\[${node.__equation}\\]` : null;
	}
};
