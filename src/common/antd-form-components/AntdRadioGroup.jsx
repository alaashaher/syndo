import React from 'react';
import { useController } from 'react-hook-form';
import { Form, Radio } from 'antd';

const AntdRadioGroup = ({
  control,
  name,
  label,
  validateStatus,
  errorMsg,
  radios,
  defaultValue,
  isRadioButton
}) => {
  const {
    // field: { ...inputProps }
    field
  } = useController({
    name,
    control
  });

  return (
    <Form.Item name={name} label={label} help={errorMsg} validateStatus={validateStatus}>
      <Radio.Group
        {...field}
        size="large"
        buttonStyle="solid"
        // defaultValue={defaultValue}
      >
        {radios?.length &&
          radios.map((radio, index) =>
            isRadioButton ? (
              <Radio.Button key={index} value={radio.value}>
                {radio.title}
              </Radio.Button>
            ) : (
              <Radio key={index} value={radio.value}>
                {radio.title}
              </Radio>
            )
          )}
      </Radio.Group>
    </Form.Item>
  );
};

export default AntdRadioGroup;
