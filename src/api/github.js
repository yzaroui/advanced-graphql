const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

if (process.env.NODE_ENV !== "testing") {
  octokit.auth({
    type: "token",
    token: process.env.GITHUB_TOKEN
  });
}

const reposForOrg = () => {
  return octokit.repos
    .getForOrg({
      org: "tipeio",
      type: "public"
    })
    .then(({ data }) => {
      return data;
    });
};

module.exports = {
  reposForOrg
};
