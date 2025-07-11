import { TRANSFORMERS } from '@lexical/markdown';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';

import { INLINE_EQUATION_TRANSFORMER, BLOCK_EQUATION_TRANSFORMER } from '../nodes/equation-transformer';


export function EquationPlugin() {
    return (
        <MarkdownShortcutPlugin transformers={[...TRANSFORMERS, INLINE_EQUATION_TRANSFORMER, BLOCK_EQUATION_TRANSFORMER]} />
    );
}