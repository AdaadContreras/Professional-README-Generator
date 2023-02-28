function generateMarkdown(response) {
  let ToC = `## Table of Contents`;

  if (response.installation !== '') { ToC += `
  * [Installation](#installation)` };

  if (response.usage !== '') { ToC += `
  * [Usage](#usage)` };

  if (response.contributing != '') { ToC += `
  * [Contributing](#contributing)` };

  if (response.test !== '') { ToC += `
  * [Test](#test)` };

  let draftMarkdown = 
  `# ${response.title}

  ## Description
   ${response.description}
  `

  draftMarkdown += ToC;
  draftMarkdown += `
  * [License](#license)`;

  if (response.installation !== '') {
    draftMarkdown += `
    ## Installation
    ${response.installation}`
  };

  if (response.usage !== '') {
    draftMarkdown += `
    ## Usage
      ${response.usage}`
  };

  if (response.contribution !== '') {
    draftMarkdown += `
    ## Contribution
    ${response.contribution}`
  };

  if (response.test !== '') {
    draftMarkdown += `
    ## Test
    ${response.test}`
  };

  if (response.license !== '') {
    draftMarkdown += `
    ## License
    ${response.license}`
  };

  return draftMarkdown;
}
module.exports = generateMarkdown;
