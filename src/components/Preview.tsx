import { Typography } from 'antd';
import { InputState } from './InputEditor';
import { BlockMath } from 'react-katex';

export function Preview({ input }: { input: InputState }) {
  return (
    <Typography.Text>
      <BlockMath math={input.text ?? ''} />
    </Typography.Text>
  );
}
