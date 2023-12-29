$(document).ready(function () {
    $("#menu-toggle").click(function () {
      $("#sidebar").toggleClass("active");
    });

    // Menü dışında bir yere tıklandığında menüyü kapat
    $(document).on("click", function (e) {
      if (!$(e.target).closest("#sidebar, #menu-toggle").length) {
        $("#sidebar").removeClass("active");
      }
    });
  });