// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseRender = Number(license);
  switch (licenseRender)  {
    case 1: {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    };
      break;
    case 2: {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    };
      break;
    case 3: {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    };
      break;
    case 4: {
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    };
      break;
    case 5: {
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    };
      break;
    default: {
      return ''
    };
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseRender = Number(license);
    switch (licenseRender) {
      case 1: {
        return 'https://opensource.org/licenses/Apache-2.0'
      };
        break;
      case 2: {
        return 'https://www.gnu.org/licenses/gpl-3.0'
      };
        break;
      case 3: {
        return 'https://opensource.org/licenses/MIT'
      };
        break;
      case 4: {
        return 'https://opensource.org/licenses/ISC'
      };
        break;
      case 5: {
        return 'https://opensource.org/licenses/MPL-2.0'
      };
      break;
      default: {
        return ''
      };
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseRender = Number(license);
  switch (licenseRender) {
    case 1: {
      return `\n
      Licensed under Apache License 2.0.
      \n`
    };
      break;
    case 2: {
      return `\n
      Licensed under GNU General Public License (GPL v3)
      \n`
    };
      break;
    case 3: {
      return `\n
      Licensed under the MIT license.
      \n`
    };
      break;
    case 4: {
      return `\n
      Licensed under ISC.
      \n`
    };
      break;
    case 5: {
      return `\n
      Licensed under Mozilla Public License 2.0.
      \n`
    };
      break;
      default: {
      return ''
      };
   }
}   
    
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let bdg = renderLicenseBadge(data.license);
  let licenseSec = renderLicenseSection(data.license);
  let licenseLink = renderLicenseLink(data.license);
  return `
  # ${data.title}
  ${bdg}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [License](#license)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contribute}
  ### nhani.nasser@gmail.com
  ### https://github.com/nhaninasser
  ## Testing
  ${data.test}
  ## License
  ${licenseSec}
  \nFind a copy of this license here:\n
  ${licenseLink}
`;
}

module.exports = generateMarkdown;
