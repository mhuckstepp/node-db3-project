const { findById } = require("./scheme-model");

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  findById(req.params.scheme_id)
    .then((user) => {
      if (user) {
        req.newBody = user;
        next();
      } else {
        res.status(404).json({
          message: `scheme with scheme_id ${req.params.id} not found`,
        });
      }
    })
    .catch((err) => {
      next(err);
    });
};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  if (!req.body.scheme_name || typeof req.body.scheme_name !== "string") {
    res.status(400).json({
      message: "invalid scheme_name",
    });
  } else {
    next();
  }
};

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  if (!req.body.instructions || typeof req.body.instructions !== "string") {
    res.status(400).json({
      message: "invalid step",
    });
  } else if (
    !req.body.step_number ||
    typeof req.body.step_number !== "number"
  ) {
    res.status(400).json({
      message: "invalid step",
    });
  } else {
    next();
  }
};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
