import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

import * as child from 'child_process';

const commitId = child.execSync('git rev-parse --short HEAD').toString();
const branch = child.execSync('git rev-parse --abbrev-ref HEAD').toString();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    __COMMIT_ID__: JSON.stringify(commitId.trim()),
    __GIT_BRANCH__: JSON.stringify(branch.trim()),
  },
});
