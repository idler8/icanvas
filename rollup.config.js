import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: 'src/index.js',
		output: [
			{
				file: 'dist/icanvas.es.js',
				format: 'esm',
			},
		],
		external: ['wx', 'window', 'document'],
		plugins: [
			json(),
			babel({
				babelrc: false,
				presets: [['@babel/preset-env', { modules: false }]],
				plugins: ['@babel/proposal-class-properties', '@babel/transform-runtime'],
				exclude: 'node_modules/**',
				externalHelpers: false,
				runtimeHelpers: true,
			}),
			commonjs(),
		],
	},
	{
		input: 'src/web.js',
		output: [
			{
				name: 'ICanvas',
				file: 'dist/icanvas.web.js',
				format: 'iife',
			},
		],
		external: ['window', 'document'],
		plugins: [
			resolve({ preferBuiltins: true, browser: true }),
			json(),
			babel({
				babelrc: false,
				presets: [['@babel/preset-env', { modules: false }]],
				plugins: ['@babel/proposal-class-properties', '@babel/transform-runtime'],
				exclude: 'node_modules/**',
				externalHelpers: false,
				runtimeHelpers: true,
			}),
			commonjs(),
			terser(),
		],
	},
	{
		input: 'src/wxgame.js',
		output: [
			{
				name: 'ICanvas',
				file: 'dist/icanvas.wxgame.js',
				format: 'cjs',
			},
		],
		external: ['wx'],
		plugins: [
			resolve({ preferBuiltins: true, browser: true }),
			json(),
			babel({
				babelrc: false,
				presets: [['@babel/preset-env', { modules: false }]],
				plugins: ['@babel/proposal-class-properties', '@babel/transform-runtime'],
				exclude: 'node_modules/**',
				externalHelpers: false,
				runtimeHelpers: true,
			}),
			commonjs(),
			terser(),
		],
	},
	{
		input: 'src/index.js',
		output: [
			{
				name: 'ICanvas',
				file: 'dist/icanvas.umd.js',
				format: 'umd',
			},
		],
		external: ['wx', 'window', 'document'],
		plugins: [
			resolve({ preferBuiltins: true, browser: true }),
			json(),
			babel({
				babelrc: false,
				presets: [['@babel/preset-env', { modules: false }]],
				plugins: ['@babel/proposal-class-properties', '@babel/transform-runtime'],
				exclude: 'node_modules/**',
				externalHelpers: false,
				runtimeHelpers: true,
			}),
			commonjs(),
		],
	},
];
