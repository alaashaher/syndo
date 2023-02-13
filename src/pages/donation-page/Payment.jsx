import React from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'antd';
import { useForm } from 'react-hook-form';

import AntdTextField from '../../common/antd-form-components/AntdTextField';
import { yupResolver } from '@hookform/resolvers/yup';

import './DonationPage.scss';
import { useNavigate } from 'react-router-dom';
import routerLinks from '../../components/app/routerLinks';

import info from '../../assets/imgs/icons/info1.png';
const Payment = ({ setform }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const CONTACT_FORM_SCHEMA = Yup.object().shape({
    CardNumber: Yup.string().required(t(`Card Number is required`)),
    CardholderName: Yup.string().required(t(`Card holder Name is required`)),
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
      Gender: 1,
      DonationAmount: 0
    }
  });

  const [form] = Form.useForm();
  const onSubmit = async (data) => {
    navigate(routerLinks.donationSuccess);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit(onSubmit)} className="contact-form">
      <div className="inputs">
        <div>
          <div className="form-field-wrapper">
            <AntdTextField
              name="DonationAmount"
              type="text"
              placeholder={t('Donation Amount*')}
              label={t('Donation Amount*')}
              errorMsg={errors?.DonationAmount?.message}
              validateStatus={errors?.DonationAmount ? 'error' : ''}
              control={control}
            />
          </div>
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
              name="cvv"
              type="number"
              label={t('cvv *')}
              errorMsg={errors?.cvv?.message}
              validateStatus={errors?.cvv ? 'error' : ''}
              control={control}
            />
          </div>
        </div>
        <div>
          <div className="form-field-wrapper">
            <div className="cashback">
              <div className="cash">
                Cashback (10%) <img src={info} alt="info" />
              </div>
              <div className="">100 EGP</div>
            </div>
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
              name="ExpireDate"
              type="date"
              label={t('Expire Date*')}
              errorMsg={errors?.ExpireDate?.message}
              validateStatus={errors?.ExpireDate ? 'error' : ''}
              control={control}
            />
          </div>
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
