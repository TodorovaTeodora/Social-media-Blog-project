import React from 'react';
import { AuthContext } from 'contexts/AuthContext';
import { Formik } from 'formik';
import { SignInSchema } from 'pages/SignIn/Schema';
import TextInputField from 'components/generic/TextInputField';
import styles from './SignIn.module.css';

type FormValues = {
  username: string;
  password: string;
};

function SignIn({ username, password }: FormValues) {
  return (
    <AuthContext.Consumer>
      {({ user, error, signIn }) => (
        <div className={styles.sign_in}>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={async (values, actions) => {
              await signIn(values);
              actions.setSubmitting(false);
            }}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={SignInSchema}
          >
            {({ handleSubmit, isSubmitting }) => (
              <div className={styles.form}>
                <form name="signin" onSubmit={handleSubmit}>
                  <TextInputField
                    className={styles.input}
                    name="username"
                    label="Username:"
                  />
                  <TextInputField
                    className={styles.input}
                    type="password"
                    name="password"
                    label="Password:"
                    autoComplete="current-password"
                  />
                  <div className={styles.button_wrapper}>
                    <button
                      className={styles.button}
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? 'Submitting...' : 'Sign In'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>
      )}
    </AuthContext.Consumer>
  );
}

export default SignIn;
