const Parcel = require('parcel-bundler');
const path = require('path');

const prependPath = entryPaths => entryPaths
	.map(entryPath => path.resolve(__dirname, 'source', entryPath));

const isWatch = process.argv.includes('--watch');

const entryFiles = prependPath([
	'index.html',
	'se/index.html',
	'se/failure.html',
	'se/success.html',
	'se/villkor.html',
	'fi/index.html',
	'fi/failure.html',
	'fi/success.html'
]);

const bundler = new Parcel(entryFiles, {
	sourceMaps: false,
	contentHash: false,
	watch: isWatch,
	minify: !isWatch,
	autoInstall: true
});

bundler.bundle();
