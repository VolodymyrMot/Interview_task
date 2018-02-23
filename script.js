var myApp = angular.module('myApp', []);
myApp.controller('firstCtrl', function ($scope, $http, $sce) {

    $http({
        method : "GET",
        url : "https://inx.wp-funnel.com/wp-json/wp/v2/posts"
    }).then(function mySuccess(response) {
        $scope.states = response.data;
        $scope.getTrustedHtml = function (htmlStr) {
            return $sce.trustAsHtml(htmlStr);
        }
    }, function myError(response) {
        $scope.states = response.statusText;
    });

});










