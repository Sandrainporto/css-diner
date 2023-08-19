import 'highlight.js/styles/base16/gruvbox-dark-soft.css';
import hljs from 'highlight.js/lib/core';

export function getHighlightedTags(str: string): string {
    hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
    return hljs.highlight(str, { language: 'xml' }).value;
}

export function getHighlightedClasses(str: string): string {
    hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
    return hljs.highlight(str, { language: 'css' }).value;
}
