'use strict';
var Tghb = /blackbox|grapeshotcrawler|googlebot|bingbot|slurp|lighthouse|duckduckbot|baiduspider|yandexbot|exabot|facebookexternalhit|facebot/i.test(navigator.userAgent.toLowerCase());
if ("undefined" === typeof hbagency_ismobile && !Tghb) {
    var hbagency_ismobile = function() {
            let u = !1;
            var p = navigator.userAgent || navigator.vendor || window.opera;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(p) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(p.substr(0,
                    4))) u = !0;
            return u
        }(),
        hasvideo_hbagency = !1,
        hasvideo_hbagency_content = !1,
        hassmilewanted_hbagency = !1,
        hasteads_hbagency = !1,
        hasgeoedge_hbagency = !1,
        hascmp_hbagency = !0,
        registerConsent_hbagency = !1,
        hbagency_usp = !1,
        autoapprovecmp_hbagency = !1,
        monitor_hbagency = !1,
        fdpCategories = ["IAB8"],
        fdpSubCategories = ["IAB8-13"],
        fdpKeywords = "",
        analytics_hbagency = "";
    analytics_hbagency = "de992ced-a9c6-42df-b3e9-6fe39decdb88";
    var PREBID_TIMEOUT_hbagency = 1500;
    hbagency_ismobile || (PREBID_TIMEOUT_hbagency = 2500);
    hbagency_ismobile &&
        (PREBID_TIMEOUT_hbagency = 2800);
    var PREBID_TIMEOUT_R_hbagency = 1500;
    hbagency_ismobile || (PREBID_TIMEOUT_R_hbagency = 2E3);
    hbagency_ismobile && (PREBID_TIMEOUT_R_hbagency = 2300);
    var USER_ID_hbagency = "4037",
        WEBSITE_ID_hbagency = "6574";
    WEBSITE_ID_hbagency = "6574";
    var nomesite_hbagency = "unarosaincucina",
        domain_hbagency = "unarosaincucina.it",
        ZONE_ID = [{
            code: "hbagency_space_56463",
            zoneid: "56463"
        }, {
			code: "hbagency_space_56764",
            zoneid: "56764"
        }, {
            code: "hbagency_space_57891",
            zoneid: "57891"
        }, {
            code: "hbagency_space_57892",
            zoneid: "57892"
        }, {
            code: "hbagency_space_57893",
            zoneid: "57893"
        }],
        headerbidding_mp = {
            hbagency_space_56463__adagio: !0,
            hbagency_space_56463__adform_hb: !0,
            hbagency_space_56463__amx: !1,
            hbagency_space_56463__improvedigital: !0,
            hbagency_space_56463__onetag: !1,
            hbagency_space_56463__rubicon: !0,
            hbagency_space_56463__sharethrough: !0,
            hbagency_space_56463__triplelift: !0,
            hbagency_space_56764__adagio: !0,
            hbagency_space_56764__adform_hb: !0,
            hbagency_space_56764__amx: !1,
            hbagency_space_56764__improvedigital: !0,
            hbagency_space_56764__onetag: !1,
            hbagency_space_56764__rubicon: !0,
            hbagency_space_56764__sharethrough: !0,
            hbagency_space_56764__triplelift: !0,
            hbagency_space_57891__adagio: !0,
            hbagency_space_57891__adform_hb: !0,
            hbagency_space_57891__amx: !1,
            hbagency_space_57891__improvedigital: !0,
            hbagency_space_57891__onetag: !1,
            hbagency_space_57891__rubicon: !0,
            hbagency_space_57891__sharethrough: !0,
            hbagency_space_57891__triplelift: !0,
            hbagency_space_57892__adagio: !0,
            hbagency_space_57892__adform_hb: !0,
            hbagency_space_57892__amx: !1,
            hbagency_space_57892__improvedigital: !0,
            hbagency_space_57892__onetag: !1,
            hbagency_space_57892__rubicon: !0,
            hbagency_space_57892__sharethrough: !0,
            hbagency_space_57892__triplelift: !0,
            hbagency_space_57893__adagio: !0,
            hbagency_space_57893__adform_hb: !0,
            hbagency_space_57893__amx: !1,
            hbagency_space_57893__improvedigital: !0,
            hbagency_space_57893__onetag: !1,
            hbagency_space_57893__rubicon: !0,
            hbagency_space_57893__sharethrough: !0,
            hbagency_space_57893__triplelift: !0
        },
        hb_floors_hbagency = {
            enforcement: {
                floorDeals: !1,
                bidAdjustment: !0
            },
            data: {
                currency: "EUR",
                skipRate: 5,
                modelVersion: "General",
                schema: {
                    fields: ["mediaType", "adUnitCode"]
                },
                values: {
                    "banner|*": .03,
                    "native|*": .03,
                    "video|*": .28
                }
            }
        };
    hb_floors_hbagency.data.values["banner|hbagency_space_56463"] = .02;
    hb_floors_hbagency.data.values["banner|hbagency_space_56764"] = .05;
    hb_floors_hbagency.data.values["banner|hbagency_space_57891"] = .05;
    hb_floors_hbagency.data.values["banner|hbagency_space_57892"] = .05;
    hb_floors_hbagency.data.values["banner|hbagency_space_57893"] =
        .05;
    var adUnits_hbagency = [{
            code: "hbagency_space_56463",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600]
                    ]
                }
            },
            bids: [{
                    bidder: "adagio",
                    params: {
                        organizationId: "1078",
                        site: "unarosaincucina-it",
                        placement: "bann_sidebar_atf",
                        adUnitElementId: "hbagency_space_56463",
                        pagetype: "article",
                        environment: "desktop",
                        category: "Food \x26 Drink"
                    }
                }, {
                    bidder: "adform_hb",
                    params: {
                        mid: 1594471
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "aGJhZ2VuY3kuaXQ"
                    }
                }, {
                    bidder: "improvedigital",
                    params: {
                        placementId: 23014180,
                        publisherId: 1729,
                        placementKey: "unarosaincucina_Interscroller_MOBILE"
                    }
                },
                {
                    bidder: "onetag",
                    params: {
                        pubId: "3212c3d46a04676"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: "22684",
                        siteId: "514186",
                        zoneId: "3341506"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: "ufD4a4zS8gjIqUNabhTGsiOr"
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "HBAgency_RON_HalfPage"
                    }
                }
            ]
        }, {
            code: "hbagency_space_56764",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600],
                        [300, 250],
                        [1, 1],
                        [160, 600],
                        [120, 600]
                    ]
                }
            },
            bids: [{
                    bidder: "adagio",
                    params: {
                        organizationId: "1078",
                        site: "unarosaincucina-it",
                        placement: "bann_sidebar_atf",
                        adUnitElementId: "hbagency_space_56764",
                        pagetype: "article",
                        environment: "desktop",
                        category: "Food \x26 Drink"
                    }
                }, {
                    bidder: "adform_hb",
                    params: {
                        mid: 1594338
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "aGJhZ2VuY3kuaXQ"
                    }
                }, {
                    bidder: "improvedigital",
                    params: {
                        placementId: 23014192,
                        publisherId: 1729,
                        placementKey: "300x600"
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "3212c3d46a04676"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: "22684",
                        siteId: "514186",
                        zoneId: "3341506"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: "ufD4a4zS8gjIqUNabhTGsiOr"
                    }
                },
                {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "HBAgency_RON_HalfPage"
                    }
                }
            ]
        }, {
            code: "hbagency_space_57891",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                    bidder: "adagio",
                    params: {
                        organizationId: "1078",
                        site: "unarosaincucina-it",
                        placement: "bann_middle_btf_third",
                        adUnitElementId: "hbagency_space_57891",
                        pagetype: "article",
                        environment: "desktop",
                        category: "Food \x26 Drink"
                    }
                }, {
                    bidder: "adform_hb",
                    params: {
                        mid: 1594484
                    }
                },
                {
                    bidder: "amx",
                    params: {
                        tagId: "aGJhZ2VuY3kuaXQ"
                    }
                }, {
                    bidder: "improvedigital",
                    params: {
                        placementId: 23015056,
                        publisherId: 1729,
                        placementKey: "300x250_in_article_1"
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "3212c3d46a04676"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: "22684",
                        siteId: "514186",
                        zoneId: "3341506"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: "0kVfnG1pK90dIziQ7tHg8OJX"
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "HBAgency_RON_Inarticle"
                    }
                }
            ]
        }, {
            code: "hbagency_space_57892",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "adagio",
                params: {
                    organizationId: "1078",
                    site: "unarosaincucina-it",
                    placement: "bann_middle_btf_third",
                    adUnitElementId: "hbagency_space_57892",
                    pagetype: "article",
                    environment: "desktop",
                    category: "Food \x26 Drink"
                }
            }, {
                bidder: "adform_hb",
                params: {
                    mid: 1594483
                }
            }, {
                bidder: "amx",
                params: {
                    tagId: "aGJhZ2VuY3kuaXQ"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: 23015058,
                    publisherId: 1729,
                    placementKey: "300x250_in_article_2"
                }
            }, {
                bidder: "onetag",
                params: {
                    pubId: "3212c3d46a04676"
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: "22684",
                    siteId: "514186",
                    zoneId: "3341506"
                }
            }, {
                bidder: "sharethrough",
                params: {
                    pkey: "0kVfnG1pK90dIziQ7tHg8OJX"
                }
            }, {
                bidder: "triplelift",
                params: {
                    inventoryCode: "HBAgency_RON_Inarticle"
                }
            }]
        }, {
            code: "hbagency_space_57893",
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 250]
                    ]
                }
            },
            bids: [{
                bidder: "adagio",
                params: {
                    organizationId: "1078",
                    site: "unarosaincucina-it",
                    placement: "bann_middle_btf_third",
                    adUnitElementId: "hbagency_space_57893",
                    pagetype: "article",
                    environment: "desktop",
                    category: "Food \x26 Drink"
                }
            }, {
                bidder: "adform_hb",
                params: {
                    mid: 1594485
                }
            }, {
                bidder: "amx",
                params: {
                    tagId: "aGJhZ2VuY3kuaXQ"
                }
            }, {
                bidder: "improvedigital",
                params: {
                    placementId: 23015060,
                    publisherId: 1729,
                    placementKey: "300x250_in_article_3"
                }
            }, {
                bidder: "onetag",
                params: {
                    pubId: "3212c3d46a04676"
                }
            }, {
                bidder: "rubicon",
                params: {
                    accountId: "22684",
                    siteId: "514186",
                    zoneId: "3341506"
                }
            }, {
                bidder: "sharethrough",
                params: {
                    pkey: "0kVfnG1pK90dIziQ7tHg8OJX"
                }
            }, {
                bidder: "triplelift",
                params: {
                    inventoryCode: "HBAgency_RON_Inarticle"
                }
            }]
        }
    ];
    hbagency_ismobile && (hb_floors_hbagency.data.values["banner|hbagency_space_56463"] = .02, hb_floors_hbagency.data.values["banner|hbagency_space_56764"] = .05, hb_floors_hbagency.data.values["banner|hbagency_space_57891"] = .05, hb_floors_hbagency.data.values["banner|hbagency_space_57892"] = .05, hb_floors_hbagency.data.values["banner|hbagency_space_57893"] =
        .05, adUnits_hbagency = [{
                code: "hbagency_space_56463",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600]
                        ]
                    }
                },
                bids: [{
                        bidder: "adagio",
                        params: {
                            organizationId: "1078",
                            site: "unarosaincucina-it",
                            placement: "bann_sidebar_atf",
                            adUnitElementId: "hbagency_space_56463",
                            pagetype: "article",
                            environment: "mobile",
                            category: "Food \x26 Drink"
                        }
                    }, {
                        bidder: "adform_hb",
                        params: {
                            mid: 1594471
                        }
                    }, {
                        bidder: "amx",
                        params: {
                            tagId: "aGJhZ2VuY3kuaXQ"
                        }
                    }, {
                        bidder: "improvedigital",
                        params: {
                            placementId: 23014180,
                            publisherId: 1729,
                            placementKey: "unarosaincucina_Interscroller_MOBILE"
                        }
                    },
                    {
                        bidder: "onetag",
                        params: {
                            pubId: "3212c3d46a04676"
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "22684",
                            siteId: "514186",
                            zoneId: "3341506"
                        }
                    }, {
                        bidder: "sharethrough",
                        params: {
                            pkey: "ufD4a4zS8gjIqUNabhTGsiOr"
                        }
                    }, {
                        bidder: "triplelift",
                        params: {
                            inventoryCode: "HBAgency_RON_HalfPage"
                        }
                    }
                ]
            }, {
                code: "hbagency_space_56764",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 600],
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: "adagio",
                    params: {
                        organizationId: "1078",
                        site: "unarosaincucina-it",
                        placement: "bann_sidebar_atf",
                        adUnitElementId: "hbagency_space_56764",
                        pagetype: "article",
                        environment: "mobile",
                        category: "Food \x26 Drink"
                    }
                }, {
                    bidder: "adform_hb",
                    params: {
                        mid: 1594338
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "aGJhZ2VuY3kuaXQ"
                    }
                }, {
                    bidder: "improvedigital",
                    params: {
                        placementId: 23014193,
                        publisherId: 1729,
                        placementKey: "300x600_MOBILE"
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "3212c3d46a04676"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: "22684",
                        siteId: "514186",
                        zoneId: "3341506"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: "ufD4a4zS8gjIqUNabhTGsiOr"
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "HBAgency_RON_HalfPage"
                    }
                }]
            }, {
                code: "hbagency_space_57891",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: "adagio",
                    params: {
                        organizationId: "1078",
                        site: "unarosaincucina-it",
                        placement: "bann_middle_btf_third",
                        adUnitElementId: "hbagency_space_57891",
                        pagetype: "article",
                        environment: "mobile",
                        category: "Food \x26 Drink"
                    }
                }, {
                    bidder: "adform_hb",
                    params: {
                        mid: 1594484
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "aGJhZ2VuY3kuaXQ"
                    }
                }, {
                    bidder: "improvedigital",
                    params: {
                        placementId: 23015057,
                        publisherId: 1729,
                        placementKey: "300x250_in_article_1_MOBILE"
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "3212c3d46a04676"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: "22684",
                        siteId: "514186",
                        zoneId: "3341506"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: "0kVfnG1pK90dIziQ7tHg8OJX"
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "HBAgency_RON_Inarticle"
                    }
                }]
            }, {
                code: "hbagency_space_57892",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: "adagio",
                    params: {
                        organizationId: "1078",
                        site: "unarosaincucina-it",
                        placement: "bann_middle_btf_third",
                        adUnitElementId: "hbagency_space_57892",
                        pagetype: "article",
                        environment: "mobile",
                        category: "Food \x26 Drink"
                    }
                }, {
                    bidder: "adform_hb",
                    params: {
                        mid: 1594483
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "aGJhZ2VuY3kuaXQ"
                    }
                }, {
                    bidder: "improvedigital",
                    params: {
                        placementId: 23015059,
                        publisherId: 1729,
                        placementKey: "300x250_in_article_2_MOBILE"
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "3212c3d46a04676"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: "22684",
                        siteId: "514186",
                        zoneId: "3341506"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: "0kVfnG1pK90dIziQ7tHg8OJX"
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "HBAgency_RON_Inarticle"
                    }
                }]
            }, {
                code: "hbagency_space_57893",
                mediaTypes: {
                    banner: {
                        sizes: [
                            [300, 250]
                        ]
                    }
                },
                bids: [{
                    bidder: "adagio",
                    params: {
                        organizationId: "1078",
                        site: "unarosaincucina-it",
                        placement: "bann_middle_btf_third",
                        adUnitElementId: "hbagency_space_57893",
                        pagetype: "article",
                        environment: "mobile",
                        category: "Food \x26 Drink"
                    }
                }, {
                    bidder: "adform_hb",
                    params: {
                        mid: 1594485
                    }
                }, {
                    bidder: "amx",
                    params: {
                        tagId: "aGJhZ2VuY3kuaXQ"
                    }
                }, {
                    bidder: "improvedigital",
                    params: {
                        placementId: 23015061,
                        publisherId: 1729,
                        placementKey: "300x250_in_article_3_MOBILE"
                    }
                }, {
                    bidder: "onetag",
                    params: {
                        pubId: "3212c3d46a04676"
                    }
                }, {
                    bidder: "rubicon",
                    params: {
                        accountId: "22684",
                        siteId: "514186",
                        zoneId: "3341506"
                    }
                }, {
                    bidder: "sharethrough",
                    params: {
                        pkey: "0kVfnG1pK90dIziQ7tHg8OJX"
                    }
                }, {
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "HBAgency_RON_Inarticle"
                    }
                }]
            }
        ]);
    var urlhb_3 = window.location.href,
        urlHbstatsAnalytics = "https://stats.hbagency.ai/app/statistics?data\x3d",
        pbjs_hbagencyicd = pbjs_hbagencyicd || {};
    pbjs_hbagencyicd.que = pbjs_hbagencyicd.que || [];
    for (var autopromo_hbagency = !1, cpmfixvideo_hbagency = .8, adagioanalytics_hbagency = !1, hbrefreshFD = !1, refreshedHB = [], refreshedHBT = [], refreshedHBPassback = [], cmphbagency = !1, isloadebrid = !1, isloadedima = !1, ispubstackHB = !1, currentImg, hasCLSHB = !1, safe_b_hbagency = ["invibes"], containsgg = [], i = 0; i < adUnits_hbagency.length; i++) {
        var bidder = adUnits_hbagency[i].bids;
        containsgg[adUnits_hbagency[i].code] = !1;
        for (var j = 0; j < parseInt(bidder.length); j++) "gumgum" ===
            bidder[j].bidder && (containsgg[adUnits_hbagency[i].code] = !0), "adagio" === bidder[j].bidder && (adagioanalytics_hbagency = !0)
    }
    adagioanalytics_hbagency && function() {
        try {
            window.ADAGIO = window.ADAGIO || {}, window.ADAGIO.queue = window.ADAGIO.queue || [], window.document.addEventListener("HBEvent", function(u) {
                window.ADAGIO.queue.push({
                    action: "adagio-hb-event",
                    data: {
                        eventName: "renderEvent",
                        args: u.detail
                    },
                    ts: Date.now()
                })
            })
        } catch (u) {
            return !1
        }
    }();
    var realTimeDataHB = {
            dataProviders: []
        },
        dp = {
            name: "timeout",
            params: {
                rules: {
                    includesVideo: {
                        "true": 300,
                        "false": 50
                    },
                    numAdUnits: {
                        "1-5": 100,
                        "6-10": 200,
                        "11-15": 300
                    },
                    deviceType: {
                        2: 50,
                        4: 100,
                        5: 200
                    },
                    connectionSpeed: {
                        slow: 300,
                        medium: 100,
                        fast: 50,
                        unknown: 10
                    }
                }
            }
        };
    realTimeDataHB.dataProviders = hasgeoedge_hbagency ? [{
        name: "geoedge",
        params: {
            key: "8e194067-9fe7-4fae-92e4-9bf127dbbdaf",
            cfg: {
                pbGlobal: "pbjs_hbagencyicd"
            },
            wap: !1
        }
    }, dp] : [dp];
    hascmp_hbagency || function() {
        var u = document.createElement("script");
        u.type = "text/javascript";
        u.src = registerConsent_hbagency ? "https://hbagency.it/cdn/tcf2_cmp.js" : "https://hbagency.it/cdn/tcf2_cmp_hbagency.js";
        u.async = "true";
        var p = document.getElementsByTagName("head")[0];
        p.insertBefore(u, p.firstChild)
    }();
    hassmilewanted_hbagency && function() {
        var u = document.createElement("script");
        u.type = "text/javascript";
        u.src = "https://csync.smilewanted.com";
        u.async = "true";
        var p = document.getElementsByTagName("head")[0];
        p.insertBefore(u, p.firstChild)
    }();
    "" !== analytics_hbagency && .3 > Math.random() && (ispubstackHB = !0, function() {
        var u = document.createElement("script");
        u.type = "text/javascript";
        u.src = "https://boot.pbstck.com/v1/tag/" +
            analytics_hbagency;
        u.async = "true";
        var p = document.getElementsByTagName("head")[0];
        p.insertBefore(u, p.firstChild)
    }());
    (function() {
        var u = document.createElement("script");
        u.type = "text/javascript";
        u.src = "https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.8/postscribe.min.js";
        u.async = "true";
        var p = document.getElementsByTagName("head")[0];
        p.insertBefore(u, p.firstChild)
    })();
    var hbagencyisIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    hasgeoedge_hbagency ? function() {
        var u = document.createElement("script");
        u.type = "text/javascript";
        u.src = "https://hbagency.it/cdn/prebid_8_40.js";
        u.async = "true";
        var p = document.getElementsByTagName("head")[0];
        p.insertBefore(u, p.firstChild)
    }() : function() {
        var u = document.createElement("script");
        u.type = "text/javascript";
        u.src = "https://hbagency.it/cdn/prebid_8_40_ng.js";
        u.async = "true";
        var p = document.getElementsByTagName("head")[0];
        p.insertBefore(u, p.firstChild)
    }();
    (function(u, p, v) {
        function ba(c, a) {
            if (0 != c.length) try {
                var f = !1;
                if (u.XMLHttpRequest) {
                    var b = new u.XMLHttpRequest;
                    void 0 ===
                        b.responseType && (f = !0)
                } else f = !0;
                f && (b = new u.XDomainRequest);
                b.open("GET", a + "" + encodeURIComponent(JSON.stringify(c)));
                b.timeout = 3E3;
                f || b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                b.send("data\x3d" + encodeURIComponent(JSON.stringify(c)))
            } catch (e) {}
        }

        function P(c, a) {
            if (null !== (null != a || void 0 != a ? p.getElementById(a) : p.getElementById(c)))
                for (var f = 0; f < adUnits_hbagency.length; f++)
                    if (adUnits_hbagency[f].code === c) {
                        v.requestBids({
                            timeout: PREBID_TIMEOUT_R_hbagency,
                            adUnitCodes: [adUnits_hbagency[f].code],
                            bidsBackHandler: function() {
                                ka(c, a)
                            }
                        });
                        break
                    }
        }

        function ka(c, a) {
            !w[c] || 23 != w[c] && 32 != w[c] && 18 != w[c] && 17 != w[c] || la(c, D[c], E[c], "", "");
            if (w[c] && (25 == w[c] || 22 == w[c])) {
                var f = D[c],
                    b = E[c],
                    e = parent.window.document.getElementById("HB_Footer_Close_" + c);
                if (e && ha(c, "", ""))
                    if (25 == w[c]) {
                        if (b = parent.window.document.getElementById("HB_Footer_Close_" + c), parent.window.document.getElementById(c).style.display = "block", b.style.display = "none", b.style.height = "320px", b.style.width = f + "px", b.style.position = "fixed", b.style.bottom =
                            "40px", b.style.padding = "2px 0 0;", b.style.zIndex = "2147483640", b = parent.window.document.getElementById("HB_OUTER_" + c))
                            if (b.style.width = f + "px", b.style.height = "300px", b.style.margin = "0 auto", f = parent.window.document.getElementById("HB_CLOSE_" + c)) f.style.zIndex = "2147483641", f.style.position = "relative", f.style.height = "20px", f.style.top = "30px", f.style.right = "25px", f.style.margin = "0px auto", f.style.cursor = "pointer", f.style.width = "30px", f.innerHTML = '\x3cimg   style \x3d "float:right;width:20px;heihgt:20px" onclick\x3d"hbManager.closeHBInterstitial(\'' +
                                c + "');hbManager.closeHB('HB_Footer_Close_" + c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfnBhMPFhF3DV5TAAABVUlEQVQ4y6WUvU4CURCFD1RACTS8gFEb3oAlIdFSQ8WjQXgBSi210IQN hCdQ4wMcs1l+AgVZkNxjsQvsD2ZxnVvNvfNlJjN3Tk6I2tcF7nGDa1QAzPCGZzzUPmNBCh1aHDpa ydNORkbf8rSSIw5pheOOQIFdx6x1ytZyDLssxCCWOZ7J6DczmoljlkMQS5wslWZLccLSEerPUxFJ mov9AKLlGHMWZOQYWj5kr89C/JbQFsC6E7luyY34rloR3xHrebQLkbkN0MH04E3RwSDyXgTa4IsX K8E9ZHMTeSVPfAW5S1TuB59CpJ1IcHOqc64aapxAJCNu8shi2crL0Ig87G0ks9/kKgCgGhsAAGwB O9Nws32jP3/Y5n41eouzoIXY+98SCqxwkrruE1biwlJMFZZSQo0CCRvtJcyffiBhIzbDcbmEWF7i Dre4CsTyHU94rH1EY34AROPcsy0m4BwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTM6 MjI6MTcrMDI6MDAtvRfjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDEzOjIyOjE3KzAy OjAwXOCvXwAAABh0RVh0ZmlsZW5hbWU6YmFzZQBpY28tY2VycmFycaPVNwAAAABJRU5ErkJggg\x3d\x3d" \x3e '
                    } else if (parent.window.document.getElementById(c).style.display =
                    "block", e.style.height = b + 20 + "px", e.style.width = f + "px", e.style.position = "fixed", e.style.top = "100px", e.style.right = "0px", e.style.padding = "2px 0 0;", e.style.zIndex = "2147483642", e.style.display = "block", e = parent.window.document.getElementById("HB_OUTER_" + c))
                    if (e.style.width = f + "px", e.style.height = b + "px", e.style.margin = "0 auto", b = parent.window.document.getElementById("HB_CLOSE_" + c)) b.style.zIndex = "2147483642", b.style.position = "relative", b.style.height = "20px", b.style.margin = "0px auto", b.style.cursor = "pointer",
                        b.style.width = f + "px", b.innerHTML = '\x3cimg   style \x3d "float:right;width:20px;heihgt:20px" onclick\x3d"hbManager.closeHB(\'' + c + "');hbManager.closeHB('HB_Footer_Close_" + c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAACxMAAAsTAQCanBgAAAAHdElNRQfnBhMNMQjKJ5CYAAAB30lEQVQ4y62UPWsUURSGnzP7kUIW JaBmCmEUtnFtFjWZcvpEa3FD8AcIgo1Wsk2MVoEUYptNfoLpUgyIIRB0Q8xqsSiD4KzVitplP47F ZGbusMMK6qlmXuY597zvYS78Rcmk5Ak2VWaB73T56k+HPJhjiQfUEl055AU79Px8yBOWeY6dM0+P x2z5Gr8WEuQMq6xxNtdEhVtUnL1gkIE8YZWHaYuJsnCZcXaDFPJghbUpSGRkno7zMQAsAGyeUfxj 0kWakeMIWjTtn1MreS5wSQ3sGoun43nCJhdS5Klc1I6MgDL39I4c6Y804yvOywALsKmlzX7KW70p DS1RoqE3ZF9Dc5c1bCgCVXNbY7ZkrAtSVqjLgW7LMBtHlbAIzGb9nrAtZa0LtLWVRYi+tsgpZTw1 RgvoZ6USd/W6tLWtdVnRiU30I09dNHVl0VBXDrQlsKwLMsq6UrrRSSHtVLXVlX3dlAEDWvJaXbls buqQEAoQ4Iy5Hau/5EjfnPZWPkhHP5mRP/HfxUG8opfqX4xxRnw2kWN24iDgG4+YyHaihjSj5gWA AOc9Fdy8n9/Y+jobPgkEAc4eM8zn7w0Ysk7TP8GEIBg4u3S4yvmc8465z0aM/PvFkqDpFdanS+jz X+o3q0udsu4NGL4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTE6NDk6MDgrMDI6MDBn VuNrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDExOjQ5OjA4KzAyOjAwFgtb1wAAAABJ RU5ErkJggg\x3d\x3d" \x3e '
            }
            if (w[c] &&
                (24 == w[c] || 21 == w[c]) && (f = D[c], b = E[c], (e = parent.window.document.getElementById("HB_Footer_Close_" + c)) && ha(c, "", "")))
                if (24 == w[c]) {
                    if (b = parent.window.document.getElementById("HB_Footer_Close_" + c), parent.window.document.getElementById(c).style.display = "block", b.style.display = "none", b = parent.window.document.getElementById("HB_OUTER_" + c))
                        if (b.style.width = f + "px", b.style.height = "300px", b.style.margin = "0 auto", f = parent.window.document.getElementById("HB_CLOSE_" + c)) f.style.zIndex = "2147483640", f.style.position =
                            "relative", f.style.height = "20px", f.style.top = "30px", f.style.right = "25px", f.style.margin = "0px auto", f.style.cursor = "pointer", f.style.width = "30px", f.innerHTML = '\x3cimg   style \x3d "float:right;width:20px;heihgt:20px" onclick\x3d"hbManager.closeHBInterstitial(\'' + c + "');hbManager.closeHB('HB_Footer_Close_" + c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfnBhMPFhF3DV5TAAABVUlEQVQ4y6WUvU4CURCFD1RACTS8gFEb3oAlIdFSQ8WjQXgBSi210IQN hCdQ4wMcs1l+AgVZkNxjsQvsD2ZxnVvNvfNlJjN3Tk6I2tcF7nGDa1QAzPCGZzzUPmNBCh1aHDpa ydNORkbf8rSSIw5pheOOQIFdx6x1ytZyDLssxCCWOZ7J6DczmoljlkMQS5wslWZLccLSEerPUxFJ mov9AKLlGHMWZOQYWj5kr89C/JbQFsC6E7luyY34rloR3xHrebQLkbkN0MH04E3RwSDyXgTa4IsX K8E9ZHMTeSVPfAW5S1TuB59CpJ1IcHOqc64aapxAJCNu8shi2crL0Ig87G0ks9/kKgCgGhsAAGwB O9Nws32jP3/Y5n41eouzoIXY+98SCqxwkrruE1biwlJMFZZSQo0CCRvtJcyffiBhIzbDcbmEWF7i Dre4CsTyHU94rH1EY34AROPcsy0m4BwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTM6 MjI6MTcrMDI6MDAtvRfjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDEzOjIyOjE3KzAy OjAwXOCvXwAAABh0RVh0ZmlsZW5hbWU6YmFzZQBpY28tY2VycmFycaPVNwAAAABJRU5ErkJggg\x3d\x3d" \x3e '
                } else if (parent.window.document.getElementById(c).style.display =
                "block", e.style.height = b + 20 + "px", e.style.width = f + "px", e.style.display = "block", e.style.position = "fixed", e.style.top = "100px", e.style.left = "0px", e.style.padding = "2px 0 0;", e.style.zIndex = "2147483642", e = parent.window.document.getElementById("HB_OUTER_" + c))
                if (e.style.width = f + "px", e.style.height = b + "px", e.style.margin = "0 auto", b = parent.window.document.getElementById("HB_CLOSE_" + c))(e = v.getAdserverTargetingForAdUnitCode(c)) && e.hb_adid && (f = v.getHighestCpmBids(c)[0].width), b.style.zIndex = "2147483642", b.style.position =
                    "relative", b.style.height = "20px", b.style.margin = "0px auto", b.style.cursor = "pointer", b.style.width = f + "px", b.innerHTML = '\x3cimg   style \x3d "float:right;width:20px;heihgt:20px" onclick\x3d"hbManager.closeHB(\'' + c + "');hbManager.closeHB('HB_Footer_Close_" + c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAACxMAAAsTAQCanBgAAAAHdElNRQfnBhMNMQjKJ5CYAAAB30lEQVQ4y62UPWsUURSGnzP7kUIW JaBmCmEUtnFtFjWZcvpEa3FD8AcIgo1Wsk2MVoEUYptNfoLpUgyIIRB0Q8xqsSiD4KzVitplP47F ZGbusMMK6qlmXuY597zvYS78Rcmk5Ak2VWaB73T56k+HPJhjiQfUEl055AU79Px8yBOWeY6dM0+P x2z5Gr8WEuQMq6xxNtdEhVtUnL1gkIE8YZWHaYuJsnCZcXaDFPJghbUpSGRkno7zMQAsAGyeUfxj 0kWakeMIWjTtn1MreS5wSQ3sGoun43nCJhdS5Klc1I6MgDL39I4c6Y804yvOywALsKmlzX7KW70p DS1RoqE3ZF9Dc5c1bCgCVXNbY7ZkrAtSVqjLgW7LMBtHlbAIzGb9nrAtZa0LtLWVRYi+tsgpZTw1 RgvoZ6USd/W6tLWtdVnRiU30I09dNHVl0VBXDrQlsKwLMsq6UrrRSSHtVLXVlX3dlAEDWvJaXbls buqQEAoQ4Iy5Hau/5EjfnPZWPkhHP5mRP/HfxUG8opfqX4xxRnw2kWN24iDgG4+YyHaihjSj5gWA AOc9Fdy8n9/Y+jobPgkEAc4eM8zn7w0Ysk7TP8GEIBg4u3S4yvmc8465z0aM/PvFkqDpFdanS+jz X+o3q0udsu4NGL4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTE6NDk6MDgrMDI6MDBn VuNrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDExOjQ5OjA4KzAyOjAwFgtb1wAAAABJ RU5ErkJggg\x3d\x3d" \x3e ';
            w[c] && 36 == w[c] && ma(c, D[c], E[c], "", "");
            w[c] && 40 == w[c] && na(c, D[c], E[c], "", "");
            za(c, D[c], E[c], S[c], N[c], a)
        }

        function oa(c, a, f) {
            a = v.getAdserverTargetingForAdUnitCode(c);
            return p.getElementById(c) ? a && a.hb_adid ? (a = v.getHighestCpmBids(c)) && 0 < a.length && a[0].bidderCode && "ogury" === a[0].bidderCode || a && 0 < a.length && a[0].bidderCode && "gumgum" === a[0].bidderCode ? !1 : L[c] = !0 : !1 : !1
        }

        function ha(c, a, f) {
            a = v.getAdserverTargetingForAdUnitCode(c);
            f = p.getElementById(c);
            return L[c] || !f ? !1 : a && a.hb_adid ? (a = v.getHighestCpmBids(c)) &&
                0 < a.length && a[0].bidderCode && "ogury" === a[0].bidderCode || a && 0 < a.length && a[0].bidderCode && "gumgum" === a[0].bidderCode ? !1 : L[c] = !0 : !1
        }

        function Aa(c) {
            var a = p.createElement("div");
            a.setAttribute("id", "" + c);
            p.body.appendChild(a)
        }

        function za(c, a, f, b, e, d) {
            var k = v.getAdserverTargetingForAdUnitCode(c),
                h;
            if (h = null != d || void 0 != d ? p.getElementById(d) : p.getElementById(c))
                if (k && k.hb_adid) {
                    refreshedHBPassback["" + d] = !0;
                    var g = v.getHighestCpmBids(c);
                    if (28 == w[c]) {
                        for (a = p.getElementById(c); a.firstChild;) a.firstChild.remove();
                        g = v.getHighestCpmBids(c);
                        var m = 480,
                            l = 270;
                        hbagency_ismobile && (m = 320, l = 180);
                        isloadedima ? da(g, h, c, m, l, k) : (function() {
                            var q = p.createElement("script");
                            q.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
                            q.async = "true";
                            q.onload = function() {
                                da(g, h, c, m, l, k)
                            };
                            p.getElementsByTagName("head")[0].appendChild(q)
                        }(), isloadedima = !0)
                    } else if (20 == w[c] && "video" === g[0].mediaType) {
                        for (a = p.getElementById(c); a.firstChild;) a.firstChild.remove();
                        ea(280, 360, p.getElementById(c));
                        v.renderAd(p, g[0].adId)
                    } else if (41 == w[g[0].adUnitCode]) pa(g[0],
                        c, k.hb_adid);
                    else if (b = p.createElement("iframe"), ia(c) && (b.style.width = "300px", b.style.height = "600px", b.style.overflow = "hidden", b.style.transform = "scale(0.5, 0.5)", b.style.transformOrigin = "0px 0px", b.style.position = "absolute", b.style.left = "0px"), (18 == w[c] || 17 === w[c] && 300 === g[0].width && 250 === g[0].height) && hbagency_ismobile && (b.style.width = "300px", b.style.height = "250px", b.style.overflow = "hidden", b.style.transform = "scale(0.55, 0.55)", b.style.maxWidth = "none", b.style.transformOrigin = "0px 0px", b.style.position =
                            "absolute"), b.vspace = 0, b.hspace = 0, null != d || void 0 != d ? b.setAttribute("id", "framehb_" + d) : b.setAttribute("id", "framehb_" + c), b.setAttribute("scrolling", "no"), b.setAttribute("marginwidth", "0"), b.setAttribute("marginheight", "0"), b.setAttribute("frameborder", "0"), "native" === g[0].mediaType) {
                        for (a = p.getElementById(c); a.firstChild;) a.firstChild.remove();
                        qa(b, g[0], h)
                    } else {
                        W(c) && ("triplelift" === g[0].bidderCode ? ra(280, 360, h) : X(280, 360, h));
                        if (null != d || void 0 != d) h.style.textAlign = "center";
                        for (a = h; a.firstChild;) a.firstChild.remove();
                        "teads" === g[0].bidderCode && 1 === g[0].width && 1 === g[0].height && (W(c) && (a = p.createElement("div"), f = p.createElement("div"), f.setAttribute("id", c + ""), h.setAttribute("id", "old_" + c), h.appendChild(a), a.appendChild(f), h.style.width = "100%", ea(280, 360, a), h = f), b.setAttribute("width", "1"), b.setAttribute("height", "1"));
                        b.setAttribute("allow", "attribution-reporting");
                        h.appendChild(b);
                        d = null != d || void 0 != d ? p.getElementById("framehb_" + d) : p.getElementById("framehb_" + c);
                        d = d.contentDocument || d.contentWindow.document;
                        v.renderAd(d,
                            k.hb_adid);
                        d.close();
                        adagioanalytics_hbagency && p.dispatchEvent(new CustomEvent("HBEvent", {
                            detail: {
                                isEmpty: !1,
                                elementId: "" + c,
                                creativeId: "crea_" + c,
                                creativeSize: [g[0].width, g[0].height]
                            }
                        }))
                    }
                } else if ((null != d || void 0 != d) && null !== b && "" !== b && void 0 === refreshedHBPassback["" + d]) {
                refreshedHBPassback["" + d] = !0;
                for (a = h; a.firstChild;) a.firstChild.remove();
                autoapprovecmp_hbagency ? postscribe("#" + d, b) : (42 != w[c] || hbagency_ismobile || aa(b, d, 300, 340), hbagency_ismobile && aa(b, d, 280, 280), 43 != w[c] || hbagency_ismobile || aa(b,
                    d, 728, 90))
            }
        }

        function ca(c, a) {
            var f = p.getElementById(c);
            if (null != f && 40 == w[c]) return f;
            if (void 0 !== a && "" !== a) {
                var b = a.split("\x3d");
                if (-1 !== a.indexOf("class")) {
                    a = b[1].split(";");
                    b = p.getElementsByClassName(a[0])[a[1]];
                    var e = p.createElement("div");
                    e.setAttribute("id", c);
                    38 == w[c] && e.setAttribute("class", c);
                    void 0 !== b && "" !== b && (2 < a.length ? b.insertBefore(e, b.children[a[2]]) : b.appendChild(e), f = e)
                } else a = p.getElementById(b[1]), b = p.createElement("div"), b.setAttribute("id", c), void 0 !== a && "" !== a && null !== a && (a.appendChild(b),
                    f = b)
            }
            return f
        }

        function da(c, a, f, b, e, d) {
            function k(A) {
                const B = new google.ima.AdsRenderingSettings;
                B.restoreCustomPlaybackStateOnAdBreakComplete = !0;
                n = A.getAdsManager(F, B);
                n.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, g);
                n.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, l);
                n.addEventListener(google.ima.AdEvent.Type.SKIPPED, m);
                n.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, q);
                n.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, h);
                n.addEventListener(google.ima.AdEvent.Type.LOADED,
                    h);
                n.addEventListener(google.ima.AdEvent.Type.STARTED, h);
                n.addEventListener(google.ima.AdEvent.Type.COMPLETE, h);
                F.load();
                T.initialize();
                try {
                    n.init(b, e, google.ima.ViewMode.NORMAL), n.start()
                } catch (G) {
                    F.play()
                }
            }

            function h(A) {
                var B = A.getAd();
                switch (A.type) {
                    case google.ima.AdEvent.Type.LOADED:
                        B.isLinear() || F.play();
                        break;
                    case google.ima.AdEvent.Type.SKIPPED:
                        n.destroy();
                        a.innerHTML = "";
                        break;
                    case google.ima.AdEvent.Type.STARTED:
                        A = v.getHighestCpmBids(f)[0].cpm;
                        A = {
                            bidderCode: v.getHighestCpmBids(f)[0].bidderCode,
                            owner: !1,
                            idzona: O[f],
                            adUnitCode: f,
                            width: 1,
                            height: 1,
                            cpm: A
                        };
                        B = [];
                        B.push({
                            event: "bidWon",
                            user_id: USER_ID_hbagency,
                            website_id: WEBSITE_ID_hbagency,
                            data: A
                        });
                        ba(B, urlHbstatsAnalytics);
                        ispubstackHB && (A = v.getAdserverTargetingForAdUnitCode("" + f).hb_adid, Pubstack.cmd("prebid", "bidWon", {
                            adId: A
                        }));
                        break;
                    case google.ima.AdEvent.Type.COMPLETE:
                        n.destroy(), a.innerHTML = "", B.isLinear() && clearInterval(M)
                }
            }

            function g(A) {
                console.log(A.getError());
                n.destroy()
            }

            function m() {
                n.destroy();
                a.innerHTML = ""
            }

            function l() {
                F.pause()
            }

            function q() {
                F.play()
            }
            a.style.display = "block";
            a.style.width = b + "px";
            a.style.height = e + "px";
            a.style.position = "fixed";
            a.style.zIndex = "2147483642";
            a.style.right = "10px";
            a.style.bottom = "20px";
            setTimeout(function() {
                var A = p.createElement("div");
                A.innerHTML = '\x3cdiv  style \x3d "cursor:pointer;right:0px;heihgt:20px;position:fixed;\n                                        float:left;bottom:' + e + 'px;"\x3e\n                                         \x3ca href\x3d"https://hbagency.it/?utm_medium\x3dautopromobanner\x26utm_source\x3d' +
                    WEBSITE_ID_hbagency + '" target\x3d"_blank" rel\x3d"noopener noreferrer nofollow" style\x3d"cursor:pointer"\x3e\n                                        \x3cspan style\x3d"text-align:center;font-size:smaller;float:left;line-height:normal;height:1px;margin-right:' + (b - 35) + 'px"\x3e    \n                                      \x3cimg src\x3d"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMTAwJSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZFIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMzM4LjAwMDAwMCw1MTMuMDAwMDAwIAoJQzIyNS4zNjA3MDMsNTEzLjAwMDAwMCAxMTMuMjIxMzk3LDUxMy4wMDAwMDAgMS4wNDEwNDcsNTEzLjAwMDAwMCAKCUMxLjA0MTA0NywzNDIuNDAyMzQ0IDEuMDQxMDQ3LDE3MS44MDQ2NzIgMS4wNDEwNDcsMS4xMDM1MDEgCglDMTcxLjU1NTk2OSwxLjEwMzUwMSAzNDIuMTEyMDMwLDEuMTAzNTAxIDUxMi44MzQwNDUsMS4xMDM1MDEgCglDNTEyLjgzNDA0NSwxNzEuNjY2NTM0IDUxMi44MzQwNDUsMzQyLjMzMzI1MiA1MTIuODM0MDQ1LDUxMy4wMDAwMDAgCglDNDU0LjgwNDY1Nyw1MTMuMDAwMDAwIDM5Ni42NTIzMTMsNTEzLjAwMDAwMCAzMzguMDAwMDAwLDUxMy4wMDAwMDAgCk0yNzAuODk5NTY3LDI3OS44MDA4NzMgCglDMjk1LjkzNTUxNiwyNzkuNzI1NDMzIDMyMC45NzE0NjYsMjc5LjY0OTk5NCAzNDYuOTE5NjQ3LDI3OS43ODUwMzQgCglDMzU0LjM5NTI5NCwyODAuMTgyNDk1IDM2MS45MzU2NjksMjgwLjA5MzA0OCAzNjkuMzMzNDk2LDI4MS4wNzYxMTEgCglDMzg2LjEwMTA0NCwyODMuMzA0MjMwIDQwMS42MDMwMjcsMjg4LjIyNjA0NCA0MTEuMTAzMzMzLDMwNC43Mzc4NTQgCglDNDExLjUyODI1OSwzMDUuODE3ODcxIDQxMS45OTIxMjYsMzA2Ljg4NDM2OSA0MTIuMzcyNDM3LDMwNy45Nzk4ODkgCglDNDE5Ljk0ODU3OCwzMjkuODAyNzk1IDQxMS4yMDMxODYsMzUwLjY0NzMwOCAzOTAuODc4MDgyLDM1OS4yMTE5NDUgCglDMzg4LjU5ODExNCwzNjAuMTcyNjY4IDM4Ni4yOTYyMzQsMzYxLjA4MTQyMSAzODMuMjIzMjM2LDM2MS45OTM2NTIgCglDMzc1LjU5Njc3MSwzNjMuMjIxNzcxIDM2Ny45OTU2NjcsMzY1LjI4Mzk2NiAzNjAuMzM4OTI4LDM2NS41MTY3MjQgCglDMzM5LjkwNDgxNiwzNjYuMTM3ODE3IDMxOS40NDY3NzcsMzY1Ljk3MjYyNiAyOTguMDg0OTkxLDM2NS45MjczOTkgCglDMjk0LjE0MjYzOSwzNjUuOTI3Mzk5IDI5MC4yMDAyODcsMzY1LjkyNzM5OSAyODUuNjA4ODg3LDM2NS45MjczOTkgCglDMjg1LjYwODg4NywzNDMuOTM4NTA3IDI4NS42MDg4ODcsMzIyLjU5NDExNiAyODUuNjA4ODg3LDMwMS4zODIyMzMgCglDMjY2LjM5MTIzNSwzMDEuMzgyMjMzIDI0Ny44NDExNTYsMzAxLjM4MjIzMyAyMjkuMzE2MTYyLDMwMS4zODIyMzMgCglDMjI5LjMxNjE2MiwzMzcuNDY0MjAzIDIyOS4zMTYxNjIsMzczLjE2MTM0NiAyMjkuMzE2MTYyLDQwOC45OTE3OTEgCglDMjQzLjc3MjgxMiw0MDguOTkxNzkxIDI1Ny44ODY0MTQsNDA4Ljk5MTc5MSAyNzIuOTE4ODIzLDQwOS4xOTU0OTYgCglDMjk5Ljk0NTgzMSw0MDkuMTI0NTQyIDMyNi45NzI4NzAsNDA5LjA1MzYxOSAzNTQuOTIwNDcxLDQwOS4xNzYzOTIgCglDMzYwLjA3ODA2NCw0MDkuMDczMDkwIDM2NS4yNDgwNDcsNDA5LjE2MjQ3NiAzNzAuMzkxMTEzLDQwOC44MzI1ODEgCglDMzkwLjk0MjU2Niw0MDcuNTE0MzEzIDQxMS4xMDA0NjQsNDA0LjMyNjU2OSA0MjkuNzQ1Nzg5LDM5NC45MzMzMTkgCglDNDcyLjEyNDU0MiwzNzMuNTgzNDY2IDQ4NC43MzI4MTksMzE3LjYyODUxMCA0NTUuMjQ3MzE0LDI4MC4zNTY2MjggCglDNDUwLjU1Mjg1NiwyNzQuNDIyNDg1IDQ0My44MDAxNDAsMjcwLjExNjYzOCA0MzcuMzY1ODQ1LDI2NC43NDc5ODYgCglDNDMwLjgyODU1MiwyNjEuMzc2OTIzIDQyNC4yOTEyMjksMjU4LjAwNTg1OSA0MTcuMzUxMTM1LDI1NC40MjcwOTQgCglDNDE4LjMzMDcxOSwyNTMuNjMwNjAwIDQxOC44OTIwOTAsMjUzLjA1MzgwMiA0MTkuNTU4Mjg5LDI1Mi42NDk4NzIgCglDNDQ2Ljc2NjA4MywyMzYuMTUyMDY5IDQ1Ny41MjQxMzksMjExLjUxMzE1MyA0NTQuODgwMTI3LDE4MC40OTkwMzkgCglDNDUzLjY5NTc3MCwxNjYuNjA2OTk1IDQ0OC45MjE2MzEsMTU0LjAxOTgyMSA0MzguODY5MjYzLDE0My4xMDY5MTggCglDNDM1LjY2MzIzOSwxNDAuMjkyODMxIDQzMi41NTUzMjgsMTM3LjM1Njg1NyA0MjkuMjM0OTU1LDEzNC42ODQ5MjEgCglDNDExLjA3NTg5NywxMjAuMDcyMTEzIDM4OS45MTQxMjQsMTEzLjcwODYxMSAzNjYuMTcwNDcxLDExMS45ODM5NDAgCglDMzU2LjgzODAxMywxMTEuNzQ0NDY5IDM0Ny41MDU1MjQsMTExLjUwNDk5NyAzMzcuMzAwMTQwLDExMS4wOTk3MzkgCglDMzAxLjM2NjUxNiwxMTEuMDk5NzM5IDI2NS40MzI5MjIsMTExLjA5OTczOSAyMjkuMzA0NDc0LDExMS4wOTk3MzkgCglDMjI5LjMwNDQ3NCwxNDYuMjg2NDIzIDIyOS4zMDQ0NzQsMTgwLjk5NDc2NiAyMjkuMzA0NDc0LDIxNS44OTQ0ODUgCglDMjQyLjc1MTg3NywyMTUuODk0NDg1IDI1NS44NzQxMTUsMjE1Ljg5NDQ4NSAyNjkuOTE0NjQyLDIxNi4wOTQ5NTUgCglDMjc1LjEyNDI2OCwyMTYuMDk0OTU1IDI4MC4zMzM4OTMsMjE2LjA5NDk1NSAyODUuNTM3MjMxLDIxNi4wOTQ5NTUgCglDMjg1LjUzNzIzMSwyMDcuNTAyNzMxIDI4NS41MzcyMzEsMTk5Ljc0MzgzNSAyODUuNzQzMzc4LDE5MS4wNzIxMTMgCglDMjg1Ljc0MzM3OCwxNzkuMDAzOTM3IDI4NS43NDMzNzgsMTY2LjkzNTc2MCAyODUuNzQzMzc4LDE1NC4xNTcwNzQgCglDMjk0LjcwMjA1NywxNTQuMTU3MDc0IDMwMi44MzMxOTEsMTU0LjE1NzA3NCAzMTEuNzE0ODQ0LDE1NC40Njk4OTQgCglDMzIxLjgyMDEyOSwxNTQuMzgwNDQ3IDMzMS45MjU0NDYsMTU0LjI5MTAxNiAzNDIuOTAwNjM1LDE1NC41MTcxMjAgCglDMzU0LjU2MTE1NywxNTQuOTgyNDgzIDM2Ni4wNTk4NDUsMTU2LjI1NzkxOSAzNzYuODg3OTcwLDE2MS4wNzE1OTQgCglDMzg3LjI4NDgyMSwxNjUuNjkzNTQyIDM5NC44MTU4MjYsMTczLjA1MTA4NiAzOTcuNzQzMjg2LDE4NC4yMDEyOTQgCglDMzk4Ljk4OTE5NywxODguOTQ2NzMyIDM5OC45MzA2NjQsMTk0LjAzNDYzNyAzOTkuMTk2NTk0LDE5OS42NTkzMzIgCglDMzk4LjIxNDExMSwyMTQuMDIwNTY5IDM5MC4xNDgzNDYsMjIzLjQyMjI3MiAzNzcuMjMzNDkwLDIzMC4wMjg4ODUgCglDMzY4LjIxNzIyNCwyMzIuMzQ1MzIyIDM1OS4zMTEwOTYsMjM1LjgyODA5NCAzNTAuMTU3NzE1LDIzNi42OTI0NzQgCglDMzM3LjgxOTY0MSwyMzcuODU3NjA1IDMyNS4yOTA1NTgsMjM2Ljk0MDgyNiAzMTIuODQ0NjM1LDIzNy4wNTAxNzEgCglDMzA3LjIxNTk0MiwyMzcuMDk5NjA5IDMwMS41OTAxMTgsMjM3LjQ2ODc2NSAyOTUuMDc0MTg4LDIzNy40MTE0OTkgCglDMjcwLjg0MDM2MywyMzcuMzgzODUwIDI0Ni42MDY1NTIsMjM3LjMzNTkwNyAyMjIuMzcyNzU3LDIzNy4zNDU3NzkgCglDMjE3LjU3NDc2OCwyMzcuMzQ3NzMzIDIxMi43NzY4NTUsMjM3LjU3MTg1NCAyMDcuMDkwNDM5LDIzNy40MDMxMjIgCglDMTk1LjE0MzYwMCwyMzcuNjUwMTE2IDE4My4xMzI3MzYsMjM3LjE5ODUzMiAxNzEuMjYyOTM5LDIzOC4yODYyODUgCglDMTQ0LjcxNzQ4NCwyNDAuNzE4OTMzIDExOC43OTc3MTQsMjQ1LjI3Mzc4OCAxMDAuMDAyMzg4LDI2Ny41MTY5MDcgCglDOTkuNzIzNjk0LDI2NS44ODY4NzEgOTkuNDc5MzQwLDI2NC40NTc2NzIgOTkuNTI1NTIwLDI2Mi4xMjg4MTUgCglDOTkuNTUzMzE0LDIyMy41NzI1ODYgOTkuNTgzNDU4LDE4NS4wMTYzNDIgOTkuNTkyODE5LDE0Ni40NjAxMTQgCglDOTkuNTkzMDE4LDE0NS42NDcxNTYgOTkuMzUzMjU2LDE0NC44MzQxMjIgOTkuNTI0MDAyLDE0My4xMjUzOTcgCglDOTkuNTI0MDAyLDEzMi41NTIzNTMgOTkuNTI0MDAyLDEyMS45NzkzMDkgOTkuNTI0MDAyLDExMS4xNzM1MDggCglDODAuODc3NDY0LDExMS4xNzM1MDggNjIuOTQ2MTE3LDExMS4xNzM1MDggNDQuNDg1MTExLDExMS4wNzcwMzQgCglDNDQuMzc3NzA1LDExMS4zODg5MzkgNDQuMjcwMjk0LDExMS43MDA4NDQgNDQuMDIwNzE4LDExMi45Mzg3OTcgCglDNDQuMDY5NTQ2LDE0Ny42MjUyOTAgNDQuMTE4Mzc0LDE4Mi4zMTE3OTggNDQuMDIyMDgzLDIxNy45MjU3NjYgCglDNDQuMDY5MjIxLDI1Ny42MTU2MDEgNDQuMTE2MzYwLDI5Ny4zMDU0MjAgNDQuMDE2NDY4LDMzNy45MjI4NTIgCglDNDQuMDE2NDY4LDM2MS41NDIzODkgNDQuMDE2NDY4LDM4NS4xNjE5NTcgNDQuMDE2NDY4LDQwOC45MjM1NTMgCglDNjIuNzE4OTE0LDQwOC45MjM1NTMgODAuOTM2NzI5LDQwOC45MjM1NTMgOTkuNjIyNDc1LDQwOC45MjM1NTMgCglDOTkuNjIyNDc1LDQwNi44MDk0MTggOTkuNjIyMzY4LDQwNS4wMDUyNDkgOTkuNjIyNDkwLDQwMy4yMDEwODAgCglDOTkuNjIzOTAxLDM4Mi4wMzYzNzcgOTkuNTAwNTM0LDM2MC44NzAyMzkgOTkuNzM2MjQ0LDMzOS43MDgxNjAgCglDOTkuNzgxMjczLDMzNS42NjUxNjEgMTAwLjU3MzEyMCwzMzEuMzUwOTgzIDEwMi4xNTkzODYsMzI3LjY1MDE0NiAKCUMxMTIuMTA0MTAzLDMwNC40NDg1NDcgMTI5LjE4OTY1MSwyODkuMDE0OTU0IDE1My44MzAwNzgsMjgzLjAyMjY0NCAKCUMxNjIuOTU5MTIyLDI4MC44MDI1NTEgMTcyLjU5MDA0MiwyODAuNjQ2MTc5IDE4Mi45MDgzODYsMjc5Ljc2MDk1NiAKCUMxOTEuNTM0ODk3LDI3OS43Nzc0OTYgMjAwLjE2MTQ4NCwyNzkuODI3MDI2IDIwOC43ODc4ODgsMjc5LjgwMzk1NSAKCUMyMjkuMTg2MDk2LDI3OS43NDk0MjAgMjQ5LjU4NDIyOSwyNzkuNjYwMzcwIDI3MC44OTk1NjcsMjc5LjgwMDg3MyAKeiIvPgo8cGF0aCBmaWxsPSIjRkY3QjAzIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMTgxLjk5MjA2NSwyNzkuNTQ4NjQ1IAoJQzE3Mi41OTAwNDIsMjgwLjY0NjE3OSAxNjIuOTU5MTIyLDI4MC44MDI1NTEgMTUzLjgzMDA3OCwyODMuMDIyNjQ0IAoJQzEyOS4xODk2NTEsMjg5LjAxNDk1NCAxMTIuMTA0MTAzLDMwNC40NDg1NDcgMTAyLjE1OTM4NiwzMjcuNjUwMTQ2IAoJQzEwMC41NzMxMjAsMzMxLjM1MDk4MyA5OS43ODEyNzMsMzM1LjY2NTE2MSA5OS43MzYyNDQsMzM5LjcwODE2MCAKCUM5OS41MDA1MzQsMzYwLjg3MDIzOSA5OS42MjM5MDEsMzgyLjAzNjM3NyA5OS42MjI0OTAsNDAzLjIwMTA4MCAKCUM5OS42MjIzNjgsNDA1LjAwNTI0OSA5OS42MjI0NzUsNDA2LjgwOTQxOCA5OS42MjI0NzUsNDA4LjkyMzU1MyAKCUM4MC45MzY3MjksNDA4LjkyMzU1MyA2Mi43MTg5MTQsNDA4LjkyMzU1MyA0NC4wMTY0NjgsNDA4LjkyMzU1MyAKCUM0NC4wMTY0NjgsMzg1LjE2MTk1NyA0NC4wMTY0NjgsMzYxLjU0MjM4OSA0NC40MjYyNDcsMzM3LjQxNzc4NiAKCUM0Ni4yNDM0MjcsMzM1LjU3MTI4OSA0Ny45MjY4MDQsMzM0LjQyMjI0MSA0OS4wMTY0OTEsMzMyLjg1OTI4MyAKCUM2My40NzU5NjcsMzEyLjEyMDM5MiA3Ny44MDczODEsMjkxLjI5MjExNCA5Mi4zMDIyMzEsMjcwLjU3ODEyNSAKCUM5NC4yNDM5ODgsMjY3LjgwMzI1MyA5Ni45MDYzMjYsMjY1LjUzMjU5MyA5OS4yMzQ5ODUsMjYzLjAyODQ0MiAKCUM5OS40NzkzNDAsMjY0LjQ1NzY3MiA5OS43MjM2OTQsMjY1Ljg4Njg3MSAxMDAuMDAyMzg4LDI2Ny41MTY5MDcgCglDMTE4Ljc5NzcxNCwyNDUuMjczNzg4IDE0NC43MTc0ODQsMjQwLjcxODkzMyAxNzEuMjYyOTM5LDIzOC4yODYyODUgCglDMTgzLjEzMjczNiwyMzcuMTk4NTMyIDE5NS4xNDM2MDAsMjM3LjY1MDExNiAyMDcuNTQwODk0LDIzNy44ODY4MTAgCglDMjA3LjYzODk5MiwyMzkuNDQwMDMzIDIwNy41MTIxOTIsMjQwLjY2NDgxMCAyMDYuODk5Mzk5LDI0MS41NTUwNTQgCglDMjAwLjgwMzY2NSwyNTAuNDEwNzA2IDE5NC41Mjc3NTYsMjU5LjE0MzgyOSAxODguNTIyNzgxLDI2OC4wNTk3NTMgCglDMTg2LjA2OTA2MSwyNzEuNzAyOTQyIDE4NC4xNTI4MTcsMjc1LjcwODEzMCAxODEuOTkyMDY1LDI3OS41NDg2NDUgCnoiLz4KPHBhdGggZmlsbD0iI0ZGOTMwMiIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTM4NC4wMDQ1MTcsMzYyLjAxNDMxMyAKCUMzODYuMjk2MjM0LDM2MS4wODE0MjEgMzg4LjU5ODExNCwzNjAuMTcyNjY4IDM5MC44NzgwODIsMzU5LjIxMTk0NSAKCUM0MTEuMjAzMTg2LDM1MC42NDczMDggNDE5Ljk0ODU3OCwzMjkuODAyNzk1IDQxMi4zNzI0MzcsMzA3Ljk3OTg4OSAKCUM0MTEuOTkyMTI2LDMwNi44ODQzNjkgNDExLjUyODI1OSwzMDUuODE3ODcxIDQxMS4zNjgwNDIsMzA0LjIxMzUwMSAKCUM0MTIuMTIzMDQ3LDMwMy4yNDM2MjIgNDEyLjcxNDg0NCwzMDIuODY5OTY1IDQxMy4wODg2NTQsMzAyLjM0MTkxOSAKCUM0MjAuODIyNjYyLDI5MS40MTg0NTcgNDI4LjU2Mjc0NCwyODAuNDk4OTAxIDQzNi4yMDQ0MzcsMjY5LjUxMDk4NiAKCUM0MzcuMDk1MTg0LDI2OC4yMzAxMzMgNDM3LjQxNDY0MiwyNjYuNTUyMDAyIDQzNy45OTg5NjIsMjY1LjA1ODA0NCAKCUM0NDMuODAwMTQwLDI3MC4xMTY2MzggNDUwLjU1Mjg1NiwyNzQuNDIyNDg1IDQ1NS4yNDczMTQsMjgwLjM1NjYyOCAKCUM0ODQuNzMyODE5LDMxNy42Mjg1MTAgNDcyLjEyNDU0MiwzNzMuNTgzNDY2IDQyOS43NDU3ODksMzk0LjkzMzMxOSAKCUM0MTEuMTAwNDY0LDQwNC4zMjY1NjkgMzkwLjk0MjU2Niw0MDcuNTE0MzEzIDM3MC4zOTExMTMsNDA4LjgzMjU4MSAKCUMzNjUuMjQ4MDQ3LDQwOS4xNjI0NzYgMzYwLjA3ODA2NCw0MDkuMDczMDkwIDM1NC40OTU1NzUsNDA4LjcyNjYyNCAKCUMzNjEuODgwNzY4LDM5Ni44NTA5MjIgMzY5Ljc4NDM2MywzODUuNDg3MTUyIDM3Ny40NDc3MjMsMzczLjk2MzU5MyAKCUMzNzkuOTU0NDk4LDM3MC4xOTQwOTIgMzgxLjgzNjY3MCwzNjYuMDA5MjE2IDM4NC4wMDQ1MTcsMzYyLjAxNDMxMyAKeiIvPgo8cGF0aCBmaWxsPSIjRkY4RDAzIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNNDM3LjY4MjQwNCwyNjQuOTAzMDE1IAoJQzQzNy40MTQ2NDIsMjY2LjU1MjAwMiA0MzcuMDk1MTg0LDI2OC4yMzAxMzMgNDM2LjIwNDQzNywyNjkuNTEwOTg2IAoJQzQyOC41NjI3NDQsMjgwLjQ5ODkwMSA0MjAuODIyNjYyLDI5MS40MTg0NTcgNDEzLjA4ODY1NCwzMDIuMzQxOTE5IAoJQzQxMi43MTQ4NDQsMzAyLjg2OTk2NSA0MTIuMTIzMDQ3LDMwMy4yNDM2MjIgNDExLjMzMTU3MywzMDMuODM4ODY3IAoJQzQwMS42MDMwMjcsMjg4LjIyNjA0NCAzODYuMTAxMDQ0LDI4My4zMDQyMzAgMzY5LjMzMzQ5NiwyODEuMDc2MTExIAoJQzM2MS45MzU2NjksMjgwLjA5MzA0OCAzNTQuMzk1Mjk0LDI4MC4xODI0OTUgMzQ2LjQ3MDEyMywyNzkuMzM1ODc2IAoJQzM0Ni40OTY1ODIsMjc3LjY2NzY5NCAzNDYuNzUzOTk4LDI3Ni4yOTYyOTUgMzQ3LjQ4MTU5OCwyNzUuMjUyNjg2IAoJQzM1Ny4wMDc5OTYsMjYxLjU4ODgzNyAzNjYuNjIzMzUyLDI0Ny45ODY5NjkgMzc2LjEzOTcwOSwyMzQuMzE2MTkzIAoJQzM3Ny4wMjIxMjUsMjMzLjA0ODUzOCAzNzcuMzgyMDUwLDIzMS40MTcxNDUgMzc3Ljk4NDU4OSwyMjkuOTU0NjY2IAoJQzM5MC4xNDgzNDYsMjIzLjQyMjI3MiAzOTguMjE0MTExLDIxNC4wMjA1NjkgMzk5LjcyNjg2OCwxOTkuMzA3MDk4IAoJQzQwMS4wNzkxOTMsMTk4LjQ2MjU1NSA0MDIuMTc1MDc5LDE5OC4xNjQ3MzQgNDAyLjY4MzIyOCwxOTcuNDQ5NDE3IAoJQzQxNC41OTUzMzcsMTgwLjY3OTc5NCA0MjYuNDU5NTM0LDE2My44NzU5OTIgNDM4LjI1OTY3NCwxNDcuMDI3NDk2IAoJQzQzOC44NzAxMTcsMTQ2LjE1NTg2OSA0MzguODMzOTU0LDE0NC44MzE0MDYgNDM5LjA5ODgxNiwxNDMuNzE3NzczIAoJQzQ0OC45MjE2MzEsMTU0LjAxOTgyMSA0NTMuNjk1NzcwLDE2Ni42MDY5OTUgNDU0Ljg4MDEyNywxODAuNDk5MDM5IAoJQzQ1Ny41MjQxMzksMjExLjUxMzE1MyA0NDYuNzY2MDgzLDIzNi4xNTIwNjkgNDE5LjU1ODI4OSwyNTIuNjQ5ODcyIAoJQzQxOC44OTIwOTAsMjUzLjA1MzgwMiA0MTguMzMwNzE5LDI1My42MzA2MDAgNDE3LjM1MTEzNSwyNTQuNDI3MDk0IAoJQzQyNC4yOTEyMjksMjU4LjAwNTg1OSA0MzAuODI4NTUyLDI2MS4zNzY5MjMgNDM3LjY4MjQwNCwyNjQuOTAzMDE1IAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjdEMDAiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0zMTAuOTY0MzU1LDE1NC4xNTcwNzQgCglDMzAyLjgzMzE5MSwxNTQuMTU3MDc0IDI5NC43MDIwNTcsMTU0LjE1NzA3NCAyODUuNzQzMzc4LDE1NC4xNTcwNzQgCglDMjg1Ljc0MzM3OCwxNjYuOTM1NzYwIDI4NS43NDMzNzgsMTc5LjAwMzkzNyAyODUuMzE5ODI0LDE5MS41OTA4NTEgCglDMjgyLjU3MjM4OCwxOTQuNjE0MDkwIDI3OS44MTY1NTksMTk2Ljg0NDkxMCAyNzguMDE4MzcyLDE5OS42ODI1NzEgCglDMjc0LjcxMzQ3MCwyMDQuODk3OTgwIDI3MS45NzI0NDMsMjEwLjQ3MDcwMyAyNjguOTk2MzY4LDIxNS44OTQ0ODUgCglDMjU1Ljg3NDExNSwyMTUuODk0NDg1IDI0Mi43NTE4NzcsMjE1Ljg5NDQ4NSAyMjkuMzA0NDc0LDIxNS44OTQ0ODUgCglDMjI5LjMwNDQ3NCwxODAuOTk0NzY2IDIyOS4zMDQ0NzQsMTQ2LjI4NjQyMyAyMjkuMzA0NDc0LDExMS4wOTk3MzkgCglDMjY1LjQzMjkyMiwxMTEuMDk5NzM5IDMwMS4zNjY1MTYsMTExLjA5OTczOSAzMzcuNjgyMTkwLDExMS42MTAxOTkgCglDMzM3LjQ1MDE2NSwxMTMuNjA4MDYzIDMzNy4wNzgyMTcsMTE1LjI2Mjg1NiAzMzYuMTgzOTI5LDExNi41NTY1NDEgCglDMzI4LjY5NjIyOCwxMjcuMzg4MzgyIDMyMS4wODM3NDAsMTM4LjEzMzk0MiAzMTMuNTg5NjkxLDE0OC45NjE0NDEgCglDMzEyLjQ5NTgxOSwxNTAuNTQxOTAxIDMxMS44Mjg4NTcsMTUyLjQxNzg0NyAzMTAuOTY0MzU1LDE1NC4xNTcwNzQgCnoiLz4KPHBhdGggZmlsbD0iI0ZGNzMwMCIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTk5LjM4MDI0OSwyNjIuNTc4NjEzIAoJQzk2LjkwNjMyNiwyNjUuNTMyNTkzIDk0LjI0Mzk4OCwyNjcuODAzMjUzIDkyLjMwMjIzMSwyNzAuNTc4MTI1IAoJQzc3LjgwNzM4MSwyOTEuMjkyMTE0IDYzLjQ3NTk2NywzMTIuMTIwMzkyIDQ5LjAxNjQ5MSwzMzIuODU5MjgzIAoJQzQ3LjkyNjgwNCwzMzQuNDIyMjQxIDQ2LjI0MzQyNywzMzUuNTcxMjg5IDQ0LjQ5OTc1NiwzMzYuOTUzOTc5IAoJQzQ0LjExNjM2MCwyOTcuMzA1NDIwIDQ0LjA2OTIyMSwyNTcuNjE1NjAxIDQ0LjQzMTgyNCwyMTcuNDE4NjI1IAoJQzQ1Ljk4MTM3MywyMTUuNzc4MDc2IDQ3LjMyMzUyOCwyMTQuNzg2MzE2IDQ4LjIzMDg2MiwyMTMuNDkwMTU4IAoJQzYzLjU4ODQwMiwxOTEuNTUxNDIyIDc4Ljg1NjkxMSwxNjkuNTUwMjAxIDk0LjI4MDA2NywxNDcuNjU3ODgzIAoJQzk1LjM5NzU5OCwxNDYuMDcxNTk0IDk3LjU1MjczNCwxNDUuMjE2MzA5IDk5LjIyNTQ0MSwxNDQuMDIxMTMzIAoJQzk5LjM1MzI1NiwxNDQuODM0MTIyIDk5LjU5MzAxOCwxNDUuNjQ3MTU2IDk5LjU5MjgxOSwxNDYuNDYwMTE0IAoJQzk5LjU4MzQ1OCwxODUuMDE2MzQyIDk5LjU1MzMxNCwyMjMuNTcyNTg2IDk5LjM4MDI0OSwyNjIuNTc4NjEzIAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjg4MDIiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0yNzIuMDAwMDAwLDQwOC45OTE3OTEgCglDMjU3Ljg4NjQxNCw0MDguOTkxNzkxIDI0My43NzI4MTIsNDA4Ljk5MTc5MSAyMjkuMzE2MTYyLDQwOC45OTE3OTEgCglDMjI5LjMxNjE2MiwzNzMuMTYxMzQ2IDIyOS4zMTYxNjIsMzM3LjQ2NDIwMyAyMjkuMzE2MTYyLDMwMS4zODIyMzMgCglDMjQ3Ljg0MTE1NiwzMDEuMzgyMjMzIDI2Ni4zOTEyMzUsMzAxLjM4MjIzMyAyODUuNjA4ODg3LDMwMS4zODIyMzMgCglDMjg1LjYwODg4NywzMjIuNTk0MTE2IDI4NS42MDg4ODcsMzQzLjkzODUwNyAyODUuNjA4ODg3LDM2NS45MjczOTkgCglDMjkwLjIwMDI4NywzNjUuOTI3Mzk5IDI5NC4xNDI2MzksMzY1LjkyNzM5OSAyOTguNTAwNDg4LDM2Ni4zNzE4NTcgCglDMjkxLjQ2ODIzMSwzNzcuODUxODA3IDI4My45NTAzMTcsMzg4Ljg0MDk3MyAyNzYuNjIxNzM1LDM5OS45NTUwNDggCglDMjc0Ljc3MDUzOCw0MDIuNzYyNDgyIDI3My41MjQyMzEsNDA1Ljk2ODc4MSAyNzIuMDAwMDAwLDQwOC45OTE3OTEgCnoiLz4KPHBhdGggZmlsbD0iI0ZGODYwMiIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTQzOC45ODQwMzksMTQzLjQxMjM1NCAKCUM0MzguODMzOTU0LDE0NC44MzE0MDYgNDM4Ljg3MDExNywxNDYuMTU1ODY5IDQzOC4yNTk2NzQsMTQ3LjAyNzQ5NiAKCUM0MjYuNDU5NTM0LDE2My44NzU5OTIgNDE0LjU5NTMzNywxODAuNjc5Nzk0IDQwMi42ODMyMjgsMTk3LjQ0OTQxNyAKCUM0MDIuMTc1MDc5LDE5OC4xNjQ3MzQgNDAxLjA3OTE5MywxOTguNDYyNTU1IDM5OS44NjEwMjMsMTk4Ljk2MDg3NiAKCUMzOTguOTMwNjY0LDE5NC4wMzQ2MzcgMzk4Ljk4OTE5NywxODguOTQ2NzMyIDM5Ny43NDMyODYsMTg0LjIwMTI5NCAKCUMzOTQuODE1ODI2LDE3My4wNTEwODYgMzg3LjI4NDgyMSwxNjUuNjkzNTQyIDM3Ni44ODc5NzAsMTYxLjA3MTU5NCAKCUMzNjYuMDU5ODQ1LDE1Ni4yNTc5MTkgMzU0LjU2MTE1NywxNTQuOTgyNDgzIDM0Mi40NTY2OTYsMTU0LjAyNDcxOSAKCUMzNDIuNTU0OTYyLDE1Mi4wMDUyNjQgMzQyLjc5OTgwNSwxNTAuMjczODgwIDM0My42ODY0OTMsMTQ4Ljk4MzUyMSAKCUMzNTAuNjc3MDMyLDEzOC44MTA2MjMgMzU3Ljg2NTI5NSwxMjguNzcyOTAzIDM2NC43OTQ1MjUsMTE4LjU1OTE0MyAKCUMzNjYuMDA3NjYwLDExNi43NzA5MjcgMzY2LjI5MDc3MSwxMTQuMzUxNzg0IDM2Ny4wMDMzODcsMTEyLjIyNDAyMiAKCUMzODkuOTE0MTI0LDExMy43MDg2MTEgNDExLjA3NTg5NywxMjAuMDcyMTEzIDQyOS4yMzQ5NTUsMTM0LjY4NDkyMSAKCUM0MzIuNTU1MzI4LDEzNy4zNTY4NTcgNDM1LjY2MzIzOSwxNDAuMjkyODMxIDQzOC45ODQwMzksMTQzLjQxMjM1NCAKeiIvPgo8cGF0aCBmaWxsPSIjRkY2RTAwIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNOTkuMzc0NzI1LDE0My41NzMyNzMgCglDOTcuNTUyNzM0LDE0NS4yMTYzMDkgOTUuMzk3NTk4LDE0Ni4wNzE1OTQgOTQuMjgwMDY3LDE0Ny42NTc4ODMgCglDNzguODU2OTExLDE2OS41NTAyMDEgNjMuNTg4NDAyLDE5MS41NTE0MjIgNDguMjMwODYyLDIxMy40OTAxNTggCglDNDcuMzIzNTI4LDIxNC43ODYzMTYgNDUuOTgxMzczLDIxNS43NzgwNzYgNDQuNTA0Mzg3LDIxNi45NTQ4OTUgCglDNDQuMTE4Mzc0LDE4Mi4zMTE3OTggNDQuMDY5NTQ2LDE0Ny42MjUyOTAgNDQuMjc0MDEwLDExMi4zNzk4ODMgCglDNDQuNzY2NTIxLDExMS42NjI5MTggNDQuOTI5MDEyLDExMS40NDcwOTggNDUuMDE0NzcxLDExMS4xNzM1MDggCglDNjIuOTQ2MTE3LDExMS4xNzM1MDggODAuODc3NDY0LDExMS4xNzM1MDggOTkuNTI0MDAyLDExMS4xNzM1MDggCglDOTkuNTI0MDAyLDEyMS45NzkzMDkgOTkuNTI0MDAyLDEzMi41NTIzNTMgOTkuMzc0NzI1LDE0My41NzMyNzMgCnoiLz4KPHBhdGggZmlsbD0iI0ZGODEwMCIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTE4Mi40NTAyMjYsMjc5LjY1NDc4NSAKCUMxODQuMTUyODE3LDI3NS43MDgxMzAgMTg2LjA2OTA2MSwyNzEuNzAyOTQyIDE4OC41MjI3ODEsMjY4LjA1OTc1MyAKCUMxOTQuNTI3NzU2LDI1OS4xNDM4MjkgMjAwLjgwMzY2NSwyNTAuNDEwNzA2IDIwNi44OTkzOTksMjQxLjU1NTA1NCAKCUMyMDcuNTEyMTkyLDI0MC42NjQ4MTAgMjA3LjYzODk5MiwyMzkuNDQwMDMzIDIwNy45ODUxMjMsMjM4LjAzMjAxMyAKCUMyMTIuNzc2ODU1LDIzNy41NzE4NTQgMjE3LjU3NDc2OCwyMzcuMzQ3NzMzIDIyMi4zNzI3NTcsMjM3LjM0NTc3OSAKCUMyNDYuNjA2NTUyLDIzNy4zMzU5MDcgMjcwLjg0MDM2MywyMzcuMzgzODUwIDI5NS41MTUxMDYsMjM3Ljg3OTMzMyAKCUMyOTAuMDg1NjYzLDI0Ny4yODY2ODIgMjg0LjEzMDY0NiwyNTYuMTcyMjExIDI3OC4zNzk3OTEsMjY1LjE4NzkyNyAKCUMyNzUuMzk0Mzc5LDI2OS44NjgyMjUgMjcyLjc2OTkyOCwyNzQuNzc4NzQ4IDI2OS45ODI0MjIsMjc5LjU4NTIzNiAKCUMyNDkuNTg0MjI5LDI3OS42NjAzNzAgMjI5LjE4NjA5NiwyNzkuNzQ5NDIwIDIwOC43ODc4ODgsMjc5LjgwMzk1NSAKCUMyMDAuMTYxNDg0LDI3OS44MjcwMjYgMTkxLjUzNDg5NywyNzkuNzc3NDk2IDE4Mi40NTAyMjYsMjc5LjY1NDc4NSAKeiIvPgo8cGF0aCBmaWxsPSIjRkY4RTAxIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjcyLjQ1OTQxMiw0MDkuMDkzNjI4IAoJQzI3My41MjQyMzEsNDA1Ljk2ODc4MSAyNzQuNzcwNTM4LDQwMi43NjI0ODIgMjc2LjYyMTczNSwzOTkuOTU1MDQ4IAoJQzI4My45NTAzMTcsMzg4Ljg0MDk3MyAyOTEuNDY4MjMxLDM3Ny44NTE4MDcgMjk4Ljk1NzA5MiwzNjYuNDY4MTQwIAoJQzMxOS40NDY3NzcsMzY1Ljk3MjYyNiAzMzkuOTA0ODE2LDM2Ni4xMzc4MTcgMzYwLjMzODkyOCwzNjUuNTE2NzI0IAoJQzM2Ny45OTU2NjcsMzY1LjI4Mzk2NiAzNzUuNTk2NzcxLDM2My4yMjE3NzEgMzgzLjYxMzg5MiwzNjIuMDAzOTY3IAoJQzM4MS44MzY2NzAsMzY2LjAwOTIxNiAzNzkuOTU0NDk4LDM3MC4xOTQwOTIgMzc3LjQ0NzcyMywzNzMuOTYzNTkzIAoJQzM2OS43ODQzNjMsMzg1LjQ4NzE1MiAzNjEuODgwNzY4LDM5Ni44NTA5MjIgMzU0LjAzNTI3OCw0MDguNjI5NzYxIAoJQzMyNi45NzI4NzAsNDA5LjA1MzYxOSAyOTkuOTQ1ODMxLDQwOS4xMjQ1NDIgMjcyLjQ1OTQxMiw0MDkuMDkzNjI4IAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjg4MDQiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0yNzAuNDQwOTc5LDI3OS42OTMwNTQgCglDMjcyLjc2OTkyOCwyNzQuNzc4NzQ4IDI3NS4zOTQzNzksMjY5Ljg2ODIyNSAyNzguMzc5NzkxLDI2NS4xODc5MjcgCglDMjg0LjEzMDY0NiwyNTYuMTcyMjExIDI5MC4wODU2NjMsMjQ3LjI4NjY4MiAyOTUuOTU5NTAzLDIzOC4wMjAwMjAgCglDMzAxLjU5MDExOCwyMzcuNDY4NzY1IDMwNy4yMTU5NDIsMjM3LjA5OTYwOSAzMTIuODQ0NjM1LDIzNy4wNTAxNzEgCglDMzI1LjI5MDU1OCwyMzYuOTQwODI2IDMzNy44MTk2NDEsMjM3Ljg1NzYwNSAzNTAuMTU3NzE1LDIzNi42OTI0NzQgCglDMzU5LjMxMTA5NiwyMzUuODI4MDk0IDM2OC4yMTcyMjQsMjMyLjM0NTMyMiAzNzcuNjA5MDM5LDIyOS45OTE3NzYgCglDMzc3LjM4MjA1MCwyMzEuNDE3MTQ1IDM3Ny4wMjIxMjUsMjMzLjA0ODUzOCAzNzYuMTM5NzA5LDIzNC4zMTYxOTMgCglDMzY2LjYyMzM1MiwyNDcuOTg2OTY5IDM1Ny4wMDc5OTYsMjYxLjU4ODgzNyAzNDcuNDgxNTk4LDI3NS4yNTI2ODYgCglDMzQ2Ljc1Mzk5OCwyNzYuMjk2Mjk1IDM0Ni40OTY1ODIsMjc3LjY2NzY5NCAzNDYuMDE0MDA4LDI3OS4yMzA2NTIgCglDMzIwLjk3MTQ2NiwyNzkuNjQ5OTk0IDI5NS45MzU1MTYsMjc5LjcyNTQzMyAyNzAuNDQwOTc5LDI3OS42OTMwNTQgCnoiLz4KPHBhdGggZmlsbD0iI0ZGODMwNSIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTM2Ni41ODY5MTQsMTEyLjEwMzk4MSAKCUMzNjYuMjkwNzcxLDExNC4zNTE3ODQgMzY2LjAwNzY2MCwxMTYuNzcwOTI3IDM2NC43OTQ1MjUsMTE4LjU1OTE0MyAKCUMzNTcuODY1Mjk1LDEyOC43NzI5MDMgMzUwLjY3NzAzMiwxMzguODEwNjIzIDM0My42ODY0OTMsMTQ4Ljk4MzUyMSAKCUMzNDIuNzk5ODA1LDE1MC4yNzM4ODAgMzQyLjU1NDk2MiwxNTIuMDA1MjY0IDM0Mi4wMjE3MjksMTUzLjg2Njk0MyAKCUMzMzEuOTI1NDQ2LDE1NC4yOTEwMTYgMzIxLjgyMDEyOSwxNTQuMzgwNDQ3IDMxMS4zMzk2MDAsMTU0LjMxMzQ3NyAKCUMzMTEuODI4ODU3LDE1Mi40MTc4NDcgMzEyLjQ5NTgxOSwxNTAuNTQxOTAxIDMxMy41ODk2OTEsMTQ4Ljk2MTQ0MSAKCUMzMjEuMDgzNzQwLDEzOC4xMzM5NDIgMzI4LjY5NjIyOCwxMjcuMzg4MzgyIDMzNi4xODM5MjksMTE2LjU1NjU0MSAKCUMzMzcuMDc4MjE3LDExNS4yNjI4NTYgMzM3LjQ1MDE2NSwxMTMuNjA4MDYzIDMzOC4xMTg2NTIsMTExLjY5MzA4NSAKCUMzNDcuNTA1NTI0LDExMS41MDQ5OTcgMzU2LjgzODAxMywxMTEuNzQ0NDY5IDM2Ni41ODY5MTQsMTEyLjEwMzk4MSAKeiIvPgo8cGF0aCBmaWxsPSIjRkY4MzA1IiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjY5LjQ1NTUwNSwyMTUuOTk0NzIwIAoJQzI3MS45NzI0NDMsMjEwLjQ3MDcwMyAyNzQuNzEzNDcwLDIwNC44OTc5ODAgMjc4LjAxODM3MiwxOTkuNjgyNTcxIAoJQzI3OS44MTY1NTksMTk2Ljg0NDkxMCAyODIuNTcyMzg4LDE5NC42MTQwOTAgMjg1LjIxNjc2NiwxOTIuMDQ3MjcyIAoJQzI4NS41MzcyMzEsMTk5Ljc0MzgzNSAyODUuNTM3MjMxLDIwNy41MDI3MzEgMjg1LjUzNzIzMSwyMTYuMDk0OTU1IAoJQzI4MC4zMzM4OTMsMjE2LjA5NDk1NSAyNzUuMTI0MjY4LDIxNi4wOTQ5NTUgMjY5LjQ1NTUwNSwyMTUuOTk0NzIwIAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjg0MjkiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk00NC43NDk5MzksMTExLjEyNTI3NSAKCUM0NC45MjkwMTIsMTExLjQ0NzA5OCA0NC43NjY1MjEsMTExLjY2MjkxOCA0NC4zNDUwOTMsMTExLjkxNjg1NSAKCUM0NC4yNzAyOTQsMTExLjcwMDg0NCA0NC4zNzc3MDUsMTExLjM4ODkzOSA0NC43NDk5MzksMTExLjEyNTI3NSAKeiIvPgo8L3N2Zz4\x3d" alt\x3d"HBAgency" loading\x3d"lazy" \n                                         style\x3d"height:18px!important;padding:0px!important;border:0!important;cursor:pointer!important;width:20px!important;margin:0!important;box-sizing:content-box!important"\x3e\x3c/a\x3e\n                                         \x3c/span\x3e \n                                        \x3cimg  \n                                        onclick\x3d"hbManager.closeHBInterstitial(\'' +
                    f + "');hbManager.closeHBInterstitial('" + f + '\');" \n                                        src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAACxMAAAsTAQCanBgAAAAHdElNRQfnBhMNMQjKJ5CYAAAB30lEQVQ4y62UPWsUURSGnzP7kUIW JaBmCmEUtnFtFjWZcvpEa3FD8AcIgo1Wsk2MVoEUYptNfoLpUgyIIRB0Q8xqsSiD4KzVitplP47F ZGbusMMK6qlmXuY597zvYS78Rcmk5Ak2VWaB73T56k+HPJhjiQfUEl055AU79Px8yBOWeY6dM0+P x2z5Gr8WEuQMq6xxNtdEhVtUnL1gkIE8YZWHaYuJsnCZcXaDFPJghbUpSGRkno7zMQAsAGyeUfxj 0kWakeMIWjTtn1MreS5wSQ3sGoun43nCJhdS5Klc1I6MgDL39I4c6Y804yvOywALsKmlzX7KW70p DS1RoqE3ZF9Dc5c1bCgCVXNbY7ZkrAtSVqjLgW7LMBtHlbAIzGb9nrAtZa0LtLWVRYi+tsgpZTw1 RgvoZ6USd/W6tLWtdVnRiU30I09dNHVl0VBXDrQlsKwLMsq6UrrRSSHtVLXVlX3dlAEDWvJaXbls buqQEAoQ4Iy5Hau/5EjfnPZWPkhHP5mRP/HfxUG8opfqX4xxRnw2kWN24iDgG4+YyHaihjSj5gWA AOc9Fdy8n9/Y+jobPgkEAc4eM8zn7w0Ysk7TP8GEIBg4u3S4yvmc8465z0aM/PvFkqDpFdanS+jz X+o3q0udsu4NGL4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTE6NDk6MDgrMDI6MDBn VuNrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDExOjQ5OjA4KzAyOjAwFgtb1wAAAABJ RU5ErkJggg\x3d\x3d" \x3e\x3c/div\x3e ';
                a.appendChild(A)
            }, 3E3);
            var r = Ba(d, f);
            a.innerHTML = '\x3cdiv id\x3d"adContainerVideoHBAgency"\x3e\n                                \x3cvideo id\x3d"contentElementVideoHBAgency" width\x3d"1" muted\x3d""\x3e\n                                  \x3csource src\x3d""\x3e\n                                  \x3c/video\x3e\n                               \x3c/div\x3e ';
            let n, x, T, M, F;
            F = p.getElementById("contentElementVideoHBAgency");
            (function() {
                google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0);
                T = new google.ima.AdDisplayContainer(p.getElementById("adContainerVideoHBAgency"),
                    F);
                x = new google.ima.AdsLoader(T);
                x.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, k, !1);
                x.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, g, !1);
                F.onended = function() {
                    x.contentComplete()
                };
                const A = new google.ima.AdsRequest;
                A.adTagUrl = r;
                A.linearAdSlotWidth = b;
                A.linearAdSlotHeight = e;
                A.nonLinearAdSlotWidth = b;
                A.nonLinearAdSlotHeight = 150;
                x.requestAds(A)
            })()
        }

        function sa(c, a, f, b) {
            a = ca(c, "");
            void 0 === a && b && Aa(c);
            if (void 0 !== f && "" !== f) {
                var e = "Brid_" + c + "_" + Math.floor(1E3 * Math.random());
                b = p.createElement("div");
                b.setAttribute("id", "" + e);
                b.setAttribute("class", "brid");
                b.style.cssText = "text-align:center;margin-left:auto;margin-right:auto;z-index:2147483647";
                a.style.zIndex = "2147483642";
                a.appendChild(b);
                var d = cpmfixvideo_hbagency,
                    k;
                setTimeout(function() {
                    try {
                        k = $bos("" + e, {
                            id: "" + f,
                            width: "480",
                            height: "270"
                        })
                    } catch (h) {}
                    k.addOnce("adImpression", function() {
                        var h = [];
                        h.push({
                            event: "bidWon",
                            user_id: USER_ID_hbagency,
                            website_id: WEBSITE_ID_hbagency,
                            data: {
                                bidderCode: "video",
                                owner: !1,
                                idzona: O[c],
                                adUnitCode: c,
                                width: 1,
                                height: 1,
                                cpm: d
                            }
                        });
                        ba(h, urlHbstatsAnalytics)
                    })
                }, 1E3)
            }
        }

        function Ca(c, a, f, b, e) {
            if (a = ca("video-hb-" + WEBSITE_ID_hbagency, "")) {
                a = a.getAttribute("class");
                try {
                    k();
                    var d = {
                        closeButton: !0,
                        content: {
                            contents: [{
                                entry: {
                                    name: "",
                                    duration: 888
                                },
                                url: "" + a
                            }],
                            type: 0,
                            breakingAds: 25,
                            breakingAdsMode: "os",
                            order: 0
                        },
                        scriptId: "AV63a56fdcb65e190af30e8229",
                        tagId: "63a56fdcb65e190af30e8229",
                        playerVersion: 8,
                        autoLoop: !0,
                        showPauseButton: !0,
                        showBigPlay: !0,
                        showBigPlayOnPause: !0,
                        showBigPrevNext: !0,
                        showVolumeControl: !0,
                        autoContinue: !0,
                        showDuration: !0,
                        closeButtonStyle: {
                            position: "Top-Right"
                        },
                        showBigPrevNextOnPause: !0,
                        showReplay: !0,
                        timelineMode: "bottom",
                        startVolume: 0,
                        mobile: {
                            showBigPrevNext: !0,
                            showFullScreen: !0,
                            showBigPlayOnPause: !0,
                            showPauseButton: !0,
                            showBigPlay: !0,
                            showPrevButton: !0,
                            showNextButton: !0
                        },
                        showSoundButton: !0,
                        autoPlay: !0,
                        poster: "",
                        showTitle: "left",
                        width: 100,
                        playerType: 2,
                        playerDelay: 0,
                        height: 0,
                        templateId: "63a56fbcb649827e1b047eb6",
                        adConfig: {
                            soundButton: !0,
                            pauseButton: !0,
                            timelineMode: "bottom",
                            width: 100,
                            height: 0,
                            errorLimit: 30,
                            logo: !1,
                            channelId: "" + f,
                            publisherId: "639aeaefcc0ea860470e2ba1",
                            vastRetry: 10,
                            vitab: !0
                        },
                        position: "video-hb-" + WEBSITE_ID_hbagency,
                        showNextButton: !0,
                        posDfp1x1: !1,
                        logo: {
                            url: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMTAwJSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZFIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMzM4LjAwMDAwMCw1MTMuMDAwMDAwIAoJQzIyNS4zNjA3MDMsNTEzLjAwMDAwMCAxMTMuMjIxMzk3LDUxMy4wMDAwMDAgMS4wNDEwNDcsNTEzLjAwMDAwMCAKCUMxLjA0MTA0NywzNDIuNDAyMzQ0IDEuMDQxMDQ3LDE3MS44MDQ2NzIgMS4wNDEwNDcsMS4xMDM1MDEgCglDMTcxLjU1NTk2OSwxLjEwMzUwMSAzNDIuMTEyMDMwLDEuMTAzNTAxIDUxMi44MzQwNDUsMS4xMDM1MDEgCglDNTEyLjgzNDA0NSwxNzEuNjY2NTM0IDUxMi44MzQwNDUsMzQyLjMzMzI1MiA1MTIuODM0MDQ1LDUxMy4wMDAwMDAgCglDNDU0LjgwNDY1Nyw1MTMuMDAwMDAwIDM5Ni42NTIzMTMsNTEzLjAwMDAwMCAzMzguMDAwMDAwLDUxMy4wMDAwMDAgCk0yNzAuODk5NTY3LDI3OS44MDA4NzMgCglDMjk1LjkzNTUxNiwyNzkuNzI1NDMzIDMyMC45NzE0NjYsMjc5LjY0OTk5NCAzNDYuOTE5NjQ3LDI3OS43ODUwMzQgCglDMzU0LjM5NTI5NCwyODAuMTgyNDk1IDM2MS45MzU2NjksMjgwLjA5MzA0OCAzNjkuMzMzNDk2LDI4MS4wNzYxMTEgCglDMzg2LjEwMTA0NCwyODMuMzA0MjMwIDQwMS42MDMwMjcsMjg4LjIyNjA0NCA0MTEuMTAzMzMzLDMwNC43Mzc4NTQgCglDNDExLjUyODI1OSwzMDUuODE3ODcxIDQxMS45OTIxMjYsMzA2Ljg4NDM2OSA0MTIuMzcyNDM3LDMwNy45Nzk4ODkgCglDNDE5Ljk0ODU3OCwzMjkuODAyNzk1IDQxMS4yMDMxODYsMzUwLjY0NzMwOCAzOTAuODc4MDgyLDM1OS4yMTE5NDUgCglDMzg4LjU5ODExNCwzNjAuMTcyNjY4IDM4Ni4yOTYyMzQsMzYxLjA4MTQyMSAzODMuMjIzMjM2LDM2MS45OTM2NTIgCglDMzc1LjU5Njc3MSwzNjMuMjIxNzcxIDM2Ny45OTU2NjcsMzY1LjI4Mzk2NiAzNjAuMzM4OTI4LDM2NS41MTY3MjQgCglDMzM5LjkwNDgxNiwzNjYuMTM3ODE3IDMxOS40NDY3NzcsMzY1Ljk3MjYyNiAyOTguMDg0OTkxLDM2NS45MjczOTkgCglDMjk0LjE0MjYzOSwzNjUuOTI3Mzk5IDI5MC4yMDAyODcsMzY1LjkyNzM5OSAyODUuNjA4ODg3LDM2NS45MjczOTkgCglDMjg1LjYwODg4NywzNDMuOTM4NTA3IDI4NS42MDg4ODcsMzIyLjU5NDExNiAyODUuNjA4ODg3LDMwMS4zODIyMzMgCglDMjY2LjM5MTIzNSwzMDEuMzgyMjMzIDI0Ny44NDExNTYsMzAxLjM4MjIzMyAyMjkuMzE2MTYyLDMwMS4zODIyMzMgCglDMjI5LjMxNjE2MiwzMzcuNDY0MjAzIDIyOS4zMTYxNjIsMzczLjE2MTM0NiAyMjkuMzE2MTYyLDQwOC45OTE3OTEgCglDMjQzLjc3MjgxMiw0MDguOTkxNzkxIDI1Ny44ODY0MTQsNDA4Ljk5MTc5MSAyNzIuOTE4ODIzLDQwOS4xOTU0OTYgCglDMjk5Ljk0NTgzMSw0MDkuMTI0NTQyIDMyNi45NzI4NzAsNDA5LjA1MzYxOSAzNTQuOTIwNDcxLDQwOS4xNzYzOTIgCglDMzYwLjA3ODA2NCw0MDkuMDczMDkwIDM2NS4yNDgwNDcsNDA5LjE2MjQ3NiAzNzAuMzkxMTEzLDQwOC44MzI1ODEgCglDMzkwLjk0MjU2Niw0MDcuNTE0MzEzIDQxMS4xMDA0NjQsNDA0LjMyNjU2OSA0MjkuNzQ1Nzg5LDM5NC45MzMzMTkgCglDNDcyLjEyNDU0MiwzNzMuNTgzNDY2IDQ4NC43MzI4MTksMzE3LjYyODUxMCA0NTUuMjQ3MzE0LDI4MC4zNTY2MjggCglDNDUwLjU1Mjg1NiwyNzQuNDIyNDg1IDQ0My44MDAxNDAsMjcwLjExNjYzOCA0MzcuMzY1ODQ1LDI2NC43NDc5ODYgCglDNDMwLjgyODU1MiwyNjEuMzc2OTIzIDQyNC4yOTEyMjksMjU4LjAwNTg1OSA0MTcuMzUxMTM1LDI1NC40MjcwOTQgCglDNDE4LjMzMDcxOSwyNTMuNjMwNjAwIDQxOC44OTIwOTAsMjUzLjA1MzgwMiA0MTkuNTU4Mjg5LDI1Mi42NDk4NzIgCglDNDQ2Ljc2NjA4MywyMzYuMTUyMDY5IDQ1Ny41MjQxMzksMjExLjUxMzE1MyA0NTQuODgwMTI3LDE4MC40OTkwMzkgCglDNDUzLjY5NTc3MCwxNjYuNjA2OTk1IDQ0OC45MjE2MzEsMTU0LjAxOTgyMSA0MzguODY5MjYzLDE0My4xMDY5MTggCglDNDM1LjY2MzIzOSwxNDAuMjkyODMxIDQzMi41NTUzMjgsMTM3LjM1Njg1NyA0MjkuMjM0OTU1LDEzNC42ODQ5MjEgCglDNDExLjA3NTg5NywxMjAuMDcyMTEzIDM4OS45MTQxMjQsMTEzLjcwODYxMSAzNjYuMTcwNDcxLDExMS45ODM5NDAgCglDMzU2LjgzODAxMywxMTEuNzQ0NDY5IDM0Ny41MDU1MjQsMTExLjUwNDk5NyAzMzcuMzAwMTQwLDExMS4wOTk3MzkgCglDMzAxLjM2NjUxNiwxMTEuMDk5NzM5IDI2NS40MzI5MjIsMTExLjA5OTczOSAyMjkuMzA0NDc0LDExMS4wOTk3MzkgCglDMjI5LjMwNDQ3NCwxNDYuMjg2NDIzIDIyOS4zMDQ0NzQsMTgwLjk5NDc2NiAyMjkuMzA0NDc0LDIxNS44OTQ0ODUgCglDMjQyLjc1MTg3NywyMTUuODk0NDg1IDI1NS44NzQxMTUsMjE1Ljg5NDQ4NSAyNjkuOTE0NjQyLDIxNi4wOTQ5NTUgCglDMjc1LjEyNDI2OCwyMTYuMDk0OTU1IDI4MC4zMzM4OTMsMjE2LjA5NDk1NSAyODUuNTM3MjMxLDIxNi4wOTQ5NTUgCglDMjg1LjUzNzIzMSwyMDcuNTAyNzMxIDI4NS41MzcyMzEsMTk5Ljc0MzgzNSAyODUuNzQzMzc4LDE5MS4wNzIxMTMgCglDMjg1Ljc0MzM3OCwxNzkuMDAzOTM3IDI4NS43NDMzNzgsMTY2LjkzNTc2MCAyODUuNzQzMzc4LDE1NC4xNTcwNzQgCglDMjk0LjcwMjA1NywxNTQuMTU3MDc0IDMwMi44MzMxOTEsMTU0LjE1NzA3NCAzMTEuNzE0ODQ0LDE1NC40Njk4OTQgCglDMzIxLjgyMDEyOSwxNTQuMzgwNDQ3IDMzMS45MjU0NDYsMTU0LjI5MTAxNiAzNDIuOTAwNjM1LDE1NC41MTcxMjAgCglDMzU0LjU2MTE1NywxNTQuOTgyNDgzIDM2Ni4wNTk4NDUsMTU2LjI1NzkxOSAzNzYuODg3OTcwLDE2MS4wNzE1OTQgCglDMzg3LjI4NDgyMSwxNjUuNjkzNTQyIDM5NC44MTU4MjYsMTczLjA1MTA4NiAzOTcuNzQzMjg2LDE4NC4yMDEyOTQgCglDMzk4Ljk4OTE5NywxODguOTQ2NzMyIDM5OC45MzA2NjQsMTk0LjAzNDYzNyAzOTkuMTk2NTk0LDE5OS42NTkzMzIgCglDMzk4LjIxNDExMSwyMTQuMDIwNTY5IDM5MC4xNDgzNDYsMjIzLjQyMjI3MiAzNzcuMjMzNDkwLDIzMC4wMjg4ODUgCglDMzY4LjIxNzIyNCwyMzIuMzQ1MzIyIDM1OS4zMTEwOTYsMjM1LjgyODA5NCAzNTAuMTU3NzE1LDIzNi42OTI0NzQgCglDMzM3LjgxOTY0MSwyMzcuODU3NjA1IDMyNS4yOTA1NTgsMjM2Ljk0MDgyNiAzMTIuODQ0NjM1LDIzNy4wNTAxNzEgCglDMzA3LjIxNTk0MiwyMzcuMDk5NjA5IDMwMS41OTAxMTgsMjM3LjQ2ODc2NSAyOTUuMDc0MTg4LDIzNy40MTE0OTkgCglDMjcwLjg0MDM2MywyMzcuMzgzODUwIDI0Ni42MDY1NTIsMjM3LjMzNTkwNyAyMjIuMzcyNzU3LDIzNy4zNDU3NzkgCglDMjE3LjU3NDc2OCwyMzcuMzQ3NzMzIDIxMi43NzY4NTUsMjM3LjU3MTg1NCAyMDcuMDkwNDM5LDIzNy40MDMxMjIgCglDMTk1LjE0MzYwMCwyMzcuNjUwMTE2IDE4My4xMzI3MzYsMjM3LjE5ODUzMiAxNzEuMjYyOTM5LDIzOC4yODYyODUgCglDMTQ0LjcxNzQ4NCwyNDAuNzE4OTMzIDExOC43OTc3MTQsMjQ1LjI3Mzc4OCAxMDAuMDAyMzg4LDI2Ny41MTY5MDcgCglDOTkuNzIzNjk0LDI2NS44ODY4NzEgOTkuNDc5MzQwLDI2NC40NTc2NzIgOTkuNTI1NTIwLDI2Mi4xMjg4MTUgCglDOTkuNTUzMzE0LDIyMy41NzI1ODYgOTkuNTgzNDU4LDE4NS4wMTYzNDIgOTkuNTkyODE5LDE0Ni40NjAxMTQgCglDOTkuNTkzMDE4LDE0NS42NDcxNTYgOTkuMzUzMjU2LDE0NC44MzQxMjIgOTkuNTI0MDAyLDE0My4xMjUzOTcgCglDOTkuNTI0MDAyLDEzMi41NTIzNTMgOTkuNTI0MDAyLDEyMS45NzkzMDkgOTkuNTI0MDAyLDExMS4xNzM1MDggCglDODAuODc3NDY0LDExMS4xNzM1MDggNjIuOTQ2MTE3LDExMS4xNzM1MDggNDQuNDg1MTExLDExMS4wNzcwMzQgCglDNDQuMzc3NzA1LDExMS4zODg5MzkgNDQuMjcwMjk0LDExMS43MDA4NDQgNDQuMDIwNzE4LDExMi45Mzg3OTcgCglDNDQuMDY5NTQ2LDE0Ny42MjUyOTAgNDQuMTE4Mzc0LDE4Mi4zMTE3OTggNDQuMDIyMDgzLDIxNy45MjU3NjYgCglDNDQuMDY5MjIxLDI1Ny42MTU2MDEgNDQuMTE2MzYwLDI5Ny4zMDU0MjAgNDQuMDE2NDY4LDMzNy45MjI4NTIgCglDNDQuMDE2NDY4LDM2MS41NDIzODkgNDQuMDE2NDY4LDM4NS4xNjE5NTcgNDQuMDE2NDY4LDQwOC45MjM1NTMgCglDNjIuNzE4OTE0LDQwOC45MjM1NTMgODAuOTM2NzI5LDQwOC45MjM1NTMgOTkuNjIyNDc1LDQwOC45MjM1NTMgCglDOTkuNjIyNDc1LDQwNi44MDk0MTggOTkuNjIyMzY4LDQwNS4wMDUyNDkgOTkuNjIyNDkwLDQwMy4yMDEwODAgCglDOTkuNjIzOTAxLDM4Mi4wMzYzNzcgOTkuNTAwNTM0LDM2MC44NzAyMzkgOTkuNzM2MjQ0LDMzOS43MDgxNjAgCglDOTkuNzgxMjczLDMzNS42NjUxNjEgMTAwLjU3MzEyMCwzMzEuMzUwOTgzIDEwMi4xNTkzODYsMzI3LjY1MDE0NiAKCUMxMTIuMTA0MTAzLDMwNC40NDg1NDcgMTI5LjE4OTY1MSwyODkuMDE0OTU0IDE1My44MzAwNzgsMjgzLjAyMjY0NCAKCUMxNjIuOTU5MTIyLDI4MC44MDI1NTEgMTcyLjU5MDA0MiwyODAuNjQ2MTc5IDE4Mi45MDgzODYsMjc5Ljc2MDk1NiAKCUMxOTEuNTM0ODk3LDI3OS43Nzc0OTYgMjAwLjE2MTQ4NCwyNzkuODI3MDI2IDIwOC43ODc4ODgsMjc5LjgwMzk1NSAKCUMyMjkuMTg2MDk2LDI3OS43NDk0MjAgMjQ5LjU4NDIyOSwyNzkuNjYwMzcwIDI3MC44OTk1NjcsMjc5LjgwMDg3MyAKeiIvPgo8cGF0aCBmaWxsPSIjRkY3QjAzIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMTgxLjk5MjA2NSwyNzkuNTQ4NjQ1IAoJQzE3Mi41OTAwNDIsMjgwLjY0NjE3OSAxNjIuOTU5MTIyLDI4MC44MDI1NTEgMTUzLjgzMDA3OCwyODMuMDIyNjQ0IAoJQzEyOS4xODk2NTEsMjg5LjAxNDk1NCAxMTIuMTA0MTAzLDMwNC40NDg1NDcgMTAyLjE1OTM4NiwzMjcuNjUwMTQ2IAoJQzEwMC41NzMxMjAsMzMxLjM1MDk4MyA5OS43ODEyNzMsMzM1LjY2NTE2MSA5OS43MzYyNDQsMzM5LjcwODE2MCAKCUM5OS41MDA1MzQsMzYwLjg3MDIzOSA5OS42MjM5MDEsMzgyLjAzNjM3NyA5OS42MjI0OTAsNDAzLjIwMTA4MCAKCUM5OS42MjIzNjgsNDA1LjAwNTI0OSA5OS42MjI0NzUsNDA2LjgwOTQxOCA5OS42MjI0NzUsNDA4LjkyMzU1MyAKCUM4MC45MzY3MjksNDA4LjkyMzU1MyA2Mi43MTg5MTQsNDA4LjkyMzU1MyA0NC4wMTY0NjgsNDA4LjkyMzU1MyAKCUM0NC4wMTY0NjgsMzg1LjE2MTk1NyA0NC4wMTY0NjgsMzYxLjU0MjM4OSA0NC40MjYyNDcsMzM3LjQxNzc4NiAKCUM0Ni4yNDM0MjcsMzM1LjU3MTI4OSA0Ny45MjY4MDQsMzM0LjQyMjI0MSA0OS4wMTY0OTEsMzMyLjg1OTI4MyAKCUM2My40NzU5NjcsMzEyLjEyMDM5MiA3Ny44MDczODEsMjkxLjI5MjExNCA5Mi4zMDIyMzEsMjcwLjU3ODEyNSAKCUM5NC4yNDM5ODgsMjY3LjgwMzI1MyA5Ni45MDYzMjYsMjY1LjUzMjU5MyA5OS4yMzQ5ODUsMjYzLjAyODQ0MiAKCUM5OS40NzkzNDAsMjY0LjQ1NzY3MiA5OS43MjM2OTQsMjY1Ljg4Njg3MSAxMDAuMDAyMzg4LDI2Ny41MTY5MDcgCglDMTE4Ljc5NzcxNCwyNDUuMjczNzg4IDE0NC43MTc0ODQsMjQwLjcxODkzMyAxNzEuMjYyOTM5LDIzOC4yODYyODUgCglDMTgzLjEzMjczNiwyMzcuMTk4NTMyIDE5NS4xNDM2MDAsMjM3LjY1MDExNiAyMDcuNTQwODk0LDIzNy44ODY4MTAgCglDMjA3LjYzODk5MiwyMzkuNDQwMDMzIDIwNy41MTIxOTIsMjQwLjY2NDgxMCAyMDYuODk5Mzk5LDI0MS41NTUwNTQgCglDMjAwLjgwMzY2NSwyNTAuNDEwNzA2IDE5NC41Mjc3NTYsMjU5LjE0MzgyOSAxODguNTIyNzgxLDI2OC4wNTk3NTMgCglDMTg2LjA2OTA2MSwyNzEuNzAyOTQyIDE4NC4xNTI4MTcsMjc1LjcwODEzMCAxODEuOTkyMDY1LDI3OS41NDg2NDUgCnoiLz4KPHBhdGggZmlsbD0iI0ZGOTMwMiIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTM4NC4wMDQ1MTcsMzYyLjAxNDMxMyAKCUMzODYuMjk2MjM0LDM2MS4wODE0MjEgMzg4LjU5ODExNCwzNjAuMTcyNjY4IDM5MC44NzgwODIsMzU5LjIxMTk0NSAKCUM0MTEuMjAzMTg2LDM1MC42NDczMDggNDE5Ljk0ODU3OCwzMjkuODAyNzk1IDQxMi4zNzI0MzcsMzA3Ljk3OTg4OSAKCUM0MTEuOTkyMTI2LDMwNi44ODQzNjkgNDExLjUyODI1OSwzMDUuODE3ODcxIDQxMS4zNjgwNDIsMzA0LjIxMzUwMSAKCUM0MTIuMTIzMDQ3LDMwMy4yNDM2MjIgNDEyLjcxNDg0NCwzMDIuODY5OTY1IDQxMy4wODg2NTQsMzAyLjM0MTkxOSAKCUM0MjAuODIyNjYyLDI5MS40MTg0NTcgNDI4LjU2Mjc0NCwyODAuNDk4OTAxIDQzNi4yMDQ0MzcsMjY5LjUxMDk4NiAKCUM0MzcuMDk1MTg0LDI2OC4yMzAxMzMgNDM3LjQxNDY0MiwyNjYuNTUyMDAyIDQzNy45OTg5NjIsMjY1LjA1ODA0NCAKCUM0NDMuODAwMTQwLDI3MC4xMTY2MzggNDUwLjU1Mjg1NiwyNzQuNDIyNDg1IDQ1NS4yNDczMTQsMjgwLjM1NjYyOCAKCUM0ODQuNzMyODE5LDMxNy42Mjg1MTAgNDcyLjEyNDU0MiwzNzMuNTgzNDY2IDQyOS43NDU3ODksMzk0LjkzMzMxOSAKCUM0MTEuMTAwNDY0LDQwNC4zMjY1NjkgMzkwLjk0MjU2Niw0MDcuNTE0MzEzIDM3MC4zOTExMTMsNDA4LjgzMjU4MSAKCUMzNjUuMjQ4MDQ3LDQwOS4xNjI0NzYgMzYwLjA3ODA2NCw0MDkuMDczMDkwIDM1NC40OTU1NzUsNDA4LjcyNjYyNCAKCUMzNjEuODgwNzY4LDM5Ni44NTA5MjIgMzY5Ljc4NDM2MywzODUuNDg3MTUyIDM3Ny40NDc3MjMsMzczLjk2MzU5MyAKCUMzNzkuOTU0NDk4LDM3MC4xOTQwOTIgMzgxLjgzNjY3MCwzNjYuMDA5MjE2IDM4NC4wMDQ1MTcsMzYyLjAxNDMxMyAKeiIvPgo8cGF0aCBmaWxsPSIjRkY4RDAzIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNNDM3LjY4MjQwNCwyNjQuOTAzMDE1IAoJQzQzNy40MTQ2NDIsMjY2LjU1MjAwMiA0MzcuMDk1MTg0LDI2OC4yMzAxMzMgNDM2LjIwNDQzNywyNjkuNTEwOTg2IAoJQzQyOC41NjI3NDQsMjgwLjQ5ODkwMSA0MjAuODIyNjYyLDI5MS40MTg0NTcgNDEzLjA4ODY1NCwzMDIuMzQxOTE5IAoJQzQxMi43MTQ4NDQsMzAyLjg2OTk2NSA0MTIuMTIzMDQ3LDMwMy4yNDM2MjIgNDExLjMzMTU3MywzMDMuODM4ODY3IAoJQzQwMS42MDMwMjcsMjg4LjIyNjA0NCAzODYuMTAxMDQ0LDI4My4zMDQyMzAgMzY5LjMzMzQ5NiwyODEuMDc2MTExIAoJQzM2MS45MzU2NjksMjgwLjA5MzA0OCAzNTQuMzk1Mjk0LDI4MC4xODI0OTUgMzQ2LjQ3MDEyMywyNzkuMzM1ODc2IAoJQzM0Ni40OTY1ODIsMjc3LjY2NzY5NCAzNDYuNzUzOTk4LDI3Ni4yOTYyOTUgMzQ3LjQ4MTU5OCwyNzUuMjUyNjg2IAoJQzM1Ny4wMDc5OTYsMjYxLjU4ODgzNyAzNjYuNjIzMzUyLDI0Ny45ODY5NjkgMzc2LjEzOTcwOSwyMzQuMzE2MTkzIAoJQzM3Ny4wMjIxMjUsMjMzLjA0ODUzOCAzNzcuMzgyMDUwLDIzMS40MTcxNDUgMzc3Ljk4NDU4OSwyMjkuOTU0NjY2IAoJQzM5MC4xNDgzNDYsMjIzLjQyMjI3MiAzOTguMjE0MTExLDIxNC4wMjA1NjkgMzk5LjcyNjg2OCwxOTkuMzA3MDk4IAoJQzQwMS4wNzkxOTMsMTk4LjQ2MjU1NSA0MDIuMTc1MDc5LDE5OC4xNjQ3MzQgNDAyLjY4MzIyOCwxOTcuNDQ5NDE3IAoJQzQxNC41OTUzMzcsMTgwLjY3OTc5NCA0MjYuNDU5NTM0LDE2My44NzU5OTIgNDM4LjI1OTY3NCwxNDcuMDI3NDk2IAoJQzQzOC44NzAxMTcsMTQ2LjE1NTg2OSA0MzguODMzOTU0LDE0NC44MzE0MDYgNDM5LjA5ODgxNiwxNDMuNzE3NzczIAoJQzQ0OC45MjE2MzEsMTU0LjAxOTgyMSA0NTMuNjk1NzcwLDE2Ni42MDY5OTUgNDU0Ljg4MDEyNywxODAuNDk5MDM5IAoJQzQ1Ny41MjQxMzksMjExLjUxMzE1MyA0NDYuNzY2MDgzLDIzNi4xNTIwNjkgNDE5LjU1ODI4OSwyNTIuNjQ5ODcyIAoJQzQxOC44OTIwOTAsMjUzLjA1MzgwMiA0MTguMzMwNzE5LDI1My42MzA2MDAgNDE3LjM1MTEzNSwyNTQuNDI3MDk0IAoJQzQyNC4yOTEyMjksMjU4LjAwNTg1OSA0MzAuODI4NTUyLDI2MS4zNzY5MjMgNDM3LjY4MjQwNCwyNjQuOTAzMDE1IAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjdEMDAiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0zMTAuOTY0MzU1LDE1NC4xNTcwNzQgCglDMzAyLjgzMzE5MSwxNTQuMTU3MDc0IDI5NC43MDIwNTcsMTU0LjE1NzA3NCAyODUuNzQzMzc4LDE1NC4xNTcwNzQgCglDMjg1Ljc0MzM3OCwxNjYuOTM1NzYwIDI4NS43NDMzNzgsMTc5LjAwMzkzNyAyODUuMzE5ODI0LDE5MS41OTA4NTEgCglDMjgyLjU3MjM4OCwxOTQuNjE0MDkwIDI3OS44MTY1NTksMTk2Ljg0NDkxMCAyNzguMDE4MzcyLDE5OS42ODI1NzEgCglDMjc0LjcxMzQ3MCwyMDQuODk3OTgwIDI3MS45NzI0NDMsMjEwLjQ3MDcwMyAyNjguOTk2MzY4LDIxNS44OTQ0ODUgCglDMjU1Ljg3NDExNSwyMTUuODk0NDg1IDI0Mi43NTE4NzcsMjE1Ljg5NDQ4NSAyMjkuMzA0NDc0LDIxNS44OTQ0ODUgCglDMjI5LjMwNDQ3NCwxODAuOTk0NzY2IDIyOS4zMDQ0NzQsMTQ2LjI4NjQyMyAyMjkuMzA0NDc0LDExMS4wOTk3MzkgCglDMjY1LjQzMjkyMiwxMTEuMDk5NzM5IDMwMS4zNjY1MTYsMTExLjA5OTczOSAzMzcuNjgyMTkwLDExMS42MTAxOTkgCglDMzM3LjQ1MDE2NSwxMTMuNjA4MDYzIDMzNy4wNzgyMTcsMTE1LjI2Mjg1NiAzMzYuMTgzOTI5LDExNi41NTY1NDEgCglDMzI4LjY5NjIyOCwxMjcuMzg4MzgyIDMyMS4wODM3NDAsMTM4LjEzMzk0MiAzMTMuNTg5NjkxLDE0OC45NjE0NDEgCglDMzEyLjQ5NTgxOSwxNTAuNTQxOTAxIDMxMS44Mjg4NTcsMTUyLjQxNzg0NyAzMTAuOTY0MzU1LDE1NC4xNTcwNzQgCnoiLz4KPHBhdGggZmlsbD0iI0ZGNzMwMCIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTk5LjM4MDI0OSwyNjIuNTc4NjEzIAoJQzk2LjkwNjMyNiwyNjUuNTMyNTkzIDk0LjI0Mzk4OCwyNjcuODAzMjUzIDkyLjMwMjIzMSwyNzAuNTc4MTI1IAoJQzc3LjgwNzM4MSwyOTEuMjkyMTE0IDYzLjQ3NTk2NywzMTIuMTIwMzkyIDQ5LjAxNjQ5MSwzMzIuODU5MjgzIAoJQzQ3LjkyNjgwNCwzMzQuNDIyMjQxIDQ2LjI0MzQyNywzMzUuNTcxMjg5IDQ0LjQ5OTc1NiwzMzYuOTUzOTc5IAoJQzQ0LjExNjM2MCwyOTcuMzA1NDIwIDQ0LjA2OTIyMSwyNTcuNjE1NjAxIDQ0LjQzMTgyNCwyMTcuNDE4NjI1IAoJQzQ1Ljk4MTM3MywyMTUuNzc4MDc2IDQ3LjMyMzUyOCwyMTQuNzg2MzE2IDQ4LjIzMDg2MiwyMTMuNDkwMTU4IAoJQzYzLjU4ODQwMiwxOTEuNTUxNDIyIDc4Ljg1NjkxMSwxNjkuNTUwMjAxIDk0LjI4MDA2NywxNDcuNjU3ODgzIAoJQzk1LjM5NzU5OCwxNDYuMDcxNTk0IDk3LjU1MjczNCwxNDUuMjE2MzA5IDk5LjIyNTQ0MSwxNDQuMDIxMTMzIAoJQzk5LjM1MzI1NiwxNDQuODM0MTIyIDk5LjU5MzAxOCwxNDUuNjQ3MTU2IDk5LjU5MjgxOSwxNDYuNDYwMTE0IAoJQzk5LjU4MzQ1OCwxODUuMDE2MzQyIDk5LjU1MzMxNCwyMjMuNTcyNTg2IDk5LjM4MDI0OSwyNjIuNTc4NjEzIAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjg4MDIiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0yNzIuMDAwMDAwLDQwOC45OTE3OTEgCglDMjU3Ljg4NjQxNCw0MDguOTkxNzkxIDI0My43NzI4MTIsNDA4Ljk5MTc5MSAyMjkuMzE2MTYyLDQwOC45OTE3OTEgCglDMjI5LjMxNjE2MiwzNzMuMTYxMzQ2IDIyOS4zMTYxNjIsMzM3LjQ2NDIwMyAyMjkuMzE2MTYyLDMwMS4zODIyMzMgCglDMjQ3Ljg0MTE1NiwzMDEuMzgyMjMzIDI2Ni4zOTEyMzUsMzAxLjM4MjIzMyAyODUuNjA4ODg3LDMwMS4zODIyMzMgCglDMjg1LjYwODg4NywzMjIuNTk0MTE2IDI4NS42MDg4ODcsMzQzLjkzODUwNyAyODUuNjA4ODg3LDM2NS45MjczOTkgCglDMjkwLjIwMDI4NywzNjUuOTI3Mzk5IDI5NC4xNDI2MzksMzY1LjkyNzM5OSAyOTguNTAwNDg4LDM2Ni4zNzE4NTcgCglDMjkxLjQ2ODIzMSwzNzcuODUxODA3IDI4My45NTAzMTcsMzg4Ljg0MDk3MyAyNzYuNjIxNzM1LDM5OS45NTUwNDggCglDMjc0Ljc3MDUzOCw0MDIuNzYyNDgyIDI3My41MjQyMzEsNDA1Ljk2ODc4MSAyNzIuMDAwMDAwLDQwOC45OTE3OTEgCnoiLz4KPHBhdGggZmlsbD0iI0ZGODYwMiIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTQzOC45ODQwMzksMTQzLjQxMjM1NCAKCUM0MzguODMzOTU0LDE0NC44MzE0MDYgNDM4Ljg3MDExNywxNDYuMTU1ODY5IDQzOC4yNTk2NzQsMTQ3LjAyNzQ5NiAKCUM0MjYuNDU5NTM0LDE2My44NzU5OTIgNDE0LjU5NTMzNywxODAuNjc5Nzk0IDQwMi42ODMyMjgsMTk3LjQ0OTQxNyAKCUM0MDIuMTc1MDc5LDE5OC4xNjQ3MzQgNDAxLjA3OTE5MywxOTguNDYyNTU1IDM5OS44NjEwMjMsMTk4Ljk2MDg3NiAKCUMzOTguOTMwNjY0LDE5NC4wMzQ2MzcgMzk4Ljk4OTE5NywxODguOTQ2NzMyIDM5Ny43NDMyODYsMTg0LjIwMTI5NCAKCUMzOTQuODE1ODI2LDE3My4wNTEwODYgMzg3LjI4NDgyMSwxNjUuNjkzNTQyIDM3Ni44ODc5NzAsMTYxLjA3MTU5NCAKCUMzNjYuMDU5ODQ1LDE1Ni4yNTc5MTkgMzU0LjU2MTE1NywxNTQuOTgyNDgzIDM0Mi40NTY2OTYsMTU0LjAyNDcxOSAKCUMzNDIuNTU0OTYyLDE1Mi4wMDUyNjQgMzQyLjc5OTgwNSwxNTAuMjczODgwIDM0My42ODY0OTMsMTQ4Ljk4MzUyMSAKCUMzNTAuNjc3MDMyLDEzOC44MTA2MjMgMzU3Ljg2NTI5NSwxMjguNzcyOTAzIDM2NC43OTQ1MjUsMTE4LjU1OTE0MyAKCUMzNjYuMDA3NjYwLDExNi43NzA5MjcgMzY2LjI5MDc3MSwxMTQuMzUxNzg0IDM2Ny4wMDMzODcsMTEyLjIyNDAyMiAKCUMzODkuOTE0MTI0LDExMy43MDg2MTEgNDExLjA3NTg5NywxMjAuMDcyMTEzIDQyOS4yMzQ5NTUsMTM0LjY4NDkyMSAKCUM0MzIuNTU1MzI4LDEzNy4zNTY4NTcgNDM1LjY2MzIzOSwxNDAuMjkyODMxIDQzOC45ODQwMzksMTQzLjQxMjM1NCAKeiIvPgo8cGF0aCBmaWxsPSIjRkY2RTAwIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNOTkuMzc0NzI1LDE0My41NzMyNzMgCglDOTcuNTUyNzM0LDE0NS4yMTYzMDkgOTUuMzk3NTk4LDE0Ni4wNzE1OTQgOTQuMjgwMDY3LDE0Ny42NTc4ODMgCglDNzguODU2OTExLDE2OS41NTAyMDEgNjMuNTg4NDAyLDE5MS41NTE0MjIgNDguMjMwODYyLDIxMy40OTAxNTggCglDNDcuMzIzNTI4LDIxNC43ODYzMTYgNDUuOTgxMzczLDIxNS43NzgwNzYgNDQuNTA0Mzg3LDIxNi45NTQ4OTUgCglDNDQuMTE4Mzc0LDE4Mi4zMTE3OTggNDQuMDY5NTQ2LDE0Ny42MjUyOTAgNDQuMjc0MDEwLDExMi4zNzk4ODMgCglDNDQuNzY2NTIxLDExMS42NjI5MTggNDQuOTI5MDEyLDExMS40NDcwOTggNDUuMDE0NzcxLDExMS4xNzM1MDggCglDNjIuOTQ2MTE3LDExMS4xNzM1MDggODAuODc3NDY0LDExMS4xNzM1MDggOTkuNTI0MDAyLDExMS4xNzM1MDggCglDOTkuNTI0MDAyLDEyMS45NzkzMDkgOTkuNTI0MDAyLDEzMi41NTIzNTMgOTkuMzc0NzI1LDE0My41NzMyNzMgCnoiLz4KPHBhdGggZmlsbD0iI0ZGODEwMCIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTE4Mi40NTAyMjYsMjc5LjY1NDc4NSAKCUMxODQuMTUyODE3LDI3NS43MDgxMzAgMTg2LjA2OTA2MSwyNzEuNzAyOTQyIDE4OC41MjI3ODEsMjY4LjA1OTc1MyAKCUMxOTQuNTI3NzU2LDI1OS4xNDM4MjkgMjAwLjgwMzY2NSwyNTAuNDEwNzA2IDIwNi44OTkzOTksMjQxLjU1NTA1NCAKCUMyMDcuNTEyMTkyLDI0MC42NjQ4MTAgMjA3LjYzODk5MiwyMzkuNDQwMDMzIDIwNy45ODUxMjMsMjM4LjAzMjAxMyAKCUMyMTIuNzc2ODU1LDIzNy41NzE4NTQgMjE3LjU3NDc2OCwyMzcuMzQ3NzMzIDIyMi4zNzI3NTcsMjM3LjM0NTc3OSAKCUMyNDYuNjA2NTUyLDIzNy4zMzU5MDcgMjcwLjg0MDM2MywyMzcuMzgzODUwIDI5NS41MTUxMDYsMjM3Ljg3OTMzMyAKCUMyOTAuMDg1NjYzLDI0Ny4yODY2ODIgMjg0LjEzMDY0NiwyNTYuMTcyMjExIDI3OC4zNzk3OTEsMjY1LjE4NzkyNyAKCUMyNzUuMzk0Mzc5LDI2OS44NjgyMjUgMjcyLjc2OTkyOCwyNzQuNzc4NzQ4IDI2OS45ODI0MjIsMjc5LjU4NTIzNiAKCUMyNDkuNTg0MjI5LDI3OS42NjAzNzAgMjI5LjE4NjA5NiwyNzkuNzQ5NDIwIDIwOC43ODc4ODgsMjc5LjgwMzk1NSAKCUMyMDAuMTYxNDg0LDI3OS44MjcwMjYgMTkxLjUzNDg5NywyNzkuNzc3NDk2IDE4Mi40NTAyMjYsMjc5LjY1NDc4NSAKeiIvPgo8cGF0aCBmaWxsPSIjRkY4RTAxIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjcyLjQ1OTQxMiw0MDkuMDkzNjI4IAoJQzI3My41MjQyMzEsNDA1Ljk2ODc4MSAyNzQuNzcwNTM4LDQwMi43NjI0ODIgMjc2LjYyMTczNSwzOTkuOTU1MDQ4IAoJQzI4My45NTAzMTcsMzg4Ljg0MDk3MyAyOTEuNDY4MjMxLDM3Ny44NTE4MDcgMjk4Ljk1NzA5MiwzNjYuNDY4MTQwIAoJQzMxOS40NDY3NzcsMzY1Ljk3MjYyNiAzMzkuOTA0ODE2LDM2Ni4xMzc4MTcgMzYwLjMzODkyOCwzNjUuNTE2NzI0IAoJQzM2Ny45OTU2NjcsMzY1LjI4Mzk2NiAzNzUuNTk2NzcxLDM2My4yMjE3NzEgMzgzLjYxMzg5MiwzNjIuMDAzOTY3IAoJQzM4MS44MzY2NzAsMzY2LjAwOTIxNiAzNzkuOTU0NDk4LDM3MC4xOTQwOTIgMzc3LjQ0NzcyMywzNzMuOTYzNTkzIAoJQzM2OS43ODQzNjMsMzg1LjQ4NzE1MiAzNjEuODgwNzY4LDM5Ni44NTA5MjIgMzU0LjAzNTI3OCw0MDguNjI5NzYxIAoJQzMyNi45NzI4NzAsNDA5LjA1MzYxOSAyOTkuOTQ1ODMxLDQwOS4xMjQ1NDIgMjcyLjQ1OTQxMiw0MDkuMDkzNjI4IAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjg4MDQiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0yNzAuNDQwOTc5LDI3OS42OTMwNTQgCglDMjcyLjc2OTkyOCwyNzQuNzc4NzQ4IDI3NS4zOTQzNzksMjY5Ljg2ODIyNSAyNzguMzc5NzkxLDI2NS4xODc5MjcgCglDMjg0LjEzMDY0NiwyNTYuMTcyMjExIDI5MC4wODU2NjMsMjQ3LjI4NjY4MiAyOTUuOTU5NTAzLDIzOC4wMjAwMjAgCglDMzAxLjU5MDExOCwyMzcuNDY4NzY1IDMwNy4yMTU5NDIsMjM3LjA5OTYwOSAzMTIuODQ0NjM1LDIzNy4wNTAxNzEgCglDMzI1LjI5MDU1OCwyMzYuOTQwODI2IDMzNy44MTk2NDEsMjM3Ljg1NzYwNSAzNTAuMTU3NzE1LDIzNi42OTI0NzQgCglDMzU5LjMxMTA5NiwyMzUuODI4MDk0IDM2OC4yMTcyMjQsMjMyLjM0NTMyMiAzNzcuNjA5MDM5LDIyOS45OTE3NzYgCglDMzc3LjM4MjA1MCwyMzEuNDE3MTQ1IDM3Ny4wMjIxMjUsMjMzLjA0ODUzOCAzNzYuMTM5NzA5LDIzNC4zMTYxOTMgCglDMzY2LjYyMzM1MiwyNDcuOTg2OTY5IDM1Ny4wMDc5OTYsMjYxLjU4ODgzNyAzNDcuNDgxNTk4LDI3NS4yNTI2ODYgCglDMzQ2Ljc1Mzk5OCwyNzYuMjk2Mjk1IDM0Ni40OTY1ODIsMjc3LjY2NzY5NCAzNDYuMDE0MDA4LDI3OS4yMzA2NTIgCglDMzIwLjk3MTQ2NiwyNzkuNjQ5OTk0IDI5NS45MzU1MTYsMjc5LjcyNTQzMyAyNzAuNDQwOTc5LDI3OS42OTMwNTQgCnoiLz4KPHBhdGggZmlsbD0iI0ZGODMwNSIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTM2Ni41ODY5MTQsMTEyLjEwMzk4MSAKCUMzNjYuMjkwNzcxLDExNC4zNTE3ODQgMzY2LjAwNzY2MCwxMTYuNzcwOTI3IDM2NC43OTQ1MjUsMTE4LjU1OTE0MyAKCUMzNTcuODY1Mjk1LDEyOC43NzI5MDMgMzUwLjY3NzAzMiwxMzguODEwNjIzIDM0My42ODY0OTMsMTQ4Ljk4MzUyMSAKCUMzNDIuNzk5ODA1LDE1MC4yNzM4ODAgMzQyLjU1NDk2MiwxNTIuMDA1MjY0IDM0Mi4wMjE3MjksMTUzLjg2Njk0MyAKCUMzMzEuOTI1NDQ2LDE1NC4yOTEwMTYgMzIxLjgyMDEyOSwxNTQuMzgwNDQ3IDMxMS4zMzk2MDAsMTU0LjMxMzQ3NyAKCUMzMTEuODI4ODU3LDE1Mi40MTc4NDcgMzEyLjQ5NTgxOSwxNTAuNTQxOTAxIDMxMy41ODk2OTEsMTQ4Ljk2MTQ0MSAKCUMzMjEuMDgzNzQwLDEzOC4xMzM5NDIgMzI4LjY5NjIyOCwxMjcuMzg4MzgyIDMzNi4xODM5MjksMTE2LjU1NjU0MSAKCUMzMzcuMDc4MjE3LDExNS4yNjI4NTYgMzM3LjQ1MDE2NSwxMTMuNjA4MDYzIDMzOC4xMTg2NTIsMTExLjY5MzA4NSAKCUMzNDcuNTA1NTI0LDExMS41MDQ5OTcgMzU2LjgzODAxMywxMTEuNzQ0NDY5IDM2Ni41ODY5MTQsMTEyLjEwMzk4MSAKeiIvPgo8cGF0aCBmaWxsPSIjRkY4MzA1IiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjY5LjQ1NTUwNSwyMTUuOTk0NzIwIAoJQzI3MS45NzI0NDMsMjEwLjQ3MDcwMyAyNzQuNzEzNDcwLDIwNC44OTc5ODAgMjc4LjAxODM3MiwxOTkuNjgyNTcxIAoJQzI3OS44MTY1NTksMTk2Ljg0NDkxMCAyODIuNTcyMzg4LDE5NC42MTQwOTAgMjg1LjIxNjc2NiwxOTIuMDQ3MjcyIAoJQzI4NS41MzcyMzEsMTk5Ljc0MzgzNSAyODUuNTM3MjMxLDIwNy41MDI3MzEgMjg1LjUzNzIzMSwyMTYuMDk0OTU1IAoJQzI4MC4zMzM4OTMsMjE2LjA5NDk1NSAyNzUuMTI0MjY4LDIxNi4wOTQ5NTUgMjY5LjQ1NTUwNSwyMTUuOTk0NzIwIAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjg0MjkiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk00NC43NDk5MzksMTExLjEyNTI3NSAKCUM0NC45MjkwMTIsMTExLjQ0NzA5OCA0NC43NjY1MjEsMTExLjY2MjkxOCA0NC4zNDUwOTMsMTExLjkxNjg1NSAKCUM0NC4yNzAyOTQsMTExLjcwMDg0NCA0NC4zNzc3MDUsMTExLjM4ODkzOSA0NC43NDk5MzksMTExLjEyNTI3NSAKeiIvPgo8L3N2Zz4\x3d",
                            size: [50, 50],
                            position: "left"
                        },
                        showPrevButton: !0,
                        showFullScreen: !0,
                        tracking: {
                            enabled: !1
                        }
                    };

                    function k() {
                        var h = p.createElement("script");
                        h.src = "https://player.avplayer.com/script/2/v/avcplayer.js";
                        h.onload = function() {
                            var g = new com.aniview.player.AniviewContentPlayer(d);
                            g.nextContent();
                            g.on("AdImpression", function(m, l) {
                                m = [];
                                m.push({
                                    event: "bidWon",
                                    user_id: USER_ID_hbagency,
                                    website_id: WEBSITE_ID_hbagency,
                                    data: {
                                        bidderCode: "video",
                                        owner: !1,
                                        idzona: O[c],
                                        adUnitCode: c,
                                        width: 1,
                                        height: 1,
                                        cpm: .3
                                    }
                                });
                                ba(m, urlHbstatsAnalytics)
                            })
                        };
                        p.getElementsByTagName("head")[0].appendChild(h)
                    }
                } catch (k) {}
            }
        }

        function ta(c, a, f, b, e, d, k, h, g, m) {
            var l = v.getAdserverTargetingForAdUnitCode(c);
            null === g && (g = ca(c, d));
            47 == w[c] && Ca(c, l, k, !1, b);
            if (g)
                if (28 == w[c])
                    if (l && l.hb_adid) {
                        var q = v.getHighestCpmBids(c),
                            r = 480,
                            n = 270;
                        hbagency_ismobile && (r = 320, n = 180);
                        isloadedima ? da(q, g, c, r, n, l) : function() {
                            var x = p.createElement("script");
                            x.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
                            x.async = "true";
                            x.onload = function() {
                                isloadedima = !0;
                                da(q, g, c, r, n, l)
                            };
                            p.getElementsByTagName("head")[0].appendChild(x)
                        }()
                    } else void 0 !==
                        k && "" !== k ? isloadebrid ? sa(c, l, k, !1) : function() {
                            var x = p.createElement("script");
                            x.src = "https://services.brid.tv/player/build/brid.outstream.min.js";
                            x.async = "true";
                            x.onload = function() {
                                isloadebrid = !0;
                                sa(c, l, k, !1)
                            };
                            p.getElementsByTagName("head")[0].appendChild(x)
                        }() : null !== b && "" !== b && postscribe("#" + c, b);
            else Da(l, e, a, f, g, c, c, b, h, m)
        }

        function ia(c) {
            return 24 == w[c] || 25 == w[c]
        }

        function W(c) {
            return 19 == w[c] || 20 == w[c] || 27 == w[c] || 35 == w[c]
        }

        function na(c, a, f, b) {
            if (a = p.getElementById("" + c))
                if (v.getAdserverTargetingForAdUnitCode(c),
                    f = p.getElementById(c) ? !0 : !1, f) {
                    a.style.setProperty("overflow", "hidden");
                    a.setAttribute("id", "outer_6");
                    f = p.createElement("div");
                    f.style.height = "300px";
                    f.style.overflow = "hidden";
                    f.style.position = "relative";
                    f.style.textAlign = "center";
                    f.style.maxWidth = "300px";
                    f.style.margin = "auto";
                    b = p.createElement("div");
                    b.style.setProperty("position", "absolute", "important");
                    b.style.setProperty("top", "0", "important");
                    b.style.setProperty("left", "-10px");
                    b.style.setProperty("width", "100%", "important");
                    b.style.setProperty("height",
                        "100%", "important");
                    b.style.setProperty("border", "0", "important");
                    b.style.setProperty("margin", "0", "important");
                    b.style.setProperty("padding", "0", "important");
                    b.style.setProperty("clip", "rect(0,auto,auto,0)", "important");
                    b.style.setProperty("-webkit-clip-path", "polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;", "important");
                    b.style.setProperty("clip-path", "polygon(0px 0px,100% 0px,100% 100%,0px 100%)", "important");
                    var e = p.createElement("div");
                    e.style.setProperty("position", "fixed", "important");
                    e.style.setProperty("top", "0", "important");
                    e.style.width = "100%";
                    e.style.height = "100%";
                    e.style.setProperty("-webkit-transform", "translateZ(0)", "important");
                    e.style.setProperty("display", "-webkit-box");
                    e.style.setProperty("display", "-ms-flexbox");
                    e.style.setProperty("display", "flex");
                    e.style.setProperty("-webkit-box-orient", "vertical");
                    e.style.setProperty("top", "100px");
                    e.style.setProperty("justify-content", "center");
                    var d = p.createElement("div");
                    d.style.height = "600px";
                    d.style.width = "100%";
                    d.style.background =
                        "blank";
                    d.style.setProperty("text-align", "center");
                    d.style.setProperty("vertical-align", "middle");
                    d.style.setProperty("display", "table-cell");
                    d.style.position = "relative";
                    var k = p.createElement("div");
                    k.style.position = "absolute";
                    var h = 300;
                    43 !== w[c] || hbagency_ismobile || (h = 728);
                    var g = p.createElement("div");
                    g.style.setProperty("font-size", "10px");
                    g.style.setProperty("color", "#333");
                    g.style.setProperty("text-decoration", "none");
                    g.style.setProperty("font-family", "arial");
                    g.style.setProperty("width", h + "px");
                    g.style.setProperty("display", "block");
                    g.style.setProperty("margin", "auto");
                    g.style.setProperty("height", "8px");
                    g.innerHTML = ' \x3ca href\x3d"https://hbagency.it/?utm_medium\x3dautopromobanner\x26utm_source\x3d' + WEBSITE_ID_hbagency + '" target\x3d"_blank" rel\x3d"noopener noreferrer nofollow" style\x3d"cursor:pointer"\x3e\n              \x3cspan style\x3d"text-align:center;font-size:smaller;float:left;line-height:normal;height:2px"\x3e    \n            \x3cimg src\x3d"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMTAwJSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZFIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMzM4LjAwMDAwMCw1MTMuMDAwMDAwIAoJQzIyNS4zNjA3MDMsNTEzLjAwMDAwMCAxMTMuMjIxMzk3LDUxMy4wMDAwMDAgMS4wNDEwNDcsNTEzLjAwMDAwMCAKCUMxLjA0MTA0NywzNDIuNDAyMzQ0IDEuMDQxMDQ3LDE3MS44MDQ2NzIgMS4wNDEwNDcsMS4xMDM1MDEgCglDMTcxLjU1NTk2OSwxLjEwMzUwMSAzNDIuMTEyMDMwLDEuMTAzNTAxIDUxMi44MzQwNDUsMS4xMDM1MDEgCglDNTEyLjgzNDA0NSwxNzEuNjY2NTM0IDUxMi44MzQwNDUsMzQyLjMzMzI1MiA1MTIuODM0MDQ1LDUxMy4wMDAwMDAgCglDNDU0LjgwNDY1Nyw1MTMuMDAwMDAwIDM5Ni42NTIzMTMsNTEzLjAwMDAwMCAzMzguMDAwMDAwLDUxMy4wMDAwMDAgCk0yNzAuODk5NTY3LDI3OS44MDA4NzMgCglDMjk1LjkzNTUxNiwyNzkuNzI1NDMzIDMyMC45NzE0NjYsMjc5LjY0OTk5NCAzNDYuOTE5NjQ3LDI3OS43ODUwMzQgCglDMzU0LjM5NTI5NCwyODAuMTgyNDk1IDM2MS45MzU2NjksMjgwLjA5MzA0OCAzNjkuMzMzNDk2LDI4MS4wNzYxMTEgCglDMzg2LjEwMTA0NCwyODMuMzA0MjMwIDQwMS42MDMwMjcsMjg4LjIyNjA0NCA0MTEuMTAzMzMzLDMwNC43Mzc4NTQgCglDNDExLjUyODI1OSwzMDUuODE3ODcxIDQxMS45OTIxMjYsMzA2Ljg4NDM2OSA0MTIuMzcyNDM3LDMwNy45Nzk4ODkgCglDNDE5Ljk0ODU3OCwzMjkuODAyNzk1IDQxMS4yMDMxODYsMzUwLjY0NzMwOCAzOTAuODc4MDgyLDM1OS4yMTE5NDUgCglDMzg4LjU5ODExNCwzNjAuMTcyNjY4IDM4Ni4yOTYyMzQsMzYxLjA4MTQyMSAzODMuMjIzMjM2LDM2MS45OTM2NTIgCglDMzc1LjU5Njc3MSwzNjMuMjIxNzcxIDM2Ny45OTU2NjcsMzY1LjI4Mzk2NiAzNjAuMzM4OTI4LDM2NS41MTY3MjQgCglDMzM5LjkwNDgxNiwzNjYuMTM3ODE3IDMxOS40NDY3NzcsMzY1Ljk3MjYyNiAyOTguMDg0OTkxLDM2NS45MjczOTkgCglDMjk0LjE0MjYzOSwzNjUuOTI3Mzk5IDI5MC4yMDAyODcsMzY1LjkyNzM5OSAyODUuNjA4ODg3LDM2NS45MjczOTkgCglDMjg1LjYwODg4NywzNDMuOTM4NTA3IDI4NS42MDg4ODcsMzIyLjU5NDExNiAyODUuNjA4ODg3LDMwMS4zODIyMzMgCglDMjY2LjM5MTIzNSwzMDEuMzgyMjMzIDI0Ny44NDExNTYsMzAxLjM4MjIzMyAyMjkuMzE2MTYyLDMwMS4zODIyMzMgCglDMjI5LjMxNjE2MiwzMzcuNDY0MjAzIDIyOS4zMTYxNjIsMzczLjE2MTM0NiAyMjkuMzE2MTYyLDQwOC45OTE3OTEgCglDMjQzLjc3MjgxMiw0MDguOTkxNzkxIDI1Ny44ODY0MTQsNDA4Ljk5MTc5MSAyNzIuOTE4ODIzLDQwOS4xOTU0OTYgCglDMjk5Ljk0NTgzMSw0MDkuMTI0NTQyIDMyNi45NzI4NzAsNDA5LjA1MzYxOSAzNTQuOTIwNDcxLDQwOS4xNzYzOTIgCglDMzYwLjA3ODA2NCw0MDkuMDczMDkwIDM2NS4yNDgwNDcsNDA5LjE2MjQ3NiAzNzAuMzkxMTEzLDQwOC44MzI1ODEgCglDMzkwLjk0MjU2Niw0MDcuNTE0MzEzIDQxMS4xMDA0NjQsNDA0LjMyNjU2OSA0MjkuNzQ1Nzg5LDM5NC45MzMzMTkgCglDNDcyLjEyNDU0MiwzNzMuNTgzNDY2IDQ4NC43MzI4MTksMzE3LjYyODUxMCA0NTUuMjQ3MzE0LDI4MC4zNTY2MjggCglDNDUwLjU1Mjg1NiwyNzQuNDIyNDg1IDQ0My44MDAxNDAsMjcwLjExNjYzOCA0MzcuMzY1ODQ1LDI2NC43NDc5ODYgCglDNDMwLjgyODU1MiwyNjEuMzc2OTIzIDQyNC4yOTEyMjksMjU4LjAwNTg1OSA0MTcuMzUxMTM1LDI1NC40MjcwOTQgCglDNDE4LjMzMDcxOSwyNTMuNjMwNjAwIDQxOC44OTIwOTAsMjUzLjA1MzgwMiA0MTkuNTU4Mjg5LDI1Mi42NDk4NzIgCglDNDQ2Ljc2NjA4MywyMzYuMTUyMDY5IDQ1Ny41MjQxMzksMjExLjUxMzE1MyA0NTQuODgwMTI3LDE4MC40OTkwMzkgCglDNDUzLjY5NTc3MCwxNjYuNjA2OTk1IDQ0OC45MjE2MzEsMTU0LjAxOTgyMSA0MzguODY5MjYzLDE0My4xMDY5MTggCglDNDM1LjY2MzIzOSwxNDAuMjkyODMxIDQzMi41NTUzMjgsMTM3LjM1Njg1NyA0MjkuMjM0OTU1LDEzNC42ODQ5MjEgCglDNDExLjA3NTg5NywxMjAuMDcyMTEzIDM4OS45MTQxMjQsMTEzLjcwODYxMSAzNjYuMTcwNDcxLDExMS45ODM5NDAgCglDMzU2LjgzODAxMywxMTEuNzQ0NDY5IDM0Ny41MDU1MjQsMTExLjUwNDk5NyAzMzcuMzAwMTQwLDExMS4wOTk3MzkgCglDMzAxLjM2NjUxNiwxMTEuMDk5NzM5IDI2NS40MzI5MjIsMTExLjA5OTczOSAyMjkuMzA0NDc0LDExMS4wOTk3MzkgCglDMjI5LjMwNDQ3NCwxNDYuMjg2NDIzIDIyOS4zMDQ0NzQsMTgwLjk5NDc2NiAyMjkuMzA0NDc0LDIxNS44OTQ0ODUgCglDMjQyLjc1MTg3NywyMTUuODk0NDg1IDI1NS44NzQxMTUsMjE1Ljg5NDQ4NSAyNjkuOTE0NjQyLDIxNi4wOTQ5NTUgCglDMjc1LjEyNDI2OCwyMTYuMDk0OTU1IDI4MC4zMzM4OTMsMjE2LjA5NDk1NSAyODUuNTM3MjMxLDIxNi4wOTQ5NTUgCglDMjg1LjUzNzIzMSwyMDcuNTAyNzMxIDI4NS41MzcyMzEsMTk5Ljc0MzgzNSAyODUuNzQzMzc4LDE5MS4wNzIxMTMgCglDMjg1Ljc0MzM3OCwxNzkuMDAzOTM3IDI4NS43NDMzNzgsMTY2LjkzNTc2MCAyODUuNzQzMzc4LDE1NC4xNTcwNzQgCglDMjk0LjcwMjA1NywxNTQuMTU3MDc0IDMwMi44MzMxOTEsMTU0LjE1NzA3NCAzMTEuNzE0ODQ0LDE1NC40Njk4OTQgCglDMzIxLjgyMDEyOSwxNTQuMzgwNDQ3IDMzMS45MjU0NDYsMTU0LjI5MTAxNiAzNDIuOTAwNjM1LDE1NC41MTcxMjAgCglDMzU0LjU2MTE1NywxNTQuOTgyNDgzIDM2Ni4wNTk4NDUsMTU2LjI1NzkxOSAzNzYuODg3OTcwLDE2MS4wNzE1OTQgCglDMzg3LjI4NDgyMSwxNjUuNjkzNTQyIDM5NC44MTU4MjYsMTczLjA1MTA4NiAzOTcuNzQzMjg2LDE4NC4yMDEyOTQgCglDMzk4Ljk4OTE5NywxODguOTQ2NzMyIDM5OC45MzA2NjQsMTk0LjAzNDYzNyAzOTkuMTk2NTk0LDE5OS42NTkzMzIgCglDMzk4LjIxNDExMSwyMTQuMDIwNTY5IDM5MC4xNDgzNDYsMjIzLjQyMjI3MiAzNzcuMjMzNDkwLDIzMC4wMjg4ODUgCglDMzY4LjIxNzIyNCwyMzIuMzQ1MzIyIDM1OS4zMTEwOTYsMjM1LjgyODA5NCAzNTAuMTU3NzE1LDIzNi42OTI0NzQgCglDMzM3LjgxOTY0MSwyMzcuODU3NjA1IDMyNS4yOTA1NTgsMjM2Ljk0MDgyNiAzMTIuODQ0NjM1LDIzNy4wNTAxNzEgCglDMzA3LjIxNTk0MiwyMzcuMDk5NjA5IDMwMS41OTAxMTgsMjM3LjQ2ODc2NSAyOTUuMDc0MTg4LDIzNy40MTE0OTkgCglDMjcwLjg0MDM2MywyMzcuMzgzODUwIDI0Ni42MDY1NTIsMjM3LjMzNTkwNyAyMjIuMzcyNzU3LDIzNy4zNDU3NzkgCglDMjE3LjU3NDc2OCwyMzcuMzQ3NzMzIDIxMi43NzY4NTUsMjM3LjU3MTg1NCAyMDcuMDkwNDM5LDIzNy40MDMxMjIgCglDMTk1LjE0MzYwMCwyMzcuNjUwMTE2IDE4My4xMzI3MzYsMjM3LjE5ODUzMiAxNzEuMjYyOTM5LDIzOC4yODYyODUgCglDMTQ0LjcxNzQ4NCwyNDAuNzE4OTMzIDExOC43OTc3MTQsMjQ1LjI3Mzc4OCAxMDAuMDAyMzg4LDI2Ny41MTY5MDcgCglDOTkuNzIzNjk0LDI2NS44ODY4NzEgOTkuNDc5MzQwLDI2NC40NTc2NzIgOTkuNTI1NTIwLDI2Mi4xMjg4MTUgCglDOTkuNTUzMzE0LDIyMy41NzI1ODYgOTkuNTgzNDU4LDE4NS4wMTYzNDIgOTkuNTkyODE5LDE0Ni40NjAxMTQgCglDOTkuNTkzMDE4LDE0NS42NDcxNTYgOTkuMzUzMjU2LDE0NC44MzQxMjIgOTkuNTI0MDAyLDE0My4xMjUzOTcgCglDOTkuNTI0MDAyLDEzMi41NTIzNTMgOTkuNTI0MDAyLDEyMS45NzkzMDkgOTkuNTI0MDAyLDExMS4xNzM1MDggCglDODAuODc3NDY0LDExMS4xNzM1MDggNjIuOTQ2MTE3LDExMS4xNzM1MDggNDQuNDg1MTExLDExMS4wNzcwMzQgCglDNDQuMzc3NzA1LDExMS4zODg5MzkgNDQuMjcwMjk0LDExMS43MDA4NDQgNDQuMDIwNzE4LDExMi45Mzg3OTcgCglDNDQuMDY5NTQ2LDE0Ny42MjUyOTAgNDQuMTE4Mzc0LDE4Mi4zMTE3OTggNDQuMDIyMDgzLDIxNy45MjU3NjYgCglDNDQuMDY5MjIxLDI1Ny42MTU2MDEgNDQuMTE2MzYwLDI5Ny4zMDU0MjAgNDQuMDE2NDY4LDMzNy45MjI4NTIgCglDNDQuMDE2NDY4LDM2MS41NDIzODkgNDQuMDE2NDY4LDM4NS4xNjE5NTcgNDQuMDE2NDY4LDQwOC45MjM1NTMgCglDNjIuNzE4OTE0LDQwOC45MjM1NTMgODAuOTM2NzI5LDQwOC45MjM1NTMgOTkuNjIyNDc1LDQwOC45MjM1NTMgCglDOTkuNjIyNDc1LDQwNi44MDk0MTggOTkuNjIyMzY4LDQwNS4wMDUyNDkgOTkuNjIyNDkwLDQwMy4yMDEwODAgCglDOTkuNjIzOTAxLDM4Mi4wMzYzNzcgOTkuNTAwNTM0LDM2MC44NzAyMzkgOTkuNzM2MjQ0LDMzOS43MDgxNjAgCglDOTkuNzgxMjczLDMzNS42NjUxNjEgMTAwLjU3MzEyMCwzMzEuMzUwOTgzIDEwMi4xNTkzODYsMzI3LjY1MDE0NiAKCUMxMTIuMTA0MTAzLDMwNC40NDg1NDcgMTI5LjE4OTY1MSwyODkuMDE0OTU0IDE1My44MzAwNzgsMjgzLjAyMjY0NCAKCUMxNjIuOTU5MTIyLDI4MC44MDI1NTEgMTcyLjU5MDA0MiwyODAuNjQ2MTc5IDE4Mi45MDgzODYsMjc5Ljc2MDk1NiAKCUMxOTEuNTM0ODk3LDI3OS43Nzc0OTYgMjAwLjE2MTQ4NCwyNzkuODI3MDI2IDIwOC43ODc4ODgsMjc5LjgwMzk1NSAKCUMyMjkuMTg2MDk2LDI3OS43NDk0MjAgMjQ5LjU4NDIyOSwyNzkuNjYwMzcwIDI3MC44OTk1NjcsMjc5LjgwMDg3MyAKeiIvPgo8cGF0aCBmaWxsPSIjRkY3QjAzIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMTgxLjk5MjA2NSwyNzkuNTQ4NjQ1IAoJQzE3Mi41OTAwNDIsMjgwLjY0NjE3OSAxNjIuOTU5MTIyLDI4MC44MDI1NTEgMTUzLjgzMDA3OCwyODMuMDIyNjQ0IAoJQzEyOS4xODk2NTEsMjg5LjAxNDk1NCAxMTIuMTA0MTAzLDMwNC40NDg1NDcgMTAyLjE1OTM4NiwzMjcuNjUwMTQ2IAoJQzEwMC41NzMxMjAsMzMxLjM1MDk4MyA5OS43ODEyNzMsMzM1LjY2NTE2MSA5OS43MzYyNDQsMzM5LjcwODE2MCAKCUM5OS41MDA1MzQsMzYwLjg3MDIzOSA5OS42MjM5MDEsMzgyLjAzNjM3NyA5OS42MjI0OTAsNDAzLjIwMTA4MCAKCUM5OS42MjIzNjgsNDA1LjAwNTI0OSA5OS42MjI0NzUsNDA2LjgwOTQxOCA5OS42MjI0NzUsNDA4LjkyMzU1MyAKCUM4MC45MzY3MjksNDA4LjkyMzU1MyA2Mi43MTg5MTQsNDA4LjkyMzU1MyA0NC4wMTY0NjgsNDA4LjkyMzU1MyAKCUM0NC4wMTY0NjgsMzg1LjE2MTk1NyA0NC4wMTY0NjgsMzYxLjU0MjM4OSA0NC40MjYyNDcsMzM3LjQxNzc4NiAKCUM0Ni4yNDM0MjcsMzM1LjU3MTI4OSA0Ny45MjY4MDQsMzM0LjQyMjI0MSA0OS4wMTY0OTEsMzMyLjg1OTI4MyAKCUM2My40NzU5NjcsMzEyLjEyMDM5MiA3Ny44MDczODEsMjkxLjI5MjExNCA5Mi4zMDIyMzEsMjcwLjU3ODEyNSAKCUM5NC4yNDM5ODgsMjY3LjgwMzI1MyA5Ni45MDYzMjYsMjY1LjUzMjU5MyA5OS4yMzQ5ODUsMjYzLjAyODQ0MiAKCUM5OS40NzkzNDAsMjY0LjQ1NzY3MiA5OS43MjM2OTQsMjY1Ljg4Njg3MSAxMDAuMDAyMzg4LDI2Ny41MTY5MDcgCglDMTE4Ljc5NzcxNCwyNDUuMjczNzg4IDE0NC43MTc0ODQsMjQwLjcxODkzMyAxNzEuMjYyOTM5LDIzOC4yODYyODUgCglDMTgzLjEzMjczNiwyMzcuMTk4NTMyIDE5NS4xNDM2MDAsMjM3LjY1MDExNiAyMDcuNTQwODk0LDIzNy44ODY4MTAgCglDMjA3LjYzODk5MiwyMzkuNDQwMDMzIDIwNy41MTIxOTIsMjQwLjY2NDgxMCAyMDYuODk5Mzk5LDI0MS41NTUwNTQgCglDMjAwLjgwMzY2NSwyNTAuNDEwNzA2IDE5NC41Mjc3NTYsMjU5LjE0MzgyOSAxODguNTIyNzgxLDI2OC4wNTk3NTMgCglDMTg2LjA2OTA2MSwyNzEuNzAyOTQyIDE4NC4xNTI4MTcsMjc1LjcwODEzMCAxODEuOTkyMDY1LDI3OS41NDg2NDUgCnoiLz4KPHBhdGggZmlsbD0iI0ZGOTMwMiIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTM4NC4wMDQ1MTcsMzYyLjAxNDMxMyAKCUMzODYuMjk2MjM0LDM2MS4wODE0MjEgMzg4LjU5ODExNCwzNjAuMTcyNjY4IDM5MC44NzgwODIsMzU5LjIxMTk0NSAKCUM0MTEuMjAzMTg2LDM1MC42NDczMDggNDE5Ljk0ODU3OCwzMjkuODAyNzk1IDQxMi4zNzI0MzcsMzA3Ljk3OTg4OSAKCUM0MTEuOTkyMTI2LDMwNi44ODQzNjkgNDExLjUyODI1OSwzMDUuODE3ODcxIDQxMS4zNjgwNDIsMzA0LjIxMzUwMSAKCUM0MTIuMTIzMDQ3LDMwMy4yNDM2MjIgNDEyLjcxNDg0NCwzMDIuODY5OTY1IDQxMy4wODg2NTQsMzAyLjM0MTkxOSAKCUM0MjAuODIyNjYyLDI5MS40MTg0NTcgNDI4LjU2Mjc0NCwyODAuNDk4OTAxIDQzNi4yMDQ0MzcsMjY5LjUxMDk4NiAKCUM0MzcuMDk1MTg0LDI2OC4yMzAxMzMgNDM3LjQxNDY0MiwyNjYuNTUyMDAyIDQzNy45OTg5NjIsMjY1LjA1ODA0NCAKCUM0NDMuODAwMTQwLDI3MC4xMTY2MzggNDUwLjU1Mjg1NiwyNzQuNDIyNDg1IDQ1NS4yNDczMTQsMjgwLjM1NjYyOCAKCUM0ODQuNzMyODE5LDMxNy42Mjg1MTAgNDcyLjEyNDU0MiwzNzMuNTgzNDY2IDQyOS43NDU3ODksMzk0LjkzMzMxOSAKCUM0MTEuMTAwNDY0LDQwNC4zMjY1NjkgMzkwLjk0MjU2Niw0MDcuNTE0MzEzIDM3MC4zOTExMTMsNDA4LjgzMjU4MSAKCUMzNjUuMjQ4MDQ3LDQwOS4xNjI0NzYgMzYwLjA3ODA2NCw0MDkuMDczMDkwIDM1NC40OTU1NzUsNDA4LjcyNjYyNCAKCUMzNjEuODgwNzY4LDM5Ni44NTA5MjIgMzY5Ljc4NDM2MywzODUuNDg3MTUyIDM3Ny40NDc3MjMsMzczLjk2MzU5MyAKCUMzNzkuOTU0NDk4LDM3MC4xOTQwOTIgMzgxLjgzNjY3MCwzNjYuMDA5MjE2IDM4NC4wMDQ1MTcsMzYyLjAxNDMxMyAKeiIvPgo8cGF0aCBmaWxsPSIjRkY4RDAzIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNNDM3LjY4MjQwNCwyNjQuOTAzMDE1IAoJQzQzNy40MTQ2NDIsMjY2LjU1MjAwMiA0MzcuMDk1MTg0LDI2OC4yMzAxMzMgNDM2LjIwNDQzNywyNjkuNTEwOTg2IAoJQzQyOC41NjI3NDQsMjgwLjQ5ODkwMSA0MjAuODIyNjYyLDI5MS40MTg0NTcgNDEzLjA4ODY1NCwzMDIuMzQxOTE5IAoJQzQxMi43MTQ4NDQsMzAyLjg2OTk2NSA0MTIuMTIzMDQ3LDMwMy4yNDM2MjIgNDExLjMzMTU3MywzMDMuODM4ODY3IAoJQzQwMS42MDMwMjcsMjg4LjIyNjA0NCAzODYuMTAxMDQ0LDI4My4zMDQyMzAgMzY5LjMzMzQ5NiwyODEuMDc2MTExIAoJQzM2MS45MzU2NjksMjgwLjA5MzA0OCAzNTQuMzk1Mjk0LDI4MC4xODI0OTUgMzQ2LjQ3MDEyMywyNzkuMzM1ODc2IAoJQzM0Ni40OTY1ODIsMjc3LjY2NzY5NCAzNDYuNzUzOTk4LDI3Ni4yOTYyOTUgMzQ3LjQ4MTU5OCwyNzUuMjUyNjg2IAoJQzM1Ny4wMDc5OTYsMjYxLjU4ODgzNyAzNjYuNjIzMzUyLDI0Ny45ODY5NjkgMzc2LjEzOTcwOSwyMzQuMzE2MTkzIAoJQzM3Ny4wMjIxMjUsMjMzLjA0ODUzOCAzNzcuMzgyMDUwLDIzMS40MTcxNDUgMzc3Ljk4NDU4OSwyMjkuOTU0NjY2IAoJQzM5MC4xNDgzNDYsMjIzLjQyMjI3MiAzOTguMjE0MTExLDIxNC4wMjA1NjkgMzk5LjcyNjg2OCwxOTkuMzA3MDk4IAoJQzQwMS4wNzkxOTMsMTk4LjQ2MjU1NSA0MDIuMTc1MDc5LDE5OC4xNjQ3MzQgNDAyLjY4MzIyOCwxOTcuNDQ5NDE3IAoJQzQxNC41OTUzMzcsMTgwLjY3OTc5NCA0MjYuNDU5NTM0LDE2My44NzU5OTIgNDM4LjI1OTY3NCwxNDcuMDI3NDk2IAoJQzQzOC44NzAxMTcsMTQ2LjE1NTg2OSA0MzguODMzOTU0LDE0NC44MzE0MDYgNDM5LjA5ODgxNiwxNDMuNzE3NzczIAoJQzQ0OC45MjE2MzEsMTU0LjAxOTgyMSA0NTMuNjk1NzcwLDE2Ni42MDY5OTUgNDU0Ljg4MDEyNywxODAuNDk5MDM5IAoJQzQ1Ny41MjQxMzksMjExLjUxMzE1MyA0NDYuNzY2MDgzLDIzNi4xNTIwNjkgNDE5LjU1ODI4OSwyNTIuNjQ5ODcyIAoJQzQxOC44OTIwOTAsMjUzLjA1MzgwMiA0MTguMzMwNzE5LDI1My42MzA2MDAgNDE3LjM1MTEzNSwyNTQuNDI3MDk0IAoJQzQyNC4yOTEyMjksMjU4LjAwNTg1OSA0MzAuODI4NTUyLDI2MS4zNzY5MjMgNDM3LjY4MjQwNCwyNjQuOTAzMDE1IAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjdEMDAiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0zMTAuOTY0MzU1LDE1NC4xNTcwNzQgCglDMzAyLjgzMzE5MSwxNTQuMTU3MDc0IDI5NC43MDIwNTcsMTU0LjE1NzA3NCAyODUuNzQzMzc4LDE1NC4xNTcwNzQgCglDMjg1Ljc0MzM3OCwxNjYuOTM1NzYwIDI4NS43NDMzNzgsMTc5LjAwMzkzNyAyODUuMzE5ODI0LDE5MS41OTA4NTEgCglDMjgyLjU3MjM4OCwxOTQuNjE0MDkwIDI3OS44MTY1NTksMTk2Ljg0NDkxMCAyNzguMDE4MzcyLDE5OS42ODI1NzEgCglDMjc0LjcxMzQ3MCwyMDQuODk3OTgwIDI3MS45NzI0NDMsMjEwLjQ3MDcwMyAyNjguOTk2MzY4LDIxNS44OTQ0ODUgCglDMjU1Ljg3NDExNSwyMTUuODk0NDg1IDI0Mi43NTE4NzcsMjE1Ljg5NDQ4NSAyMjkuMzA0NDc0LDIxNS44OTQ0ODUgCglDMjI5LjMwNDQ3NCwxODAuOTk0NzY2IDIyOS4zMDQ0NzQsMTQ2LjI4NjQyMyAyMjkuMzA0NDc0LDExMS4wOTk3MzkgCglDMjY1LjQzMjkyMiwxMTEuMDk5NzM5IDMwMS4zNjY1MTYsMTExLjA5OTczOSAzMzcuNjgyMTkwLDExMS42MTAxOTkgCglDMzM3LjQ1MDE2NSwxMTMuNjA4MDYzIDMzNy4wNzgyMTcsMTE1LjI2Mjg1NiAzMzYuMTgzOTI5LDExNi41NTY1NDEgCglDMzI4LjY5NjIyOCwxMjcuMzg4MzgyIDMyMS4wODM3NDAsMTM4LjEzMzk0MiAzMTMuNTg5NjkxLDE0OC45NjE0NDEgCglDMzEyLjQ5NTgxOSwxNTAuNTQxOTAxIDMxMS44Mjg4NTcsMTUyLjQxNzg0NyAzMTAuOTY0MzU1LDE1NC4xNTcwNzQgCnoiLz4KPHBhdGggZmlsbD0iI0ZGNzMwMCIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTk5LjM4MDI0OSwyNjIuNTc4NjEzIAoJQzk2LjkwNjMyNiwyNjUuNTMyNTkzIDk0LjI0Mzk4OCwyNjcuODAzMjUzIDkyLjMwMjIzMSwyNzAuNTc4MTI1IAoJQzc3LjgwNzM4MSwyOTEuMjkyMTE0IDYzLjQ3NTk2NywzMTIuMTIwMzkyIDQ5LjAxNjQ5MSwzMzIuODU5MjgzIAoJQzQ3LjkyNjgwNCwzMzQuNDIyMjQxIDQ2LjI0MzQyNywzMzUuNTcxMjg5IDQ0LjQ5OTc1NiwzMzYuOTUzOTc5IAoJQzQ0LjExNjM2MCwyOTcuMzA1NDIwIDQ0LjA2OTIyMSwyNTcuNjE1NjAxIDQ0LjQzMTgyNCwyMTcuNDE4NjI1IAoJQzQ1Ljk4MTM3MywyMTUuNzc4MDc2IDQ3LjMyMzUyOCwyMTQuNzg2MzE2IDQ4LjIzMDg2MiwyMTMuNDkwMTU4IAoJQzYzLjU4ODQwMiwxOTEuNTUxNDIyIDc4Ljg1NjkxMSwxNjkuNTUwMjAxIDk0LjI4MDA2NywxNDcuNjU3ODgzIAoJQzk1LjM5NzU5OCwxNDYuMDcxNTk0IDk3LjU1MjczNCwxNDUuMjE2MzA5IDk5LjIyNTQ0MSwxNDQuMDIxMTMzIAoJQzk5LjM1MzI1NiwxNDQuODM0MTIyIDk5LjU5MzAxOCwxNDUuNjQ3MTU2IDk5LjU5MjgxOSwxNDYuNDYwMTE0IAoJQzk5LjU4MzQ1OCwxODUuMDE2MzQyIDk5LjU1MzMxNCwyMjMuNTcyNTg2IDk5LjM4MDI0OSwyNjIuNTc4NjEzIAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjg4MDIiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0yNzIuMDAwMDAwLDQwOC45OTE3OTEgCglDMjU3Ljg4NjQxNCw0MDguOTkxNzkxIDI0My43NzI4MTIsNDA4Ljk5MTc5MSAyMjkuMzE2MTYyLDQwOC45OTE3OTEgCglDMjI5LjMxNjE2MiwzNzMuMTYxMzQ2IDIyOS4zMTYxNjIsMzM3LjQ2NDIwMyAyMjkuMzE2MTYyLDMwMS4zODIyMzMgCglDMjQ3Ljg0MTE1NiwzMDEuMzgyMjMzIDI2Ni4zOTEyMzUsMzAxLjM4MjIzMyAyODUuNjA4ODg3LDMwMS4zODIyMzMgCglDMjg1LjYwODg4NywzMjIuNTk0MTE2IDI4NS42MDg4ODcsMzQzLjkzODUwNyAyODUuNjA4ODg3LDM2NS45MjczOTkgCglDMjkwLjIwMDI4NywzNjUuOTI3Mzk5IDI5NC4xNDI2MzksMzY1LjkyNzM5OSAyOTguNTAwNDg4LDM2Ni4zNzE4NTcgCglDMjkxLjQ2ODIzMSwzNzcuODUxODA3IDI4My45NTAzMTcsMzg4Ljg0MDk3MyAyNzYuNjIxNzM1LDM5OS45NTUwNDggCglDMjc0Ljc3MDUzOCw0MDIuNzYyNDgyIDI3My41MjQyMzEsNDA1Ljk2ODc4MSAyNzIuMDAwMDAwLDQwOC45OTE3OTEgCnoiLz4KPHBhdGggZmlsbD0iI0ZGODYwMiIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTQzOC45ODQwMzksMTQzLjQxMjM1NCAKCUM0MzguODMzOTU0LDE0NC44MzE0MDYgNDM4Ljg3MDExNywxNDYuMTU1ODY5IDQzOC4yNTk2NzQsMTQ3LjAyNzQ5NiAKCUM0MjYuNDU5NTM0LDE2My44NzU5OTIgNDE0LjU5NTMzNywxODAuNjc5Nzk0IDQwMi42ODMyMjgsMTk3LjQ0OTQxNyAKCUM0MDIuMTc1MDc5LDE5OC4xNjQ3MzQgNDAxLjA3OTE5MywxOTguNDYyNTU1IDM5OS44NjEwMjMsMTk4Ljk2MDg3NiAKCUMzOTguOTMwNjY0LDE5NC4wMzQ2MzcgMzk4Ljk4OTE5NywxODguOTQ2NzMyIDM5Ny43NDMyODYsMTg0LjIwMTI5NCAKCUMzOTQuODE1ODI2LDE3My4wNTEwODYgMzg3LjI4NDgyMSwxNjUuNjkzNTQyIDM3Ni44ODc5NzAsMTYxLjA3MTU5NCAKCUMzNjYuMDU5ODQ1LDE1Ni4yNTc5MTkgMzU0LjU2MTE1NywxNTQuOTgyNDgzIDM0Mi40NTY2OTYsMTU0LjAyNDcxOSAKCUMzNDIuNTU0OTYyLDE1Mi4wMDUyNjQgMzQyLjc5OTgwNSwxNTAuMjczODgwIDM0My42ODY0OTMsMTQ4Ljk4MzUyMSAKCUMzNTAuNjc3MDMyLDEzOC44MTA2MjMgMzU3Ljg2NTI5NSwxMjguNzcyOTAzIDM2NC43OTQ1MjUsMTE4LjU1OTE0MyAKCUMzNjYuMDA3NjYwLDExNi43NzA5MjcgMzY2LjI5MDc3MSwxMTQuMzUxNzg0IDM2Ny4wMDMzODcsMTEyLjIyNDAyMiAKCUMzODkuOTE0MTI0LDExMy43MDg2MTEgNDExLjA3NTg5NywxMjAuMDcyMTEzIDQyOS4yMzQ5NTUsMTM0LjY4NDkyMSAKCUM0MzIuNTU1MzI4LDEzNy4zNTY4NTcgNDM1LjY2MzIzOSwxNDAuMjkyODMxIDQzOC45ODQwMzksMTQzLjQxMjM1NCAKeiIvPgo8cGF0aCBmaWxsPSIjRkY2RTAwIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNOTkuMzc0NzI1LDE0My41NzMyNzMgCglDOTcuNTUyNzM0LDE0NS4yMTYzMDkgOTUuMzk3NTk4LDE0Ni4wNzE1OTQgOTQuMjgwMDY3LDE0Ny42NTc4ODMgCglDNzguODU2OTExLDE2OS41NTAyMDEgNjMuNTg4NDAyLDE5MS41NTE0MjIgNDguMjMwODYyLDIxMy40OTAxNTggCglDNDcuMzIzNTI4LDIxNC43ODYzMTYgNDUuOTgxMzczLDIxNS43NzgwNzYgNDQuNTA0Mzg3LDIxNi45NTQ4OTUgCglDNDQuMTE4Mzc0LDE4Mi4zMTE3OTggNDQuMDY5NTQ2LDE0Ny42MjUyOTAgNDQuMjc0MDEwLDExMi4zNzk4ODMgCglDNDQuNzY2NTIxLDExMS42NjI5MTggNDQuOTI5MDEyLDExMS40NDcwOTggNDUuMDE0NzcxLDExMS4xNzM1MDggCglDNjIuOTQ2MTE3LDExMS4xNzM1MDggODAuODc3NDY0LDExMS4xNzM1MDggOTkuNTI0MDAyLDExMS4xNzM1MDggCglDOTkuNTI0MDAyLDEyMS45NzkzMDkgOTkuNTI0MDAyLDEzMi41NTIzNTMgOTkuMzc0NzI1LDE0My41NzMyNzMgCnoiLz4KPHBhdGggZmlsbD0iI0ZGODEwMCIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTE4Mi40NTAyMjYsMjc5LjY1NDc4NSAKCUMxODQuMTUyODE3LDI3NS43MDgxMzAgMTg2LjA2OTA2MSwyNzEuNzAyOTQyIDE4OC41MjI3ODEsMjY4LjA1OTc1MyAKCUMxOTQuNTI3NzU2LDI1OS4xNDM4MjkgMjAwLjgwMzY2NSwyNTAuNDEwNzA2IDIwNi44OTkzOTksMjQxLjU1NTA1NCAKCUMyMDcuNTEyMTkyLDI0MC42NjQ4MTAgMjA3LjYzODk5MiwyMzkuNDQwMDMzIDIwNy45ODUxMjMsMjM4LjAzMjAxMyAKCUMyMTIuNzc2ODU1LDIzNy41NzE4NTQgMjE3LjU3NDc2OCwyMzcuMzQ3NzMzIDIyMi4zNzI3NTcsMjM3LjM0NTc3OSAKCUMyNDYuNjA2NTUyLDIzNy4zMzU5MDcgMjcwLjg0MDM2MywyMzcuMzgzODUwIDI5NS41MTUxMDYsMjM3Ljg3OTMzMyAKCUMyOTAuMDg1NjYzLDI0Ny4yODY2ODIgMjg0LjEzMDY0NiwyNTYuMTcyMjExIDI3OC4zNzk3OTEsMjY1LjE4NzkyNyAKCUMyNzUuMzk0Mzc5LDI2OS44NjgyMjUgMjcyLjc2OTkyOCwyNzQuNzc4NzQ4IDI2OS45ODI0MjIsMjc5LjU4NTIzNiAKCUMyNDkuNTg0MjI5LDI3OS42NjAzNzAgMjI5LjE4NjA5NiwyNzkuNzQ5NDIwIDIwOC43ODc4ODgsMjc5LjgwMzk1NSAKCUMyMDAuMTYxNDg0LDI3OS44MjcwMjYgMTkxLjUzNDg5NywyNzkuNzc3NDk2IDE4Mi40NTAyMjYsMjc5LjY1NDc4NSAKeiIvPgo8cGF0aCBmaWxsPSIjRkY4RTAxIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjcyLjQ1OTQxMiw0MDkuMDkzNjI4IAoJQzI3My41MjQyMzEsNDA1Ljk2ODc4MSAyNzQuNzcwNTM4LDQwMi43NjI0ODIgMjc2LjYyMTczNSwzOTkuOTU1MDQ4IAoJQzI4My45NTAzMTcsMzg4Ljg0MDk3MyAyOTEuNDY4MjMxLDM3Ny44NTE4MDcgMjk4Ljk1NzA5MiwzNjYuNDY4MTQwIAoJQzMxOS40NDY3NzcsMzY1Ljk3MjYyNiAzMzkuOTA0ODE2LDM2Ni4xMzc4MTcgMzYwLjMzODkyOCwzNjUuNTE2NzI0IAoJQzM2Ny45OTU2NjcsMzY1LjI4Mzk2NiAzNzUuNTk2NzcxLDM2My4yMjE3NzEgMzgzLjYxMzg5MiwzNjIuMDAzOTY3IAoJQzM4MS44MzY2NzAsMzY2LjAwOTIxNiAzNzkuOTU0NDk4LDM3MC4xOTQwOTIgMzc3LjQ0NzcyMywzNzMuOTYzNTkzIAoJQzM2OS43ODQzNjMsMzg1LjQ4NzE1MiAzNjEuODgwNzY4LDM5Ni44NTA5MjIgMzU0LjAzNTI3OCw0MDguNjI5NzYxIAoJQzMyNi45NzI4NzAsNDA5LjA1MzYxOSAyOTkuOTQ1ODMxLDQwOS4xMjQ1NDIgMjcyLjQ1OTQxMiw0MDkuMDkzNjI4IAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjg4MDQiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0yNzAuNDQwOTc5LDI3OS42OTMwNTQgCglDMjcyLjc2OTkyOCwyNzQuNzc4NzQ4IDI3NS4zOTQzNzksMjY5Ljg2ODIyNSAyNzguMzc5NzkxLDI2NS4xODc5MjcgCglDMjg0LjEzMDY0NiwyNTYuMTcyMjExIDI5MC4wODU2NjMsMjQ3LjI4NjY4MiAyOTUuOTU5NTAzLDIzOC4wMjAwMjAgCglDMzAxLjU5MDExOCwyMzcuNDY4NzY1IDMwNy4yMTU5NDIsMjM3LjA5OTYwOSAzMTIuODQ0NjM1LDIzNy4wNTAxNzEgCglDMzI1LjI5MDU1OCwyMzYuOTQwODI2IDMzNy44MTk2NDEsMjM3Ljg1NzYwNSAzNTAuMTU3NzE1LDIzNi42OTI0NzQgCglDMzU5LjMxMTA5NiwyMzUuODI4MDk0IDM2OC4yMTcyMjQsMjMyLjM0NTMyMiAzNzcuNjA5MDM5LDIyOS45OTE3NzYgCglDMzc3LjM4MjA1MCwyMzEuNDE3MTQ1IDM3Ny4wMjIxMjUsMjMzLjA0ODUzOCAzNzYuMTM5NzA5LDIzNC4zMTYxOTMgCglDMzY2LjYyMzM1MiwyNDcuOTg2OTY5IDM1Ny4wMDc5OTYsMjYxLjU4ODgzNyAzNDcuNDgxNTk4LDI3NS4yNTI2ODYgCglDMzQ2Ljc1Mzk5OCwyNzYuMjk2Mjk1IDM0Ni40OTY1ODIsMjc3LjY2NzY5NCAzNDYuMDE0MDA4LDI3OS4yMzA2NTIgCglDMzIwLjk3MTQ2NiwyNzkuNjQ5OTk0IDI5NS45MzU1MTYsMjc5LjcyNTQzMyAyNzAuNDQwOTc5LDI3OS42OTMwNTQgCnoiLz4KPHBhdGggZmlsbD0iI0ZGODMwNSIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTM2Ni41ODY5MTQsMTEyLjEwMzk4MSAKCUMzNjYuMjkwNzcxLDExNC4zNTE3ODQgMzY2LjAwNzY2MCwxMTYuNzcwOTI3IDM2NC43OTQ1MjUsMTE4LjU1OTE0MyAKCUMzNTcuODY1Mjk1LDEyOC43NzI5MDMgMzUwLjY3NzAzMiwxMzguODEwNjIzIDM0My42ODY0OTMsMTQ4Ljk4MzUyMSAKCUMzNDIuNzk5ODA1LDE1MC4yNzM4ODAgMzQyLjU1NDk2MiwxNTIuMDA1MjY0IDM0Mi4wMjE3MjksMTUzLjg2Njk0MyAKCUMzMzEuOTI1NDQ2LDE1NC4yOTEwMTYgMzIxLjgyMDEyOSwxNTQuMzgwNDQ3IDMxMS4zMzk2MDAsMTU0LjMxMzQ3NyAKCUMzMTEuODI4ODU3LDE1Mi40MTc4NDcgMzEyLjQ5NTgxOSwxNTAuNTQxOTAxIDMxMy41ODk2OTEsMTQ4Ljk2MTQ0MSAKCUMzMjEuMDgzNzQwLDEzOC4xMzM5NDIgMzI4LjY5NjIyOCwxMjcuMzg4MzgyIDMzNi4xODM5MjksMTE2LjU1NjU0MSAKCUMzMzcuMDc4MjE3LDExNS4yNjI4NTYgMzM3LjQ1MDE2NSwxMTMuNjA4MDYzIDMzOC4xMTg2NTIsMTExLjY5MzA4NSAKCUMzNDcuNTA1NTI0LDExMS41MDQ5OTcgMzU2LjgzODAxMywxMTEuNzQ0NDY5IDM2Ni41ODY5MTQsMTEyLjEwMzk4MSAKeiIvPgo8cGF0aCBmaWxsPSIjRkY4MzA1IiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjY5LjQ1NTUwNSwyMTUuOTk0NzIwIAoJQzI3MS45NzI0NDMsMjEwLjQ3MDcwMyAyNzQuNzEzNDcwLDIwNC44OTc5ODAgMjc4LjAxODM3MiwxOTkuNjgyNTcxIAoJQzI3OS44MTY1NTksMTk2Ljg0NDkxMCAyODIuNTcyMzg4LDE5NC42MTQwOTAgMjg1LjIxNjc2NiwxOTIuMDQ3MjcyIAoJQzI4NS41MzcyMzEsMTk5Ljc0MzgzNSAyODUuNTM3MjMxLDIwNy41MDI3MzEgMjg1LjUzNzIzMSwyMTYuMDk0OTU1IAoJQzI4MC4zMzM4OTMsMjE2LjA5NDk1NSAyNzUuMTI0MjY4LDIxNi4wOTQ5NTUgMjY5LjQ1NTUwNSwyMTUuOTk0NzIwIAp6Ii8+CjxwYXRoIGZpbGw9IiNGRjg0MjkiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk00NC43NDk5MzksMTExLjEyNTI3NSAKCUM0NC45MjkwMTIsMTExLjQ0NzA5OCA0NC43NjY1MjEsMTExLjY2MjkxOCA0NC4zNDUwOTMsMTExLjkxNjg1NSAKCUM0NC4yNzAyOTQsMTExLjcwMDg0NCA0NC4zNzc3MDUsMTExLjM4ODkzOSA0NC43NDk5MzksMTExLjEyNTI3NSAKeiIvPgo8L3N2Zz4\x3d" alt\x3d"HBAgency" loading\x3d"lazy" \n               style\x3d"height:18px!important;padding:0px!important;border:0!important;cursor:pointer!important;width:20px!important;margin:0!important;box-sizing:content-box!important"\x3e\x3c/a\x3e\n               \x3c/span\x3e';
                    a.after(g);
                    h = p.createElement("div");
                    h.setAttribute("id", "" + c);
                    a.appendChild(f);
                    f.appendChild(b);
                    b.appendChild(e);
                    e.appendChild(d);
                    d.appendChild(k);
                    k.appendChild(h)
                }
        }

        function qa(c, a, f) {
            var b = 300,
                e = 250;
            hbagency_ismobile || (b = 400, e = 330);
            c.style.width = "" + b + "px";
            c.style.height = "" + e + "px";
            b = '\x3chtml\x3e\x3chead\x3e\x3clink rel\x3d"stylesheet" href\x3d"https://hbagency.it/cdn/native/custom.css"\x3e\n    \x3c/head\x3e\x3cbody\x3e\n    \x3cscript\x3efunction sendStatisticsNative(adStatistics) {\n            try {\n                    var x;\n                    var useXDomainRequest \x3d false;\n                    if (!window.XMLHttpRequest) {\n                            useXDomainRequest \x3d true;\n                    } else {\n                            x \x3d new window.XMLHttpRequest();\n                            if (x.responseType \x3d\x3d\x3d undefined) {\n                                    useXDomainRequest \x3d true;\n                            }\n                    }\n                    if (useXDomainRequest) {\n                            x \x3d new window.XDomainRequest();\n                    }\n                    x.open(\'GET\', adStatistics);\n                    x.timeout \x3d 3000;\n                    if (!useXDomainRequest) {\n                            x.setRequestHeader(\'Content-Type\',  \'application/x-www-form-urlencoded\');\n                    }\n                    x.send(\'data\x3d\'+encodeURIComponent(JSON.stringify(adStatistics)));\n                    adStatistics \x3d [];\n            } catch (error) {}\n    }\n    function clicktracker(){\n    var cl\x3ddocument.getElementsByClassName("clicktracker");\n    if(cl)\n    for(var i \x3d0; i \x3ccl.length;i++){\n    sendStatisticsNative(cl[i].getAttribute(\'url\'));\n    }\n    }\x3c/script\x3e\n    \x3ca  id\x3d"raClick" href\x3d"##hb_native_linkurl##" target\x3d"_blank"\x3e\n    \x3cdiv class\x3d"raBlur" id\x3d"raNativeContainer"\x3e\n    \x3cdiv id\x3d"raContentAd"\x3e\n    \x3cspan id\x3d"raContentTitleAd" class\x3d"raGenericPosition raTitleAd"\x3e##hb_native_title##\x3c/span\x3e\n    \x3cspan class\x3d"raImageAd" style\x3d"background-image: url(\'##hb_native_image##\');"\x3e\x3c/span\x3e\n    \x3cspan id\x3d"raContentBodyAd" class\x3d"raGenericPosition raBodyAd"\x3e##hb_native_body##\x3c/span\x3e\x3c/div\x3e\n    \x3cdiv id\x3d"raCallAction"\x3e\x3cspan class\x3d"raUrlCA"\x3e\x3c/span\x3e\n    \x3cspan id\x3d"raButtonCA" class\x3d"raButtonCA raShakeButton"\x3eScopri\x3ci class\x3d"raArrows"\x3e\x3c/i\x3e\x3c/span\x3e\x3c/div\x3e\n    \x3cdiv id\x3d"raRA"\x3e\x3cspan class\x3d"raLogoRA"\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e';
            e = {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            };
            for (var d in a.native) {
                if ("image" == d || "icon" ==
                    d) b = b.replace("##" + e[d] + "##", a.native[d].url);
                "body" == d && (b = b.replace("##" + e[d] + "##", a.native[d]));
                "title" == d && (b = b.replace("##" + e[d] + "##", a.native[d]));
                "clickUrl" == d && (b = b.replace("##" + e[d] + "##", a.native[d]));
                if ("impressionTrackers" == d)
                    for (var k = 0; k < a.native[d].length; k++) b = b + ' \x3cimg src\x3d"' + a.native[d][k] + '" style\x3d"display: none; visibility: hidden; width: 0px; height: 0px; padding: 0px; margin: 0px;"\x3e';
                if ("javascriptTrackers" == d)
                    for (k = 0; k < a.native[d].length; k++) b = b + "" + a.native[d][k];
                if ("clickTrackers" == d)
                    for (k = 0; k < a.native[d].length; k++) b = b + ' \x3cdiv url\x3d"' + a.native[d][k] + '" class\x3d"clicktracker" style\x3d"display: none; visibility: hidden; width: 0px; height: 0px; padding: 0px; margin: 0px;"\x3e\x3c/div\x3e';
                "adagio" == a.bidderCode && "ext" == d && a.native.ext && a.native.ext.adagio_bvw && (b = b + ' \x3cimg src\x3d"' + a.native.ext.adagio_bvw + '" style\x3d"display: none; visibility: hidden; width: 0px; height: 0px; padding: 0px; margin: 0px;"\x3e')
            }
            b += "\x3c/body\x3e\x3c/html\x3e";
            f.appendChild(c);
            c = c.contentWindow.document;
            c.open();
            c.write("" + b);
            c.close()
        }

        function X(c, a, f, b) {
            hasCLSHB || (hasCLSHB = 0 < p.getElementsByClassName("hbagency_cls").length);
            hasCLSHB || (f.style.maxWidth = "", hbagency_ismobile && (a = c), f.style.textAlign = "center", f.style.minHeight = a + "px")
        }

        function ea(c, a, f, b) {
            hasCLSHB || (hasCLSHB = 0 < p.getElementsByClassName("hbagency_cls").length);
            hasCLSHB || (b = 450, hbagency_ismobile && (a = c, b = 430), f.style.textAlign = "center", f.style.minHeight = a + "px", f.style.margin = "auto", f.style.maxWidth = b + "px")
        }

        function ra(c,
            a, f, b) {
            hasCLSHB || (hasCLSHB = 0 < p.getElementsByClassName("hbagency_cls").length);
            hasCLSHB || (f.style.maxWidth = "", hbagency_ismobile && (a = c), f.style.textAlign = "center", f.style.minHeight = a + "px", f.style.maxHeight = a + "px")
        }

        function Ea(c, a, f, b) {
            if (20 == w[f] && "video" === a.mediaType) ea(280, 360, c), v.renderAd(p, a.adId);
            else {
                var e = p.createElement("iframe");
                e.vspace = 0;
                e.hspace = 0;
                e.setAttribute("id", "framehb_" + f);
                e.setAttribute("scrolling", "no");
                e.setAttribute("marginwidth", "0");
                e.setAttribute("marginheight", "0");
                e.setAttribute("frameborder",
                    "0");
                if ("native" === a.mediaType) qa(e, a, c);
                else {
                    ia(f) && (e.style.width = "300px", e.style.height = "600px", e.style.overflow = "hidden", e.style.transform = "scale(0.5, 0.5)", e.style.transformOrigin = "0px 0px", e.style.position = "absolute", e.style.left = "0px");
                    (18 == w[f] || 17 === w[f] && 300 === a.width && 250 === a.height) && hbagency_ismobile && (e.style.width = "300px", e.style.height = "250px", e.style.overflow = "hidden", e.style.transform = "scale(0.55, 0.55)", e.style.maxWidth = "none", e.style.transformOrigin = "0px 0px", e.style.position =
                        "absolute");
                    W(f) && ("triplelift" === a.bidderCode ? ra(280, 360, c) : X(280, 360, c));
                    if ("teads" === a.bidderCode && 1 === a.width && 1 === a.height) {
                        if (W(f)) {
                            var d = p.createElement("div"),
                                k = p.createElement("div");
                            k.setAttribute("id", f + "");
                            c.setAttribute("id", "old_" + f);
                            c.appendChild(d);
                            d.appendChild(k);
                            c.style.width = "100%";
                            ea(280, 360, d);
                            c = k
                        }
                        e.setAttribute("width", "1");
                        e.setAttribute("height", "1")
                    }
                    e.setAttribute("allow", "attribution-reporting");
                    c.appendChild(e);
                    c = p.getElementById("framehb_" + f);
                    c = c.contentDocument || c.contentWindow.document;
                    v.renderAd(c, b);
                    c.close();
                    adagioanalytics_hbagency && p.dispatchEvent(new CustomEvent("HBEvent", {
                        detail: {
                            isEmpty: !1,
                            elementId: "" + f,
                            creativeId: "crea_" + f,
                            creativeSize: [a.width, a.height]
                        }
                    }))
                }
            }
        }

        function Ba(c, a) {
            if (c && c.hb_adid) {
                c = v.getHighestCpmBids(a);
                a = c[0].vastUrl;
                if (void 0 !== c[0].videoCacheKey && "onetag" !== c[0].bidderCode) return "https://prebid.adnxs.com/pbc/v1/cache?uuid\x3d" + c[0].videoCacheKey;
                if (void 0 === a || "" === a) a = c[0].vastXml;
                return a
            }
            return ""
        }

        function ua(c) {
            var a = getComputedStyle(c);
            if ("none" ===
                a.display || "visible" !== a.visibility || .1 > a.opacity || 0 === c.offsetWidth + c.offsetHeight + c.getBoundingClientRect().height + c.getBoundingClientRect().width) return !1;
            a = c.getBoundingClientRect().left + c.offsetWidth / 2;
            var f = c.getBoundingClientRect().top + c.offsetHeight / 2;
            return 0 > a || a > p.documentElement.clientWidth || 0 > f || f > p.documentElement.clientHeight ? !1 : p.elementsFromPoint(a, f).includes(c)
        }
        async function pa(c, a, f) {
            let b = null,
                e = -1,
                d = !1;
            var k = !1,
                h = p.getElementById("hb-inimage");
            if (h) {
                var g = p.getElementById("hb-inimage-fix");
                if (g) fa(g, c, a, f);
                else {
                    if ((g = h.children) && 0 < g.length) {
                        for (k = 0; k < g.length; k++)
                            if ("img" == g[k].tagName.toLowerCase()) {
                                if (ua(g[k])) {
                                    fa(g[k], c, a, f);
                                    return
                                }
                                break
                            } k = !0
                    }
                    g = [];
                    (h = h.dataset.excluded) && 0 < h.length && (g = h.split(" "));
                    h = p.getElementsByTagName("img");
                    for (var m = 0; m < Math.min(h.length, 60); m++) {
                        const r = h[m];
                        var l = !1;
                        if (0 != g.length)
                            for (var q = 0; q < g.length; q++)
                                if (r.classList.contains(g[q])) {
                                    l = !0;
                                    break
                                } if (!l) {
                            for (l = 0; !k && !r.complete && 3 > l++;) await new Promise(n => setTimeout(n, 1E3));
                            if (r.complete && (l = r.offsetWidth,
                                    q = r.offsetHeight, !(200 > l || 100 > q || (l = Math.min(l / c.width, q / c.height), 30 > Math.min(c.width * l, c.height * l) || (q = ua(r), l <= e && (d || !q))))) && (e = l, b = r, d = q, .3 < e && (!k || d))) {
                                fa(b, c, a, f);
                                return
                            }
                        }
                    }
                    b ? fa(b, c, a, f) : p.getElementById("hb-inimage").style.height = "0px"
                }
            }
        }

        function fa(c, a, f, b) {
            var e;
            var d = p.getElementById("hb-inimage");
            if ((e = d.children) && 0 < e.length)
                for (var k = 0; k < e.length; k++)
                    if ("img" == e[k].tagName.toLowerCase()) {
                        d.parentNode.insertBefore(e[k], d);
                        d.remove();
                        break
                    } c.parentNode.insertBefore(d, c);
            d.append(c);
            d =
                a.width;
            e = a.height;
            k = c.width;
            var h = c.height;
            let g, m, l = 1;
            do g = Math.min(k / l / d, h / l / e), m = Math.floor(d * g), c = Math.floor(e * g), l++; while (1 < g || .5 < m * c / (k * h));
            d = m;
            e = c;
            k = p.getElementById("hb-middle-layer");
            k.style.width = "100%";
            k.style.height = a.height + "px";
            k = p.getElementById("hb-inimage-ad");
            k.style.width = a.width + "px";
            k.style.height = a.height + "px";
            41 == w[f] && ((c = p.getElementById("framehb_" + f)) || (c = p.createElement("iframe")), c.vspace = 0, c.hspace = 0, c.setAttribute("id", "framehb_" + f), c.setAttribute("scrolling", "no"),
                c.setAttribute("marginwidth", "0"), c.setAttribute("marginheight", "0"), c.setAttribute("frameborder", "0"), c.style.width = a.width + "px", c.style.height = a.height + "px", c.style.overflow = "hidden", c.style.transform = "scale(" + d / a.width + ", " + e / a.height + ")", c.style.transformOrigin = "0px 0px", c.style.position = "absolute", c.style.left = "0px", c.style.bottom = e - a.height + "px", d = p.getElementById("hb-in-image-close"), d.style.left = "0px", d.style.top = a.height - e + "px", d.style.height = "20px", d.style.width = "20px", d.style.display = "block",
                k.appendChild(c), d = p.getElementById("framehb_" + f), d = d.contentDocument || d.contentWindow.document, v.renderAd(d, b), d.close(), adagioanalytics_hbagency && p.dispatchEvent(new CustomEvent("HBEvent", {
                    detail: {
                        isEmpty: !1,
                        elementId: "" + f,
                        creativeId: "crea_" + f,
                        creativeSize: [a.width, a.height]
                    }
                })))
        }

        function Da(c, a, f, b, e, d, k, h, g, m) {
            a && "" !== a && "null" !== a && e.setAttribute("style", "" + a);
            var l;
            c && c.hb_adid && (l = v.getHighestCpmBids(k));
            l && 0 < l.length ? 41 == w[l[0].adUnitCode] ? pa(l[0], k, c.hb_adid) : 1 === l[0].width && 1 === l[0].height &&
                "teads" !== l[0].bidderCode || 320 === l[0].width && 480 === l[0].height || 640 === l[0].width && 960 === l[0].height ? v.renderAd(p, l[0].adId) : Ea(e, l[0], k, c.hb_adid) : m ? Fa(d, f, b) : (containsgg[k] || setTimeout(function() {
                    P(k)
                }, 1E3), null !== h && "" !== h && ("compressdiv" === h ? X(0, 0, e) : autoapprovecmp_hbagency ? postscribe("#" + d, h) : W(k) && hbagency_ismobile ? aa(h, d, 300, 280) : W(k) && !hbagency_ismobile ? aa(h, d, 300, 360) : 40 == w[k] ? aa(h, d, 300, 600) : postscribe("#" + d, h)))
        }

        function Fa(c, a, f) {
            if (!autopromo_hbagency) {
                autopromo_hbagency = !0;
                var b = "_" +
                    a + "x" + f,
                    e = "[" + a + "," + f + "]",
                    d = Math.floor(3E3 * Math.random() + 1E3),
                    k = "text-align: center;text-align: center;margin-left:auto;margin-right:auto";
                640 === a && 360 === f && (k = "max-width: 500px;text-align: center;text-align: center;margin-left:auto;margin-right:auto", b = "", e = "['fluid']");
                a = "\n               \x3cdiv style\x3d'" + k + "'\x3e\n             \x3cscript async src\x3d'https://securepubads.g.doubleclick.net/tag/js/gpt.js'\x3e\x3c/script\x3e\n            \x3cscript\x3e\n              window.googletag \x3d window.googletag || {cmd: []};\n              googletag.cmd.push(function() {\n                googletag.defineSlot('/1042665/Autopromo_adunit" +
                    b + "', " + e + ", 'div-gpt-ad-158410599" + d + "-0').addService(googletag.pubads());\n                googletag.pubads().enableSingleRequest();\n                googletag.pubads().collapseEmptyDivs();\n                googletag.enableServices();\n              });\n            \x3c/script\x3e\n            \x3c!-- /1042665/Autopromo_adunit --\x3e\n            \x3cdiv id\x3d'div-gpt-ad-158410599" + d + "-0' style\x3d'text-align:center;'\x3e\n              \x3cscript\x3e\n                googletag.cmd.push(function() { googletag.display('div-gpt-ad-158410599" +
                    d + "-0'); });\n              \x3c/script\x3e\x3c/div\x3e\n            ";
                f = [];
                f.push({
                    event: "bidWon",
                    user_id: USER_ID_hbagency,
                    website_id: WEBSITE_ID_hbagency,
                    data: {
                        bidderCode: "autopromo_hbagency",
                        owner: !1,
                        idzona: O[c],
                        adUnitCode: c,
                        width: 1,
                        height: 1,
                        cpm: .06
                    }
                });
                ba(f, urlHbstatsAnalytics);
                postscribe("#" + c, a);
                return !0
            }
        }

        function aa(c, a, f, b) {
            var e = p.getElementById(a),
                d = p.createElement("iframe");
            d.vspace = 0;
            d.hspace = 0;
            d.setAttribute("id", "framehb_sv_" + a);
            d.setAttribute("scrolling", "no");
            d.setAttribute("marginwidth",
                "0");
            d.setAttribute("marginheight", "0");
            d.setAttribute("frameborder", "0");
            d.setAttribute("width", f);
            d.setAttribute("height", b);
            e.appendChild(d);
            a = p.getElementById("framehb_sv_" + a).contentWindow.document;
            c = "\x3chtml\x3e\x3chead\x3e\x3c/head\x3e\x3cbody\x3e\x3c/body\x3e" + c + "\x3c/body\x3e\x3c/html\x3e";
            a.open();
            a.write(c);
            a.close();
            return !0
        }

        function va(c, a, f, b, e) {
            b = parent.window.document.getElementById("HB_Footer_Close_" + c);
            b.style.display = "block;";
            b.style.margin = "0px;";
            b.style.padding = "0px";
            b.style.setProperty("border-radius",
                "important");
            b.style.border = "0px";
            b.style.setProperty("min-width", "0px");
            b.style.setProperty("min-height", "0px");
            b.style.setProperty("background-image", "none; width: 100%");
            b.style.height = .55 * f + 20 + "px";
            b.style.setProperty("max-width", "100%");
            b.style.setProperty("max-height", f + 20 + "px");
            b.style.position = "fixed";
            b.style.bottom = "0px";
            b.style.left = "0px";
            b.style.setProperty("background-color", "transparent;");
            b.style.zIndex = "2147483640";
            if (b = parent.window.document.getElementById("HB_OUTER_" + c))
                if (b.style.width =
                    .55 * a + "px", b.style.height = .55 * f + "px", b.style.margin = "0 auto", f = parent.window.document.getElementById("HB_CLOSE_" + c)) f.style.zIndex = "2147483641", f.style.position = "relative", f.style.height = "20px", f.style.top = "30px", f.style.right = "5px", f.style.margin = "0px auto", f.style.cursor = "pointer", f.style.width = .55 * a + "px", f.innerHTML = '\x3cimg   style \x3d "float:right;width:20px;heihgt:20px" onclick\x3d"hbManager.closeHB(\'' + c + "');hbManager.closeHB('HB_Footer_Close_" + c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfnBhMPFhF3DV5TAAABVUlEQVQ4y6WUvU4CURCFD1RACTS8gFEb3oAlIdFSQ8WjQXgBSi210IQN hCdQ4wMcs1l+AgVZkNxjsQvsD2ZxnVvNvfNlJjN3Tk6I2tcF7nGDa1QAzPCGZzzUPmNBCh1aHDpa ydNORkbf8rSSIw5pheOOQIFdx6x1ytZyDLssxCCWOZ7J6DczmoljlkMQS5wslWZLccLSEerPUxFJ mov9AKLlGHMWZOQYWj5kr89C/JbQFsC6E7luyY34rloR3xHrebQLkbkN0MH04E3RwSDyXgTa4IsX K8E9ZHMTeSVPfAW5S1TuB59CpJ1IcHOqc64aapxAJCNu8shi2crL0Ig87G0ks9/kKgCgGhsAAGwB O9Nws32jP3/Y5n41eouzoIXY+98SCqxwkrruE1biwlJMFZZSQo0CCRvtJcyffiBhIzbDcbmEWF7i Dre4CsTyHU94rH1EY34AROPcsy0m4BwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTM6 MjI6MTcrMDI6MDAtvRfjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDEzOjIyOjE3KzAy OjAwXOCvXwAAABh0RVh0ZmlsZW5hbWU6YmFzZQBpY28tY2VycmFycaPVNwAAAABJRU5ErkJggg\x3d\x3d" \x3e '
        }

        function ma(c, a, f, b, e) {
            b = v.getAdserverTargetingForAdUnitCode(c);
            e = p.getElementById(c);
            b = L[c] || !e ? !1 : b && b.hb_adid ? (b = v.getHighestCpmBids(c)) && 0 < b.length && b[0].bidderCode && "ogury" === b[0].bidderCode || b && 0 < b.length && b[0].bidderCode && "gumgum" === b[0].bidderCode ? !1 : L[c] = !0 : !1;
            if (b) {
                b = p.getElementById("" + c);
                e = p.createElement("div");
                var d = p.createElement("div");
                d.setAttribute("id", "" + c);
                d.style.zIndex = "2147483642";
                var k = p.createElement("div");
                k.setAttribute("id", "HB_CLOSE_" + c);
                b.appendChild(k);
                e.appendChild(d);
                b.appendChild(e);
                b.setAttribute("id", "HB_Footer_Close_" + c);
                b.style.setProperty("display", "none");
                e.setAttribute("id", "HB_OUTER_" + c);
                hbagency_ismobile ? e.style.width = a + "px" : (e.style.width = "100%", e.style.textAlign = "center");
                e.style.height = f + "px";
                e.style.margin = "0 auto";
                k.style.width = "100%";
                k.style.height = "70px";
                k.style.margin = "10px -10px";
                k.style.cursor = "pointer";
                k.innerHTML = '\x3cimg   style\x3d"float:right;width:38px;height:38px" onclick\x3d"hbManager.closeHBInterstitial(\'' + c + "');hbManager.closeHB('HB_Footer_Close_" +
                    c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAACxMAAAsTAQCanBgAAAAHdElNRQfnBhMNMQjKJ5CYAAAB30lEQVQ4y62UPWsUURSGnzP7kUIW JaBmCmEUtnFtFjWZcvpEa3FD8AcIgo1Wsk2MVoEUYptNfoLpUgyIIRB0Q8xqsSiD4KzVitplP47F ZGbusMMK6qlmXuY597zvYS78Rcmk5Ak2VWaB73T56k+HPJhjiQfUEl055AU79Px8yBOWeY6dM0+P x2z5Gr8WEuQMq6xxNtdEhVtUnL1gkIE8YZWHaYuJsnCZcXaDFPJghbUpSGRkno7zMQAsAGyeUfxj 0kWakeMIWjTtn1MreS5wSQ3sGoun43nCJhdS5Klc1I6MgDL39I4c6Y804yvOywALsKmlzX7KW70p DS1RoqE3ZF9Dc5c1bCgCVXNbY7ZkrAtSVqjLgW7LMBtHlbAIzGb9nrAtZa0LtLWVRYi+tsgpZTw1 RgvoZ6USd/W6tLWtdVnRiU30I09dNHVl0VBXDrQlsKwLMsq6UrrRSSHtVLXVlX3dlAEDWvJaXbls buqQEAoQ4Iy5Hau/5EjfnPZWPkhHP5mRP/HfxUG8opfqX4xxRnw2kWN24iDgG4+YyHaihjSj5gWA AOc9Fdy8n9/Y+jobPgkEAc4eM8zn7w0Ysk7TP8GEIBg4u3S4yvmc8465z0aM/PvFkqDpFdanS+jz X+o3q0udsu4NGL4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTE6NDk6MDgrMDI6MDBn VuNrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDExOjQ5OjA4KzAyOjAwFgtb1wAAAABJ RU5ErkJggg\x3d\x3d" \x3e '
            }
        }

        function wa(c, a, f, b, e) {
            var d = parent.window.document.getElementById("HB_Footer_Close_" + c);
            d && ha(c, b, e) && (parent.window.document.getElementById(c).style.display = "block", d.style.height = f + "px", d.style.position = "fixed", d.style.bottom = "0px", d.style.left = "0px", d.style.padding = "2px 0 0;", d.style.zIndex = "2147483642", d.style.display = "block", b = parent.window.document.getElementById("HB_OUTER_" + c)) && (b.style.width = a + "px", b.style.height = f + "px", b.style.margin = "0 auto", a = parent.window.document.getElementById("HB_CLOSE_" +
                c)) && (a.style.width = "20px", a.style.height = "20px", a.style.bottom = "0px", a.style.position = "fixed", a.style.margin = "0px auto", a.style.cursor = "pointer", a.innerHTML = '\x3cimg   style \x3d "left:0px;width:20px;heihgt:20px;position:absolute;float:left;bottom:' + f + 'px;position:absolute" onclick\x3d"hbManager.closeHB(\'' + c + "');hbManager.closeHB('HB_Footer_Close_" + c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAACxMAAAsTAQCanBgAAAAHdElNRQfnBhMNMQjKJ5CYAAAB30lEQVQ4y62UPWsUURSGnzP7kUIW JaBmCmEUtnFtFjWZcvpEa3FD8AcIgo1Wsk2MVoEUYptNfoLpUgyIIRB0Q8xqsSiD4KzVitplP47F ZGbusMMK6qlmXuY597zvYS78Rcmk5Ak2VWaB73T56k+HPJhjiQfUEl055AU79Px8yBOWeY6dM0+P x2z5Gr8WEuQMq6xxNtdEhVtUnL1gkIE8YZWHaYuJsnCZcXaDFPJghbUpSGRkno7zMQAsAGyeUfxj 0kWakeMIWjTtn1MreS5wSQ3sGoun43nCJhdS5Klc1I6MgDL39I4c6Y804yvOywALsKmlzX7KW70p DS1RoqE3ZF9Dc5c1bCgCVXNbY7ZkrAtSVqjLgW7LMBtHlbAIzGb9nrAtZa0LtLWVRYi+tsgpZTw1 RgvoZ6USd/W6tLWtdVnRiU30I09dNHVl0VBXDrQlsKwLMsq6UrrRSSHtVLXVlX3dlAEDWvJaXbls buqQEAoQ4Iy5Hau/5EjfnPZWPkhHP5mRP/HfxUG8opfqX4xxRnw2kWN24iDgG4+YyHaihjSj5gWA AOc9Fdy8n9/Y+jobPgkEAc4eM8zn7w0Ysk7TP8GEIBg4u3S4yvmc8465z0aM/PvFkqDpFdanS+jz X+o3q0udsu4NGL4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTE6NDk6MDgrMDI6MDBn VuNrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDExOjQ5OjA4KzAyOjAwFgtb1wAAAABJ RU5ErkJggg\x3d\x3d" \x3e ')
        }

        function xa(c) {
            if (c = u.parent.document.getElementById(c)) c.style.width = "0px", c.style.height = "0px", c.style.display = "none", c.style.visibility = "hide"
        }

        function la(c, a, f, b, e) {
            if (300 === a && 250 === f && !hbagency_ismobile) wa(c, a, f, b, e);
            else if (parent.window.document.getElementById("HB_Footer_Close_" + c) && oa(c, b, e))
                if (18 == w[c] && hbagency_ismobile) va(c, a, f, b, e);
                else if ((b = v.getAdserverTargetingForAdUnitCode(c)) && b.hb_adid && (a = v.getHighestCpmBids(c), f = a[0].height, a = a[0].width, 300 === a && 250 === f && hbagency_ismobile && (a *=
                    .55, f *= .55)), parent.window.document.getElementById(c).style.display = "block", b = parent.window.document.getElementById("HB_OUTER_" + c))
                if (b.style.width = a + "px", b.style.height = f + "px", b.style.margin = "0 auto", f = parent.window.document.getElementById("HB_CLOSE_" + c)) f.style.width = a + "px", f.style.zIndex = "2147483642", f.style.position = "relative", f.style.height = "20px", hbagency_ismobile && (f.style.top = "30px", f.style.right = "2px"), f.style.margin = "0px auto", f.style.cursor = "pointer", f.innerHTML = hbagency_ismobile ? '\x3cimg   style \x3d "float:right;width:20px;heihgt:20px" onclick\x3d"hbManager.closeHB(\'' +
                    c + "');hbManager.closeHB('HB_Footer_Close_" + c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfnBhMPFhF3DV5TAAABVUlEQVQ4y6WUvU4CURCFD1RACTS8gFEb3oAlIdFSQ8WjQXgBSi210IQN hCdQ4wMcs1l+AgVZkNxjsQvsD2ZxnVvNvfNlJjN3Tk6I2tcF7nGDa1QAzPCGZzzUPmNBCh1aHDpa ydNORkbf8rSSIw5pheOOQIFdx6x1ytZyDLssxCCWOZ7J6DczmoljlkMQS5wslWZLccLSEerPUxFJ mov9AKLlGHMWZOQYWj5kr89C/JbQFsC6E7luyY34rloR3xHrebQLkbkN0MH04E3RwSDyXgTa4IsX K8E9ZHMTeSVPfAW5S1TuB59CpJ1IcHOqc64aapxAJCNu8shi2crL0Ig87G0ks9/kKgCgGhsAAGwB O9Nws32jP3/Y5n41eouzoIXY+98SCqxwkrruE1biwlJMFZZSQo0CCRvtJcyffiBhIzbDcbmEWF7i Dre4CsTyHU94rH1EY34AROPcsy0m4BwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTM6 MjI6MTcrMDI6MDAtvRfjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDEzOjIyOjE3KzAy OjAwXOCvXwAAABh0RVh0ZmlsZW5hbWU6YmFzZQBpY28tY2VycmFycaPVNwAAAABJRU5ErkJggg\x3d\x3d" \x3e ' :
                    '\x3cimg   style \x3d "float:right;width:20px;heihgt:20px" onclick\x3d"hbManager.closeHB(\'' + c + "');hbManager.closeHB('HB_Footer_Close_" + c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAACxMAAAsTAQCanBgAAAAHdElNRQfnBhMNMQjKJ5CYAAAB30lEQVQ4y62UPWsUURSGnzP7kUIW JaBmCmEUtnFtFjWZcvpEa3FD8AcIgo1Wsk2MVoEUYptNfoLpUgyIIRB0Q8xqsSiD4KzVitplP47F ZGbusMMK6qlmXuY597zvYS78Rcmk5Ak2VWaB73T56k+HPJhjiQfUEl055AU79Px8yBOWeY6dM0+P x2z5Gr8WEuQMq6xxNtdEhVtUnL1gkIE8YZWHaYuJsnCZcXaDFPJghbUpSGRkno7zMQAsAGyeUfxj 0kWakeMIWjTtn1MreS5wSQ3sGoun43nCJhdS5Klc1I6MgDL39I4c6Y804yvOywALsKmlzX7KW70p DS1RoqE3ZF9Dc5c1bCgCVXNbY7ZkrAtSVqjLgW7LMBtHlbAIzGb9nrAtZa0LtLWVRYi+tsgpZTw1 RgvoZ6USd/W6tLWtdVnRiU30I09dNHVl0VBXDrQlsKwLMsq6UrrRSSHtVLXVlX3dlAEDWvJaXbls buqQEAoQ4Iy5Hau/5EjfnPZWPkhHP5mRP/HfxUG8opfqX4xxRnw2kWN24iDgG4+YyHaihjSj5gWA AOc9Fdy8n9/Y+jobPgkEAc4eM8zn7w0Ysk7TP8GEIBg4u3S4yvmc8465z0aM/PvFkqDpFdanS+jz X+o3q0udsu4NGL4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTE6NDk6MDgrMDI6MDBn VuNrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDExOjQ5OjA4KzAyOjAwFgtb1wAAAABJ RU5ErkJggg\x3d\x3d" \x3e '
        }

        function V() {}

        function ja(c, a, f, b, e, d, k, h, g) {
            if (void 0 !== d && "" !== d) {
                if (a = d.split("\x3d"), -1 !== d.indexOf("class") && (a = a[1].split(";"), f = p.getElementsByClassName(a[0])[a[1]], void 0 !== f && "" !== f && 2 < a.length)) {
                    b = f.childNodes;
                    e = d = 0;
                    for (k = !1; d < b.length / 2;) 1 !== b[d].nodeType || k ? (d++, k = !1) : (k = p.createElement("div"), k.setAttribute("id", c + "_" + e), e++, k.setAttribute("class", c + ""), k.style.setProperty("text-align", "center"), 42 === w[c] && X(280, 340, k, !0), 43 === w[c] && X(280, 90, k, !0), f.insertBefore(k, f.children[d]), k = !0,
                        d += parseInt(a[2]));
                    k = p.createElement("div");
                    k.setAttribute("id", c + "_" + e);
                    k.setAttribute("class", c + "");
                    k.style.setProperty("text-align", "center");
                    42 === w[c] && X(280, 340, k, !0);
                    43 === w[c] && X(280, 90, k, !0);
                    f.appendChild(k)
                }
            } else
                for (a = p.getElementsByClassName(c), d = 0; d < a.length;) {
                    f = a[d];
                    if ("" === f.id || null === f.id || void 0 === f.id) f.id = 0 == d ? "" + c : "" + c + "_" + d, f.style.setProperty("text-align", "center");
                    d++
                }
        }

        function Y(c, a, f, b, e, d, k, h, g) {
            var m = ca(c, d),
                l = 100,
                q = 0;
            if (null === m) {
                for (; null === m && 20 > q;) q++, setTimeout(function() {
                    m =
                        ca(c, d);
                    q++
                }, 200);
                l = 1E3
            }
            m && W(c) && X(280, 360, m);
            setTimeout(function() {
                ta(c, a, f, b, e, d, k, h, m, g)
            }, l)
        }

        function Ga() {
            cmphbagency = !0;
            v.adserverRequestSent || (v.adserverRequestSent = !0, L.hbagency_space_56463 = !1, w.hbagency_space_56463 = 40, na("hbagency_space_56463"), D.hbagency_space_56463 = 300, O.hbagency_space_56463 = 56463, Q.hbagency_space_56463 = 0, E.hbagency_space_56463 = 600, S.hbagency_space_56463 = "\x3cdiv style\x3d'width:300px;height:600px'\x3e\x3cdiv id\x3d'nathb_art' class\x3d'OUTBRAIN' data-ob-contentUrl\x3d'%%PATTERN:url%%'data-widget-id\x3d'AR_2'data-ob-installation-key\x3d'ITHBAF5PC2BLMA2Q14JQO3931'\x3e\x3c/div\x3e\x3cscript type\x3d'text/javascript' \x3e    var urlhb\x3dwindow.location.href;    var divhb\x3ddocument.getElementById('nathb_art');    divhb.setAttribute('data-ob-contentUrl'  , urlhb );    \x3c/script\x3e\x3cscript type\x3d'text/javascript' async\x3d'async' src\x3d'https://widgets.outbrain.com/outbrain.js'\x3e\x3c/script\x3e\x3c/div\x3e",
                N.hbagency_space_56463 = "", Y("hbagency_space_56463", 300, 600, "\x3cdiv style\x3d'width:300px;height:600px'\x3e\x3cdiv id\x3d'nathb_art' class\x3d'OUTBRAIN' data-ob-contentUrl\x3d'%%PATTERN:url%%'data-widget-id\x3d'AR_2'data-ob-installation-key\x3d'ITHBAF5PC2BLMA2Q14JQO3931'\x3e\x3c/div\x3e\x3cscript type\x3d'text/javascript' \x3e    var urlhb\x3dwindow.location.href;    var divhb\x3ddocument.getElementById('nathb_art');    divhb.setAttribute('data-ob-contentUrl'  , urlhb );    \x3c/script\x3e\x3cscript type\x3d'text/javascript' async\x3d'async' src\x3d'https://widgets.outbrain.com/outbrain.js'\x3e\x3c/script\x3e\x3c/div\x3e",
                    "", "", "", "", !1), L.hbagency_space_56764 = !1, w.hbagency_space_56764 = 4, D.hbagency_space_56764 = 300, O.hbagency_space_56764 = 56764, Q.hbagency_space_56764 = 0, E.hbagency_space_56764 = 600, S.hbagency_space_56764 = "\x3cins class\x3d'adsbygoogle'     style\x3d'display:block'     data-ad-client\x3d'ca-pub-9833752783855568'     data-ad-slot\x3d'5318532717'     data-ad-format\x3d'auto'     data-full-width-responsive\x3d'true'\x3e\x3c/ins\x3e\x3cscript\x3e     (adsbygoogle \x3d window.adsbygoogle || []).push({});\x3c/script\x3e",
                N.hbagency_space_56764 = "", Y("hbagency_space_56764", 300, 600, "\x3cins class\x3d'adsbygoogle'     style\x3d'display:block'     data-ad-client\x3d'ca-pub-9833752783855568'     data-ad-slot\x3d'5318532717'     data-ad-format\x3d'auto'     data-full-width-responsive\x3d'true'\x3e\x3c/ins\x3e\x3cscript\x3e     (adsbygoogle \x3d window.adsbygoogle || []).push({});\x3c/script\x3e", "", "", "", "", !1), L.hbagency_space_57891 = !1, w.hbagency_space_57891 = 42, D.hbagency_space_57891 = 300, O.hbagency_space_57891 = 57891, Q.hbagency_space_57891 = 0, E.hbagency_space_57891 = 250, S.hbagency_space_57891 = "\x3cins class\x3d'adsbygoogle'     style\x3d'display:block'     data-ad-client\x3d'ca-pub-9833752783855568'     data-ad-slot\x3d'4771404915'     data-ad-format\x3d'auto'     data-full-width-responsive\x3d'true'\x3e\x3c/ins\x3e\x3cscript\x3e     (adsbygoogle \x3d window.adsbygoogle || []).push({});\x3c/script\x3e",
                N.hbagency_space_57891 = "", setTimeout(function() {
                    ! function(b, e) {
                        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.inView = e() : b.inView = e()
                    }(this, function() {
                        return function(b) {
                            function e(k) {
                                if (d[k]) return d[k].exports;
                                var h = d[k] = {
                                    exports: {},
                                    id: k,
                                    loaded: !1
                                };
                                return b[k].call(h.exports, h, h.exports, e), h.loaded = !0, h.exports
                            }
                            var d = {};
                            return e.m = b, e.c = d, e.p = "", e(0)
                        }([function(b, e, d) {
                            e = d(2);
                            b.exports = (e && e.__esModule ?
                                e : {
                                    "default": e
                                })["default"]
                        }, function(b, e) {
                            b.exports = function(d) {
                                var k = typeof d;
                                return null != d && ("object" == k || "function" == k)
                            }
                        }, function(b, e, d) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            var k = (b = d(9)) && b.__esModule ? b : {
                                    "default": b
                                },
                                h = (b = d(3)) && b.__esModule ? b : {
                                    "default": b
                                },
                                g = d(4);
                            e["default"] = function() {
                                if ("undefined" != typeof u) {
                                    var m = {
                                            history: []
                                        },
                                        l = {
                                            offset: {},
                                            threshold: 0,
                                            test: g.inViewport
                                        },
                                        q = (0, k["default"])(function() {
                                            m.history.forEach(function(n) {
                                                m[n].check()
                                            })
                                        }, 100);
                                    ["scroll", "resize", "load"].forEach(function(n) {
                                        return addEventListener(n,
                                            q)
                                    });
                                    u.MutationObserver && addEventListener("DOMContentLoaded", function() {
                                        (new MutationObserver(q)).observe(p.body, {
                                            attributes: !0,
                                            childList: !0,
                                            subtree: !0
                                        })
                                    });
                                    var r = function(n) {
                                        if ("string" == typeof n) {
                                            var x = [].slice.call(p.querySelectorAll(n));
                                            return -1 < m.history.indexOf(n) ? m[n].elements = x : (m[n] = (0, h["default"])(x, l), m.history.push(n)), m[n]
                                        }
                                    };
                                    return r.offset = function(n) {
                                        return void 0 === n ? l.offset : (["top", "right", "bottom", "left"].forEach("number" == typeof n ? function(x) {
                                            return l.offset[x] = n
                                        } : function(x) {
                                            return "number" ==
                                                typeof n[x] ? l.offset[x] = n[x] : null
                                        }), l.offset)
                                    }, r.threshold = function(n) {
                                        return "number" == typeof n && 0 <= n && 1 >= n ? l.threshold = n : l.threshold
                                    }, r.test = function(n) {
                                        return "function" == typeof n ? l.test = n : l.test
                                    }, r.is = function(n) {
                                        return l.test(n, l)
                                    }, r.offset(0), r
                                }
                            }()
                        }, function(b, e) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            var d = function() {
                                    function h(g, m) {
                                        for (var l = 0; l < m.length; l++) {
                                            var q = m[l];
                                            q.enumerable = q.enumerable || !1;
                                            q.configurable = !0;
                                            "value" in q && (q.writable = !0);
                                            Object.defineProperty(g, q.key, q)
                                        }
                                    }
                                    return function(g,
                                        m, l) {
                                        return m && h(g.prototype, m), l && h(g, l), g
                                    }
                                }(),
                                k = function() {
                                    function h(g, m) {
                                        if (!(this instanceof h)) throw new TypeError("Cannot call a class as a function");
                                        this.options = m;
                                        this.elements = g;
                                        this.current = [];
                                        this.handlers = {
                                            enter: [],
                                            exit: []
                                        };
                                        this.singles = {
                                            enter: [],
                                            exit: []
                                        }
                                    }
                                    return d(h, [{
                                        key: "check",
                                        value: function() {
                                            var g = this;
                                            return this.elements.forEach(function(m) {
                                                var l = g.options.test(m, g.options),
                                                    q = g.current.indexOf(m),
                                                    r = -1 < q,
                                                    n = !l && r;
                                                l && !r && (g.current.push(m), g.emit("enter", m));
                                                n && (g.current.splice(q,
                                                    1), g.emit("exit", m))
                                            }), this
                                        }
                                    }, {
                                        key: "on",
                                        value: function(g, m) {
                                            return this.handlers[g].push(m), this
                                        }
                                    }, {
                                        key: "once",
                                        value: function(g, m) {
                                            return this.singles[g].unshift(m), this
                                        }
                                    }, {
                                        key: "emit",
                                        value: function(g, m) {
                                            for (; this.singles[g].length;) this.singles[g].pop()(m);
                                            for (var l = this.handlers[g].length; - 1 < --l;) this.handlers[g][l](m);
                                            return this
                                        }
                                    }]), h
                                }();
                            e["default"] = function(h, g) {
                                return new k(h, g)
                            }
                        }, function(b, e) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            e.inViewport = function(d, k) {
                                d = d.getBoundingClientRect();
                                var h = u.innerWidth - d.left,
                                    g = u.innerHeight - d.top,
                                    m = d.right,
                                    l = k.threshold * d.width,
                                    q = k.threshold * d.height;
                                return d.bottom > k.offset.top + q && h > k.offset.right + l && g > k.offset.bottom + q && m > k.offset.left + l
                            }
                        }, function(b, e) {
                            (function(d) {
                                b.exports = "object" == typeof d && d && d.Object === Object && d
                            }).call(e, function() {
                                return this
                            }())
                        }, function(b, e, d) {
                            e = d(5);
                            d = "object" == typeof self && self && self.Object === Object && self;
                            e = e || d || Function("return this")();
                            b.exports = e
                        }, function(b, e, d) {
                            var k = d(1),
                                h = d(8),
                                g = d(10),
                                m = Math.max,
                                l = Math.min;
                            b.exports = function(q, r, n) {
                                function x(t) {
                                    var y = B,
                                        H = G;
                                    return B = G = void 0, I = t, J = q.apply(H, y)
                                }

                                function T(t) {
                                    var y = t - C;
                                    t -= I;
                                    return void 0 === C || y >= r || 0 > y || K && t >= R
                                }

                                function M() {
                                    var t = h();
                                    if (T(t)) var y = F(t);
                                    else {
                                        y = setTimeout;
                                        var H = t - I;
                                        t = r - (t - C);
                                        H = K ? l(t, R - H) : t;
                                        y = void(z = y(M, H))
                                    }
                                    return y
                                }

                                function F(t) {
                                    return z = void 0, U && B ? x(t) : (B = G = void 0, J)
                                }

                                function A() {
                                    var t = h(),
                                        y = T(t);
                                    if (B = arguments, G = this, C = t, y) {
                                        if (void 0 === z) return t = C, I = t, z = setTimeout(M, r), Z ? x(t) : J;
                                        if (K) return z = setTimeout(M, r), x(C)
                                    }
                                    return void 0 === z &&
                                        (z = setTimeout(M, r)), J
                                }
                                var B, G, R, J, z, C, I = 0,
                                    Z = !1,
                                    K = !1,
                                    U = !0;
                                if ("function" != typeof q) throw new TypeError("Expected a function");
                                return r = g(r) || 0, k(n) && (Z = !!n.leading, K = "maxWait" in n, R = K ? m(g(n.maxWait) || 0, r) : R, U = "trailing" in n ? !!n.trailing : U), A.cancel = function() {
                                    void 0 !== z && clearTimeout(z);
                                    I = 0;
                                    B = C = G = z = void 0
                                }, A.flush = function() {
                                    return void 0 === z ? J : F(h())
                                }, A
                            }
                        }, function(b, e, d) {
                            var k = d(6);
                            b.exports = function() {
                                return k.Date.now()
                            }
                        }, function(b, e, d) {
                            var k = d(7),
                                h = d(1);
                            b.exports = function(g, m, l) {
                                var q = !0,
                                    r = !0;
                                if ("function" != typeof g) throw new TypeError("Expected a function");
                                return h(l) && (q = "leading" in l ? !!l.leading : q, r = "trailing" in l ? !!l.trailing : r), k(g, m, {
                                    leading: q,
                                    maxWait: m,
                                    trailing: r
                                })
                            }
                        }, function(b, e) {
                            b.exports = function(d) {
                                return d
                            }
                        }])
                    });
                    ja("hbagency_space_57891", 300, 250, "\x3cins class\x3d'adsbygoogle'     style\x3d'display:block'     data-ad-client\x3d'ca-pub-9833752783855568'     data-ad-slot\x3d'4771404915'     data-ad-format\x3d'auto'     data-full-width-responsive\x3d'true'\x3e\x3c/ins\x3e\x3cscript\x3e     (adsbygoogle \x3d window.adsbygoogle || []).push({});\x3c/script\x3e",
                        "", "", "", "", !1);
                    for (var c = p.getElementsByClassName("hbagency_space_57891"), a = 0; a < c.length;) {
                        var f = c[a];
                        P("hbagency_space_57891", "" + f.id);
                        refreshedHB["" + f.id] = !0;
                        a++
                    }
                    inView(".hbagency_space_57891").on("enter", b => {
                        if (cmphbagency) {
                            if ("" === b.id || null === b.id || void 0 === b.id) b.id = "hbagency_space_57891_" + a;
                            refreshedHB["" + b.id] || (P("hbagency_space_57891", "" + b.id), refreshedHB["" + b.id] = !0)
                        }
                    }).on("exit", b => {
                        setTimeout(function() {
                            refreshedHB["" + b.id] = !1
                        }, 15E3)
                    })
                }, 400), L.hbagency_space_57892 = !1, w.hbagency_space_57892 =
                42, D.hbagency_space_57892 = 300, O.hbagency_space_57892 = 57892, Q.hbagency_space_57892 = 0, E.hbagency_space_57892 = 250, S.hbagency_space_57892 = "CercaVisualizza10elementiAD UNIT NAME\tID ZONA\tWEBSITE\tSTATUS\tNETWORKS\t300x250 in article 3\t57893\tunarosaincucina\t \t300x250 in article 2\t57892\tunarosaincucina\t \t300x250 in article 1\t57891\tunarosaincucina\t \t300x250 3 category loop\t56934\tunarosaincucina\t\t300x250 2 category loop\t56933\tunarosaincucina\t\tFloorad\t56778\tunarosaincucina\t\t728x90 2\t56777\tunarosaincucina\t\t320x100\t56767\tunarosaincucina\t\t728x90\t56766\tunarosaincucina\t\t300x250\t56765\tunarosaincucina\t\tVista da 1 a 10 di 26 elementiPrecedente123SuccessivoModifica Posizionamentox300x250 in article 2unarosaincucinaPassback\x3cins class\x3d'adsbygoogle'     style\x3d'display:block'     data-ad-client\x3d'ca-pub-9833752783855568'     data-ad-slot\x3d'3507179135'     data-ad-format\x3d'auto'     data-full-width-responsive\x3d'true'\x3e\x3c/ins\x3e\x3cscript\x3e     (adsbygoogle \x3d window.adsbygoogle || []).push({});\x3c/script\x3e",
                N.hbagency_space_57892 = "", setTimeout(function() {
                    ! function(b, e) {
                        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.inView = e() : b.inView = e()
                    }(this, function() {
                        return function(b) {
                            function e(k) {
                                if (d[k]) return d[k].exports;
                                var h = d[k] = {
                                    exports: {},
                                    id: k,
                                    loaded: !1
                                };
                                return b[k].call(h.exports, h, h.exports, e), h.loaded = !0, h.exports
                            }
                            var d = {};
                            return e.m = b, e.c = d, e.p = "", e(0)
                        }([function(b, e, d) {
                            e = d(2);
                            b.exports = (e && e.__esModule ?
                                e : {
                                    "default": e
                                })["default"]
                        }, function(b, e) {
                            b.exports = function(d) {
                                var k = typeof d;
                                return null != d && ("object" == k || "function" == k)
                            }
                        }, function(b, e, d) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            var k = (b = d(9)) && b.__esModule ? b : {
                                    "default": b
                                },
                                h = (b = d(3)) && b.__esModule ? b : {
                                    "default": b
                                },
                                g = d(4);
                            e["default"] = function() {
                                if ("undefined" != typeof u) {
                                    var m = {
                                            history: []
                                        },
                                        l = {
                                            offset: {},
                                            threshold: 0,
                                            test: g.inViewport
                                        },
                                        q = (0, k["default"])(function() {
                                            m.history.forEach(function(n) {
                                                m[n].check()
                                            })
                                        }, 100);
                                    ["scroll", "resize", "load"].forEach(function(n) {
                                        return addEventListener(n,
                                            q)
                                    });
                                    u.MutationObserver && addEventListener("DOMContentLoaded", function() {
                                        (new MutationObserver(q)).observe(p.body, {
                                            attributes: !0,
                                            childList: !0,
                                            subtree: !0
                                        })
                                    });
                                    var r = function(n) {
                                        if ("string" == typeof n) {
                                            var x = [].slice.call(p.querySelectorAll(n));
                                            return -1 < m.history.indexOf(n) ? m[n].elements = x : (m[n] = (0, h["default"])(x, l), m.history.push(n)), m[n]
                                        }
                                    };
                                    return r.offset = function(n) {
                                        return void 0 === n ? l.offset : (["top", "right", "bottom", "left"].forEach("number" == typeof n ? function(x) {
                                            return l.offset[x] = n
                                        } : function(x) {
                                            return "number" ==
                                                typeof n[x] ? l.offset[x] = n[x] : null
                                        }), l.offset)
                                    }, r.threshold = function(n) {
                                        return "number" == typeof n && 0 <= n && 1 >= n ? l.threshold = n : l.threshold
                                    }, r.test = function(n) {
                                        return "function" == typeof n ? l.test = n : l.test
                                    }, r.is = function(n) {
                                        return l.test(n, l)
                                    }, r.offset(0), r
                                }
                            }()
                        }, function(b, e) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            var d = function() {
                                    function h(g, m) {
                                        for (var l = 0; l < m.length; l++) {
                                            var q = m[l];
                                            q.enumerable = q.enumerable || !1;
                                            q.configurable = !0;
                                            "value" in q && (q.writable = !0);
                                            Object.defineProperty(g, q.key, q)
                                        }
                                    }
                                    return function(g,
                                        m, l) {
                                        return m && h(g.prototype, m), l && h(g, l), g
                                    }
                                }(),
                                k = function() {
                                    function h(g, m) {
                                        if (!(this instanceof h)) throw new TypeError("Cannot call a class as a function");
                                        this.options = m;
                                        this.elements = g;
                                        this.current = [];
                                        this.handlers = {
                                            enter: [],
                                            exit: []
                                        };
                                        this.singles = {
                                            enter: [],
                                            exit: []
                                        }
                                    }
                                    return d(h, [{
                                        key: "check",
                                        value: function() {
                                            var g = this;
                                            return this.elements.forEach(function(m) {
                                                var l = g.options.test(m, g.options),
                                                    q = g.current.indexOf(m),
                                                    r = -1 < q,
                                                    n = !l && r;
                                                l && !r && (g.current.push(m), g.emit("enter", m));
                                                n && (g.current.splice(q,
                                                    1), g.emit("exit", m))
                                            }), this
                                        }
                                    }, {
                                        key: "on",
                                        value: function(g, m) {
                                            return this.handlers[g].push(m), this
                                        }
                                    }, {
                                        key: "once",
                                        value: function(g, m) {
                                            return this.singles[g].unshift(m), this
                                        }
                                    }, {
                                        key: "emit",
                                        value: function(g, m) {
                                            for (; this.singles[g].length;) this.singles[g].pop()(m);
                                            for (var l = this.handlers[g].length; - 1 < --l;) this.handlers[g][l](m);
                                            return this
                                        }
                                    }]), h
                                }();
                            e["default"] = function(h, g) {
                                return new k(h, g)
                            }
                        }, function(b, e) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            e.inViewport = function(d, k) {
                                d = d.getBoundingClientRect();
                                var h = u.innerWidth - d.left,
                                    g = u.innerHeight - d.top,
                                    m = d.right,
                                    l = k.threshold * d.width,
                                    q = k.threshold * d.height;
                                return d.bottom > k.offset.top + q && h > k.offset.right + l && g > k.offset.bottom + q && m > k.offset.left + l
                            }
                        }, function(b, e) {
                            (function(d) {
                                b.exports = "object" == typeof d && d && d.Object === Object && d
                            }).call(e, function() {
                                return this
                            }())
                        }, function(b, e, d) {
                            e = d(5);
                            d = "object" == typeof self && self && self.Object === Object && self;
                            e = e || d || Function("return this")();
                            b.exports = e
                        }, function(b, e, d) {
                            var k = d(1),
                                h = d(8),
                                g = d(10),
                                m = Math.max,
                                l = Math.min;
                            b.exports = function(q, r, n) {
                                function x(t) {
                                    var y = B,
                                        H = G;
                                    return B = G = void 0, I = t, J = q.apply(H, y)
                                }

                                function T(t) {
                                    var y = t - C;
                                    t -= I;
                                    return void 0 === C || y >= r || 0 > y || K && t >= R
                                }

                                function M() {
                                    var t = h();
                                    if (T(t)) var y = F(t);
                                    else {
                                        y = setTimeout;
                                        var H = t - I;
                                        t = r - (t - C);
                                        H = K ? l(t, R - H) : t;
                                        y = void(z = y(M, H))
                                    }
                                    return y
                                }

                                function F(t) {
                                    return z = void 0, U && B ? x(t) : (B = G = void 0, J)
                                }

                                function A() {
                                    var t = h(),
                                        y = T(t);
                                    if (B = arguments, G = this, C = t, y) {
                                        if (void 0 === z) return t = C, I = t, z = setTimeout(M, r), Z ? x(t) : J;
                                        if (K) return z = setTimeout(M, r), x(C)
                                    }
                                    return void 0 === z &&
                                        (z = setTimeout(M, r)), J
                                }
                                var B, G, R, J, z, C, I = 0,
                                    Z = !1,
                                    K = !1,
                                    U = !0;
                                if ("function" != typeof q) throw new TypeError("Expected a function");
                                return r = g(r) || 0, k(n) && (Z = !!n.leading, K = "maxWait" in n, R = K ? m(g(n.maxWait) || 0, r) : R, U = "trailing" in n ? !!n.trailing : U), A.cancel = function() {
                                    void 0 !== z && clearTimeout(z);
                                    I = 0;
                                    B = C = G = z = void 0
                                }, A.flush = function() {
                                    return void 0 === z ? J : F(h())
                                }, A
                            }
                        }, function(b, e, d) {
                            var k = d(6);
                            b.exports = function() {
                                return k.Date.now()
                            }
                        }, function(b, e, d) {
                            var k = d(7),
                                h = d(1);
                            b.exports = function(g, m, l) {
                                var q = !0,
                                    r = !0;
                                if ("function" != typeof g) throw new TypeError("Expected a function");
                                return h(l) && (q = "leading" in l ? !!l.leading : q, r = "trailing" in l ? !!l.trailing : r), k(g, m, {
                                    leading: q,
                                    maxWait: m,
                                    trailing: r
                                })
                            }
                        }, function(b, e) {
                            b.exports = function(d) {
                                return d
                            }
                        }])
                    });
                    ja("hbagency_space_57892", 300, 250, "CercaVisualizza10elementiAD UNIT NAME\tID ZONA\tWEBSITE\tSTATUS\tNETWORKS\t300x250 in article 3\t57893\tunarosaincucina\t \t300x250 in article 2\t57892\tunarosaincucina\t \t300x250 in article 1\t57891\tunarosaincucina\t \t300x250 3 category loop\t56934\tunarosaincucina\t\t300x250 2 category loop\t56933\tunarosaincucina\t\tFloorad\t56778\tunarosaincucina\t\t728x90 2\t56777\tunarosaincucina\t\t320x100\t56767\tunarosaincucina\t\t728x90\t56766\tunarosaincucina\t\t300x250\t56765\tunarosaincucina\t\tVista da 1 a 10 di 26 elementiPrecedente123SuccessivoModifica Posizionamentox300x250 in article 2unarosaincucinaPassback\x3cins class\x3d'adsbygoogle'     style\x3d'display:block'     data-ad-client\x3d'ca-pub-9833752783855568'     data-ad-slot\x3d'3507179135'     data-ad-format\x3d'auto'     data-full-width-responsive\x3d'true'\x3e\x3c/ins\x3e\x3cscript\x3e     (adsbygoogle \x3d window.adsbygoogle || []).push({});\x3c/script\x3e",
                        "", "", "", "", !1);
                    for (var c = p.getElementsByClassName("hbagency_space_57892"), a = 0; a < c.length;) {
                        var f = c[a];
                        P("hbagency_space_57892", "" + f.id);
                        refreshedHB["" + f.id] = !0;
                        a++
                    }
                    inView(".hbagency_space_57892").on("enter", b => {
                        if (cmphbagency) {
                            if ("" === b.id || null === b.id || void 0 === b.id) b.id = "hbagency_space_57892_" + a;
                            refreshedHB["" + b.id] || (P("hbagency_space_57892", "" + b.id), refreshedHB["" + b.id] = !0)
                        }
                    }).on("exit", b => {
                        setTimeout(function() {
                            refreshedHB["" + b.id] = !1
                        }, 15E3)
                    })
                }, 400), L.hbagency_space_57893 = !1, w.hbagency_space_57893 =
                42, D.hbagency_space_57893 = 300, O.hbagency_space_57893 = 57893, Q.hbagency_space_57893 = 0, E.hbagency_space_57893 = 250, S.hbagency_space_57893 = "\x3cins class\x3d'adsbygoogle'     style\x3d'display:inline-block;width:300px;height:250px'     data-ad-client\x3d'ca-pub-9833752783855568'     data-ad-slot\x3d'9073898118'\x3e\x3c/ins\x3e\x3cscript\x3e     (adsbygoogle \x3d window.adsbygoogle || []).push({});\x3c/script\x3e", N.hbagency_space_57893 = "", setTimeout(function() {
                    ! function(b, e) {
                        "object" == typeof exports &&
                            "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.inView = e() : b.inView = e()
                    }(this, function() {
                        return function(b) {
                            function e(k) {
                                if (d[k]) return d[k].exports;
                                var h = d[k] = {
                                    exports: {},
                                    id: k,
                                    loaded: !1
                                };
                                return b[k].call(h.exports, h, h.exports, e), h.loaded = !0, h.exports
                            }
                            var d = {};
                            return e.m = b, e.c = d, e.p = "", e(0)
                        }([function(b, e, d) {
                            e = d(2);
                            b.exports = (e && e.__esModule ? e : {
                                "default": e
                            })["default"]
                        }, function(b, e) {
                            b.exports = function(d) {
                                var k = typeof d;
                                return null != d && ("object" == k || "function" == k)
                            }
                        }, function(b, e, d) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            var k = (b = d(9)) && b.__esModule ? b : {
                                    "default": b
                                },
                                h = (b = d(3)) && b.__esModule ? b : {
                                    "default": b
                                },
                                g = d(4);
                            e["default"] = function() {
                                if ("undefined" != typeof u) {
                                    var m = {
                                            history: []
                                        },
                                        l = {
                                            offset: {},
                                            threshold: 0,
                                            test: g.inViewport
                                        },
                                        q = (0, k["default"])(function() {
                                            m.history.forEach(function(n) {
                                                m[n].check()
                                            })
                                        }, 100);
                                    ["scroll", "resize", "load"].forEach(function(n) {
                                        return addEventListener(n, q)
                                    });
                                    u.MutationObserver && addEventListener("DOMContentLoaded",
                                        function() {
                                            (new MutationObserver(q)).observe(p.body, {
                                                attributes: !0,
                                                childList: !0,
                                                subtree: !0
                                            })
                                        });
                                    var r = function(n) {
                                        if ("string" == typeof n) {
                                            var x = [].slice.call(p.querySelectorAll(n));
                                            return -1 < m.history.indexOf(n) ? m[n].elements = x : (m[n] = (0, h["default"])(x, l), m.history.push(n)), m[n]
                                        }
                                    };
                                    return r.offset = function(n) {
                                            return void 0 === n ? l.offset : (["top", "right", "bottom", "left"].forEach("number" == typeof n ? function(x) {
                                                return l.offset[x] = n
                                            } : function(x) {
                                                return "number" == typeof n[x] ? l.offset[x] = n[x] : null
                                            }), l.offset)
                                        },
                                        r.threshold = function(n) {
                                            return "number" == typeof n && 0 <= n && 1 >= n ? l.threshold = n : l.threshold
                                        }, r.test = function(n) {
                                            return "function" == typeof n ? l.test = n : l.test
                                        }, r.is = function(n) {
                                            return l.test(n, l)
                                        }, r.offset(0), r
                                }
                            }()
                        }, function(b, e) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            var d = function() {
                                    function h(g, m) {
                                        for (var l = 0; l < m.length; l++) {
                                            var q = m[l];
                                            q.enumerable = q.enumerable || !1;
                                            q.configurable = !0;
                                            "value" in q && (q.writable = !0);
                                            Object.defineProperty(g, q.key, q)
                                        }
                                    }
                                    return function(g, m, l) {
                                        return m && h(g.prototype, m),
                                            l && h(g, l), g
                                    }
                                }(),
                                k = function() {
                                    function h(g, m) {
                                        if (!(this instanceof h)) throw new TypeError("Cannot call a class as a function");
                                        this.options = m;
                                        this.elements = g;
                                        this.current = [];
                                        this.handlers = {
                                            enter: [],
                                            exit: []
                                        };
                                        this.singles = {
                                            enter: [],
                                            exit: []
                                        }
                                    }
                                    return d(h, [{
                                            key: "check",
                                            value: function() {
                                                var g = this;
                                                return this.elements.forEach(function(m) {
                                                    var l = g.options.test(m, g.options),
                                                        q = g.current.indexOf(m),
                                                        r = -1 < q,
                                                        n = !l && r;
                                                    l && !r && (g.current.push(m), g.emit("enter", m));
                                                    n && (g.current.splice(q, 1), g.emit("exit", m))
                                                }), this
                                            }
                                        },
                                        {
                                            key: "on",
                                            value: function(g, m) {
                                                return this.handlers[g].push(m), this
                                            }
                                        }, {
                                            key: "once",
                                            value: function(g, m) {
                                                return this.singles[g].unshift(m), this
                                            }
                                        }, {
                                            key: "emit",
                                            value: function(g, m) {
                                                for (; this.singles[g].length;) this.singles[g].pop()(m);
                                                for (var l = this.handlers[g].length; - 1 < --l;) this.handlers[g][l](m);
                                                return this
                                            }
                                        }
                                    ]), h
                                }();
                            e["default"] = function(h, g) {
                                return new k(h, g)
                            }
                        }, function(b, e) {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            e.inViewport = function(d, k) {
                                d = d.getBoundingClientRect();
                                var h = u.innerWidth - d.left,
                                    g = u.innerHeight - d.top,
                                    m = d.right,
                                    l = k.threshold * d.width,
                                    q = k.threshold * d.height;
                                return d.bottom > k.offset.top + q && h > k.offset.right + l && g > k.offset.bottom + q && m > k.offset.left + l
                            }
                        }, function(b, e) {
                            (function(d) {
                                b.exports = "object" == typeof d && d && d.Object === Object && d
                            }).call(e, function() {
                                return this
                            }())
                        }, function(b, e, d) {
                            e = d(5);
                            d = "object" == typeof self && self && self.Object === Object && self;
                            e = e || d || Function("return this")();
                            b.exports = e
                        }, function(b, e, d) {
                            var k = d(1),
                                h = d(8),
                                g = d(10),
                                m = Math.max,
                                l = Math.min;
                            b.exports = function(q,
                                r, n) {
                                function x(t) {
                                    var y = B,
                                        H = G;
                                    return B = G = void 0, I = t, J = q.apply(H, y)
                                }

                                function T(t) {
                                    var y = t - C;
                                    t -= I;
                                    return void 0 === C || y >= r || 0 > y || K && t >= R
                                }

                                function M() {
                                    var t = h();
                                    if (T(t)) var y = F(t);
                                    else {
                                        y = setTimeout;
                                        var H = t - I;
                                        t = r - (t - C);
                                        H = K ? l(t, R - H) : t;
                                        y = void(z = y(M, H))
                                    }
                                    return y
                                }

                                function F(t) {
                                    return z = void 0, U && B ? x(t) : (B = G = void 0, J)
                                }

                                function A() {
                                    var t = h(),
                                        y = T(t);
                                    if (B = arguments, G = this, C = t, y) {
                                        if (void 0 === z) return t = C, I = t, z = setTimeout(M, r), Z ? x(t) : J;
                                        if (K) return z = setTimeout(M, r), x(C)
                                    }
                                    return void 0 === z && (z = setTimeout(M, r)), J
                                }
                                var B, G, R, J, z, C, I = 0,
                                    Z = !1,
                                    K = !1,
                                    U = !0;
                                if ("function" != typeof q) throw new TypeError("Expected a function");
                                return r = g(r) || 0, k(n) && (Z = !!n.leading, K = "maxWait" in n, R = K ? m(g(n.maxWait) || 0, r) : R, U = "trailing" in n ? !!n.trailing : U), A.cancel = function() {
                                    void 0 !== z && clearTimeout(z);
                                    I = 0;
                                    B = C = G = z = void 0
                                }, A.flush = function() {
                                    return void 0 === z ? J : F(h())
                                }, A
                            }
                        }, function(b, e, d) {
                            var k = d(6);
                            b.exports = function() {
                                return k.Date.now()
                            }
                        }, function(b, e, d) {
                            var k = d(7),
                                h = d(1);
                            b.exports = function(g, m, l) {
                                var q = !0,
                                    r = !0;
                                if ("function" != typeof g) throw new TypeError("Expected a function");
                                return h(l) && (q = "leading" in l ? !!l.leading : q, r = "trailing" in l ? !!l.trailing : r), k(g, m, {
                                    leading: q,
                                    maxWait: m,
                                    trailing: r
                                })
                            }
                        }, function(b, e) {
                            b.exports = function(d) {
                                return d
                            }
                        }])
                    });
                    ja("hbagency_space_57893", 300, 250, "\x3cins class\x3d'adsbygoogle'     style\x3d'display:inline-block;width:300px;height:250px'     data-ad-client\x3d'ca-pub-9833752783855568'     data-ad-slot\x3d'9073898118'\x3e\x3c/ins\x3e\x3cscript\x3e     (adsbygoogle \x3d window.adsbygoogle || []).push({});\x3c/script\x3e", "", "", "", "", !1);
                    for (var c =
                            p.getElementsByClassName("hbagency_space_57893"), a = 0; a < c.length;) {
                        var f = c[a];
                        P("hbagency_space_57893", "" + f.id);
                        refreshedHB["" + f.id] = !0;
                        a++
                    }
                    inView(".hbagency_space_57893").on("enter", b => {
                        if (cmphbagency) {
                            if ("" === b.id || null === b.id || void 0 === b.id) b.id = "hbagency_space_57893_" + a;
                            refreshedHB["" + b.id] || (P("hbagency_space_57893", "" + b.id), refreshedHB["" + b.id] = !0)
                        }
                    }).on("exit", b => {
                        setTimeout(function() {
                            refreshedHB["" + b.id] = !1
                        }, 15E3)
                    })
                }, 400), ya = !0)
        }
        var ya = !1,
            D = [],
            Q = [],
            O = [],
            L = [],
            w = [],
            E = [],
            S = [],
            N = [];
        v.que.push(function() {
            v.bidderSettings = {
                standard: {
                    storageAllowed: !0
                },
                unruly: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .87 * a
                    }
                },
                triplelift: {
                    bidCpmAdjustment: function(a) {
                        return a
                    }
                },
                sharethrough: {
                    bidCpmAdjustment: function(a) {
                        return .92 * a
                    }
                },
                adtelligent: {
                    bidCpmAdjustment: function(a) {
                        return a
                    }
                },
                eplanning: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .9 * a
                    }
                },
                videoheroes: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .9 * a
                    }
                },
                appnexus: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .7 * a
                    }
                },
                adyoulike: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .9 * a
                    }
                },
                ogury: {
                    bidCpmAdjustment: function(a) {
                        return .01 >
                            a ? 0 : .93 * a
                    }
                },
                appnexus_server: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .7 * a
                    }
                },
                criteo: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : a
                    }
                },
                oftmedia: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .76 * a
                    }
                },
                oftmedia_server: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .76 * a
                    }
                },
                onetag: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .87 * a
                    }
                },
                adform: {
                    bidCpmAdjustment: function(a) {
                        return a
                    }
                },
                adf: {
                    bidCpmAdjustment: function(a) {
                        return a
                    }
                },
                adform_hb: {
                    bidCpmAdjustment: function(a) {
                        return a
                    }
                },
                adform_server: {
                    bidCpmAdjustment: function(a) {
                        return a
                    }
                },
                smartadserver: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .6 * a
                    }
                },
                adagio: {
                    storageAllowed: !0,
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .98 * a
                    }
                },
                improvedigital: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .84 * a
                    }
                },
                improvedigital_video: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .82 * a
                    }
                },
                richaudience: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : a
                    }
                },
                rubicon: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .97 * a
                    }
                },
                rubicon_server: {
                    bidCpmAdjustment: function(a) {
                        return .01 > a ? 0 : .95 * a
                    }
                },
                smilewanted: {
                    bidCpmAdjustment: function(a) {
                        return .01 >
                            a ? 0 : .8 * a
                    }
                }
            };
            v.enableAnalytics([{
                provider: "adagio"
            }]);
            if (monitor_hbagency) {
                class a {
                    constructor(h) {
                        this.auctionKey = h;
                        this.adUnitCodes = new Map
                    }
                    toJSON() {
                        return {
                            auctionKey: this.auctionKey,
                            adUnitCodes: Object.fromEntries(this.adUnitCodes),
                            version: "0.04",
                            location: u.location.href
                        }
                    }
                }
                class f {
                    constructor(h) {
                        this.adUnitCode = h;
                        this.bids = new Map
                    }
                    toJSON() {
                        return {
                            adUnitCode: this.adUnitCode,
                            bids: Object.fromEntries(this.bids)
                        }
                    }
                }
                class b {
                    constructor(h, g, m) {
                        this.auctionId = h;
                        this.siteUrl = g;
                        this.timestamp = m
                    }
                }
                class e {
                    constructor(h) {
                        this.auctionKey =
                            h;
                        this.version = "0.04"
                    }
                }
                class d {
                    constructor(h, g, m, l) {
                        this.auctionId = h;
                        this.adUnitCode = g;
                        this.siteUrl = m;
                        this.timestamp = l
                    }
                }
                var c = new Map;

                function k(h) {
                    const g = c.get(h);
                    c.delete(h);
                    fetch("https://hbstack.hbagency.ai/publish", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(g)
                    })
                }
                v.enableAnalytics([{
                    provider: "generic",
                    options: {
                        handler(h) {
                            switch (h[0].type) {
                                case "INIT":
                                    c.set(h[0].auctionId, new a(new b(h[0].auctionId, h[0].siteUrl, h[0].timestamp)));
                                    h[0].adUnitCodes.forEach(g =>
                                        c.get(h[0].auctionId).adUnitCodes.set(g, new f(g)));
                                    break;
                                case "REQUEST":
                                    h[0].adUnitCodes.forEach(g => {
                                        c.get(h[0].auctionId).adUnitCodes.get(g).bids.set(h[0].bidder, {
                                            type: "NO_BID",
                                            siteId: WEBSITE_ID_hbagency,
                                            auctionId: h[0].auctionId,
                                            bidder: h[0].bidder,
                                            siteUrl: domain_hbagency,
                                            adUnitCode: g
                                        })
                                    });
                                    break;
                                case "RESPONSE":
                                    c.get(h[0].auctionId).adUnitCodes.get(h[0].adUnitCode).bids.set(h[0].bidder, h[0]);
                                    break;
                                case "TIMEOUT":
                                    h[0].timeoutEvents.forEach(g => c.get(h[0].auctionId).adUnitCodes.get(g.adUnitCode).bids.set(g.bidder,
                                        g));
                                    break;
                                case "REJECTED":
                                    c.get(h[0].auctionId).adUnitCodes.get(h[0].adUnitCode).bids.set(h[0].bidder, h[0]);
                                    break;
                                case "END":
                                    k(h[0].auctionId);
                                    break;
                                case "WON":
                                    fetch("https://hbstack.hbagency.ai/publish/impressions", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(h[0])
                                    });
                                    break;
                                case "RENDER":
                                    fetch("https://hbstack.hbagency.ai/publish/adRender", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(h[0])
                                    })
                            }
                        },
                        events: {
                            auctionInit(h) {
                                return {
                                    type: "INIT",
                                    siteId: WEBSITE_ID_hbagency,
                                    siteUrl: domain_hbagency,
                                    location: u.location.href,
                                    auctionId: h.auctionId,
                                    timestamp: h.timestamp,
                                    adUnitCodes: h.adUnits.map(function(g) {
                                        return g.code
                                    })
                                }
                            },
                            bidRequested(h) {
                                return {
                                    type: "REQUEST",
                                    siteId: WEBSITE_ID_hbagency,
                                    siteUrl: domain_hbagency,
                                    auctionId: h.auctionId,
                                    bidder: h.bidderCode,
                                    adUnitCodes: h.bids.map(function(g) {
                                        return g.adUnitCode
                                    })
                                }
                            },
                            bidWon(h) {
                                const g = new e(new d(h.auctionId, h.adUnitCode, domain_hbagency, h.requestTimestamp));
                                g.bidder = h.bidder;
                                g.cpm = h.cpm;
                                g.location = u.location.href;
                                g.width = h.width;
                                g.height = h.height;
                                g.type = "WON";
                                return g
                            },
                            bidTimeout(h) {
                                return {
                                    type: "TIMEOUT",
                                    timeoutEvents: h.map(function(g) {
                                        return {
                                            bidder: g.bidder,
                                            auctionId: g.auctionId,
                                            adUnitCode: g.adUnitCode,
                                            siteId: WEBSITE_ID_hbagency,
                                            siteUrl: domain_hbagency,
                                            type: "TIMEOUT"
                                        }
                                    })
                                }
                            },
                            bidResponse(h) {
                                return {
                                    type: "RESPONSE",
                                    siteId: WEBSITE_ID_hbagency,
                                    siteUrl: domain_hbagency,
                                    bidder: h.bidderCode,
                                    adUnitCode: h.adUnitCode,
                                    width: h.width,
                                    height: h.height,
                                    cpm: h.cpm,
                                    auctionId: h.auctionId
                                }
                            },
                            adRenderSucceeded(h) {
                                const g = new e(new d(h.bid.auctionId,
                                    h.bid.adUnitCode, domain_hbagency, h.bid.requestTimestamp));
                                g.bidder = h.bid.bidder;
                                g.cpm = h.bid.cpm;
                                g.width = h.bid.width;
                                g.height = h.bid.height;
                                g.rendered = !0;
                                g.location = u.location.href;
                                g.type = "RENDER";
                                return g
                            },
                            auctionEnd(h) {
                                return {
                                    type: "END",
                                    auctionId: h.auctionId,
                                    timestamp: h.timestamp,
                                    siteId: WEBSITE_ID_hbagency,
                                    siteUrl: domain_hbagency,
                                    adUnitCodes: h.adUnits.map(function(g) {
                                        return g.code
                                    })
                                }
                            }
                        }
                    }
                }])
            }
            v.onEvent("bidViewable", function(a) {
                void 0 != refreshedHBT[a.adUnitCode] && 0 < refreshedHBT[a.adUnitCode] && setTimeout(function() {
                        P(a.adUnitCode)
                    },
                    refreshedHBT[a.adUnitCode])
            });
            v.onEvent("adRenderSucceeded", function(a) {
                var f = "ogury" === a.bid.bidderCode || "gumgum" === a.bid.bidderCode;
                if (ia(a.bid.adUnitCode) && !f) {
                    var b = p.getElementById("HB_Footer_Close_" + a.bid.adUnitCode);
                    b.style.display = "block";
                    b.style.height = "320px";
                    b.style.width = a.bid.width + "px";
                    b.style.position = "fixed";
                    b.style.padding = "2px 0 0;";
                    b.style.zIndex = "2147483642";
                    24 == w[a.bid.adUnitCode] ? b.style.left = "30px" : (b.style.right = 160 === a.bid.width || 120 === a.bid.width ? "-30px" : "-120px", setTimeout(function() {
                        p.getElementById("framehb_" +
                            a.bid.adUnitCode).style.left = "0px"
                    }, 1E3));
                    if (null == N[a.bid.adUnitCode] || "" == N[a.bid.adUnitCode]) b.style.top = "140px";
                    else {
                        var e = b.getAttribute("style");
                        b.setAttribute("style", e + ";" + N[a.bid.adUnitCode])
                    }
                }
                refreshedHB[a.bid.adUnitCode] = !0;
                W(a.bid.adUnitCode) && "video" == a.bid.mediaType && (b = p.getElementById("" + a.bid.adUnitCode), b.style.minHeight = "");
                if (17 === w[a.bid.adUnitCode] || 23 === w[a.bid.adUnitCode]) e = a.bid.height, 250 === e && hbagency_ismobile && (e *= .55), b = p.getElementById("HB_Footer_Close_" + a.bid.adUnitCode),
                    b.style.display = "block", b.style.margin = "0px;", b.style.padding = "0px", b.style.setProperty("border-radius", "important"), b.style.border = "0px", b.style.setProperty("min-width", "0px"), b.style.setProperty("min-height", "0px"), b.style.setProperty("background-image", "none; width: 100%"), b.style.height = e + 20 + "px", b.style.setProperty("max-width", "100%"), b.style.setProperty("max-height", e + 20 + "px"), b.style.position = "fixed", b.style.width = "100%", b.style.bottom = "0px", b.style.left = "0px", b.style.setProperty("background-color",
                        "transparent;"), b.style.zIndex = "2147483642", b = p.getElementById("" + a.bid.adUnitCode), b.style.display = "block";
                if (36 == w[a.bid.adUnitCode] && !f) {
                    if ("ogury" === a.bid.bidderCode || "gumgum" === a.bid.bidderCode) return;
                    f = p.getElementById("HB_Footer_Close_" + a.bid.adUnitCode);
                    f.style.display = "block";
                    f.style.position = "fixed";
                    f.style.top = "0px";
                    f.style.left = "0px";
                    f.style.padding = "2px 0 0;";
                    f.style.zIndex = "2147483642";
                    f.style.backgroundColor = "rgba(0,0,0,0.5)";
                    f.style.setProperty("width", "100%");
                    f.style.setProperty("height",
                        "100%")
                }
                Q && Q[a.bid.adUnitCode] && 0 < Q[a.bid.adUnitCode] && setTimeout(function() {
                    xa(a.bid.adUnitCode);
                    xa("HB_Footer_Close_" + a.bid.adUnitCode)
                }, Q[a.bid.adUnitCode]);
                f = [];
                f.push({
                    event: "bidWon",
                    user_id: USER_ID_hbagency,
                    website_id: WEBSITE_ID_hbagency,
                    data: {
                        bidderCode: a.bid.bidder,
                        owner: !1,
                        idzona: O[a.bid.adUnitCode],
                        adUnitCode: a.bid.adUnitCode,
                        width: a.bid.width,
                        height: a.bid.height,
                        cpm: a.bid.cpm
                    }
                });
                ba(f, urlHbstatsAnalytics)
            });
            v.onEvent("adRenderFailed", function(a) {})
        });
        v.que.push(function() {
            v.setBidderConfig({
                bidders: "oftmedia_server oftmedia sovrn sovrn_server improvedigital improvedigital_video sovrn_video".split(" "),
                config: {
                    schain: {
                        validation: "relaxed",
                        config: {
                            ver: "1.0",
                            complete: 1,
                            nodes: [{
                                asi: "headerbidding.agency",
                                sid: "" + WEBSITE_ID_hbagency,
                                hp: 1
                            }]
                        }
                    }
                }
            });
            v.setBidderConfig({
                bidders: "adf sharethrough videoheroes eplanning smartadserver richaudience richaudience_video adform adform_hb smilewanted adform_video adform_server adtelligent triplelift ogury adyoulike adagio criteo unruly onetag teads rubicon gumgum rubicon_video rubicon_server amx".split(" "),
                config: {
                    schain: {
                        validation: "relaxed",
                        config: {
                            ver: "1.0",
                            complete: 1,
                            nodes: [{
                                asi: "hbagency.it",
                                sid: "" + WEBSITE_ID_hbagency,
                                hp: 1
                            }]
                        }
                    }
                }
            });
            var c = {
                gdpr: {
                    cmpApi: "iab",
                    timeout: 19E3,
                    defaultGdprScope: !0,
                    rules: [{
                        purpose: "storage",
                        enforcePurpose: !0,
                        enforceVendor: !0,
                        vendorExceptions: ["azerionedge", "lotamePanoramaId", "identityLink", "id5Id", "sharedId", "quantcastId", "criteo", "amxId", "triplelift", "adf", "eplanning", "pubCommonId", "videoheroes", "adform_hb", "adform_server", "adtelligent", "adform", "appnexus", "appnexus_server", "smartadserver_server", "smartadserver", "sovrn", "onetag", "sharethrough",
                            "gumgum", "oftmedia", "oftmedia_server", "adyoulike", "improvedigital", "richaudience", "adf", "teads", "rubicon", "adform_video", "amx", "adyoulike", "ogury", "smilewanted", "adagio", "adyoulike", , "unruly", "richaudience_video", "improvedigital_video"
                        ]
                    }, {
                        purpose: "basicAds",
                        enforcePurpose: !0,
                        enforceVendor: !0
                    }, {
                        purpose: "measurement",
                        enforcePurpose: !0,
                        enforceVendor: !0
                    }]
                }
            };
            hbagency_usp && (c.usp = {
                cmpApi: "iab",
                timeout: 1E4
            });
            var a = {
                site: {
                    name: nomesite_hbagency,
                    domain: domain_hbagency,
                    page: urlhb_3
                },
                ext: {
                    dsa: {
                        dsarequired: 1,
                        pubrender: 1,
                        datatopub: 2,
                        transparency: [{
                            domain: "hbagency.it",
                            dsaparams: [1, 2]
                        }]
                    }
                }
            };
            0 < fdpCategories.length && (a.site.cat = fdpCategories);
            0 < fdpSubCategories.length && (a.site.sectioncat = fdpSubCategories);
            0 < fdpKeywords.length && (a.site.keywords = fdpKeywords);
            v.setConfig({
                paapi: {
                    enabled: !1
                },
                minBidCacheTTL: 30,
                eventHistoryTTL: 30,
                enableTIDs: !0,
                bidViewabilityIO: {
                    enabled: !0
                },
                bidderTimeout: PREBID_TIMEOUT_hbagency,
                ortb2: a,
                gvlMapping: {
                    eplanning: 90
                },
                rubicon: {
                    singleRequest: !0
                },
                realTimeData: realTimeDataHB,
                consentManagement: c,
                cache: {
                    url: "https://prebid.adnxs.com/pbc/v1/cache"
                },
                useBidCache: !0,
                bidCacheFilterFunction: f => "video" !== f.mediaType,
                priceGranularity: "high",
                currency: {
                    adServerCurrency: "EUR",
                    rates: {
                        USD: {
                            EUR: .91
                        }
                    },
                    defaultRates: {
                        USD: {
                            EUR: .91
                        }
                    }
                },
                floors: hb_floors_hbagency,
                disableAjaxTimeout: !0,
                userSync: {
                    filterSettings: {
                        iframe: {
                            bidders: "*",
                            filter: "include"
                        },
                        image: {
                            bidders: "*",
                            filter: "include"
                        }
                    },
                    maxRequestsPerOrigin: 4,
                    syncsPerBidder: 0,
                    syncDelay: 3E3,
                    userIds: [{
                            name: "criteo"
                        }, {
                            name: "lotamePanoramaId",
                            params: {
                                clientId: "17644"
                            }
                        },
                        {
                            name: "amxId",
                            storage: {
                                name: "amxId",
                                type: "html5",
                                expires: 14
                            },
                            params: {
                                tagId: "aGJhZ2VuY3kuaXQ"
                            }
                        }, {
                            name: "teadsId",
                            params: {
                                pubId: 17052
                            }
                        }, {
                            name: "sharedId",
                            storage: {
                                name: "_sharedID",
                                type: "html5",
                                expires: 365
                            }
                        }, {
                            name: "quantcastId"
                        }, {
                            name: "id5Id",
                            params: {
                                partner: 384,
                                externalModuleUrl: "https://cdn.id5-sync.com/api/1.0/id5PrebidModule.js"
                            },
                            storage: {
                                type: "html5",
                                name: "id5id",
                                expires: 90,
                                refreshInSeconds: 28800
                            }
                        }
                    ],
                    auctionDelay: 500
                }
            });
            v.addAdUnits(adUnits_hbagency);
            v.aliasBidder("adf", "adform_server", {
                gvlid: 50
            });
            v.aliasBidder("adf", "adform", {
                gvlid: 50
            });
            v.aliasBidder("adf", "adform_hb", {
                gvlid: 50
            });
            v.aliasBidder("adf", "adform_video", {
                gvlid: 50
            });
            v.aliasBidder("richaudience", "richaudience_video", {
                gvlid: 108
            });
            v.aliasBidder("improvedigital", "improvedigital_video", {
                gvlid: 253
            });
            v.aliasBidder("sovrn", "sovrn_video", {
                gvlid: 13
            });
            v.aliasBidder("rubicon", "rubicon_video", {
                gvlid: 52
            });
            v.aliasBidder("sovrn", "sovrn_server", {
                gvlid: 13
            });
            v.aliasBidder("appnexus", "oftmedia_server", {
                gvlid: 32
            });
            v.aliasBidder("appnexus", "appnexus_server", {
                gvlid: 32
            });
            v.aliasBidder("smartadserver", "smartadserver_server", {
                gvlid: 45
            });
            v.aliasBidder("rubicon", "rubicon_server", {
                gvlid: 52
            });
            v.aliasBidder("amx", "amx_server", {
                gvlid: 737
            });
            v.aliasBidder("sharethrough", "sharethrough_video", {
                gvlid: 80
            });
            v.requestBids({
                bidsBackHandler: Ga
            })
        });
        V.prototype.hbagencydetectmob = function() {
            var c = !1,
                a = navigator.userAgent || navigator.vendor || u.opera;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,
                    4))) c = !0;
            return c
        };
        V.prototype.showTemplateFooterHBA = function(c, a, f, b, e) {
            if (300 === a && 250 === f && !hbagency_ismobile) wa(c, a, f, b, e);
            else if (parent.window.document.getElementById("HB_Footer_Close_" + c) && oa(c, b, e))
                if (18 == w[c] && hbagency_ismobile) va(c, a, f, b, e);
                else if ((b = v.getAdserverTargetingForAdUnitCode(c)) && b.hb_adid && (a = v.getHighestCpmBids(c), f = a[0].height, a = a[0].width, 300 === a && 250 === f && hbagency_ismobile && (a *= .55, f *= .55)), parent.window.document.getElementById(c).style.display = "block", b = parent.window.document.getElementById("HB_OUTER_" +
                    c))
                if (b.style.width = a + "px", b.style.height = f + "px", b.style.margin = "0 auto", f = parent.window.document.getElementById("HB_CLOSE_" + c)) f.style.width = a + "px", f.style.zIndex = "2147483642", f.style.position = "relative", f.style.height = "20px", hbagency_ismobile && (f.style.top = "30px", f.style.right = "2px"), f.style.margin = "0px auto", f.style.cursor = "pointer", f.innerHTML = hbagency_ismobile ? '\x3cimg   style \x3d "float:right;width:20px;heihgt:20px" onclick\x3d"hbManager.closeHB(\'' + c + "');hbManager.closeHB('HB_Footer_Close_" +
                    c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfnBhMPFhF3DV5TAAABVUlEQVQ4y6WUvU4CURCFD1RACTS8gFEb3oAlIdFSQ8WjQXgBSi210IQN hCdQ4wMcs1l+AgVZkNxjsQvsD2ZxnVvNvfNlJjN3Tk6I2tcF7nGDa1QAzPCGZzzUPmNBCh1aHDpa ydNORkbf8rSSIw5pheOOQIFdx6x1ytZyDLssxCCWOZ7J6DczmoljlkMQS5wslWZLccLSEerPUxFJ mov9AKLlGHMWZOQYWj5kr89C/JbQFsC6E7luyY34rloR3xHrebQLkbkN0MH04E3RwSDyXgTa4IsX K8E9ZHMTeSVPfAW5S1TuB59CpJ1IcHOqc64aapxAJCNu8shi2crL0Ig87G0ks9/kKgCgGhsAAGwB O9Nws32jP3/Y5n41eouzoIXY+98SCqxwkrruE1biwlJMFZZSQo0CCRvtJcyffiBhIzbDcbmEWF7i Dre4CsTyHU94rH1EY34AROPcsy0m4BwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTM6 MjI6MTcrMDI6MDAtvRfjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDEzOjIyOjE3KzAy OjAwXOCvXwAAABh0RVh0ZmlsZW5hbWU6YmFzZQBpY28tY2VycmFycaPVNwAAAABJRU5ErkJggg\x3d\x3d" \x3e ' :
                    '\x3cimg   style \x3d "float:right;width:20px;heihgt:20px" onclick\x3d"hbManager.closeHB(\'' + c + "');hbManager.closeHB('HB_Footer_Close_" + c + '\');" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAACxMAAAsTAQCanBgAAAAHdElNRQfnBhMNMQjKJ5CYAAAB30lEQVQ4y62UPWsUURSGnzP7kUIW JaBmCmEUtnFtFjWZcvpEa3FD8AcIgo1Wsk2MVoEUYptNfoLpUgyIIRB0Q8xqsSiD4KzVitplP47F ZGbusMMK6qlmXuY597zvYS78Rcmk5Ak2VWaB73T56k+HPJhjiQfUEl055AU79Px8yBOWeY6dM0+P x2z5Gr8WEuQMq6xxNtdEhVtUnL1gkIE8YZWHaYuJsnCZcXaDFPJghbUpSGRkno7zMQAsAGyeUfxj 0kWakeMIWjTtn1MreS5wSQ3sGoun43nCJhdS5Klc1I6MgDL39I4c6Y804yvOywALsKmlzX7KW70p DS1RoqE3ZF9Dc5c1bCgCVXNbY7ZkrAtSVqjLgW7LMBtHlbAIzGb9nrAtZa0LtLWVRYi+tsgpZTw1 RgvoZ6USd/W6tLWtdVnRiU30I09dNHVl0VBXDrQlsKwLMsq6UrrRSSHtVLXVlX3dlAEDWvJaXbls buqQEAoQ4Iy5Hau/5EjfnPZWPkhHP5mRP/HfxUG8opfqX4xxRnw2kWN24iDgG4+YyHaihjSj5gWA AOc9Fdy8n9/Y+jobPgkEAc4eM8zn7w0Ysk7TP8GEIBg4u3S4yvmc8465z0aM/PvFkqDpFdanS+jz X+o3q0udsu4NGL4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDYtMTlUMTE6NDk6MDgrMDI6MDBn VuNrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA2LTE5VDExOjQ5OjA4KzAyOjAwFgtb1wAAAABJ RU5ErkJggg\x3d\x3d" \x3e '
        };
        V.prototype.refreshBidHBA = function(c) {
            if (null !== p.getElementById(c))
                for (var a = 0; a < adUnits_hbagency.length; a++)
                    if (adUnits_hbagency[a].code === c) {
                        v.requestBids({
                            adUnitCodes: [adUnits_hbagency[a].code],
                            bidsBackHandler: function() {
                                ka(c)
                            }
                        });
                        break
                    }
        };
        V.prototype.renderAd = function(c, a, f, b, e) {
            ya && (a = p.getElementById(c)) && "" === a.innerHTML && D[c] && E[c] && S[c] && ta(c, D[c], E[c], S[c], N[c])
        };
        V.prototype.closeHBReapper = function(c) {
            var a = u.parent.document.getElementById(c);
            a && (a.style.width = "0px", a.style.height = "0px", a.style.display =
                "none", a.style.visibility = "hide", L[c] = !1)
        };
        V.prototype.closeHBInterstitial = function(c) {
            if (c = u.parent.document.getElementById(c)) c.innerHTML = ""
        };
        V.prototype.closeHB = function(c) {
            if (c = u.parent.document.getElementById(c)) c.style.display = "none", c.style.visibility = "hide"
        };
        V.prototype.renderHBAgency = function(c, a, f, b, e, d, k, h, g) {
            Y(c, a, f, b, e, d, k, h, g)
        };
        u.HBManager = V;
        setInterval(function() {
            for (var c = p.getElementsByClassName("hbagency_space_57891"),
                    a = 0; a < c.length;) {
                if (void 0 === c[a] || null == c[a]) return;
                P("hbagency_space_57891", c[a].id);
                a++
            }
            c = p.getElementsByClassName("hbagency_space_57892");
            for (a = 0; a < c.length;) {
                if (void 0 === c[a] || null == c[a]) return;
                P("hbagency_space_57892", c[a].id);
                a++
            }
            c = p.getElementsByClassName("hbagency_space_57893");
            for (a = 0; a < c.length && void 0 !== c[a] && null != c[a];) P("hbagency_space_57893", c[a].id), a++
        }, 38E3);
        setInterval(function() {
            P("hbagency_space_56463");
            P("hbagency_space_56764")
        }, 27E3);
    })(window, document, pbjs_hbagencyicd);
    var hbManager;
    hbManager = new HBManager
};
