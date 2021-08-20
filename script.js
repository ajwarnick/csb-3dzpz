document.addEventListener("DOMContentLoaded", () => {
  let syllabus = document.getElementById("syllabus");
  document.documentElement.style.setProperty(
    "--columns",
    syllabus.children.length
  );
});
