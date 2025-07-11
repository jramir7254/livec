// ToolbarPlugin.jsx
import React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, $createParagraphNode, $getRoot, FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND } from 'lexical';
import { Bold, Strike, Italic, Underline, Left, Center, Right, Justify, Equations } from '../../../../Icons';
import { EquationNode } from '../nodes/EquationNode'
import { $createListNode, INSERT_ORDERED_LIST_COMMAND } from '@lexical/list';
import { INSERT_TABLE_COMMAND } from '@lexical/table';

export default function ToolbarPlugin() {
	const [editor] = useLexicalComposerContext();

	const formatText = (format) => {
		editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
	};

	const formatElement = (format) => {
		editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format)
	}

	const insertList = () => {
		editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, 'bullet');

	}


	const insertTable = () => {
		editor.dispatchCommand(INSERT_TABLE_COMMAND, {
			columns: 3,
			rows: 2
		});
	}
	const insertEquation = () => {
		const latex = prompt('Enter LaTeX:', 'E = mc^2');
		if (latex) {
			
			editor.update(() => {
				const selection = $getSelection();

				const equationNode = new EquationNode(latex);

				if ($isRangeSelection(selection)) {
					// Insert at cursor — for inline usage
					selection.insertNodes([equationNode]);
				} else {
					// Fallback: add to root wrapped in a paragraph
					const root = $getRoot();
					const paragraph = $createParagraphNode();
					paragraph.append(equationNode);
					root.append(paragraph);
				}
			});
		}
	};

	return (
		<div className="toolbar">
			<div className='format--style'>
				<button onClick={() => formatText('bold')}>{<Bold />}</button>
				<button onClick={() => formatText('italic')}>{<Italic />}</button>
				<button onClick={() => formatText('underline')}>{<Underline />}</button>
			</div>

			<div className='format--align'>
				<button onClick={() => formatElement('left')}>{<Left />}</button>
				<button onClick={() => formatElement('center')}>{<Center />}</button>
				<button onClick={() => formatElement('right')}>{<Right />}</button>
				<button onClick={() => formatElement('justify')}>{<Justify />}</button>
			</div>

			<div className='format--special'>

				<button onClick={insertEquation}>{<Equations />}</button>
				<button onClick={insertList}>{<Equations />}</button>
				<button onClick={insertTable}>{<Equations />}</button>
			</div>

		</div>
	);
}
