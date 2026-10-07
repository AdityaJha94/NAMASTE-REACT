import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - NavItems
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestroCard
 *    - Img
 *    - Name
 *    - Star
 *    - Cuisine
 *    - Delivery Time
 *
 * Footer
 * - Copyright
 * - Links
 * - Contact
 */

const resObj = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1099909",
          name: "Satkar Family Restaurant",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/21/37f283af-6ff9-4f2b-8c67-2d482a067232_1099909.jpg",
          locality: "Dombivli East",
          areaName: "Dombivli East",
          costForTwo: "₹350 for two",
          cuisines: [
            "Chinese",
            "Biryani",
            "South Indian",
            "Snacks",
            "North Indian",
          ],
          avgRating: 4.2,
          veg: true,
          parentId: "743742",
          avgRatingString: "4.2",
          totalRatingsString: "76",
          sla: {
            deliveryTime: 45,
            lastMileTravel: 5.6,
            serviceability: "SERVICEABLE",
            slaString: "40-50 mins",
            lastMileTravelString: "5.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-07 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.7",
              ratingCount: "136",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1099909&source=collection&query=South%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "497791",
          name: "Hotel Naivedya Polibhaji Kendra N Caterers",
          cloudinaryImageId: "esqmmmiscerulpqroyjh",
          locality: "Kalyan West",
          areaName: "Kalyan",
          costForTwo: "₹150 for two",
          cuisines: ["Maharashtrian"],
          avgRating: 4.1,
          parentId: "298823",
          avgRatingString: "4.1",
          totalRatingsString: "526",
          promoted: true,
          adTrackingId:
            "cid=48488e0b-9f79-40f7-91f8-609dc11d8751~p=8~adgrpid=48488e0b-9f79-40f7-91f8-609dc11d8751#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=497791~plpr=COLLECTION~eid=72b7d891-5d7d-420b-9335-32e8d77ec2e1~srvts=1791302257923~collid=83634",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-06 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "70",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "48488e0b-9f79-40f7-91f8-609dc11d8751",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=497791&source=collection&query=South%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "253807",
          name: "Shree Laxmi Balaji Idli Atta And Dosa Centre",
          cloudinaryImageId: "gcthy8h9rjqwfichzrix",
          locality: "Khadakpada",
          areaName: "Kalyan",
          costForTwo: "₹150 for two",
          cuisines: ["South Indian", "Beverages"],
          avgRating: 4.3,
          parentId: "185035",
          avgRatingString: "4.3",
          totalRatingsString: "2.8K+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "25-35 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-06 22:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description:
                  "Serves only 100% vegetarian food, with no non-veg items.",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description:
                        "Serves only 100% vegetarian food, with no non-veg items.",
                      theme: "",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=253807&source=collection&query=South%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "986467",
          name: "Modern Cafe West - Pure Veg",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/605ce6dc-51d5-4d20-add1-5651d692e347_986467 (1).jpg",
          locality: "Dombivli",
          areaName: "Dombivli",
          costForTwo: "₹400 for two",
          cuisines: [
            "South Indian",
            "Maharashtrian",
            "Indian",
            "Salads",
            "Snacks",
            "Fast Food",
            "Chinese",
            "Biryani",
          ],
          avgRating: 4.4,
          veg: true,
          parentId: "618872",
          avgRatingString: "4.4",
          totalRatingsString: "6.2K+",
          promoted: true,
          adTrackingId:
            "cid=cec62cd2-335e-44e4-bfe2-6235ba7650fa~p=9~adgrpid=cec62cd2-335e-44e4-bfe2-6235ba7650fa#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=986467~plpr=COLLECTION~eid=09c49092-7c36-4bbd-ada1-5ec96ac4b23c~srvts=1791302257923~collid=83634",
          sla: {
            deliveryTime: 48,
            lastMileTravel: 6.9,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-07 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description:
                  "Serves only 100% vegetarian food, with no non-veg items.",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description:
                        "Serves only 100% vegetarian food, with no non-veg items.",
                      theme: "",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.7",
              ratingCount: "367",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "cec62cd2-335e-44e4-bfe2-6235ba7650fa",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=986467&source=collection&query=South%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "332614",
          name: "Charcoal Eats - Biryani & Beyond",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/c64bcf86-dc2b-4f6a-9e33-efa3ba10372a_332614.jpg",
          locality: "SURESH TOWER",
          areaName: "Kalyan",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Kebabs", "North Indian", "Mughlai"],
          avgRating: 4.3,
          parentId: "5338",
          avgRatingString: "4.3",
          totalRatingsString: "6.9K+",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 1.2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-07 03:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId:
                  "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                description: "Top-rated for Biryani, based on user votes.",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      theme: "",
                      imageId:
                        "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                      description:
                        "Top-rated for Biryani, based on user votes.",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=332614&source=collection&query=South%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1135117",
          name: "Hardasmal Restaurant",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/81c2c8f1-2b34-4ee7-bf5e-88c0ba0c246f_1135117.jpg",
          locality: "Ulhasnagar",
          areaName: "Ulhasnagar",
          costForTwo: "₹999 for two",
          cuisines: [
            "Chinese",
            "Biryani",
            "Desserts",
            "South Indian",
            "Thalis",
            "North Indian",
          ],
          avgRating: 4.2,
          veg: true,
          parentId: "93704",
          avgRatingString: "4.2",
          totalRatingsString: "507",
          promoted: true,
          adTrackingId:
            "cid=59a5791c-f4db-4cb8-9e46-33b5c72fc24f~p=10~adgrpid=59a5791c-f4db-4cb8-9e46-33b5c72fc24f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1135117~plpr=COLLECTION~eid=9b8bc685-d9f8-4373-a881-01f9d0fd8056~srvts=1791302257923~collid=83634",
          sla: {
            deliveryTime: 40,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            slaString: "35-45 mins",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-06 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "59a5791c-f4db-4cb8-9e46-33b5c72fc24f",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1135117&source=collection&query=South%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1222047",
          name: "Twenty one casual dining",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/30/fd99a19f-27ab-4de7-8f30-bfa030de92b1_1222047.jpg",
          locality: "Kalyan",
          areaName: "Kalyan",
          costForTwo: "₹400 for two",
          cuisines: ["South Indian"],
          avgRating: 4.5,
          veg: true,
          parentId: "698077",
          avgRatingString: "4.5",
          totalRatingsString: "258",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 0.7,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-06 23:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1222047&source=collection&query=South%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1317802",
          name: "Theertham The South Cafe",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/27/5571682f-8b7e-47d2-8273-f6912278d315_1317802.jpg",
          locality: "Dombivli",
          areaName: "Dombivli",
          costForTwo: "₹199 for two",
          cuisines: ["South Indian", "Snacks", "Cafe", "Mangalorean", "Indian"],
          avgRating: 4.3,
          veg: true,
          parentId: "500272",
          avgRatingString: "4.3",
          totalRatingsString: "500",
          promoted: true,
          adTrackingId:
            "cid=950e1384-529a-4a37-9616-ee88cade7a70~p=11~adgrpid=950e1384-529a-4a37-9616-ee88cade7a70#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1317802~plpr=COLLECTION~eid=275dc0b6-cd2d-40ef-b23c-cf0bd2ec6378~srvts=1791302257923~collid=83634",
          sla: {
            deliveryTime: 41,
            lastMileTravel: 5.7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-06 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "670",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "950e1384-529a-4a37-9616-ee88cade7a70",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1317802&source=collection&query=South%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.card.card.info;
  const deliveryTime = resData.card.card.info.sla.deliveryTime;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-image"
        className="res-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
