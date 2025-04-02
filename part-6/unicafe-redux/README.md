# Unicafe Redux Template (Updated Version)

This repository is an updated version of the original [Unicafe Redux assignment template](https://github.com/fullstack-hy2020/unicafe-redux), modernized to align with current tooling and best practices. Below are the key changes and migration guidelines.

---

## 🚀 Key Updates

### 1. **Replaced Jest with Vitest**
- **Why?** Vitest offers faster execution, better ESM support, and seamless integration with modern frontend tooling.
- Tests now use `vitest` globals (e.g., `describe`, `it`, `expect`) directly without extra imports.
- Configuration: See [`vite.config.js`](vite.config.js) 

### 2. **Modern ESLint Configuration**
- Migrated to the **flat ESLint config format** (default since ESLint v9.0.0).
- Simplified setup with a single `eslint.config.js` file.
- Added [`eslint-config-vitest-globals`](https://www.npmjs.com/package/eslint-config-vitest-globals) to handle Vitest global variables in tests.

### 3. **Updated Dependencies**
- All packages (e.g., `vite`, `eslint`, `vitest`) are upgraded to their latest stable versions.

---

