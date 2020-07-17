import React from "react";
import { Formik } from "formik";
import { Input, Button, Tag } from "antd";
import { addNewGame } from "../client";

const inputBottomMargin = { marginBottom: "10px" };
const tagStyle = {
  backgroundColor: "red",
  color: "white",
  ...inputBottomMargin,
};

const AddGameForm = (props) => (
  <Formik
    initialValues={{ name: "", genre: "", rating: "", logo: "" }}
    validate={(values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name of game is required";
      }

      if (!values.genre) {
        errors.genre = "Genre of game is required";
      }

      if (!values.rating) {
        errors.rating = "Rating of game is required";
      } else if (
        !["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(
          values.rating
        )
      ) {
        errors.rating = "Rating must be between 1 and 10";
      }

      if (!values.logo) {
        errors.logo = "Logo of game is required";
      }

      return errors;
    }}
    onSubmit={(game, { setSubmitting }) => {
      addNewGame(game).then(() => {
        props.onSuccess();
        setSubmitting(false);
      });
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

      submitForm,

      isValid,

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

        {errors.name && touched.name && (
          <Tag style={tagStyle}>{errors.name}</Tag>
        )}

        <Input
          style={inputBottomMargin}
          name="genre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.genre}
          placeholder="Genre of the game"
        />

        {errors.genre && touched.genre && (
          <Tag style={tagStyle}>{errors.genre}</Tag>
        )}

        <Input
          style={inputBottomMargin}
          name="rating"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.rating}
          placeholder="Rating of the game (10=Amazing-1=Bad)"
        />

        {errors.rating && touched.rating && (
          <Tag style={tagStyle}>{errors.rating}</Tag>
        )}

        <Input
          style={inputBottomMargin}
          name="logo"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.logo}
          placeholder="Link to game logo"
        />

        {errors.logo && touched.logo && (
          <Tag style={tagStyle}>{errors.logo}</Tag>
        )}

        <Button
          onClick={() => submitForm()}
          type="submit"
          disabled={isSubmitting || (touched && !isValid)}
        >
          Submit
        </Button>
      </form>
    )}
  </Formik>
);

export default AddGameForm;
