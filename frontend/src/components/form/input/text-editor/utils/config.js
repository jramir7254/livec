import { useEffect, useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { $getRoot, $createParagraphNode } from 'lexical';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { $generateHtmlFromNodes } from '@lexical/html';
import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';
import { LinkNode, AutoLinkNode } from '@lexical/link';
import { CodeNode } from '@lexical/code';

import { EquationNode } from '../nodes/EquationNode'; 
import { EQUATION_TRANSFORMER } from '../nodes/equation-transformer';
import { EquationPlugin } from '../plugins/EquationPlugin';
import ToolbarPlugin from '../plugins/ToolbarPlugin'; // optional toolbar if you have one




export const editorConfig = {
        namespace: 'SuggestionEditor',
        theme: {
            paragraph: 'editor-paragraph',
        },
        nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, EquationNode, LinkNode, AutoLinkNode],
        onError(error) {
            throw error;
        },
    };
