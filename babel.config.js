export const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                ie: "11", // you can set this to match your legacy target
                chrome: "49",
                safari: "8",
            },
            useBuiltIns: "usage", // only include polyfills that are used
            corejs: 3, // requires core-js
        },
    ],
];
