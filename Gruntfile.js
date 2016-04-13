module.exports = function(grunt) {

  // 任务配置，所有插件的配置信息
  grunt.initConfig({

    // 获取 package.json 信息
    pkg: grunt.file.readJSON('package.json'),

    // uglify 插件的配置信息
    uglify: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        // src: 'src/<%= pkg.name %>.js',
        src: 'src/test.js',
        dest: 'build/<%= pkg.name %>-<%=pkg.version%>.min.js'
      }
    },
    
    // jshint 插件配置信息
    jshint: {
      test1: ['Gruntfile.js'],
      test1: ['src/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // watch 插件的配置信息
    watch: {
      build: {
        files: ['Gruntfile.js', 'src/*.js', 'src/*.css'],
        tasks: ['jshint', 'uglify'],
        options: {spawn: false}
      }
    }
  });
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['watch', 'jshint', 'uglify']);
};