import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    if (this.props.surveys.length)
      return this.props.surveys.reverse().map((survey) => {
        return (
          <div className="card darken-1" key={survey._id}>
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        );
      });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { surveys: state.survey };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSurveys: () => dispatch(actions.fetchSurveys()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);
