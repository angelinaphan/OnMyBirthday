$(document).ready(function() {

    var images = [
      "img/1.png",
      "img/2.png",
      "img/3.png",
      "img/4.png",
      "img/5.png",
    ];

    var imageIndex = 0;
    var iLength = images.length - 1;

    $("#previous").on("click", function() {
      imageIndex = (imageIndex - 1);
      $("#image").attr('src', images[imageIndex]);

      $("#hoger").prop("disabled", false);
    });

    $("#hoger").on("click", function() {
      imageIndex = (imageIndex + 1);
      $("#image").attr('src', images[imageIndex]);
      if (imageIndex == iLength) {
        $(this).prop("disabled", true);
      }
    });

    $("#image").attr(images[0]);

  });