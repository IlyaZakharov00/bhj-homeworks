const hasTooltip = document.querySelectorAll(".has-tooltip");
for (const element of hasTooltip) {
  let tooltipElement;
  tooltipElement = document.createElement("div");
  tooltipElement.classList.add("tooltip");
  tooltipElement.textContent = element.getAttribute("title");

  element.addEventListener("click", (event) => {
    const coords = element.getBoundingClientRect();
    tooltipElement.style.left = coords.left + "px";
    tooltipElement.style.top = coords.bottom + "px";

    tooltipElement.classList.toggle("tooltip_active");
    event.preventDefault();
    document.body.appendChild(tooltipElement);
  });
}
