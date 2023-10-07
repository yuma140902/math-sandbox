import { Button, Card, Col, Row, Typography } from 'antd';
import { AppLayout } from './util/AppLayout';
import { useState } from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import { OutputTypeSelector } from './OutputTypeSelector';
import { InputTypeSelector } from './InputTypeSelector';
import { OutputView } from './OutputView';
import { InputEditor } from './InputEditor';
import { Preview } from './Preview';
import { InputState } from '@/input';
import { OutputState } from '@/output';

const HEADER_HEIGHT = 64;

function App() {
  const [input, setInput] = useState<InputState>({
    type: 'latex',
    text: '\\int_0^\\infty x^2 dx\n',
  });
  const [output, setOutput] = useState<OutputState>({
    type: 'html',
    text: undefined,
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleConvert = () => {
    if (input.type === 'latex' && input.text && output.type === 'html') {
      const output = katex.renderToString(input.text, {
        displayMode: true,
        output: 'html',
        throwOnError: true, //TODO:
      });
      setOutput({ type: 'html', text: output });
    } else if (
      input.type === 'latex' &&
      input.text &&
      output.type === 'mathml'
    ) {
      const output = katex.renderToString(input.text, {
        displayMode: true,
        output: 'mathml',
        throwOnError: true, //TODO:
      });
      setOutput({ type: 'mathml', text: output });
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
      defaultIsDarkMode={isDarkMode}
      onChangeTheme={setIsDarkMode}
    >
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Card title="入力" bordered={false} style={{ margin: 10 }}>
            <Typography.Paragraph>
              <InputTypeSelector
                defaultValue={input.type}
                handleChange={(v) => setInput({ type: v })}
              />
            </Typography.Paragraph>
            <InputEditor
              input={input}
              setInput={setInput}
              isDarkMode={isDarkMode}
            />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12}>
          <Card title="プレビュー" bordered={false} style={{ margin: 10 }}>
            <Preview input={input} />
          </Card>

          <Card title="出力" bordered={false} style={{ margin: 10 }}>
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
            <OutputView output={output} isDarkMode={isDarkMode} />
          </Card>
        </Col>
      </Row>
    </AppLayout>
  );
}

export default App;
