import { RichSelector, RichSelectorOption } from './util/RichSelector';
import { SelectorLabel } from './SelectorLabel';

export type InputType = 'latex';

function getOption(
  value: InputType,
  name: string,
  description?: string,
  example?: string,
): RichSelectorOption<InputType> {
  return {
    value: value,
    title: name,
    label: (
      <SelectorLabel name={name} description={description} example={example} />
    ),
  };
}

type Props = {
  defaultValue: InputType;
  handleChange: (v: InputType) => void;
};

export function InputTypeSelector({ defaultValue, handleChange }: Props) {
  return (
    <RichSelector
      title="入力タイプ"
      defaultValue={defaultValue}
      handleChange={handleChange}
      options={[
        getOption('latex', 'LaTeX', undefined, '\\int_0^\\infty x^2 dx'),
      ]}
    />
  );
}
