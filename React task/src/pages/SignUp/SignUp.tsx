import React from 'react';
import { AuthContext } from 'contexts/AuthContext';
import { Formik } from 'formik';
import TextInputField from 'components/generic/TextInputField';
import styles from './SignUp.module.css';
import { SignUpSchema } from './Schema';

type FormValues = {
  name: string;
  username: string;
  password: string;
};

function SignIn({ name, username, password }: FormValues) {
  return (
    <AuthContext.Consumer>
      {({ user, error, signUp }) => (
        <div className={styles.sign_up}>
          <Formik
            initialValues={{
              name: '',
              username: '',
              password: '',
            }}
            onSubmit={async (values, actions) => {
              await signUp(values);
              actions.setSubmitting(false);
            }}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={SignUpSchema}
          >
            {({ handleSubmit, isSubmitting }) => (
              <div className={styles.form}>
                <form name="signup" onSubmit={handleSubmit}>
                  <TextInputField
                    className={styles.input}
                    name="name"
                    label="Name:"
                  />
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
                      {isSubmitting ? 'Submitting...' : 'Sign Up'}
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
