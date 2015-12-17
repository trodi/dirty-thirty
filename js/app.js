angular.module("dirtyThirty", [])
    .controller("ReasonCtrl", function($scope) {
        "use strict";
        $scope.reasons = [];
        $scope.reasons.push("example 1");
        $scope.reasons.push("example 2");
        $scope.reasons.push("example 3");
        $scope.reasons.push("example 4");
        $scope.reasons.push("example 5");
    });
