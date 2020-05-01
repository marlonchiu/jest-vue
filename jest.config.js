module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  testMatch: [
    '**/__tests__/**/*.(spec|test).{j,t}s?(x)'
  ]
}
