import React from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import ButtonWithLoading from '../../common/button-with-loading/ButtonWithLoading';
import { useTranslation } from 'react-i18next';
// import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
const UserForm = () => {
  const { t, i18n } = useTranslation();

  const CONTACT_FORM_SCHEMA = Yup.object().shape({
    name: Yup.string().required(t(`name.errors.required`))
  });

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        date: ''
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
            <div className="inputs">
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
                <p className="field-label">{t(`date.label`)}</p>
                {/* <Field component={DatePicker} name="date" label="Date" inputFormat="MM/dd/yyyy" /> */}
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </MuiPickersUtilsProvider> */}
              </div>
            </div>
            <div className="btns">
              <button className="close">close</button>
              <ButtonWithLoading
                isSubmitting={isSubmitting}
                errors={errors}
                btnText={t(`send_btn.title`)}
                loadingMsg={t(`send_btn.loading`)}
                className="next"
                form="contact-form"
              />
            </div>
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
