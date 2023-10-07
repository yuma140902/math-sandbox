import { AppLayout } from './presenter/AppLayout';

const HEADER_HEIGHT = 64;

function App() {
  return (
    <AppLayout
      appName="Math Sandbox"
      appIcon=""
      appVersion={`${__COMMIT_ID__} (${__GIT_BRANCH__} ブランチ)`}
      appGithubRepo="yuma140902/math-sandbox"
      appDescription="数式の変換・レンダリング"
      headerHeight={HEADER_HEIGHT}
    >
      empty
    </AppLayout>
  );
}

export default App;
