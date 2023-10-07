import { Col, Row, Select, Typography } from 'antd';
import { AppLayout } from './presenter/AppLayout';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const HEADER_HEIGHT = 64;

type InputType = 'latex';

function App() {
  const [latexExpr, setLatexExpr] = useState<string>('\\int_0^\\infty x^2 dx');
  const [inputType, setInputType] = useState<InputType>('latex');

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
          <Typography.Text>入力タイプ: </Typography.Text>
          <Select
            style={{ minWidth: 300 }}
            defaultValue={inputType}
            onChange={(value) => setInterval(value)}
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
                    ,
                  </Typography.Paragraph>
                ),
              },
            ]}
          />
          {/* TODO: Monaco Editor */}
          <TextArea
            placeholder="LaTeXの数式を入力"
            autoSize={{ minRows: 2 }}
            defaultValue={latexExpr}
            onChange={(e) => setLatexExpr(e.target.value)}
          />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Typography.Text>
            <BlockMath math={latexExpr} />
          </Typography.Text>
        </Col>
      </Row>
    </AppLayout>
  );
}

export default App;
