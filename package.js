Package.describe({
  name:    'ksrv:autoform-clockpicker',
  version: '0.0.1',
  summary: '',
  git:     '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  
  api.use('ecmascript@0.6.0');
  api.use('templating@1.2.15',       ['client']);
  api.use('underscore@1.0.10',      ['client']);
  api.use('aldeed:autoform@5.8.1',  ['client']);

  api.addFiles('bootstrap-clockpicker.min.js',  ['client']);
  api.addFiles('bootstrap-clockpicker.min.css', ['client']);

  api.addFiles('clockpicker.html',  ['client']);
  api.addFiles('clockpicker.js',    ['client']);
});
