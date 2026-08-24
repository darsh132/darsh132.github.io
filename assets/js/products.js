/* =========================================================
   DARSHAN BANE — SOFTWARE STORE
   Product Catalog
   ========================================================= */

const PRODUCTS = [

    /* =====================================================
       FOLLOWUPDESK
    ===================================================== */

    {
        id: "followupdesk",

        name: "FollowUpDesk",

        shortName: "FollowUpDesk",

        category: "Sales Operations",

        status: "Available",

        featured: true,


        /* -------------------------------------------------
           POSITIONING
        ------------------------------------------------- */

        tagline:
            "Turn scattered customer follow-ups into a structured sales workflow.",

        description:
            "A self-hosted customer follow-up and sales activity management application designed for teams that need a practical CRM-style workflow without unnecessary complexity.",


        /* -------------------------------------------------
           VISUALS
        ------------------------------------------------- */

        images: {

            hero:
                "assets/images/products/followupdesk/hero.webp",

            dashboard:
                "assets/images/products/followupdesk/dashboard.webp",

            customers:
                "assets/images/products/followupdesk/customers.webp",

            followups:
                "assets/images/products/followupdesk/followups.webp"

        },


        /* -------------------------------------------------
           TECHNOLOGY
        ------------------------------------------------- */

        technologies: [

            ".NET 8",

            "ASP.NET Core MVC",

            "Entity Framework Core",

            "SQL Server",

            "IIS"

        ],


        /* -------------------------------------------------
           PRODUCT HIGHLIGHTS
        ------------------------------------------------- */

        highlights: [

            "Customer management",

            "Follow-up scheduling",

            "Sales activity tracking",

            "Task management",

            "Dashboard reporting",

            "Self-hosted deployment"

        ],


        /* -------------------------------------------------
           DEPLOYMENT
        ------------------------------------------------- */

        deployment: {

            type: "Self-hosted",

            platform: "Windows",

            server: "IIS",

            database: "SQL Server",

            framework: ".NET 8"

        },


        /* -------------------------------------------------
           LICENSING
        ------------------------------------------------- */

        licensing: {

            model: "Commercial license",

            trial: true,

            trialDays: 15,

            activation:
                "License-based activation"

        },


        /* -------------------------------------------------
           LINKS
        ------------------------------------------------- */

        links: {

            product:
                "products/followupdesk.html",

            demo:
                "#",

            documentation:
                "#",

            support:
                "#"

        }

    },


    /* =====================================================
       QUOTEDESK
    ===================================================== */

    {
        id: "quotedesk",

        name: "QuoteDesk",

        shortName: "QuoteDesk",

        category: "Sales & Quotation",

        status: "Available",

        featured: true,


        /* -------------------------------------------------
           POSITIONING
        ------------------------------------------------- */

        tagline:
            "Create professional quotations without rebuilding the same document every time.",

        description:
            "A quotation management application for businesses that need reusable quotation templates, structured customer information, branding and professional document generation.",


        /* -------------------------------------------------
           VISUALS
        ------------------------------------------------- */

        images: {

            hero:
                "assets/images/products/quotedesk/hero.webp",

            dashboard:
                "assets/images/products/quotedesk/dashboard.webp",

            quotation:
                "assets/images/products/quotedesk/quotation.webp",

            templates:
                "assets/images/products/quotedesk/templates.webp"

        },


        /* -------------------------------------------------
           TECHNOLOGY
        ------------------------------------------------- */

        technologies: [

            ".NET 8",

            "ASP.NET Core MVC",

            "Entity Framework Core",

            "SQLite",

            "IIS"

        ],


        /* -------------------------------------------------
           PRODUCT HIGHLIGHTS
        ------------------------------------------------- */

        highlights: [

            "Quotation management",

            "Customer management",

            "Reusable templates",

            "Corporate branding",

            "Header & footer customization",

            "Professional quotation layouts"

        ],


        /* -------------------------------------------------
           DEPLOYMENT
        ------------------------------------------------- */

        deployment: {

            type: "Self-hosted",

            platform: "Windows",

            server: "IIS",

            database: "SQLite",

            framework: ".NET 8"

        },


        /* -------------------------------------------------
           LICENSING
        ------------------------------------------------- */

        licensing: {

            model: "Commercial license",

            trial: true,

            trialDays: 15,

            activation:
                "License-based activation"

        },


        /* -------------------------------------------------
           LINKS
        ------------------------------------------------- */

        links: {

            product:
                "products/quotedesk.html",

            demo:
                "#",

            documentation:
                "#",

            support:
                "#"

        }

    },


    /* =====================================================
       ASSETDESK
    ===================================================== */

    {
        id: "assetdesk",

        name: "AssetDesk",

        shortName: "AssetDesk",

        category: "IT & Operations",

        status: "Available",

        featured: false,


        /* -------------------------------------------------
           POSITIONING
        ------------------------------------------------- */

        tagline:
            "Know what assets your business owns, where they are and who has them.",

        description:
            "A lightweight business asset management application for tracking equipment, assignments, locations and asset lifecycle information.",


        /* -------------------------------------------------
           VISUALS
        ------------------------------------------------- */

        images: {

            hero:
                "assets/images/products/assetdesk/hero.webp",

            dashboard:
                "assets/images/products/assetdesk/dashboard.webp",

            assets:
                "assets/images/products/assetdesk/assets.webp",

            assignment:
                "assets/images/products/assetdesk/assignment.webp"

        },


        /* -------------------------------------------------
           TECHNOLOGY
        ------------------------------------------------- */

        technologies: [

            ".NET 8",

            "ASP.NET Core MVC",

            "Entity Framework Core",

            "SQLite",

            "IIS"

        ],


        /* -------------------------------------------------
           PRODUCT HIGHLIGHTS
        ------------------------------------------------- */

        highlights: [

            "Asset registration",

            "Employee assignment",

            "Location tracking",

            "Asset status management",

            "Asset history",

            "Operational dashboard"

        ],


        /* -------------------------------------------------
           DEPLOYMENT
        ------------------------------------------------- */

        deployment: {

            type: "Self-hosted",

            platform: "Windows",

            server: "IIS",

            database: "SQLite",

            framework: ".NET 8"

        },


        /* -------------------------------------------------
           LICENSING
        ------------------------------------------------- */

        licensing: {

            model: "Commercial license",

            trial: true,

            trialDays: 15,

            activation:
                "License-based activation"

        },


        /* -------------------------------------------------
           LINKS
        ------------------------------------------------- */

        links: {

            product:
                "products/assetdesk.html",

            demo:
                "#",

            documentation:
                "#",

            support:
                "#"

        }

    }

];