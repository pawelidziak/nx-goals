module.exports = {
  name: 'angular-goals',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-goals',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
