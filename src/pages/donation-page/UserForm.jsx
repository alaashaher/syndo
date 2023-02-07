import React from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import ButtonWithLoading from '../../common/button-with-loading/ButtonWithLoading';
import { useTranslation } from 'react-i18next';

const UserForm = () => {
  const { t, i18n } = useTranslation();

  const CONTACT_FORM_SCHEMA = Yup.object().shape({
    name: Yup.string().required(t(`name.errors.required`)),
    phone_number: Yup.string()
      .required(t(`phone_number.errors.required`))
      .matches(/^[0-9]+$/, t(`phone_number.errors.Number`)),
    email_address: Yup.string()
      .email(t(`email_address.errors.type_error`))
      .required(t(`email_address.errors.required`)),
    msg_desc: Yup.string().required(t(`msg_desc.errors.required`))
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email_address: '',
        phone_number: '',
        website: '',
        msg_desc: ''
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {}}
      validationSchema={CONTACT_FORM_SCHEMA}>
      {({ values, isSubmitting, handleSubmit, errors, touched, setSubmitting, resetForm }) => (
        <>
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            autoComplete="off"
            id="contact-form">
            <div className="form-field-wrapper">
              <p className="field-label">{t(`name.label`)}</p>
              <Field
                component={TextField}
                name="name"
                type="text"
                variant="outlined"
                color="primary"
                className="form-field"
              />
            </div>
            <div className="form-field-wrapper">
              <p className="field-label">{t(`email_address.label`)}</p>
              <Field
                component={TextField}
                name="email_address"
                type="text"
                variant="outlined"
                color="primary"
                className="form-field"
              />
            </div>

            <div className="form-field-wrapper">
              <p className="field-label">{t(`phone_number.label`)}</p>
              <Field
                component={TextField}
                name="phone_number"
                type="text"
                variant="outlined"
                color="primary"
                className="form-field"
              />
            </div>

            <div className="form-field-wrapper">
              <p className="field-label">{t(`website.label`)}</p>
              <Field
                component={TextField}
                name="website"
                type="text"
                variant="outlined"
                color="primary"
                className="form-field"
              />
            </div>

            <ButtonWithLoading
              isSubmitting={isSubmitting}
              errors={errors}
              btnText={t(`send_btn.title`)}
              loadingMsg={t(`send_btn.loading`)}
              className="submit-btn submit-form-btn"
              form="contact-form"
            />
          </form>

          {/* <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
          <pre>{JSON.stringify(touched, null, 2)}</pre> */}
        </>
      )}
    </Formik>
  );
};

export default UserForm;
