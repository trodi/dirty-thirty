angular.module("dirtyThirty", [])
    .controller("ReasonCtrl", function(ReasonService) {
        "use strict";

        var ctrl = this;
        ctrl.reasons = ReasonService.reasons;
        // TODO: make daily
        ctrl.setDaily = function() {
            ctrl.reasons = [ReasonService.reasons[0]];
        }
        // TODO: make random
        ctrl.setRandom = function() {
            ctrl.reasons = [ReasonService.reasons[1]];
        }
        ctrl.setAll = function() {
            ctrl.reasons = ReasonService.reasons;
        }
    })
    .service("ReasonService", function() {
        this.reasons = [
            "example 1",
            "example 2",
            "example 3",
            "example 4",
            "example 5"
        ];
    });
