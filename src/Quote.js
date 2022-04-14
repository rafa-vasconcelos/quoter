import React from "react"

function Quote(props) {
    return(
        <div className="quote-block">
    <h4 className="quote">"{props.questionData.quote}"</h4>
    <br/>
    <h4 className="author">- {props.questionData.author}</h4>

        </div>
    )
}

export default Quote;