module.exports = {
  name: 'goal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/goal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
