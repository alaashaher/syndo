import React from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'antd';
import { useForm } from 'react-hook-form';

import AntdTextField from '../../common/antd-form-components/AntdTextField';
import AntdSelectOption from '../../common/antd-form-components/AntdSelectOption';
import { yupResolver } from '@hookform/resolvers/yup';

import './DonationPage.scss';
import AntdRadioGroup from '../../common/antd-form-components/AntdRadioGroup';

const UserForm = () => {
  const { t, i18n } = useTranslation();

  const CONTACT_FORM_SCHEMA = Yup.object().shape({
    name: Yup.string().required(t(`name.errors.required`)),
    Nationality: Yup.string().required(t(`name.errors.required`))
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(CONTACT_FORM_SCHEMA),
    mode: 'all',
    defaultValues: {
      name: '',
      Nationality: null,
      Gender: 1
    }
  });

  const [form] = Form.useForm();
  const onSubmit = async (data) => {};

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit(onSubmit)} className="contact-form">
      <div className="inputs">
        <div className="form-field-wrapper">
          <AntdTextField
            name="name"
            type="text"
            placeholder={t('name.label')}
            label={t('name.label')}
            errorMsg={errors?.name?.message}
            validateStatus={errors?.name ? 'error' : ''}
            control={control}
          />
        </div>
        <div className="form-field-wrapper">
          <AntdTextField
            name="name"
            type="date"
            label={t('Date of Birth*')}
            errorMsg={errors?.name?.message}
            validateStatus={errors?.name ? 'error' : ''}
            control={control}
          />
        </div>
        <div className="form-field-wrapper">
          <AntdSelectOption
            name="Nationality"
            errorMsg={errors?.Nationality?.message}
            validateStatus={errors?.Nationality ? 'error' : ''}
            control={control}
            setValue={setValue}
            options={[{ title: 'Egypt', value: '1' }]}
            label={<p className="select-option-label">Nationality</p>}
            formClassName="contact-form"
          />
        </div>
        <div className="">
          <AntdRadioGroup
            radios={[
              { title: 'male', value: '1' },
              { title: 'female', value: '2' }
            ]}
            name="Gender"
            defaultValue={watch('Gender')}
            label={<p className="select-option-label">Gender*</p>}
            validateStatus={errors?.Gender ? 'error' : ''}
            errorMsg={errors?.Gender?.message}
            control={control}
            isRadioButton
          />
        </div>
      </div>
      <div className="btns">
        <button className="close">close</button>
        <Button className="next" htmlType="submit" type="primary" loading={isSubmitting}>
          {t(`send_btn.title`)}
        </Button>
      </div>
    </Form>
  );
};

export default UserForm;
