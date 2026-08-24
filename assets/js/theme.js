/* =========================================================
   DARSHAN BANE — SOFTWARE STORE
   Theme Configuration
   ========================================================= */

(function () {

    "use strict";


    /* -------------------------------------------------------
       DEFAULT STORE THEME
    ------------------------------------------------------- */

    const STORE_THEME = {

        name: "darshan-corporate",

        colors: {

            primary: "#172033",

            secondary: "#334155",

            accent: "#2563eb",

            neutral: "#0f172a",

            base100: "#ffffff",

            base200: "#f8fafc",

            base300: "#e2e8f0",

            info: "#0284c7",

            success: "#059669",

            warning: "#d97706",

            error: "#dc2626"

        }

    };


    /* -------------------------------------------------------
       PRODUCT THEMES
       
       Each MVP can have its own accent color.
       The overall corporate design remains consistent.
    ------------------------------------------------------- */

    const PRODUCT_THEMES = {

        followupdesk: {

            accent: "#2563eb",

            accentHover: "#1d4ed8"

        },


        quotedesk: {

            accent: "#7c3aed",

            accentHover: "#6d28d9"

        },


        assetdesk: {

            accent: "#059669",

            accentHover: "#047857"

        }

    };


    /* -------------------------------------------------------
       APPLY CSS VARIABLES
    ------------------------------------------------------- */

    function applyTheme(theme) {

        const root =
            document.documentElement;


        root.style.setProperty(
            "--brand-primary",
            theme.colors.primary
        );


        root.style.setProperty(
            "--brand-primary-hover",
            "#0f172a"
        );


        root.style.setProperty(
            "--brand-accent",
            theme.colors.accent
        );


        root.style.setProperty(
            "--brand-accent-hover",
            theme.colors.accent
        );


        root.style.setProperty(
            "--surface-page",
            theme.colors.base200
        );


        root.style.setProperty(
            "--surface-primary",
            theme.colors.base100
        );


        root.style.setProperty(
            "--surface-secondary",
            theme.colors.base200
        );


        root.style.setProperty(
            "--surface-dark",
            theme.colors.neutral
        );


        root.style.setProperty(
            "--text-primary",
            theme.colors.neutral
        );


        root.style.setProperty(
            "--text-secondary",
            theme.colors.secondary
        );


        root.style.setProperty(
            "--border-light",
            theme.colors.base300
        );


        root.dataset.theme =
            theme.name;

    }


    /* -------------------------------------------------------
       DETECT PRODUCT PAGE
       
       Example:
       
       products/followupdesk.html

       becomes:

       followupdesk
    ------------------------------------------------------- */

    function getProductId() {

        const path =
            window.location.pathname
                .toLowerCase();


        if (
            path.includes(
                "/followupdesk"
            )
        ) {

            return "followupdesk";

        }


        if (
            path.includes(
                "/quotedesk"
            )
        ) {

            return "quotedesk";

        }


        if (
            path.includes(
                "/assetdesk"
            )
        ) {

            return "assetdesk";

        }


        return null;

    }


    /* -------------------------------------------------------
       APPLY PRODUCT ACCENT
    ------------------------------------------------------- */

    function applyProductTheme() {

        const productId =
            getProductId();


        if (!productId) {

            return;

        }


        const productTheme =
            PRODUCT_THEMES[
                productId
            ];


        if (!productTheme) {

            return;

        }


        document.documentElement
            .style
            .setProperty(
                "--brand-accent",
                productTheme.accent
            );


        document.documentElement
            .style
            .setProperty(
                "--brand-accent-hover",
                productTheme.accentHover
            );

    }


    /* -------------------------------------------------------
       INITIALIZE
    ------------------------------------------------------- */

    function initializeTheme() {

        applyTheme({

            name:
                STORE_THEME.name,

            colors: {

                ...STORE_THEME.colors,

                accent:
                    STORE_THEME.colors.accent

            }

        });


        applyProductTheme();

    }


    /* -------------------------------------------------------
       PUBLIC API
       
       Allows future pages/components to change
       the theme without modifying this file.
    ------------------------------------------------------- */

    window.StoreTheme = {

        getStoreTheme: function () {

            return STORE_THEME;

        },


        getProductTheme: function (
            productId
        ) {

            return PRODUCT_THEMES[
                productId
            ] || null;

        },


        setAccent: function (
            color
        ) {

            document.documentElement
                .style
                .setProperty(
                    "--brand-accent",
                    color
                );

        },


        reset: function () {

            initializeTheme();

        }

    };


    /* -------------------------------------------------------
       START
    ------------------------------------------------------- */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeTheme
        );

    } else {

        initializeTheme();

    }

})();