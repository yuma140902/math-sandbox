import { Button, ConfigProvider, Layout, Modal, theme } from 'antd';
import './App.css';
import { useState } from 'react';
import Header from './presenter//Header';
import AboutApp from './presenter/AboutApp';

const HEADER_HEIGHT = 64;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  const handleOpenAboutDialog = () => {
    setIsAboutDialogOpen(true);
  };
  const handleCloseAboutDialog = () => {
    setIsAboutDialogOpen(false);
  };

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
          handleOpenAboutDialog={handleOpenAboutDialog}
          githubUrl="https://github.com/yuma140902/math-sandbox"
          menubar={undefined}
        />
      </Layout>
      <Modal
        open={isAboutDialogOpen}
        closable={false}
        onCancel={handleCloseAboutDialog}
        onOk={handleCloseAboutDialog}
        footer={
          <Button type="default" onClick={handleCloseAboutDialog}>
            閉じる
          </Button>
        }
      >
        <AboutApp
          appIcon=""
          appName="Math Sandbox"
          githubRepo="yuma140902/math-sandbox"
          version={`${__COMMIT_ID__} (${__GIT_BRANCH__} ブランチ)`}
          description="数式の変換・レンダリング"
        />
      </Modal>
    </ConfigProvider>
  );
}

export default App;
