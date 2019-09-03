module.exports = {
  name: 'features',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/features',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
