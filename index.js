function main() {
  $("#js-shopping-list-form").submit(function (e) {
    e.preventDefault();
    const item = $("#shopping-list-entry").val();
    $(".shopping-list").append(
      `<li> 
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle"><span class="button-label">check</span></button>
        <button class="shopping-item-delete"><span class="button-label">delete</span></button>
      </div>
    </li>`
    );
  });

  $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    $(event.target).closest("li").remove();
  });

  $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {

    console.log(event)
    $(this)
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-Item__checked");
  });
}

$(main);
// waits for the document.ready event to load in our event listeners
