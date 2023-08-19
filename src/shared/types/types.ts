export interface ElementParams {
    tag: string;
    classNames: string[];
    textContent?: string;
    alt?: string;
    urlImage?: string;
    href?: string;
    target?: string;
    type?: string;
    value?: string;
    placeholder?: string;
}
export const gitHubLink: string = 'https://github.com/Sandrainporto';
export const schoolLink: string = 'https://rs.school/js/';

export interface levelsParam {
    id: string;
    task: string;
    roomItems: string;
    solution: string[] | string;
    background: string;
}
