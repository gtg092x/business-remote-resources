require("dotenv").config({path: './.env.local'})

// Get a collection of all variables that were defined in process.env and in the
// .env file, except for disallowed variables.
// See https://err.sh/zeit/next.js/env-key-not-allowed for more details.
function getAllAllowedEnvironmentVariables() {
  return Object.entries(process.env).reduce(
    (vars, [name, value]) =>
      /^(?:__|NODE_)/.test(name) ? vars : { ...vars, [name]: value },
    {},
  )
}

module.exports = {
  env: {
    // Make all variables that were defined in process.env and the .env file available at build time.
    ...getAllAllowedEnvironmentVariables(),
  },
}