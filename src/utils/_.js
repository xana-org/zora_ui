export function shortHash(hash) {
    return `${hash.slice(0, 4)}...${hash.slice(-4)}`;
}