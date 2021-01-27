/*Source : https://a11y-guidelines.orange.com/fr/web/exemples-de-composants/listbox-avec-cases-a-cocher/ */

/*Used for the mouse interaction */
/*When the element checkbox is clicked the aria-checked attribute status will change true->false */
$("[type=checkbox]").on("click", function () {
    if ($(this).prop("checked")) {
        $(this).parent().attr("aria-checked", "true");
    } else {
        $(this).parent().attr("aria-checked", "false");
    }
});

/*TODO : Check why I can't navigate with my keyboard in the page / Check with space bar is ok  */

/*Used for the keyboard interaction */
/* Elements has to be checked using the keyboard space-bar */
$("[role=listbox]").on("keydown", function (e) {
    var currentItem = $(this).find("[aria-selected=true]");
    switch (e.keyCode) {
        case 38:  // Up arrow
            if (currentItem.prev().length) {
                currentItem.attr("aria-selected", "false");
                currentItem.prev().attr("aria-selected", "true").focus();
            }
            e.preventDefault();
            break;
        case 40: // Down arrow
            if (currentItem.next().length) {
                currentItem.attr("aria-selected", "false");
                currentItem.next().attr("aria-selected", "true").focus();
            }
            e.preventDefault();
            break;
              case 32: // Space 
            if (currentItem.attr("aria-checked") === "true") {
                currentItem.attr("aria-checked", "false");
                currentItem.find("input[type=checkbox]").prop("checked", false);
            } else {
                currentItem.attr("aria-checked", "true");
                currentItem.find("input[type=checkbox]").prop("checked", true);
            }
            e.preventDefault();
        break;
  
    }
  });

  /*Print the page with win */
  function print_page(){
      window.print();
  }

  /*TODO */
  /*Count the clics*/
  count : function(){

    var count=0
    document.getElementById("like").onclick=function(){
          count += count;
          listTitle.innerHTML = count
        }
      }
  
  