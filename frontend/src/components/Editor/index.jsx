import { useContext, useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

import { $getRoot, $createParagraphNode } from 'lexical';

import { $generateHtmlFromNodes } from '@lexical/html';
import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';


import { EQUATION_TRANSFORMER } from './nodes/equation-transformer';
import { EquationPlugin } from './plugins/EquationPlugin';
import ToolbarPlugin from './plugins/ToolbarPlugin'; // optional toolbar if you have one

import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { editorConfig } from './utils/config';

import { EditorContext } from './EditorContext';


import './styles.css'; // your styling

export default function Editor({ field = {}, placeholder = 'Enter text here' }) {
    const key = Object.keys(field)[0];

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <EditorInner field={key} placeholder={placeholder} />
        </LexicalComposer>
    );
}





function EditorInner({ field, placeholder }) {
    const [editor] = useLexicalComposerContext();
    const [editorContent, setEditorContent] = useState('');
    const { onFormChange } = useContext(EditorContext)


    const onChange = (editorState) => {
        editorState.read(() => {
            const htmlString = $generateHtmlFromNodes(editor);
            setEditorContent(htmlString);
            onFormChange(field, getMarkdown())
        });
    };

    const getMarkdown = () => {
        return editor.getEditorState().read(() => {
            return $convertToMarkdownString([
                ...TRANSFORMERS,
                EQUATION_TRANSFORMER,
            ]);
        }).trim();
    }

    return (
        <div className="app-container">
            <div className="editor-container">
                <ToolbarPlugin />
                <div className="editor-wrapper">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        placeholder={
                            <div className="editor-placeholder">
                                {placeholder}
                            </div>
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                </div>
                <HistoryPlugin />
                <EquationPlugin />
                <OnChangePlugin onChange={onChange} />
            </div>
        </div>
    );
}









//     editor.update(() => {
//         const root = $getRoot();
//         root.clear();
//         root.append($createParagraphNode()); // ✅ keeps the tree valid
//     });









import { INLINE_EQUATION_TRANSFORMER } from './nodes/equation-transformer';

export function ExportMarkdownButton() {
    const [editor] = useLexicalComposerContext();

    const handleExport = () => {
        const allTransformers = [
            ...TRANSFORMERS,
            EQUATION_TRANSFORMER,
            INLINE_EQUATION_TRANSFORMER,
        ];

        const markdown = editor.getEditorState().read(() => {
            return $convertToMarkdownString(allTransformers);
        });

        // Now `markdown` is a string that includes all your paragraphs,
        // headings, lists, _and_ both block $$…$$ and inline $…$ equations.
        console.log("Markdown:", markdown);
        // e.g. display it or send it to your server:
        // alert(markdown);
    };

    return <button onClick={handleExport}>Get Markdown + LaTeX</button>;
}







{/* <button onClick={handleSubmit} className="submit-button">
                Submit Suggestion
            </button>

            <h2>Submitted Suggestions (Markdown)</h2>

            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>
                        <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                        >
                            {suggestion}
                        </ReactMarkdown>
                    </li>
                ))}
            </ul> */}