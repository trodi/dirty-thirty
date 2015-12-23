angular.module("dirtyThirty", [])
    .controller("ReasonCtrl", function(ReasonService) {
        "use strict";

        var ctrl = this;

        /* set reasons to reason for today */
        ctrl.setDaily = function() {
            var todayReason = ReasonService.reasons[today - 1]; // 0 index based
            if (!todayReason) { // just in case we miss a date
                todayReason = ReasonService.reasons[0];
            }
            ctrl.reasons = [todayReason];
        }
        /* set reasons to a ransom reason */
        ctrl.setRandom = function() {
            var index = Math.round(Math.random() * ReasonService.max);
            var randomReason = ReasonService.reasons[index];
            if (!randomReason) { // just in case we miss a date
                randomReason = ReasonService.reasons[0];
            }
            ctrl.reasons = [randomReason];
        }
        /* set reasons to all reasons */
        ctrl.setAll = function() {
            ctrl.reasons = ReasonService.reasons;
        }
        var date = new Date();
        var today = date.getDate();
        ctrl.setDaily();
    })
    .service("ReasonService", function() {
        this.reasons = [ // should be 31 long
            "example 1",
            "example 2",
            "example 3",
            "example 4",
            "example 5"
        ];
        this.max = this.reasons.length;
    });
