import { OutputState } from '@/output';
import { Typography } from 'antd';
import { MonacoEditor } from './util/MonacoEditor';

type Props = {
  output: OutputState;
  isDarkMode: boolean;
};

export function OutputView({ output, isDarkMode }: Props) {
  if (output.type === 'html' && output.text) {
    // TODO: シンタックスハイライト
    return (
      <Typography.Paragraph>
        <MonacoEditor
          isDarkMode={false}
          options={{ readOnly: true }}
          text={output.text}
          language="html"
        />
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
        <MonacoEditor
          isDarkMode={false}
          options={{ readOnly: true }}
          text={output.text}
          language="xml"
        />
      </Typography.Paragraph>
    );
  }
  return undefined;
}
