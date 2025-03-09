// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Course Details Modal
function showCourseDetails(course) {
    const courseData = {
        html: {
            title: "HTML Basics",
            description: "This course covers the fundamentals of HTML, including elements, tags, and structure.",
            company: "Google"
        },
        css: {
            title: "CSS Styling",
            description: "Learn how to style your website using CSS, including flexbox, grid, and animations.",
            company: "Coursera"
        },
        js: {
            title: "JavaScript Essentials",
            description: "Master JavaScript fundamentals to make your website interactive and dynamic.",
            company: "Udemy"
        },
        react: {
            title: "React Fundamentals",
            description: "Understand React components, state management, and hooks to build powerful web apps.",
            company: "Meta (Facebook)"
        },
        node: {
            title: "Node.js Backend",
            description: "Learn server-side programming with Node.js, Express, and API development.",
            company: "Microsoft"
        },
        mongodb: {
            title: "MongoDB Basics",
            description: "Manage databases efficiently using MongoDB and Mongoose.",
            company: "MongoDB University"
        }
    };

    document.getElementById('course-title').innerText = courseData[course].title;
    document.getElementById('course-description').innerText = courseData[course].description;
    document.getElementById('course-company').innerText = courseData[course].company;
    document.getElementById('course-modal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('course-modal').style.display = 'none';
}
