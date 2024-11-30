function selectBox(boxId) {
  const boxes = document.querySelectorAll(".box");
  const options = document.querySelectorAll(".options");

  // Reset all boxes
  boxes.forEach((box) => {
    box.classList.remove("most-popular");
    const option = box.querySelector(".options");
    if (option) option.classList.add("hidden");
  });

  // Highlight selected box and show options if applicable
  const selectedBox = document.getElementById(`box${boxId}`);
  selectedBox.classList.add("most-popular");

  const selectedOptions = selectedBox.querySelector(".options");
  if (selectedOptions) {
    selectedOptions.classList.remove("hidden");
  }
}
