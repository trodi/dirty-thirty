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
            ctrl.selected = "daily";
        }
        /* set reasons to a ransom reason */
        ctrl.setRandom = function() {
            var index = Math.round(Math.random() * ReasonService.max);
            var randomReason = ReasonService.reasons[index];
            if (!randomReason) { // just in case we miss a date
                randomReason = ReasonService.reasons[0];
            }
            ctrl.reasons = [randomReason];
            ctrl.selected = "random";
        }
        /* set reasons to all reasons */
        ctrl.setAll = function() {
            ctrl.reasons = ReasonService.reasons;
            ctrl.selected = "all";
        }
        var date = new Date();
        var today = date.getDate();
        ctrl.setDaily();
    })
    .service("ReasonService", function() {
        this.reasons = [ // should be 31 long
            "Why I love my wife",
            "One sexy beast",
            "Incredibly fair in all regards",
            "I enjoy listening to audio books together as we fall asleep",
            "You're always up for a lazy netflix binge",
            "You challenge me intellectually",
            "You increase my emotional intelligence",
            "You understand technology",
            "You enjoy board games such as Dominion and 7 Wonders",
            "You love animals maybe as much as I do",
            "You take paisley out on weekend mornings so I can sleep in",
            "You love to travel and explore other cultures",
            "Movie lover, even if you won't ever watch Shawshank Redemption with me",
            "You talk to strangers so I don't have to",
            "I love exploring new breweries with you",
            "You enjoy robe-season as much as I do",
            "My cat has accepted you into the family",
            "You convinced me to get a beer fridge",
            "You love holiday lights",
            "You help me enjoy life in the present and not always fret upon the future",
            "You're a Harry Potter fan",
            "You're fine with me playing geeky computer games",
            "Family and friends are important to you",
            "You are my Spanish translator, kind of",
            "You're calm in all situations",
            "You're a responsible person",
            "You clean the kitchen while I cook",
            "We vacation well together",
            "You pursued me",
            "You like music with a slow, strong, and powerful beat",
            "You're not a foodie, I couldn't handle that",
            "You're loyal and go out of the way for those important to you"
        ];
        this.max = this.reasons.length;
    });
