import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

function Hello({ name, t }) {
  return <h1>{t("hello", { name })}</h1>;
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Hello);
