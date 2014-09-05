Package.describe({
  name: 'cfs:reactive-property',
  version: '0.0.0',
  summary: "Reactive Property is a small, fast reative property class"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');
  
  api.use('deps', ['client', 'server']);

  api.export && api.export('ReactiveProperty');
  api.add_files(['reactive-property.js'], ['client', 'server']);
});

// Package.on_test(function (api) {
//   api.use('power-queue');
//   api.use('test-helpers', 'server');
//   api.use('tinytest');

//   api.add_files('tests.js');
// });
