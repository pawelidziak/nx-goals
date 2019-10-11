module.exports = {
  name: 'app-nav',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/app-nav',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
