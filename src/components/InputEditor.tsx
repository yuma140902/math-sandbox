import { Input } from 'antd';

type Props = {
  input: {
    type: 'latex';
    text: string;
    setText: (t: string) => void;
  };
};

export function InputEditor({ input }: Props) {
  if (input.type === 'latex') {
    // TODO: Monaco Editor
    return (
      <Input.TextArea
        placeholder="LaTeXの数式を入力"
        autoSize={{ minRows: 2 }}
        defaultValue={input.text}
        onChange={(e) => input.setText(e.target.value)}
      />
    );
  }
  return undefined;
}
