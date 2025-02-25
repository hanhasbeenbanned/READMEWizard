// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "GNU GPLv3") {
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    } else if (license === "Apache 2.0") {
        return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    } else if (license === "ISC") {
        return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return "https://opensource.org/licenses/MIT";
    } else if (license === "GNU GPLv3") {
        return "https://www.gnu.org/licenses/gpl-3.0";
    } else if (license === "Apache 2.0") {
        return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "ISC") {
        return "https://opensource.org/licenses/ISC";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    } else {
        return `## License
This project is licensed under the ${license} license.\n
${renderLicenseBadge(license)}
[Learn more about this license](${renderLicenseLink(license)})`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

 ## Table of Contents 
- [Installation](#installation) 
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Walkthrough](#walkthrough)
- [Questions](#questions)
- [Credits](#credits)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions, feel free to contact me at [${data.email}](mailto:${data.email}).\n  
  You can also explore more of my work on GitHub here: [${data.github}](https://github.com/${data.github}).

  ## Credits 
  ${data.credits}
  `;
}

export default generateMarkdown;
