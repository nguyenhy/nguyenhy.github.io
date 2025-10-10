export interface Tab {
    id: string;
    label: string;
    content: {
        tag: any;
        attrs?: Record<string, any>;
    };
    contextx?: any;
    attrs?: Record<string, any>;
}
