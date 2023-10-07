import { Button, Card, Col, Input, Row, Typography } from 'antd';
import { AppLayout } from './util/AppLayout';
import { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import { ConversionOutput } from './ConversionOutput';
import { RichSelector } from './util/RichSelector';
import { OutputType, OutputTypeSelector } from './OutputTypeSelector';
import { InputTypeSelector } from './InputTypeSelector';

const HEADER_HEIGHT = 64;

type InputType = 'latex';

function App() {
  const [latexExpr, setLatexExpr] = useState<string>('\\int_0^\\infty x^2 dx');
  const [inputType, setInputType] = useState<InputType>('latex');
  const [outputType, setOutputType] = useState<OutputType>('html');
  const [outputText, setOutputText] = useState<string | undefined>(undefined);

  const handleConvert = () => {
    const output = katex.renderToString(latexExpr, {
      displayMode: true,
      output: 'html',
    });
    setOutputText(output);
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
                defaultValue={inputType}
                handleChange={setInputType}
              />
            </Typography.Paragraph>
            {/* TODO: Monaco Editor */}
            <Input.TextArea
              placeholder="LaTeXの数式を入力"
              autoSize={{ minRows: 2 }}
              defaultValue={latexExpr}
              onChange={(e) => setLatexExpr(e.target.value)}
            />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} style={{ padding: 10 }}>
          <Card
            title="プレビュー"
            bordered={false}
            style={{ marginBottom: 20 }}
          >
            <Typography.Text>
              <BlockMath math={latexExpr} />
            </Typography.Text>
          </Card>

          <Card title="出力" bordered={false}>
            <Typography.Paragraph>
              <OutputTypeSelector
                defaultValue={outputType}
                handleChange={setOutputType}
              />
              &nbsp;
              <Button type="primary" onClick={handleConvert}>
                変換
              </Button>
            </Typography.Paragraph>
            <ConversionOutput
              output={{
                type: outputType,
                text: outputText,
              }}
            />
          </Card>
        </Col>
      </Row>
    </AppLayout>
  );
}

export default App;
