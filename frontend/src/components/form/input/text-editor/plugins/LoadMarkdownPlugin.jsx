import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import { $convertFromMarkdownString, TRANSFORMERS } from '@lexical/markdown';
import { INLINE_EQUATION_TRANSFORMER, BLOCK_EQUATION_TRANSFORMER } from '../nodes/equation-transformer';

export default function LoadMarkdownPlugin({ mdText }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        editor.update(() => {
            $convertFromMarkdownString(mdText, [...TRANSFORMERS, INLINE_EQUATION_TRANSFORMER, BLOCK_EQUATION_TRANSFORMER]);
        });
    }, [editor, mdText]);

    return null;
}
