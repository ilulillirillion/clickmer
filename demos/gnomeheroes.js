angular.module('gnomoreHeroesApp', ['ngCookies'])
    .controller('GameController', ['$scope', '$interval', '$cookieStore', function ($scope, $interval, $cookieStore) {

        const UNAVAILABLE = 0;
        const AVAILABLE = 1;
        const COMPLETE = 2;

        $scope.gamedata =
        {
            gnomes: 2, space: 0, mushrooms: 0, stone: 0, underpants: 0, research: 0,
            miners: 0, farmers: 0, thieves: 0, researchers: 0, builders: 0,
            mining_points: 0, farming_points: 0, thieving_points: 0,
            totalGnomes: 2, totalSpace: 1, dug: 0.0, depth: 1, hardness: 1,
            minerBonus: 1, farmerBonus: 1, thiefBonus: 10, stoneBonus: 25, builderBonus: 1, researchBonus: 1,
            cost: 10.0,
            buildings: { huts: 0, houses: 0, houseVisible: false, houseResearched: false, villages: 0, villageVisible: false, villageResearched: false, towns: 0, townVisible: false, townResearched: false, cities: 0, cityVisible: false, castles: 0, castleVisible: false },
            researchStates: [{ id: 1, value: AVAILABLE }, { id: 2, value: AVAILABLE }, { id: 4, value: AVAILABLE }, { id: 5, value: AVAILABLE }]
        };
    }]);


$scope.buildings =
        {
            hut: { space: 1, mushrooms: 1, buildcost: 10, description: "A hollowed out mushroom." },
            house: { space: 0, mushrooms: 3, buildcost: 30, description: "A lovely two story mushroom house." },
            village: { space: 0, mushrooms: 30, stone: 10, buildcost: 300, description: "The first step in rebuilding the gnomish civilization." },
            town: { space: 0, mushrooms: 200, stone: 50, buildcost: 600, description: "A growing community." },
            city: { space: 0, mushrooms: 1000, stone: 100, buildcost: 900, description: "Only the best gnomes can afford to live here." },
            castle: { space: 2, mushrooms: 5000, stone: 500, buildcost: 6000, description: "Triumph of gnomish engineering." }
        };
