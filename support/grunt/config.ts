export const cloneDirectory = '.sync';

export const repoOwner = 'devpaul';

export const repoName = 'dojoio-slides';

export const clean = {
	dists: [ '<%= cloneDirectory %>' ],
	repo: [ '<%= cloneDirectory %>/**/*', '!.git/**' ],
	resources: {
		src: [ 'resources/*.css' ]
	}
};

export const copy = {
	slides: {
		expand: true,
		cwd: '.',
		src: [
			'index.html',
			'.nojekyll',
			'favicon.ico',
			'images/**/*',
			'resources/**/*.css',
			'video/**/*',
			'bower_components/**/*',
			'src/**/*'
		],
		dest: '<%= cloneDirectory %>'
	}
};

export const devserver = {
	present: {
		options: {
			port: 8765
		}
	}
};

export const prompt = {
	github: {
		options: {
			questions: [
				{
					config: 'github.username',
					type: 'input',
					message: 'Github username'
				},
				{
					config: 'github.password',
					type: 'password',
					message: 'Github password'
				}
			]
		}
	}
};

export const publish = {
	'gh-pages': {
		options: {
			branch: 'gh-pages',
			cloneDirectory: '<%= cloneDirectory %>'
		}
	}
};

export const setupAuth = {
	repo: { }
};

export const setupDeploy = {
	repo: {
		options: {
			repo: 'devpaul/dojoio-slides'
		}
	}
};

export const stylus = {
	resources: {
		files: {
			'resources/main.css' : 'resources/main.styl'
		}
	}
};

export const sync = {
	'gh-pages': {
		options: {
			branch: 'gh-pages',
			cloneDirectory: '<%= cloneDirectory %>'
		}
	}
};

export const watch = {
	stylus: {
		files: 'resources/**/*.styl',
		tasks: [ 'stylus' ],
		options: {
			interrupt: true
		}
	}
};
