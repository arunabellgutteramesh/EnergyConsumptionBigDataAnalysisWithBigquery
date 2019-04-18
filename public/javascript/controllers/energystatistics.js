var energyStatisticsApp = angular.module('energyStatisticsApp', []);
energyStatisticsApp.controller('energyStatisticsController', ['$scope', '$http', function($scope, $http) {  

    $scope.years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014];
    $scope.yearSelected = 1990;

    $scope.getUniqueCategories = function(){
        $http({
            method: 'GET',
            url: '/getUniqueCategories'
        }).then(function(response){
            $scope.categories = response.data;
            $scope.selectedCategory = $scope.categories[0]
        },function(error){
            console.log(error);
        });
    }
    $scope.getUniqueCategories();

    $scope.getTopFourConsumptionsPerYear = function(){
        console.log("submitted");
        var parameters = {
            "category" : $scope.selectedCategory.Category,
            "year" : $scope.yearSelected
        };
        $http({
            method: 'GET',
            url: '/getTopFourConsumptionsPerYear/'+parameters.category+'/'+parameters.year
        }).then(function(response){
            $scope.topFourConsumptionResults = response.data;
            computeProgress();
            formatNumber();
            console.log($scope.topFourConsumptionResults);
        },function(error){
            console.log(error);
        });
    }

    function computeProgress(){
        var sum_total_quantity = 0;
        $scope.topFourConsumptionResults.forEach(function(item){
            sum_total_quantity = sum_total_quantity + item.Total_Quantity;
        })

        $scope.topFourConsumptionResults.forEach(function(item){
            item.progress = Math.round((item.Total_Quantity/sum_total_quantity)*100);
        })
    }

    function formatNumber(){
        $scope.topFourConsumptionResults.forEach(function(item){
            item.Total_Quantity = item.Total_Quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        })
    }


}]);
