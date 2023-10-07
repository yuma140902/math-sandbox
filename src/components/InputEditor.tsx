import { InputState } from '@/input';
import { Editor } from '@monaco-editor/react';
import { Spin, Typography } from 'antd';
import { editor } from 'monaco-editor';
import { useRef, useState } from 'react';

type Props = {
  input: InputState;
  setInput: (_: InputState) => void;
  isDarkMode: boolean;
};

export function InputEditor({ input, setInput, isDarkMode }: Props) {
  const [editorHeight, setEditorHeight] = useState<string | number | undefined>(
    undefined,
  );

  const updateHeight = (editor: editor.IStandaloneCodeEditor | null) => {
    if (editor) {
      const height = Math.max(40, editor.getContentHeight());
      setEditorHeight(height);
    }
  };

  if (input.type === 'latex') {
    // TODO: LaTeXはサポートされていない
    // [4 Steps to Add Custom Language Support to Monaco Editor | by ohdarling | Medium](https://ohdarling88.medium.com/4-steps-to-add-custom-language-support-to-monaco-editor-5075eafa156d)
    return (
      <>
        <Editor
          height={editorHeight}
          defaultLanguage="latex"
          defaultValue={input.text}
          loading={<Spin />}
          options={{
            scrollBeyondLastLine: false,
            minimap: {
              enabled: false,
            },
            wordWrap: 'on',
          }}
          onChange={(s) => {
            setInput({ ...input, text: s });
          }}
          theme={isDarkMode ? 'vs-dark' : 'light'}
          onMount={(editor, _monaco) => {
            editor.onDidContentSizeChange(() => {
              updateHeight(editor);
            });
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
