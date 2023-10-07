import { InputState } from '@/input';
import { Editor } from '@monaco-editor/react';

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
      <Editor
        height="90vh"
        defaultLanguage="latex"
        defaultValue={input.text}
        onChange={(s) => setInput({ ...input, text: s })}
        theme={isDarkMode ? 'vs-dark' : 'light'}
      />
    );
  }
  return undefined;
}
