import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function Equation({ equation }) {
    const html = katex.renderToString(equation, {
        throwOnError: false,
    });


    return <span dangerouslySetInnerHTML={{ __html: html }} />;
}