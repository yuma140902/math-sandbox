import { Typography } from 'antd';

export function SelectorLabel({
  name,
  description,
  example,
}: {
  name: string;
  description?: string;
  example?: string;
}): React.JSX.Element {
  return (
    <Typography.Paragraph>
      {name}
      <br />
      {description ? (
        <>
          <Typography.Text type="secondary">{description} </Typography.Text>
          <br />
        </>
      ) : undefined}
      {example ? (
        <>
          例:{' '}
          <Typography.Paragraph code ellipsis>
            {example}
          </Typography.Paragraph>
        </>
      ) : undefined}
    </Typography.Paragraph>
  );
}
