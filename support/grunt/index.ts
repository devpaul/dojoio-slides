import * as config from './config';

export = function (grunt: IGrunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig(config);

	grunt.registerTask('default', [
		'clean',
		'stylus'
	]);

	grunt.registerTask('dev', [
		'clean',
		'stylus',
		'watch'
	]);

	grunt.registerTask('serve', [
		'stylus',
		'devserver'
	]);

	grunt.registerTask('init:deploy', [
		'prompt:github',
		'setupDeploy'
	]);

	grunt.registerTask('cd', [
		'prebuild',
		'sync:gh-pages',
		'clean:repo',
		'copy:slides',
		'publish:gh-pages'
	]);
};
