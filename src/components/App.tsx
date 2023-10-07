import { ConfigProvider, Layout, theme } from 'antd';
import './App.css';
import { useState } from 'react';
import Header from './container/Header';

const HEADER_HEIGHT = 64;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        components: {
          Layout: {
            headerHeight: HEADER_HEIGHT,
          },
        },
      }}
    >
      <Layout style={{ height: '100%' }}>
        <Header
          height={HEADER_HEIGHT}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          appIcon=""
          appName="Math Sandbox"
          handleOpenAboutDialog={() => {}}
          githubUrl="https://github.com/yuma140902/math-sandbox"
        />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
