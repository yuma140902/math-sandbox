import { Layout, Space, Switch, Tooltip, theme } from 'antd';
import AppTitle from '../presenter/AppTitle';
import GitHubLink from '../presenter/GitHubLink';

type Props = {
  height: number;
  isDarkMode: boolean;
  setIsDarkMode: (_: boolean) => void;
  appIcon: string;
  appName: string;
  handleOpenAboutDialog: () => void;
  githubUrl?: string;
};

export default function Header({
  height,
  isDarkMode,
  setIsDarkMode,
  appIcon,
  appName,
  handleOpenAboutDialog,
  githubUrl,
}: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{
        ...{
          width: '100%',
          display: 'flex',
          paddingLeft: '0',
          paddingRight: '3px',
        },
        ...(isDarkMode ? {} : { background: colorBgContainer }),
      }}
    >
      <AppTitle
        handleClick={handleOpenAboutDialog}
        height={height}
        appIcon={appIcon}
        appName={appName}
      />
      <Space style={{ float: 'right', marginLeft: 'auto' }}>
        <Tooltip title="テーマ" placement="bottom">
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            checked={isDarkMode}
            onChange={(checked) => setIsDarkMode(checked)}
          />
        </Tooltip>
      </Space>
      {githubUrl ? (
        <GitHubLink isDarkMode={isDarkMode} githubUrl={githubUrl} />
      ) : undefined}
    </Layout.Header>
  );
}
