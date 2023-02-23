// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    //number of blocks from pickup to HQ (42)
    const destination = 42
    let distance = Math.abs(number - destination)
    return distance;
}

function distanceFromHqInFeet(feet) {
    //call distanceFromHqInBlocks function
    //pass the distance..Feet to distance..Blocks
    //return the value and figure out the feet
    const distanceFeet = distanceFromHqInBlocks(feet) * 264
    return distanceFeet
}
function distanceTravelledInFeet (start, end) {
    const blocks = Math.abs(start - end)*264
    return blocks
}
function calculatesFarePrice (start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
        return (feet - 400) * .02
    } else if (feet >= 2000 && feet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
 }
    // if (feet <= 400) {
    //   return gives customer a free ride
    // }
    //if (length <= 2000 - 400) {
    //  return times the answer by .02
    //}
    //if (length =< 2000 - 400) {
    //  return $25 as a flat rate    
    //}
    // if (length >= 2500) {
    //  return "cannot travel that far"
    //}
//}