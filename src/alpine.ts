import type { Alpine } from 'alpinejs'
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'

enum MODE {
    SYSTEM = "SYSTEM",
    LIGHT = "LIGHT",
    DARK = "DARK",
}

interface ThemeStore {
    mode: MODE;
    appearance: MODE;
    toggleMode: () => void;
    init: () => void;
}

export default (Alpine: Alpine) => {
    Alpine.plugin(persist);
    Alpine.plugin(intersect)

    Alpine.store('theme', {
        mode: Alpine.$persist(MODE.SYSTEM).as("mode") as unknown as MODE,
        appearance: MODE.LIGHT,
        toggleMode() {
            const modes = [MODE.SYSTEM, MODE.LIGHT, MODE.DARK];
            this.mode = modes[(modes.indexOf(this.mode) + 1) % modes.length];
        },
        init() {
            Alpine.effect(() => {
                const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
                this.appearance = this.mode === MODE.SYSTEM ? (darkModeMediaQuery.matches ? MODE.DARK : MODE.LIGHT) : this.mode;
                document.body.classList.toggle('dark', this.appearance === MODE.DARK);
            });
        },
    } as ThemeStore);

    Alpine.store("inView", new Set());
}