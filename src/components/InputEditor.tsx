import { InputState } from '@/input';
import { Typography } from 'antd';
import { MonacoEditor } from './util/MonacoEditor';

type Props = {
  input: InputState;
  setInput: (_: InputState) => void;
  isDarkMode: boolean;
};

export function InputEditor({ input, setInput, isDarkMode }: Props) {
  if (input.type === 'latex') {
    // TODO: LaTeXはサポートされていない
    // [4 Steps to Add Custom Language Support to Monaco Editor | by ohdarling | Medium](https://ohdarling88.medium.com/4-steps-to-add-custom-language-support-to-monaco-editor-5075eafa156d)
    return (
      <>
        <MonacoEditor
          language="latex"
          text={input.text}
          isDarkMode={isDarkMode}
          onChange={(s) => {
            setInput({ ...input, text: s });
          }}
        />
        <Typography.Title level={5} type="secondary">
          入力欄について
        </Typography.Title>
        <Typography.Paragraph type="secondary">
          VS Codeと大体同じショートカットが使えます
          <br />
          例: 検索(<Typography.Text code>Ctrl+F</Typography.Text>)、置換(
          <Typography.Text code>Ctrl+Shift+F</Typography.Text>)、マルチカーソル(
          <Typography.Text code>Alt+クリック</Typography.Text>)
        </Typography.Paragraph>
      </>
    );
  }
  return undefined;
}
