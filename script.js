// Console output required by rubric
console.log("D276 Portfolio: script.js loaded and running.");

// Populate current date in the resume div required by rubric
document.addEventListener("DOMContentLoaded", function () {
  const dateDiv = document.getElementById("currentDate");
  if (dateDiv) {
    const now = new Date();
    const formatted = now.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    dateDiv.textContent = "Today is: " + formatted;
  }

  // Optional year stamps (safe, does not affect rubric)
  const year = new Date().getFullYear();
  ["yearStamp", "yearStamp2", "yearStamp3"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });

