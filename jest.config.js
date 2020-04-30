module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  testMatch: [
    '**/__tests__/unit/**/*.(spec|test).{j,t}s?(x)'
  ]
}
