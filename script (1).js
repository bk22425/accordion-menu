document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const tab = button.getAttribute("data-tab");
        document.querySelectorAll(".accordion-set").forEach(set => {
            set.style.display = set.id === tab ? "block" : "none";
        });
    });
});

document.querySelectorAll(".accordion").forEach(button => {
    button.addEventListener("click", () => {
        const panel = button.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});
