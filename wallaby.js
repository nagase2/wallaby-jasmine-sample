module.exports = function (w) {

  return {
    files: [
      'src/**/*.ts',
      'src/**/*.json'
    ],

    tests: [
      'test/**/*spec.ts'
    ],

    env: {
      type: 'node'
    },

    // or any other supported testing framework:
    // https://wallabyjs.com/docs/integration/overview.html#supported-testing-frameworks
    testFramework: 'jasmine'
  };
};
