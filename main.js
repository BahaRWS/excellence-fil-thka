const resultsContainer = document.getElementById("container-results");
const input = document.getElementById("searchpanel");
input.addEventListener("input", async function () {
    let text = input.value;

    resultsContainer.innerHTML = "";

    if (text === "") {
        return;
    }

    try {

        const response = await fetch(
            "main.php?input=" + encodeURIComponent(text)
        );

        const results = await response.json();

        for (let i = 0; i < results.length; i++) {

            let courseName = results[i].name;

            let result = document.createElement("div");

            result.textContent = courseName;
            result.className = "result";

            resultsContainer.appendChild(result);


            let course_button = document.createElement("button");

            course_button.textContent = "Cours";
            course_button.className = "course_button";

            course_button.addEventListener("click", async function () {

                const response = await fetch(
                    "course.php?course=" +
                    encodeURIComponent(courseName)
                );

                const content = await response.text();

                resultsContainer.innerHTML = content;

            });

            resultsContainer.appendChild(course_button);


            let series_button = document.createElement("button");

            series_button.textContent = "Series";
            series_button.className = "series_button";

            series_button.addEventListener("click", async function () {

                const response = await fetch(
                    "series.php?course=" +
                    encodeURIComponent(courseName)
                );

                const content = await response.text();

                resultsContainer.innerHTML = content;

            });

            resultsContainer.appendChild(series_button);


            let devoir_button = document.createElement("button");

            devoir_button.textContent = "Devoir";
            devoir_button.className = "devoir_button";

            devoir_button.addEventListener("click", async function () {

                const response = await fetch(
                    "devoir.php?course=" +
                    encodeURIComponent(courseName)
                );

                const content = await response.text();

                resultsContainer.innerHTML = content;

            });

            resultsContainer.appendChild(devoir_button);
        }

    } catch (error) {

        console.error("Error:", error);

    }

});