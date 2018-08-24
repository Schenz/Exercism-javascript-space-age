class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds;
    }

    onEarth() {
        return roundTo2DecimalPlaces(getEarthYears(this.seconds));
    }

    onMercury() {
        return roundTo2DecimalPlaces(getEarthYears(this.seconds) / MercuryYear);
    }

    onVenus() {
        return roundTo2DecimalPlaces(getEarthYears(this.seconds) / VenusYear);
    }

    onMars() {
        return roundTo2DecimalPlaces(getEarthYears(this.seconds) / MarsYear);
    }

    onJupiter() {
        return roundTo2DecimalPlaces(getEarthYears(this.seconds) / JupiterYear);
    }

    onSaturn() {
        return roundTo2DecimalPlaces(getEarthYears(this.seconds) / SaturnYear);
    }

    onUranus() {
        return roundTo2DecimalPlaces(getEarthYears(this.seconds) / UranusYear);
    }

    onNeptune() {
        return roundTo2DecimalPlaces(getEarthYears(this.seconds) / NeptuneYear);
    }
}

const EarthYear = 31557600;
const MercuryYear = 0.2408467;
const VenusYear = 0.61519726;
const MarsYear = 1.8808158;
const JupiterYear = 11.862615;
const SaturnYear = 29.447498;
const UranusYear = 84.016846;
const NeptuneYear = 164.79132;

function roundTo2DecimalPlaces(num) {
    return +num.toFixed(2);
}

function getEarthYears(seconds) {
    return seconds / EarthYear;
}

export default SpaceAge;