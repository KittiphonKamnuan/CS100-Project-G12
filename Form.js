function validateForm() {
    // Clear previous error messages
    document.getElementById('errorMessage').innerHTML = '';

    // Your validation logic here
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

    if (!nameEnglish) {
        displayErrorMessage('Please enter Name (English).');
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

    // Additional validations
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

    // Add more validations for other fields as needed

    // Simulate form submission and display a response
    var responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = 'Form submitted successfully!'; // You can replace this with the actual server response

    // Prevent the actual form submission
    return false;
}

function displayErrorMessage(message) {
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = message;
}

function validateForm() {
    // ... (รหัส JavaScript ของคุณ)

    // เพิ่มโค้ดสำหรับแสดงผลข้อมูลที่รับมา
    displaySubmittedData();

    // ป้องกันการส่งฟอร์มจริง ๆ
    return false;
}

function displaySubmittedData() {
    // เข้าถึง div สำหรับแสดงผล
    var displayDiv = document.getElementById('displayData');

    // เข้าถึง ul สำหรับแสดงรายการข้อมูล
    var submittedList = document.getElementById('submittedList');

    // เข้าถึงค่าข้อมูลจากฟอร์ม
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

    // สร้าง HTML สำหรับแสดงผล
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

    // แทรก HTML ลงในรายการ
    submittedList.innerHTML = listItemHTML;

    // แสดง div ที่มีข้อมูล
    displayDiv.style.display = 'block';
}
