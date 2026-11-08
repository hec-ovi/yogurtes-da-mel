(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector("#menu");
  var year = document.querySelector("#year");
  var mq = window.matchMedia("(max-width: 1040px)");

  if (year) year.textContent = String(new Date().getFullYear());

  var bar = document.querySelector(".mobile-order");
  var heroCta = document.querySelector(".hero .btn-leaf");
  if (bar && heroCta && "IntersectionObserver" in window) {
    var barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        bar.classList.toggle("is-hidden", entry.isIntersecting);
      });
    });
    barObserver.observe(heroCta);
  }

  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Fechar" : "Menu";
    document.body.classList.toggle("menu-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(!menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });

  function closeIfDesktop() {
    if (!mq.matches) setOpen(false);
  }

  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", closeIfDesktop);
  } else if (typeof mq.addListener === "function") {
    mq.addListener(closeIfDesktop);
  }

  var links = Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]'));
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.removeAttribute("aria-current");
        });
        var current = menu.querySelector('a[href="#' + entry.target.id + '"]');
        if (current) current.setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
