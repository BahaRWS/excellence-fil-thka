const resultsContainer = document.getElementById("container-results");
const input = document.getElementById("searchpanel");

let courses = [];

// Load the courses from courses.json
async function loadCourses() {
    try {
        const response = await fetch("courses.json");

        if (!response.ok) {
            throw new Error("Could not load courses.json");
        }

        courses = await response.json();

    } catch (error) {
        console.error("Error loading courses:", error);
    }
}

loadCourses();


// Search when the user types
input.addEventListener("input", function () {

    const text = input.value.trim().toLowerCase();

    resultsContainer.innerHTML = "";

    if (text === "") {
        return;
    }

    const results = courses.filter(function (course) {

        return course.name.toLowerCase().includes(text);

    });


    // Display the results
    results.forEach(function (course) {

        // Course name
        const result = document.createElement("div");

        result.textContent = course.name;
        result.className = "result";

        resultsContainer.appendChild(result);


        // Cours button
        const courseButton = document.createElement("button");

        courseButton.textContent = "Cours";
        courseButton.className = "course_button";

        courseButton.addEventListener("click", function () {

            window.location.href = "courses/" + course.file;

        });

        resultsContainer.appendChild(courseButton);


        // Series button
        const seriesButton = document.createElement("button");

        seriesButton.textContent = "Series";
        seriesButton.className = "series_button";

        seriesButton.addEventListener("click", function () {

            window.location.href =
                "series/" + course.file;

        });

        resultsContainer.appendChild(seriesButton);


        // Devoir button
        const devoirButton = document.createElement("button");

        devoirButton.textContent = "Devoir";
        devoirButton.className = "devoir_button";

        devoirButton.addEventListener("click", function () {

            window.location.href =
                "devoirs/" + course.file;

        });

        resultsContainer.appendChild(devoirButton);

    });

});
