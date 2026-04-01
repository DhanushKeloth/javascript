const listitems = document.querySelectorAll("#item-list li");
const list = document.getElementById("item-list");
let draggedItem = null;
listitems.forEach((item) => {
  // console.log(item.textContent)
  item.addEventListener("dragstart", (e) => {
    draggedItem = item;
    item.classList.add("dragging"); //add class dragging when the drag starts
  });
  item.addEventListener("dragend", (e) => {
    item.classList.remove("dragging"); //remove class dragging when the drag ends
  });
  item.addEventListener("dragover", (e) => {
    e.preventDefault();
    // console.log("drag over",item.textContent)
    item.classList.add("over");
  });
  item.addEventListener("dragleave", (e) => {
    console.log("drag leave", item.textContent);
    item.classList.remove("over");
  });

  item.addEventListener("drop", (e) => {
    //remove the border when the item is dropped
    item.classList.remove("over");

    //drop the dragged item when both the dragged item and the drop target are not the same
    if (item !== draggedItem) {
      let allitems = [...list.children];

      let draggedIndex = allitems.indexOf(draggedItem);
      let dropIndex = allitems.indexOf(item);
      //if the dragged item is before the drop target, insert the dragged item after the drop target, otherwise insert it before the drop target
      if (draggedIndex < dropIndex) {
        list.insertBefore(draggedItem, item.nextSibling);
      } else {
        list.insertBefore(draggedItem, item);
      }
    }
  });
});
