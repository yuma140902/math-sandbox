import { Button, ConfigProvider, Layout, Modal, theme } from 'antd';
import { ReactNode, useState } from 'react';
import AboutApp from './AboutApp';
import Header from './Header';
import './AppLayout.css';

type Props = {
  appName: string;
  appIcon: string;
  appVersion: string;
  appGithubRepo: string;
  appDescription: string;
  headerHeight: number;
  children?: ReactNode;
};

/**
 * アプリケーションの外枠となるもの
 */
export default function AppLayout({
  appName,
  appIcon,
  appVersion,
  appGithubRepo,
  appDescription,
  headerHeight,
  children,
}: Props) {
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
            headerHeight,
          },
        },
      }}
    >
      <Layout style={{ height: '100%' }}>
        <Header
          height={headerHeight}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          appIcon={appIcon}
          appName={appName}
          handleOpenAboutDialog={handleOpenAboutDialog}
          githubUrl={`https://github.com/${appGithubRepo}`}
          menubar={undefined}
        />
        <Layout.Content>{children}</Layout.Content>
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
          appIcon={appIcon}
          appName={appName}
          githubRepo={appGithubRepo}
          version={appVersion}
          description={appDescription}
        />
      </Modal>
    </ConfigProvider>
  );
}