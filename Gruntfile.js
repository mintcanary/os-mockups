module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    svgstore: {
      options: {
        prefix: 'icon-', // This will prefix each ID
        svg: { // will be added as attributes to the resulting SVG
          class : 'hidden'
        },
        includedemo: '{{#each icons}}<li data-container="body" data-toggle="popover" data-placement="bottom" data-content="&lt;svg&gt&lt;use xlink:href=&quot;#{{name}}&quot; /&gt&lt;/svg&gt"><svg><use xlink:href="#{{name}}" /></svg></li>{{/each}}',
      },
      default : {
        files: {
          'templates/includes/icons.svg': ['assets/os-assets/icons/*.svg'],
        },
      },
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/scss',
          src: ['*.scss'],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
      icons: {
				files: 'assets/os-assets/icons/*.svg',
				tasks: ['svgstore']
			}
		}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('icons', ['svgstore']);
  grunt.registerTask('default',['watch']);

};
