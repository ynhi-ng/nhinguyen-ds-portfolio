(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  document.body.classList.add("has-sparkle-cursor");

  var layer = document.createElement("div");
  layer.className = "sparkle-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  var last = 0;
  var toggle = false;
  document.addEventListener(
    "mousemove",
    function (e) {
      var now = Date.now();
      if (now - last < 45) return;
      last = now;
      toggle = !toggle;

      var spark = document.createElement("span");
      spark.className = "sparkle " + (toggle ? "sparkle--pink" : "sparkle--white");
      spark.style.left = e.clientX + "px";
      spark.style.top = e.clientY + "px";
      var size = 4 + Math.random() * 5;
      spark.style.width = size + "px";
      spark.style.height = size + "px";
      spark.style.setProperty("--dx", (Math.random() * 22 - 11).toFixed(1) + "px");
      spark.style.setProperty("--dy", (Math.random() * 16 - 14).toFixed(1) + "px");
      layer.appendChild(spark);
      window.setTimeout(function () {
        spark.remove();
      }, 650);
    },
    { passive: true }
  );
})();
