
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';

import { LinkNode, AutoLinkNode } from '@lexical/link';
import { CodeNode } from '@lexical/code';
import { TableNode, TableCellNode, TableRowNode } from '@lexical/table';

import { EquationNode } from '../nodes/EquationNode'; 





export const editorConfig = {
        namespace: 'SuggestionEditor',
        theme: {
            paragraph: 'editor-paragraph',
        },
        nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, EquationNode, LinkNode, AutoLinkNode, TableNode, TableCellNode, TableRowNode],
        onError(error) {
            throw error;
        },
    };
