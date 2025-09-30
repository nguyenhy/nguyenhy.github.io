export interface WebPlaygroundChoicesCase {
    name: string;
    css?: string;
    js?: string;
    html?: string;
}

export interface WebPlaygroundChoicesProps {
    cases: WebPlaygroundChoicesCase[];
    title?: string;
    selected?: number;
    css?: string;
    js?: string;
    html?: string;
}
