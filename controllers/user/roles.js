const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (() => {
  ac.grant("student")
    .readOwn("profile")
    .updateOwn("profile")

  ac.grant("tutor")
    .extend("student")
    .readOwn("created-subject")
    .updateOwn("created-subject")
    .readAny("profile")

  ac.grant("admin")
    .extend("student")
    .extend("tutor")
    .updateAny("profile")
    .deleteAny("profile")

  return ac;
})();
