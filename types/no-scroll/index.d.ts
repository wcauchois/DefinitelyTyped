// Type definitions for no-scroll 2.1
// Project: https://github.com/davidtheclark/no-scroll
// Definitions by: Zhang Yi Jiang <https://github.com/ZhangYiJiang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface NoScroll {
    off(): void;
    on(): void;
    toggle(): void;
}

declare const noScroll: NoScroll;
export = noScroll;
