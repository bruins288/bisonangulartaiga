module.exports.login = function (req, res) {
  res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password,
    },
  });
};
module.exports.reports = function (req, res) {
  res.status(200).json({
    reports: "reports from controller",
  });
};
module.exports.settings = function (req, res) {
  res.status(200).json({
    settings: "settings from controller",
  });
};
