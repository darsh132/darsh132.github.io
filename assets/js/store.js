/* =========================================================
   DARSHAN BANE — SOFTWARE STORE
   Storefront Renderer
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       HELPERS
    ===================================================== */

    function getElement(id) {

        return document.getElementById(id);

    }


    function escapeHtml(value) {

        if (value === null || value === undefined) {

            return "";

        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       PRODUCT CARD
    ===================================================== */

    function createProductCard(product) {

        const technologies =
            Array.isArray(product.technologies)
                ? product.technologies
                : [];


        const image =
            product.images?.hero ||
            "";


        const productUrl =
            product.links?.product ||
            "#";


        const featuredBadge =
            product.featured
                ? `
                    <span class="product-status">
                        Featured
                    </span>
                  `
                : `
                    <span class="product-status">
                        ${escapeHtml(product.status)}
                    </span>
                  `;


        return `

            <article
                class="product-card"
                data-product-id="${escapeHtml(product.id)}"
            >


                <!-- Product Image -->

                <a
                    href="${escapeHtml(productUrl)}"
                    class="product-image"
                    aria-label="View ${escapeHtml(product.name)}"
                >

                    <img
                        src="${escapeHtml(image)}"
                        alt="${escapeHtml(product.name)}"
                        loading="lazy"
                    >

                    <span
                        class="product-image-overlay"
                    ></span>

                </a>


                <!-- Product Content -->

                <div class="product-body">


                    <!-- Meta -->

                    <div class="product-meta">

                        <span class="product-category">

                            ${escapeHtml(product.category)}

                        </span>


                        ${featuredBadge}

                    </div>


                    <!-- Name -->

                    <h3>

                        <a
                            href="${escapeHtml(productUrl)}"
                        >

                            ${escapeHtml(product.name)}

                        </a>

                    </h3>


                    <!-- Tagline -->

                    <p class="product-tagline">

                        ${escapeHtml(product.tagline)}

                    </p>


                    <!-- Description -->

                    <p class="product-description">

                        ${escapeHtml(product.description)}

                    </p>


                    <!-- Technologies -->

                    <div
                        class="product-technologies"
                        aria-label="Technologies"
                    >

                        ${technologies
                            .map(function (technology) {

                                return `

                                    <span
                                        class="product-tech"
                                    >
                                        ${escapeHtml(technology)}
                                    </span>

                                `;

                            })
                            .join("")
                        }

                    </div>


                    <!-- Footer -->

                    <div class="product-footer">


                        <div>

                            <div class="product-price-label">

                                Deployment

                            </div>

                            <div class="product-price">

                                Self-hosted

                            </div>

                        </div>


                        <a
                            href="${escapeHtml(productUrl)}"
                            class="
                                store-button
                                store-button-primary
                            "
                        >

                            View product

                        </a>


                    </div>


                </div>


            </article>

        `;

    }


    /* =====================================================
       RENDER ALL PRODUCTS
    ===================================================== */

    function renderProducts(products) {

        const container =
            getElement("productGrid");


        if (!container) {

            return;

        }


        if (
            !Array.isArray(products) ||
            products.length === 0
        ) {

            container.innerHTML = `

                <div
                    class="text-secondary"
                    style="grid-column: 1 / -1;"
                >

                    No products are currently available.

                </div>

            `;

            return;

        }


        container.innerHTML =
            products
                .map(createProductCard)
                .join("");

    }


    /* =====================================================
       RENDER FEATURED PRODUCTS
    ===================================================== */

    function renderFeaturedProducts() {

        if (
            typeof PRODUCTS ===
            "undefined"
        ) {

            return;

        }


        const featuredProducts =
            PRODUCTS.filter(function (product) {

                return product.featured === true;

            });


        renderProducts(
            featuredProducts
        );

    }


    /* =====================================================
       RENDER ALL PRODUCTS
    ===================================================== */

    function renderAllProducts() {

        if (
            typeof PRODUCTS ===
            "undefined"
        ) {

            console.error(
                "PRODUCTS is not loaded."
            );

            return;

        }


        renderProducts(
            PRODUCTS
        );

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    function searchProducts(
        searchTerm
    ) {

        if (
            typeof PRODUCTS ===
            "undefined"
        ) {

            return [];

        }


        const term =
            String(searchTerm || "")
                .trim()
                .toLowerCase();


        if (!term) {

            return PRODUCTS;

        }


        return PRODUCTS.filter(
            function (product) {

                const searchableText = [

                    product.name,

                    product.category,

                    product.tagline,

                    product.description,

                    ...(product.technologies || []),

                    ...(product.highlights || [])

                ]
                    .join(" ")
                    .toLowerCase();


                return searchableText
                    .includes(term);

            }
        );

    }


    /* =====================================================
       CATEGORY FILTER
    ===================================================== */

    function filterByCategory(
        category
    ) {

        if (
            typeof PRODUCTS ===
            "undefined"
        ) {

            return [];

        }


        if (
            !category ||
            category === "all"
        ) {

            return PRODUCTS;

        }


        return PRODUCTS.filter(
            function (product) {

                return (
                    product.category ===
                    category
                );

            }
        );

    }


    /* =====================================================
       PRODUCT LOOKUP
    ===================================================== */

    function getProductById(
        productId
    ) {

        if (
            typeof PRODUCTS ===
            "undefined"
        ) {

            return null;

        }


        return PRODUCTS.find(
            function (product) {

                return (
                    product.id ===
                    productId
                );

            }
        ) || null;

    }


    /* =====================================================
       AUTO INITIALIZATION
    ===================================================== */

    function initializeStore() {

        if (
            typeof PRODUCTS ===
            "undefined"
        ) {

            console.error(
                "Product catalog could not be loaded."
            );

            return;

        }


        const productGrid =
            getElement("productGrid");


        if (!productGrid) {

            return;

        }


        const mode =
            productGrid.dataset.mode ||
            "all";


        if (mode === "featured") {

            renderFeaturedProducts();

        } else {

            renderAllProducts();

        }

    }


    /* =====================================================
       PUBLIC STORE API
    ===================================================== */

    window.Store = {

        products: function () {

            return PRODUCTS;

        },


        get: function (
            productId
        ) {

            return getProductById(
                productId
            );

        },


        search: function (
            searchTerm
        ) {

            return searchProducts(
                searchTerm
            );

        },


        category: function (
            category
        ) {

            return filterByCategory(
                category
            );

        },


        render: function (
            products
        ) {

            renderProducts(
                products
            );

        },


        renderAll: function () {

            renderAllProducts();

        },


        renderFeatured: function () {

            renderFeaturedProducts();

        }

    };


    /* =====================================================
       START STORE
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeStore
        );

    } else {

        initializeStore();

    }

})();