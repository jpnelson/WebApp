import Dispatcher from "../dispatcher/Dispatcher";

module.exports = {

  retrieveIssuesToFollow: function () {
    Dispatcher.loadEndpoint("retrieveIssuesToFollow");
  },

  retrieveIssuesForVoter: function () {
    Dispatcher.loadEndpoint("issuesRetrieve", {voter_issues_only: true, include_voter_follow_status: true});
  },

  issueFollow: function (issue_we_vote_id ) {
    Dispatcher.loadEndpoint("issueFollow", {issue_we_vote_id: issue_we_vote_id, follow: true, ignore: false} );
  },

  issueStopFollowing: function (issue_we_vote_id) {
    Dispatcher.loadEndpoint("issueFollow", {issue_we_vote_id: issue_we_vote_id, follow: false, ignore: false} );
  },

  retrieveIssuesForOrganization: function (organization_we_vote_id) {
    Dispatcher.loadEndpoint("issuesToLinkToForOrganization", {organization_we_vote_id: organization_we_vote_id});
  },
};
