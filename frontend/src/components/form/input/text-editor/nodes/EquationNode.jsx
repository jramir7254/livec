import { DecoratorNode } from 'lexical';
import Equation from './Equation';

export class EquationNode extends DecoratorNode {
	__equation;

	static getType() {
		return 'equation';
	}

	getType() {
		return 'equation';
	}

	static clone(node) {
		return new EquationNode(node.__equation, node.__key);
	}

	constructor(equation, key) {
		super(key);
		this.__equation = equation;
	}

	createDOM() {
		const span = document.createElement('span');
		span.className = 'equation-node';
		return span;
	}

	updateDOM() {
		return false;
	}

	decorate() {
		return <Equation equation={this.__equation} nodeKey={this.getKey()} />;
	}

	exportDOM() {
		const span = document.createElement('span');
		span.setAttribute('equation', this.__equation);
		span.textContent = `${this.__equation}`;
		return span
	}

	exportJSON() {
		return {
			type: this.getType(),
			version: 1,
			equation: this.__equation,
		};
	}


	static importJSON(serializedNode) {
		return new EquationNode(serializedNode.equation);
	}
}


export function $isEquationNode(node) {
	return node instanceof EquationNode;
}