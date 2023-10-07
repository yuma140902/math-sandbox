import { Button, Card, Col, Row, Typography } from 'antd';
import { AppLayout } from './util/AppLayout';
import { useState } from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import { OutputTypeSelector } from './OutputTypeSelector';
import { InputTypeSelector } from './InputTypeSelector';
import { OutputState, OutputView } from './OutputView';
import { InputEditor, InputState } from './InputEditor';
import { Preview } from './Preview';

const HEADER_HEIGHT = 64;

function App() {
  const [input, setInput] = useState<InputState>({
    type: 'latex',
    text: '\\int_0^\\infty x^2 dx',
  });
  const [output, setOutput] = useState<OutputState>({
    type: 'html',
    text: undefined,
  });

  const handleConvert = () => {
    if (input.type === 'latex' && input.text) {
      const output = katex.renderToString(input.text, {
        displayMode: true,
        output: 'html',
      });
      setOutput({ type: 'html', text: output });
    }
  };

  return (
    <AppLayout
      appName="Math Sandbox"
      appIcon=""
      appVersion={`${__COMMIT_ID__} (${__GIT_BRANCH__} ブランチ)`}
      appGithubRepo="yuma140902/math-sandbox"
      appDescription="数式の変換・レンダリング"
      headerHeight={HEADER_HEIGHT}
    >
      <Row>
        <Col xs={24} sm={24} md={12} style={{ padding: 10 }}>
          <Card title="入力" bordered={false}>
            <Typography.Paragraph>
              <InputTypeSelector
                defaultValue={input.type}
                handleChange={(v) => setInput({ type: v })}
              />
            </Typography.Paragraph>
            <InputEditor input={input} setInput={setInput} />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} style={{ padding: 10 }}>
          <Card
            title="プレビュー"
            bordered={false}
            style={{ marginBottom: 20 }}
          >
            <Preview input={input} />
          </Card>

          <Card title="出力" bordered={false}>
            <Typography.Paragraph>
              <OutputTypeSelector
                defaultValue={output.type}
                handleChange={(v) => setOutput({ type: v })}
              />
              &nbsp;
              <Button type="primary" onClick={handleConvert}>
                変換
              </Button>
            </Typography.Paragraph>
            <OutputView output={output} />
          </Card>
        </Col>
      </Row>
    </AppLayout>
  );
}

export default App;
