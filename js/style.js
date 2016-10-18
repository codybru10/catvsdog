$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Bark!</li>");
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
    });
  });

  $("button#bark").click(function() {
    $("ul#user").prepend("<li>Bark!</li>");
    $("ul#webpage").prepend("<li>Meow!</li>");
    $("ul#user").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
    });
  });
});
