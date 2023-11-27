// Add interactive game features here

document.addEventListener('DOMContentLoaded', function () {
    const studentInfos = document.querySelectorAll('.student-info');

    studentInfos.forEach(info => {
        info.addEventListener('click', function () {
            alert('Congratulations! You found a secret feature!');
        });
    });
});
