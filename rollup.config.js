// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';

// const packageJson = require('./package.json');

// // const rollupConfig = [
// //     {
// //         input: 'src/index.ts',
// //         output: [
// //             {
// //                 file: packageJson.main,
// //                 format: "cjs",
// //                 sourcemap: true,
// //             },
// //             {
// //                 test: "echo \"Error: no test specified\" && exit 1"
// //             },
// //             {
// //                 file: packageJson.module,
// //                 format: "esm",
// //                 sourcemap: true,
// //             },
// //         ],
// //         plugins: [
// //             resolve(),
// //             commonjs(),
// //             typescript({
// //                 tsconfig: "./tsconfig.json"
// //             }),
// //         ],
// //     },
// //     {
// //         input: 'dist/esm/typescript/index.d.ts',
// //         output: [
// //             {
// //                 file: "dist/index.d.ts",
// //                 format: "esm",
// //             },
// //         ],
// //         plugins: [
// //             dts(),
// //         ],
// //     },
// // ];

// // export default rollupConfig;

// // Version 2

// export default [
//     // {
//     //     input: 'src/index.ts',
//     //     output: [
//     //         {
//     //             file: packageJson.main,
//     //             format: "cjs",
//     //             sourcemap: true,
//     //         },
//     //         {
//     //             test: "echo \"Error: no test specified\" && exit 1"
//     //         },
//     //         {
//     //             file: packageJson.module,
//     //             format: "esm",
//     //             sourcemap: true,
//     //         },
//     //     ],
//     //     plugins: [
//     //         resolve(),
//     //         commonjs(),
//     //         typescript({
//     //             tsconfig: "./tsconfig.json"
//     //         }),
//     //     ],
//     // },
//     // {
//     //     input: 'dist/esm/typescript/index.d.ts',
//     //     output: [
//     //         {
//     //             file: "dist/index.d.ts",
//     //             format: "esm",
//     //         },
//     //     ],
//     //     plugins: [
//     //         dts(),
//     //     ],
//     // },

//     // Version 2
//     {
//         input: "src/index.ts",
//         output: [
//             {
//                 file: packageJson.main,
//                 format: "cjs",
//                 sourcemap: true,
//             },
//             {
//                 file: packageJson.module,
//                 format: "esm",
//                 sourcemap: true,
//             },
//         ],
//         plugins: [
//             resolve(),
//             commonjs(),
//             typescript({ tsconfig: "./tsconfig.json" }),
//         ],
//     },
//     {
//         input: "dist/esm/types/index.d.ts",
//         output: [{ file: "dist/index.d.ts", format: "esm" }],
//         plugins: [dts()],
//     }
// ];

// // Version 2

// import commonjs from "@rollup/plugin-commonjs";
// import resolve from "@rollup/plugin-node-resolve";
// import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";

// const packageJson = require("./package.json");

// export default [
//     {
//         input: "./src/index.ts",
//         output: [
//             {
//                 file: packageJson.main,
//                 format: "cjs",
//                 sourcemap: true,
//             },
//             {
//                 file: packageJson.module,
//                 format: "esm",
//                 sourcemap: true,
//             },
//         ],
//         plugins: [
//             resolve(),
//             commonjs(),
//             typescript({ tsconfig: "./tsconfig.json" }),
//         ],
//     },
//     {
//         input: "dist/esm/types/index.d.ts",
//         output: [{ file: "dist/index.d.ts", format: "esm" }],
//         plugins: [dts()],
//     },
// ];

// Version 3

import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                sourcemap: false,
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
                sourcemap: true,
            },
        ],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            terser(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
    }
];
