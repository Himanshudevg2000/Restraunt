import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";


const Title = (
    <a href="/">
        <img
            className="img-header"
            alt="logo"
            src="https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-1/302275887_487537640050648_5998956273504369200_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k7aanVkpECwAX84CwB4&_nc_ht=scontent.fblr8-1.fna&oh=00_AfANAhXu-lMJnfNl2qLuMJlCUMOI0kVoUvn70Zi9AtCaNw&oe=653828AC"></img>
    </a>
);


const Header = () => {
    return (
        <div className="header">
            {Title}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const resObj = {
    restaurants: [
        {
            "info": {
                "id": "689427",
                "name": "Haldiram's",
                "cloudinaryImageId": "2f849d999918d411532dd1e8c24f29e0",
                "locality": "Sector-4",
                "areaName": "HSR Layout",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Sweets",
                    "Desserts",
                    "Bakery"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "689427",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4400
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4400
                },
                "parentId": "377669",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "4.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-23 01:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-789a4b98-d35a-4a79-8d13-527d2c7108d3"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/haldirams-sector-4-hsr-layout-bangalore-689427",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "23678",
                "name": "McDonald's",
                "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                "locality": "5th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                    "restaurantId": "23678",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3200
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3200
                },
                "parentId": "630",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 16,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "16 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-23 03:15:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-789a4b98-d35a-4a79-8d13-527d2c7108d3"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-5th-block-koramangala-bangalore-23678",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "25620",
                "name": "KFC",
                "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                "locality": "Intermediate Ring Road",
                "areaName": "Ejipura",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                    "restaurantId": "25620",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3900
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3900
                },
                "parentId": "547",
                "avgRatingString": "4.1",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 15,
                    "lastMileTravel": 0.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "15 mins",
                    "lastMileTravelString": "0.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-22 23:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-789a4b98-d35a-4a79-8d13-527d2c7108d3"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "269402",
                "name": "The Tea Brewery",
                "cloudinaryImageId": "v4s7ectlujr8325ejrnc",
                "locality": "1st Block",
                "areaName": "Koramangala",
                "costForTwo": "₹100 for two",
                "cuisines": [
                    "Beverages",
                    "Snacks",
                    "Bakery",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "feeDetails": {
                    "restaurantId": "269402",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3200
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3200
                },
                "parentId": "21147",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 22,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "22 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-23 00:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-789a4b98-d35a-4a79-8d13-527d2c7108d3"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/the-tea-brewery-1st-block-koramangala-bangalore-269402",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "5934",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "5934",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3200
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3200
                },
                "parentId": "166",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 18,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "18 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-23 05:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-789a4b98-d35a-4a79-8d13-527d2c7108d3"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "74444",
                "name": "Samosa Party",
                "cloudinaryImageId": "d8d4e708a41f011361c949d44990d5e0",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹100 for two",
                "cuisines": [
                    "Fast Food",
                    "Snacks",
                    "Beverages",
                    "Chaat",
                    "North Indian",
                    "Street Food",
                    "Sweets",
                    "Desserts",
                    "Punjabi",
                    "Bakery"
                ],
                "avgRating": 4.4,
                "feeDetails": {
                    "restaurantId": "74444",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3200
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3200
                },
                "parentId": "6364",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-22 22:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-789a4b98-d35a-4a79-8d13-527d2c7108d3"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "108424",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "vw6n5betlssnqelt7rmu",
                "locality": "5TH Block",
                "areaName": "Koramangala",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                    "restaurantId": "108424",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3200
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3200
                },
                "parentId": "2456",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 25,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-23 00:59:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹150 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-789a4b98-d35a-4a79-8d13-527d2c7108d3"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "201224",
                "name": "Asha tiffins",
                "cloudinaryImageId": "n15vckntsiboiod3gpco",
                "locality": "7th Sector",
                "areaName": "Hsr Layout",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Indian",
                    "South Indian",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "201224",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4400
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4400
                },
                "parentId": "236243",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "4.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-22 22:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-789a4b98-d35a-4a79-8d13-527d2c7108d3"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/asha-tiffins-7th-sector-hsr-layout-bangalore-201224",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "383072",
                "name": "Rampyari Chaiwala Netaji Bhajiawala",
                "cloudinaryImageId": "l8qhaivflraozfaf2abu",
                "locality": "2nd Stage",
                "areaName": "BTM Layout",
                "costForTwo": "₹100 for two",
                "cuisines": [
                    "Chaat",
                    "Snacks",
                    "Street Food",
                    "Indian"
                ],
                "avgRating": 4,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "383072",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3800
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3800
                },
                "parentId": "166698",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 3.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "3.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-10-22 21:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {
                "context": "seo-data-789a4b98-d35a-4a79-8d13-527d2c7108d3"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/rampyari-chaiwala-netaji-bhajiawala-2nd-stage-btm-layout-bangalore-383072",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ],
}

// with this function we can easily map all data from resObj and use directly in restraunt card
// const mapResult = resObj.restaurants.map((i) => (
//     <div className="res-card">
//         <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${i.info.cloudinaryImageId}`}></img>
//         <h3>{i.info.name}</h3>
//         <h4>{i.info.costForTwo}</h4>
//         <h4 className="avgRating">{i.info.avgRating} </h4>
//         {/* <h4 > {i.info.sla.deliveryTime} minutes </h4> */}
//         <h4>{i.info.cuisines.join(", ")}</h4>
//     </div>
// ))

const RestrauntCard = (props) => {
    const { resData } = props;

    const {
        id,
        name,
        costForTwo,
        avgRating,
        cuisines,
        cloudinaryImageId
    } = resData
    return (
        <div className="res-card">
            <img className="res-logo" alt="logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(", ")}</h4>

        </div>
        // <>
        //     {mapResult}
        // </>
    )
};

const Body = () => {
    return (
        <div className="body">/
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resObj.restaurants.map((restraunt)=> (
                        <RestrauntCard 
                        key={restraunt.info.id}
                        resData= {restraunt.info} />
                    ))
                }
                {/* <RestrauntCard /> */}
            </div>
        </div>
    )
};
const Footer = () => {
    return (
        <div>
            <p>Footer</p>
        </div>
    )
};

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);