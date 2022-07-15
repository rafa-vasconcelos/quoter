import React from "react";
import PropTypes from "prop-types";

function Quote(props) {
  Quote.propTypes = {
    questionData: PropTypes.string,
  };

  return (
    <div className="quote-block">
      <h4 className="quote">{`"${props.questionData.quote}"`}</h4>
      <h4 className="author">- {props.questionData.author}</h4>
    </div>
  );
}

export default Quote;
