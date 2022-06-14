const linkButtons = document.querySelectorAll(".link-wrapper>a");
const detailedCourseDivs = document.querySelectorAll(".detailed-courses>div");
const firstCourse = detailedCourseDivs[0];
const secondCourse = detailedCourseDivs[1];
const thirdCourse = detailedCourseDivs[2];

linkButtons.forEach(linkButton => {
    linkButton.addEventListener("click", () => {
        let course = linkButton.getAttribute("href");
        if (course === "#operacao-de-maquinas-florestais") {
            firstCourse.classList.toggle("visible", true);
            secondCourse.classList.toggle("visible", false);
            thirdCourse.classList.toggle("visible", false);
        } else if (course === "#manutencao-de-maquinas-florestais") {
            firstCourse.classList.toggle("visible", false);
            secondCourse.classList.toggle("visible", true);
            thirdCourse.classList.toggle("visible", false);
        } else if (course === "#solda") {
            firstCourse.classList.toggle("visible", false);
            secondCourse.classList.toggle("visible", false);
            thirdCourse.classList.toggle("visible", true);
        }
    });
});