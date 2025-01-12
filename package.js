Package.describe({
  name: 'cfs:reactive-property',
  version: '0.0.5',
  summary: 'Reactive Property is a small, fast reative property class',
  git: 'https://github.com/vatfree/cfs_reactive-property.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['1.0', '2.0']);
  
  api.use('deps', ['client', 'server']);

  api.export('ReactiveProperty');
  api.addFiles(['reactive-property.js'], ['client', 'server']);
});

// Package.onTest(function (api) {
//   api.use('power-queue');
//   api.use('test-helpers', 'server');
//   api.use('tinytest');

//   api.add_files('tests.js');
// });
