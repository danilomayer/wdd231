const courses = [
    // ...existing courses array...
];

function displayCourses() {
    const coursesSection = document.querySelector('.courses');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) {
            courseCard.classList.add('completed');
        } else {
            courseCard.classList.add('incomplete');
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>${course.description}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        `;
        coursesSection.appendChild(courseCard);
    });
}

document.addEventListener('DOMContentLoaded', displayCourses);
