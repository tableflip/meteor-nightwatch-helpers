Package.describe({
  name: 'tableflip:nightwatch-helpers',
  version: '0.0.1',
  summary: 'Helper methods for Nightwatch tests (FOR TESTING PURPOSES ONLY)',
  documentation: 'README.md',
  debugOnly: true
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3')
  api.use('accounts-base@1.2.0')
  api.addFiles('tests-helpers.js', ['client', 'server'])
  api.export('testLogin', 'client')
})
