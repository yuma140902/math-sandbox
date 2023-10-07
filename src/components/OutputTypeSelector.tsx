import { OutputType } from '@/output';
import { SelectorLabel } from './SelectorLabel';
import { RichSelector, RichSelectorOption } from './util/RichSelector';

function getOption(
  value: OutputType,
  name: string,
  description?: string,
  example?: string,
): RichSelectorOption<OutputType> {
  return {
    value: value,
    title: name,
    label: (
      <SelectorLabel name={name} description={description} example={example} />
    ),
  };
}

type Props = {
  defaultValue: OutputType;
  handleChange: (v: OutputType) => void;
};

export function OutputTypeSelector({ defaultValue, handleChange }: Props) {
  return (
    <RichSelector
      title="出力タイプ"
      defaultValue={defaultValue}
      handleChange={handleChange}
      options={[
        getOption(
          'html',
          'HTML',
          'HTML形式',
          '<span class="katex-display">...',
        ),
      ]}
    />
  );
}
