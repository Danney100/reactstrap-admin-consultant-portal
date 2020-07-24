import { scBase, scColor } from './_variables';

const scVar = {
    ...scBase(),
    ...scColor(),
};

export function cssCard() {
    return {
        [`& .${scVar.prefix}card__heading`]: {
            marginBottom: `${26 / scVar.rootFontBase}rem`,
            paddingBottom: `${15 / scVar.rootFontBase}rem`,
            borderBottom: `1px solid ${scVar.borderColor}`,
        },
    }
}

export function cssCardUpLg() {
    return {
        [`& .${scVar.prefix}card:not(:first-child)`]: {
            marginTop: `${30 / scVar.rootFontBase}rem`,
        },
    }
}

export default {
    cssCard,
    cssCardUpLg,
}