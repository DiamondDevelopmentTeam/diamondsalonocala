# Before-and-after image drop zone

When Brooke supplies approved client transformations:

1. Export matching desktop WebP files here (for example, `dimensional-color-before.webp` and `dimensional-color-after.webp`).
2. Export matching mobile versions using the `-sm.webp` suffix.
3. Add the corresponding `before` and `after` image objects to the entry in `client/src/data/transformations.ts`.

The existing comparison component will use the real images automatically while preserving the current slider, labels, responsive crop, and accessible controls.
