import path from 'path';

import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import nodeResolve from '@rollup/plugin-node-resolve';
import nodePolyfill from 'rollup-plugin-polyfill-node';
import html from '@rollup/plugin-html';
import json from '@rollup/plugin-json';

/**
 * @type {import('rollup').RollupOptions}
 */
const cli = {
    input: 'src/cli-entry.ts',
    output: {
        file: 'dist/cli-bundle.js',
        format: 'es',
        inlineDynamicImports: true,
    },
    plugins: [
        typescript({
            noEmit: true,
            declaration: false,
        }),
        commonjs({
            // the ".ts" extension is required
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            esmExternals: true,
            // events and stream modify module.exports
            requireReturnsDefault: 'preferred',
        }),
        json(),
        nodeResolve({
            browser: false,
            preferBuiltins: true,
        }),
    ],
    external: [
        'node-notifier',
        'frida',
    ],
};

/**
 * @type {import('rollup').RollupOptions}
 */
const app = {
    input: 'src/app/main/app-entry.cts',
    output: {
        file: 'dist/app-main-bundle.cjs',
        format: 'cjs',
        inlineDynamicImports: true,
    },
    plugins: [
        typescript({
            noEmit: true,
            declaration: false,
        }),
        commonjs({
            // the ".ts" extension is required
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            esmExternals: true,
            // events and stream modify module.exports
            requireReturnsDefault: 'preferred',
        }),
        json(),
        nodeResolve({
            browser: false,
            preferBuiltins: true,
        }),
    ],
    external: [
        'electron',
    ],
};

/**
 * @type {import('rollup').RollupOptions}
 */
const app_preload = {
    input: 'src/app/preload/index.ts',
    output: {
        file: 'dist/app/bundle/preload.cjs',
        format: 'cjs',
    },
    plugins: [
        typescript({
            noEmit: true,
            declaration: false,
        }),
        commonjs({
            // the ".ts" extension is required
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            esmExternals: true,
        }),
        nodeResolve({
            browser: true,
            preferBuiltins: true,
        }),
    ],
    external: [
        'electron',
    ],
};

/**
 * @type {import('rollup').RollupOptions}
 */
const app_preload_webservice = {
    input: 'src/app/preload-webservice/index.ts',
    output: {
        file: 'dist/app/bundle/preload-webservice.cjs',
        format: 'cjs',
    },
    plugins: [
        typescript({
            noEmit: true,
            declaration: false,
        }),
        commonjs({
            // the ".ts" extension is required
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            esmExternals: true,
        }),
        nodeResolve({
            browser: true,
            preferBuiltins: true,
        }),
    ],
    external: [
        'electron',
    ],
};

/**
 * @type {import('rollup').RollupOptions}
 */
const app_browser = {
    input: 'src/app/browser/index.ts',
    output: {
        file: 'dist/app/bundle/browser.js',
        format: 'iife',
    },
    plugins: [
        html({
            title: 'nxapi',
        }),
        typescript({
            noEmit: true,
            declaration: false,
        }),
        commonjs({
            // the ".ts" extension is required
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            esmExternals: true,
        }),
        nodePolyfill(),
        alias({
            entries: [
                {find: 'react-native', replacement: path.resolve(__dirname, 'node_modules', 'react-native-web')},
            ],
        }),
        nodeResolve({
            browser: true,
            preferBuiltins: false,
        }),
    ],
};

export default [
    cli,
    app,
    app_preload,
    app_preload_webservice,
    app_browser,
];
