import React, { Component } from "react";
import { Formik } from "formik";
import { Input, Button } from "antd";

const inputBottomMargin = { marginBottom: "10px" };

class AddGameForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,

          errors,

          touched,

          handleChange,

          handleBlur,

          handleSubmit,

          isSubmitting,

          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              style={inputBottomMargin}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Title of the game"
            />

            {errors.name && touched.name && errors.name}

            <Input
              style={inputBottomMargin}
              name="genre"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.genre}
              placeholder="Genre of the game"
            />

            {errors.genre && touched.genre && errors.genre}

            <Input
              style={inputBottomMargin}
              name="rating"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.rating}
              placeholder="Rating of the game (10=Amazing-1=Bad)"
            />

            {errors.rating && touched.rating && errors.rating}

            <Input
              style={inputBottomMargin}
              name="logo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.logo}
              placeholder="Link to game logo"
            />

            {errors.logo && touched.logo && errors.logo}

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    );
  }
}

export default AddGameForm;
