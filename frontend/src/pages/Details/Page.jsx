import styles from './Page.module.scss'
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';

const placeholder = `
# [Section Title Placeholder]

_This section is currently under development._

---

## Overview

Content for **[Section Title Placeholder]** will be added soon. This page is reserved as a placeholder for upcoming curriculum material, including relevant headings, body text, examples, and references.

---

## Planned Topics

- Topic 1: To be defined
- Topic 2: To be defined
- Topic 3: To be defined

---

## Contributing

If you would like to contribute to this section, please submit your suggestions or drafts through the appropriate channels.

_Last updated: [Insert Date]_

---
`

export default function Page({ children, text }) {
    return (
        <div className={styles.page}>
            <div className={styles.markdown}>
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}>
                    {text === "\n" ? placeholder : text}
                </ReactMarkdown>
            </div>
            {children}
        </div>
    )
}
