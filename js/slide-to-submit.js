// SLide to whatsapp

$(".slide-submit button")
  .draggable({
    cancel: false,
    containment: "parent",
    axis: "x",
    stop: function () {
      console.log($(this).parent().width());
      console.log($(this).position().left);
      if ($(this).parent().width() / 2 < $(this).position().left + 100) {
        https: location.href =
          "https://api.whatsapp.com/send?phone=918050563570&text=Hi%20Team.%20I%20am%20Interested%20In%20Knowing%20More%20About%20Godrej%20Khargar.%20Please%20Send%20Me%20More%20Details.";

        $(this).next().css({ "margin-left": 0 }).text("Launching WhatsApp");
        $(this).draggable("false");
        $(this).closest("form").submit();
        $(".slide-submit button").css("left", "0px");
      } else {
        $(this).css({ left: 0 });
        //   alert()
      }
    },
  })
  .on("click", function () {
    return false;
    alert();
  });

document.addEventListener("touchstart", touchHandler, true);
document.addEventListener("touchmove", touchHandler, true);
document.addEventListener("touchend", touchHandler, true);
document.addEventListener("touchcancel", touchHandler, true);
function touchHandler(event) {
  var touch = event.changedTouches[0];

  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(
    {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
    }[event.type],
    true,
    true,
    window,
    1,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    false,
    false,
    false,
    false,
    0,
    null,
  );

  touch.target.dispatchEvent(simulatedEvent);
  //   event.preventDefault();
}
