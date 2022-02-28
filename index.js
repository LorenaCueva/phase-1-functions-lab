// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    const hqStreet = 42;
    return Math.abs(hqStreet - blocks);
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, finish){
    return (Math.abs(start - finish) * 264);
}

function calculatesFarePrice(start, finish){
    const journey = distanceTravelledInFeet(start, finish);

    if (journey <= 400){
        return 0;
    }
    else if (journey <= 2000) {
        return (journey - 400) * 0.02;
        
    }
    else if (journey <= 2500 ){
        return 25;
    }
    else {
        return "cannot travel that far";
    }

}