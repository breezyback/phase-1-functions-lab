const distanceFromHqInBlocks = destination => {
    return Math.abs(42 - destination);
};

const distanceFromHqInFeet = destination => {
    return distanceFromHqInBlocks(destination) * 264;
};

const distanceTravelledInFeet = (start, destination) => {
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
};

const calculatesFarePrice = (start, destination) => {
    const travelledDistance = distanceTravelledInFeet(start, destination);
    
    if (travelledDistance <= 400)
        return 0;
    if (travelledDistance > 400 && travelledDistance <= 2000)
        return (travelledDistance - 400) * 0.02;
    if (travelledDistance > 2000 && travelledDistance <= 2500)
        return 25;

    return 'cannot travel that far';
};