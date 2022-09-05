module.exports = {
  testEnvironment: 'jsdom',
  // ignorando as pastas
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  // Arquivos que eu quero que o JEST execute antes dos testes
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  // Arquivos com essas extensões serão convertidos para babel
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$" : "<rootDir>/node_modules/babel-jest"
  },
  // Biblioteca identity para entender arquivos css-modules
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
}