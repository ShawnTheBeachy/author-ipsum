"use strict";

import { addPhrases, popPhrases, setGenerateCount } from "actions";
import { connect } from "react-redux";
import { map } from "lodash";
import PropTypes from "prop-types";
import React from "react";

function home ({ addPhrases, generateCount, phrases, popPhrases, setGenerateCount }) {
  return <div>
    <nav className="navbar navbar-dark bg-dark justify-content-center sticky-top">
      <a className="navbar-brand"
        href="/">Author Ipsum</a>
    </nav>
    <div className="text-center p-4">
      <div className="row justify-content-md-center mt-4">
          <button className="btn btn-outline-primary col col-sm-4 col-md-2 ml-3 ml-sm-0 mb-3 mb-sm-0 mr-3 mr-sm-0"
            onClick={() => addPhrases(generateCount)}>
            More
          </button>
          <div className="col-12 col-sm-4 col-md-3 col-lg-2">
              <div className="input-group">
                <input aria-label="Number of phrases to add or remove"
                  className="form-control"
                  onChange={(event) => setGenerateCount(event.target.value)}
                  type="number"
                  value={generateCount} />
                <span className="input-group-addon">
                  phrase{generateCount > 1 && "s"}</span>
              </div>
          </div>
          <button className="btn btn-outline-secondary col col-sm-4 col-md-2 ml-3 ml-sm-0 mt-3 mt-sm-0 mr-3 mr-sm-0"
            onClick={() => popPhrases(generateCount)}>
            Less
          </button>
      </div>

      <p className="mt-4">
        {map(phrases, (phrase, index) =>
          <span key={index}
            title={`${phrase.author}, ${phrase.source}`}>
            {phrase.text + " "}
          </span>)
        }
      </p>

      <div className="mb-1 mt-5">
        <hr />
        <span className="text-muted">
          Copyright {new Date().getFullYear()} by Tastes Like Turkey
        </span>
      </div>

    </div>
  </div>;
}

home.propTypes = {
  generateCount: PropTypes.number.isRequired,
  phrases: PropTypes.array.isRequired,
  setGenerateCount: PropTypes.func.isRequired
};

export default connect(
  (state) => ({
    generateCount: state.generateCount,
    phrases: state.phrases
  }),
  { addPhrases, popPhrases, setGenerateCount }
)(home);
