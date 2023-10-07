import { useWindowWidth } from '@react-hook/window-size';
import { Space, Typography } from 'antd';

type Props = {
  handleClick?: () => void;
  appIcon: string;
  appName: string;
  height: number;
};

export default function AppTitle({
  handleClick,
  appIcon,
  appName,
  height,
}: Props) {
  const windowWidth = useWindowWidth();

  return (
    <>
      <a href="#" role="button" onClick={handleClick}>
        <img
          src={appIcon}
          height={height}
          style={{
            marginLeft: '10px',
            marginRight: '10px',
          }}
        />
      </a>
      <a href="#" role="button" onClick={handleClick}>
        <Space>
          <Typography.Text hidden={windowWidth < 500} strong>
            {appName}
          </Typography.Text>
        </Space>
      </a>
    </>
  );
}
