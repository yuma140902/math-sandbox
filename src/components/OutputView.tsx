import { OutputState } from '@/output';
import { Typography } from 'antd';

type Props = {
  output: OutputState;
};

export function OutputView({ output }: Props) {
  if (output.type === 'html' && output.text) {
    // TODO: シンタックスハイライト
    return (
      <Typography.Paragraph>
        <pre>{output.text}</pre>
        注意: 以下のスタイルシートを読み込む必要があります。
        <br />
        <pre>
          {
            '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossorigin="anonymous">'
          }
        </pre>
      </Typography.Paragraph>
    );
  } else if (output.type === 'mathml' && output.text) {
    return (
      <Typography.Paragraph>
        <pre>{output.text}</pre>
      </Typography.Paragraph>
    );
  }
  return undefined;
}
