$(function() {
  $("input").change(function() {
    var label = $(this)
      .parent()
      .find("span");
    if (typeof this.files != "undefined") {
      var file = this.files[0];
      var name = file.name;
      var size = (file.size / 1048576).toFixed(3); //size in mb
      label.addClass("withFile").text(name + " (" + size + "мб)");
    } else {
      var name = this.value.split("\\");
      label.addClass("withFile").text(name[name.length - 1]);
    }
    return false;
  });
  $("#uploadUser").on("submit", function(e) {
    e.preventDefault();
    this.submit();
  });
});
