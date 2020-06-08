module.exports = function() {

    this.kgToLb = function(kg) {
        return (kg * 2.2046).toFixed(2);
    }

    this.lbToKg = function(lb) {
        return (lb / 2.2046).toFixed(2);
    }

    this.kgToStone = function(kg) {
        return (kg * 0.15747).toFixed(2);
    }

    this.stoneToKg = function(st) {
        return (st / 0.15747).toFixed(2);
    }

    this.ounceToGram = function(oz) {
        return (oz / 0.035274).toFixed(2);
    }

    this.gramToOunce = function(g) {
        return (g * 0.035274).toFixed(2);
    }

    this.ounceToLb = function(oz) {
        return (oz * 0.062500).toFixed(2);
    }

    this.lbToOunce = function(lb) {
        return (lb * 16.000).toFixed(2);
    }

}