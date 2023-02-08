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
import { useNavigate } from 'react-router-dom';
import routerLinks from '../../components/app/routerLinks';

const Payment = ({ setform }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const CONTACT_FORM_SCHEMA = Yup.object().shape({
    CardNumber: Yup.string().required(t(`Card Number is required`)),
    CardholderName: Yup.string().required(
      t(`Card holder Name is required`)
    ),
    cvv: Yup.string()
      .max(3, 'invalid value (should be 3 digits only)')
      .min(3, 'invalid value (should be 3 digits only)')
      .required(t(`Card holder Name is required`))
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
  const onSubmit = async (data) => {
    navigate(routerLinks.donationSuccess);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit(onSubmit)} className="contact-form">
      <div className="inputs">
        <div className="form-field-wrapper">
          <AntdTextField
            name="CardholderName"
            type="text"
            placeholder={t('Cardholder Name*')}
            label={t('Cardholder Name*')}
            errorMsg={errors?.CardholderName?.message}
            validateStatus={errors?.CardholderName ? 'error' : ''}
            control={control}
          />
        </div>
        <div className="form-field-wrapper">
          <AntdTextField
            name="CardNumber"
            type="number"
            label={t('Card Number *')}
            errorMsg={errors?.CardNumber?.message}
            validateStatus={errors?.CardNumber ? 'error' : ''}
            control={control}
          />
        </div>
        <div className="form-field-wrapper">
          <AntdTextField
            name="cvv"
            type="number"
            label={t('cvv *')}
            errorMsg={errors?.cvv?.message}
            validateStatus={errors?.cvv ? 'error' : ''}
            control={control}
          />
        </div>
      </div>
      <div className="btns">
        <button className="close" onClick={() => setform(1)}>
          back
        </button>
        <Button className="next" htmlType="submit" type="primary" loading={isSubmitting}>
          {t(`Donate`)}
        </Button>
      </div>
    </Form>
  );
};

export default Payment;
