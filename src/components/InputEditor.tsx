import { InputState } from '@/input';
import { Input } from 'antd';

type Props = {
  input: InputState;
  setInput: (_: InputState) => void;
};

export function InputEditor({ input, setInput }: Props) {
  if (input.type === 'latex') {
    // TODO: Monaco Editor
    return (
      <Input.TextArea
        placeholder="LaTeXの数式を入力"
        autoSize={{ minRows: 2 }}
        defaultValue={input.text}
        onChange={(e) => setInput({ ...input, text: e.target.value })}
      />
    );
  }
  return undefined;
}
