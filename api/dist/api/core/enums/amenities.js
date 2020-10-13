"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EAmenities;
(function (EAmenities) {
    // RecreationFacilities = "recreation_facilities",
    EAmenities["SwimmingPool"] = "swimming_pool";
    EAmenities["WasherDryer"] = "washer_dryer";
    EAmenities["GarageOneOrMore"] = "garage_1_or_more";
    // CentralAir = "central_air",
    // Fireplace = "fireplace",
    // SpaOrHotTub = "spa_or_hot_tub",
    EAmenities["Dishwasher"] = "dishwasher";
    // CommunityDoorman = "community_doorman",
    // CommunityElevator = "community_elevator",
    EAmenities["Furnished"] = "furnished";
    // LaundryRoom = "laundry_room",
    // CommunityNoFee = "community_no_fee",
    // CommunityOutdoorSpace = "community_outdoor_space",
    EAmenities["PetsAllowed"] = "pets_allowed";
    EAmenities["GarageTwoOrMore"] = "garage_2_or_more";
    // View = "view",
    // WaterFront = "waterfront",
    // GolfCourseView = "golf_course_view",
    // CulDeSac = "cul_de_sac",
    EAmenities["HardwoodFloors"] = "hardwood_floors";
    // Basement = "basement",
    // Fireplace = "fireplace",
    // EnergyEfficient = "energy_efficient",
    // DisabilityFeatures = "disability_features",
    // DiningRoom = "dining_room",
    // FamilyRoom = "family_room",
    // DenOrOffice = "den_or_office",
    // GameRoom = "game_room",
    // CentralAir = "central_air",
    // CentralHeat = "central_heat",
    // ForcedAir = "forced_air",
    // SingleStory = "single_story",
    // TwoOrMoreStories = "two_or_more_stories",
    // CornerLot = "corner_lot",
    // WaterView = "water_view",
    // GolfCourseLotOrFrontage = "golf_course_lot_or_frontage",
    // HillOrMountainView = "hill_or_mountain_view",
    // OceanView = "ocean_view",
    // CityView = "city_view",
    // LakeView = "lake_view",
    // RiverView = "river_view",
    EAmenities["CommunitySecurityFeatures"] = "community_security_features";
    EAmenities["CommunitySwimmingPool"] = "community_swimming_pool";
    // CommunityBoatFacilities = "community_boat_facilities",
    EAmenities["RecreationFacilities"] = "recreation_facilities";
    // CommunityClubhouse = "community_clubhouse",
    // CommunityHorseFacilities = "community_horse_facilities",
    // CommunityTennisCourt = "community_tennis_court",
    EAmenities["CommunityPark"] = "community_park";
    // CommunityGolf = "community_golf",
    // SeniorCommunity = "senior_community",
    // CommunitySpaOrHotTub = "community_spa_or_hot_tub",
    // RVOrBoatParking = "rv_or_boat_parking",
    // HorseFacilities = "horse_facilities",
    EAmenities["TennisCourt"] = "tennis_court";
    // SpaOrHotTub = "spa_or_hot_tub",
})(EAmenities = exports.EAmenities || (exports.EAmenities = {}));
exports.RentAmenities = Object.freeze([
    {
        iconPath: 'assets/icons/amenities/pool.svg',
        label: 'Pool',
        value: EAmenities.SwimmingPool
    },
    {
        iconPath: 'assets/icons/amenities/washing-machine.svg',
        label: 'Washer Dryer',
        value: EAmenities.WasherDryer
    },
    {
        iconPath: 'assets/icons/amenities/garage.svg',
        label: 'Garage',
        value: EAmenities.GarageOneOrMore
    },
    {
        iconPath: 'assets/icons/amenities/dishwasher.svg',
        label: 'Dishwasher',
        value: EAmenities.Dishwasher
    },
    {
        iconPath: 'assets/icons/amenities/furnished.svg',
        label: 'Furnished',
        value: EAmenities.Furnished
    },
    {
        iconPath: 'assets/icons/amenities/pets.svg',
        label: 'Pets',
        value: EAmenities.PetsAllowed
    },
    {
        iconPath: 'assets/icons/amenities/gate.svg',
        label: 'Gated Community',
        value: EAmenities.CommunitySecurityFeatures
    },
    {
        iconPath: 'assets/icons/amenities/recreation.svg',
        label: 'Recreation',
        value: EAmenities.RecreationFacilities
    },
    {
        iconPath: 'assets/icons/amenities/park.svg',
        label: 'Park',
        value: EAmenities.CommunityPark
    },
    {
        iconPath: 'assets/icons/amenities/tennis.svg',
        label: 'Tennis Court',
        value: EAmenities.TennisCourt
    }
]);
//# sourceMappingURL=amenities.js.map