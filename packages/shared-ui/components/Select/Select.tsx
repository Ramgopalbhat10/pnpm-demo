type Base = {
  id: string;
  title?: string;
};

type SelectProps<TValue> = {
  titleKey?: keyof TValue;
  values: TValue[];
  onChange: (value: TValue) => void;
};

export const Select = <TValue extends Base>({
  values,
  onChange,
  titleKey = "title",
}: SelectProps<TValue>) => {
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = values.find((value) => value.id === e.target.value);
    if (val) onChange(val);
  };

  return (
    <select onChange={onSelectChange}>
      <option selected disabled hidden>
        choose
      </option>
      {values.map((value) => (
        <option key={value.id} value={value.id}>
          {value[titleKey]}
        </option>
      ))}
    </select>
  );
};
