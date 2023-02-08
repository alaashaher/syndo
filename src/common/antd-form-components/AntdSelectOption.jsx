import React from 'react';
import { useController } from 'react-hook-form';
import { Form, Select } from 'antd';

const AntdSelectOption = ({
  control,
  name,
  label,
  placeholder,
  setValue,
  validateStatus,
  errorMsg,
  options,
  formClassName
}) => {
  const {
    // field: { ...inputProps }
    field
  } = useController({
    name,
    control
  });
  const { Option } = Select;

  const hanldeClear = () => {
    setValue(name, '');
  };
  return (
    <Form.Item label={label} help={errorMsg} validateStatus={validateStatus}>
      <Select
        onClear={hanldeClear}
        // onChange={field.onChange}
        // onBlur={field.onBlur}
        {...field}
        placeholder={placeholder}
        size="large"
        allowClear
        getPopupContainer={() => document.querySelector(`.${formClassName}`)}>
        {options?.length > 0 &&
          options.map((op, index) => (
            <Option key={index} value={String(op.value)}>
              {op.title}
            </Option>
          ))}
      </Select>
    </Form.Item>
  );
};

export default AntdSelectOption;
