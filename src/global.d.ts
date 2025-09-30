declare global {
    interface Window {
        $astroProps: Record<string, any>;
    }
}

export {};
