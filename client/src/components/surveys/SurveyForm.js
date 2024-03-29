import React from "react";
import { Field, reduxForm } from "redux-form";
import SurveyField from "./SurveyField";
import _ from "lodash";
import validateEmail from "../../utils/validateEmail";
import { Link } from "react-router-dom";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipeient List", name: "recipients" },
];
class SurveyForm extends React.Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <br />
          <br />
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  errors.emails = validateEmail(values.emails || "");
  return errors;
}
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
