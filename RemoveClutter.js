// ==UserScript==
// @name        Remove clutter from Amazon product pages
// @namespace   http://mjhilton.net
// @include     https://www.amazon.com/*/dp/*
// @version     1
// ==/UserScript==

(function() {
    'use strict';

    var containers = [
        {
            "root": "#a-page",
            "whitelist": [
                "header",
                "#dp"
            ]
        },
        {
            "root": "#dp", 
            "whitelist": [
                "#wayfinding-breadcrumbs_container",
                "#dp-container"
            ]
        },
        {
            "root": "#dp-container",
            "whitelist": [
                "#rightCol",
                "#leftCol",
                "#centerCol",
                "#dpx-product-description_feature_div",
                "#product-details-grid_feature_div",
                "#customer-reviews_feature_div"
            ]
        }
    ];

    containers.forEach(c => {
        var clutterRoot = c.root;
        var unclutterWhitelist = c.whitelist;
        var root = document.querySelector(clutterRoot);

        root.childNodes.forEach(e => {
            if (unclutterWhitelist.some(u => root.querySelector(u) == e))
                return;
    
            if (e.style) e.style.display = 'none';
        });
    });
})();
