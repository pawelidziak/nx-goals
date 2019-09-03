module.exports = {
  name: 'goal-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/goal-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
