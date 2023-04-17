
fetch('path/to/json/file.json')
  .then(response => response.json())
  .then(data => {
    // do something with the parsed JSON data
  });

  const jsonDataDiv = document.getElementById('json-data');

  // Create a heading element for the personal information
  const personalInfoHeading = document.createElement('h2');
  personalInfoHeading.textContent = 'Personal Information';
  jsonDataDiv.appendChild(personalInfoHeading);
  
  // Create a paragraph element to display the age
  const ageParagraph = document.createElement('p');
  ageParagraph.textContent = `Age: ${data.personal_information.age}`;
  jsonDataDiv.appendChild(ageParagraph);
  
  // Create a paragraph element to display the country
  const countryParagraph = document.createElement('p');
  countryParagraph.textContent = `Country: ${data.personal_information.country}`;
  jsonDataDiv.appendChild(countryParagraph);
  
  // Create a paragraph element to display the hobbies
  const hobbiesParagraph = document.createElement('p');
  hobbiesParagraph.textContent = 'Hobbies:';
  jsonDataDiv.appendChild(hobbiesParagraph);
  
  // Create an unordered list to display the hobbies
  const hobbiesList = document.createElement('ul');
  jsonDataDiv.appendChild(hobbiesList);
  
  // Loop through the hobbies array and create list items for each hobby
  data.personal_information.hobbies.forEach(hobby => {
    const hobbyItem = document.createElement('li');
    hobbyItem.textContent = hobby;
    hobbiesList.appendChild(hobbyItem);
  });
  
  // Create a heading element for the previous workplaces
  const prevWorkplacesHeading = document.createElement('h2');
  prevWorkplacesHeading.textContent = 'Previous Workplaces';
  jsonDataDiv.appendChild(prevWorkplacesHeading);
  
  // Create an unordered list to display the previous workplaces
  const prevWorkplacesList = document.createElement('ul');
  jsonDataDiv.appendChild(prevWorkplacesList);
  
  // Loop through the previous workplaces array and create list items for each workplace
  data.previous_workplaces.forEach(workplace => {
    const workplaceItem = document.createElement('li');
    workplaceItem.textContent = `${workplace.position} (${workplace.year})`;
    prevWorkplacesList.appendChild(workplaceItem);
  });



/*
const cvContainer = document.getElementById('cv-container');

fetch('cv.json')
  .then(response => response.json())
  .then(data => {
    // Create heading for education section
    const educationHeading = document.createElement('h2');
    educationHeading.textContent = 'Education';
    cvContainer.appendChild(educationHeading);

    // Create list of education details
    const educationList = document.createElement('ul');
    data.education.forEach(education => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${education.degree}</strong><br>${education.university}<br>${education.year}`;
      educationList.appendChild(listItem);
    });
    cvContainer.appendChild(educationList);

    // Create heading for previous jobs section
    const jobsHeading = document.createElement('h2');
    jobsHeading.textContent = 'Previous Jobs';
    cvContainer.appendChild(jobsHeading);

    // Create list of job details
    const jobsList = document.createElement('ul');
    data.previous_jobs.forEach(job => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${job.position}</strong><br>${job.company}<br>${job.year}<br>${job.description}`;
      jobsList.appendChild(listItem);
    });
    cvContainer.appendChild(jobsList);
  });
  */