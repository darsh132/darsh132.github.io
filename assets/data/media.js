/* =========================================================
   DARSHAN BANE — SOFTWARE STORE
   Media / Visual Asset Registry
   ========================================================= */

const MEDIA = {

    /* =====================================================
       BRAND
    ===================================================== */

    brand: {

        logo:
            "assets/images/brand/logo.svg",

        logoMark:
            "assets/images/brand/logo-mark.svg"

    },


    /* =====================================================
       STORE
    ===================================================== */

    store: {

        hero:
            "assets/images/store/store-hero.webp",

        about:
            "assets/images/store/studio.webp"

    },


    /* =====================================================
       PRODUCT MEDIA
    ===================================================== */

    products: {

        followupdesk: {

            hero:
                "assets/images/products/followupdesk/hero.webp",

            dashboard:
                "assets/images/products/followupdesk/dashboard.webp",

            customers:
                "assets/images/products/followupdesk/customers.webp",

            followups:
                "assets/images/products/followupdesk/followups.webp",

            thumbnail:
                "assets/images/products/followupdesk/thumbnail.webp"

        },


        quotedesk: {

            hero:
                "assets/images/products/quotedesk/hero.webp",

            dashboard:
                "assets/images/products/quotedesk/dashboard.webp",

            quotation:
                "assets/images/products/quotedesk/quotation.webp",

            templates:
                "assets/images/products/quotedesk/templates.webp",

            thumbnail:
                "assets/images/products/quotedesk/thumbnail.webp"

        },


        assetdesk: {

            hero:
                "assets/images/products/assetdesk/hero.webp",

            dashboard:
                "assets/images/products/assetdesk/dashboard.webp",

            assets:
                "assets/images/products/assetdesk/assets.webp",

            assignment:
                "assets/images/products/assetdesk/assignment.webp",

            thumbnail:
                "assets/images/products/assetdesk/thumbnail.webp"

        }

    },


    /* =====================================================
       EDITORIAL / MARKETING IMAGES
       
       These are NOT the actual application UI.
       Use licensed assets here when required.
    ===================================================== */

    editorial: {

        software:

            "assets/images/editorial/software.webp",

        business:

            "assets/images/editorial/business.webp",

        deployment:

            "assets/images/editorial/deployment.webp"

    }

};


/* =========================================================
   MEDIA HELPER
   ========================================================= */

window.Media = {

    getProduct: function (
        productId,
        imageName
    ) {

        if (
            !MEDIA.products[productId]
        ) {

            return "";

        }


        return (
            MEDIA.products[productId][imageName]
            || ""
        );

    },


    getBrand: function (
        imageName
    ) {

        return (
            MEDIA.brand[imageName]
            || ""
        );

    },


    getStore: function (
        imageName
    ) {

        return (
            MEDIA.store[imageName]
            || ""
        );

    },


    getEditorial: function (
        imageName
    ) {

        return (
            MEDIA.editorial[imageName]
            || ""
        );

    }

};