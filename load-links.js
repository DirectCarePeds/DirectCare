const site_links ={
    text_plan: "https://directcare.hint.com/signup/text-membership",
    full: "https://directcare.hint.com/signup/full-membership",
    meet_and_greet: "https://directcare.hint.com/booking?appointment-type=appty-5121a2ad381de07d"
}

document.addEventListener("DOMContentLoaded", () => {
// Example: update links by ID or class
    document.querySelectorAll("[data-link]").forEach(el => {
        const key = el.dataset.link;
        if (site_links[key]) {
        el.href = site_links[key];
        }
    });
});