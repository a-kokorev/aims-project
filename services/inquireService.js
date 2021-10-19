const inquirer = require('inquirer');

let token = "<INPUT ADO PAT>";
let filterTag = "";

module.exports.askAzureDevopsToken = () => {
  const questions = [
    {
      name: 'password',
      // FIXME: Type input is less secure for token, but better for testing
      // Type password should be used
      type: 'input',
      message: 'Enter your Azure DevOps personal access token:',
      validate: value => {
        if (value.length) {
          token = value;
          return true;
        } else {
          return 'Please enter your personal access token.';
        }
      }
    },
    {
      name: 'tag',
      type: 'input',
      message: 'Enter filter Tag (if none leave empty):',
      validate: value => {
        filterTag = value;
        return true;
      },
    }
  ];

  return inquirer.prompt(questions);
};

module.exports.getToken = () => token;
module.exports.getFilterTag = () => filterTag;
