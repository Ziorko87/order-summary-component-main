let liElements = document.querySelectorAll("li");

liElements.forEach((li) => {
  li.addEventListener("mouseenter", () => {
    if (li.classList.contains("active")) {
      console.log(" ma");
    } else if (!li.classList.contains("active")) {
      liElements.forEach((li) => {
        li.classList.remove("active");
      });

      li.classList.add("active");

      console.log("nie ma");
    }
  });
});

const changeBtn = document.querySelector(".changePlan");
const changeDiv = document.querySelector(".saveChange");
const savegeBtn = document.querySelector(".saveChangeBtn");
const planDiv = document.querySelector(".plan");

changeBtn.addEventListener("click", () => {
  planDiv.classList.remove("flex");
  planDiv.classList.add("hidden");

  changeDiv.classList.remove("hidden");
  changeDiv.classList.add("flex");
});

savegeBtn.addEventListener("click", () => {
  planDiv.classList.add("flex");
  planDiv.classList.remove("hidden");

  changeDiv.classList.add("hidden");
  changeDiv.classList.remove("flex");
});
