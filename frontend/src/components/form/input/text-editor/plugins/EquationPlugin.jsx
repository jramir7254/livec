import { TRANSFORMERS } from '@lexical/markdown';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';

import { EQUATION_TRANSFORMER } from '../nodes/equation-transformer';


export function EquationPlugin() {
    return (
        <MarkdownShortcutPlugin transformers={[...TRANSFORMERS, EQUATION_TRANSFORMER]} />
    );
}