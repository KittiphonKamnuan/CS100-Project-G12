const port = 8000;

function validateForm() {
    document.getElementById('errorMessage').innerHTML = '';

    var nameEnglish = document.getElementById('name_english').value;
    var studentId = document.getElementById('student_id_thai').value;
    var email = document.getElementById('email').value;
    var workTitle = document.getElementById('workTitle').value;
    var activityType = document.getElementById('activityType').value;
    var academicYear = document.getElementById('academicYear').value;
    var semester = document.getElementById('semester').value;
    var startDateTime = document.getElementById('startDateTime').value;
    var endDateTime = document.getElementById('endDateTime').value;
    var location = document.getElementById('location').value;
    var description = document.getElementById('description').value;

    if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(nameEnglish)) {
        displayErrorMessage('Please enter a valid name with at least one space between first name and last name.');
        return false;
    }

    if (!studentId || !/^\d{10}$/.test(studentId)) {
        displayErrorMessage('Please enter a valid 10-digit Student ID.');
        return false;
    }

    if (!email || !/^[a-zA-Z0-9._%+-]+@dome\.tu\.ac\.th$/.test(email)) {
        displayErrorMessage('Please provide a valid university email in the format "xxx.yyy@dome.tu.ac.th".');
        return false;
    }

    if (!workTitle) {
        displayErrorMessage('Please enter Work/Activity Title.');
        return false;
    }

    if (activityType === "") {
        displayErrorMessage('Please select Type of Work/Activity.');
        return false;
    }

    if (academicYear === "") {
        displayErrorMessage('Please select Academic Year.');
        return false;
    }

    if (semester === "") {
        displayErrorMessage('Please select Semester.');
        return false;
    }

    if (new Date(startDateTime) >= new Date(endDateTime)) {
        displayErrorMessage('End Date/Time must be greater than Start Date/Time.');
        return false;
    }

    var responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = 'Form submitted successfully!'; 

    displaySubmittedData();

    return false;
}

function displayErrorMessage(message) {
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = message;
}

function displaySubmittedData() {
    var displayDiv = document.getElementById('displayData');
    var submittedList = document.getElementById('submittedList');

    var nameEnglish = document.getElementById('name_english').value;
    var studentId = document.getElementById('student_id_thai').value;
    var email = document.getElementById('email').value;
    var workTitle = document.getElementById('workTitle').value;
    var activityType = document.getElementById('activityType').value;
    var academicYear = document.getElementById('academicYear').value;
    var semester = document.getElementById('semester').value;
    var startDateTime = document.getElementById('startDateTime').value;
    var endDateTime = document.getElementById('endDateTime').value;
    var location = document.getElementById('location').value;
    var description = document.getElementById('description').value;

    var listItemHTML = `
<li><strong>Name:</strong> ${nameEnglish}</li>
<li><strong>Student ID:</strong> ${studentId}</li>
<li><strong>Email:</strong> ${email}</li>
<li><strong>Work/Activity Title:</strong> ${workTitle}</li>
<li><strong>Type of Work/Activity:</strong> ${activityType}</li>
<li><strong>Academic Year:</strong> ${academicYear}</li>
<li><strong>Semester:</strong> ${semester}</li>
<li><strong>Start Date/Time:</strong> ${startDateTime}</li>
<li><strong>End Date/Time:</strong> ${endDateTime}</li>
<li><strong>Location:</strong> ${location}</li>
<li><strong>Description:</strong> ${description}</li>
    `;

    submittedList.innerHTML = listItemHTML;
    displayDiv.style.display = 'block';
}

 // JavaScript to handle the settings panel
const settingsButton = document.getElementById('settingsButton');
const settingsPanel = document.getElementById('settingsPanel');
const textSizeSelect = document.getElementById('textSize');

settingsButton.addEventListener('click', () => {
settingsPanel.style.display = 'block';
});

function closeSettings() {
settingsPanel.style.display = 'none';
}

textSizeSelect.addEventListener('change', () => {
const selectedTextSize = textSizeSelect.value;
document.body.style.fontSize = selectedTextSize === 'larger' ? '18px' : selectedTextSize === 'largest' ? '24px' : '16px';
});

