import { Button, Card, Col, Input, Row, Select, Typography } from 'antd';
import { AppLayout } from './util/AppLayout';
import { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import { ConversionOutput } from './ConversionOutput';

const HEADER_HEIGHT = 64;

type InputType = 'latex';
type OutputType = 'html';

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
              <Typography.Text>入力タイプ: </Typography.Text>
              <Select
                style={{ minWidth: 300 }}
                defaultValue={inputType}
                onChange={(value) => setInputType(value)}
                optionLabelProp="title"
                options={[
                  {
                    value: 'latex',
                    title: 'LaTeX',
                    label: (
                      <Typography.Paragraph>
                        LaTeX
                        <br />
                        例:{' '}
                        <Typography.Text code>
                          {'\\int_0^\\infty x^2 dx'}
                        </Typography.Text>
                      </Typography.Paragraph>
                    ),
                  },
                ]}
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
              <Typography.Text>出力タイプ: </Typography.Text>
              <Select
                style={{ minWidth: 300 }}
                defaultValue={outputType}
                onChange={(value) => setOutputType(value)}
                optionLabelProp="title"
                options={[
                  {
                    value: 'html',
                    title: 'HTML',
                    label: (
                      <Typography.Paragraph>
                        HTML
                        <br />
                        <Typography.Text type="secondary">
                          HTML形式
                        </Typography.Text>
                        <br />
                        例:{' '}
                        <Typography.Text code>
                          {'\\int_0^\\infty x^2 dx'}
                        </Typography.Text>
                      </Typography.Paragraph>
                    ),
                  },
                ]}
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
