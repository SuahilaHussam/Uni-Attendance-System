
document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.toLowerCase();
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.getElementById("sidebarToggle");
    const overlay = document.getElementById("sidebarOverlay");

    // Active Navigation Link
    document.querySelectorAll(".sidebar a.nav-item").forEach(link => {
        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        const linkPath = new URL(href, window.location.origin)
            .pathname.toLowerCase();

        if (
            linkPath === currentPath ||
            (linkPath !== "/" && currentPath.startsWith(linkPath + "/"))
        ) {
            link.classList.add("active");
        }
    });

    // Sidebar Controls
    function openSidebar() {
        sidebar?.classList.add("show");
        overlay?.classList.add("show");
        toggleButton?.setAttribute("aria-expanded", "true");
    }

    function closeSidebar() {
        sidebar?.classList.remove("show");
        overlay?.classList.remove("show");
        toggleButton?.setAttribute("aria-expanded", "false");
    }

    toggleButton?.addEventListener("click", function () {
        if (sidebar?.classList.contains("show")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    overlay?.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeSidebar();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 767) {
            closeSidebar();
        }
    });
});
