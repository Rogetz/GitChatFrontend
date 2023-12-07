
export function reverseSorter(a,b){
    let newA = a.time.split(".");
    let newB = b.time.split(".");
    
    let dateSorter = function(arr){
        let total = 0    
        let dateA = arr[0].split("/").map(numberMap)
        if(dateA[0]){
            total += dateA[0]
        }
        if(dateA[1]){
            total += dateA[1] * 31
        }
        if(dateA[2]){
            total += dateA[2] * 365
        }
        return total
    }
    let timeSorter = function(arr){
        let total = 0
        let timeA = arr[1].split(":").map(numberMap);
        if(timeA[0]){
            total += timeA[0] * 60 * 60 
        }
        if(timeA[1]){
            total += timeA[1] * 60
        }
        if(timeA[2]){
            total += timeA[2] 
        }
        return total
    }
    // to sort it ascending change the two diffs to work with A - B 
    // here it's in descending order
    let dateDiff = dateSorter(newA) - dateSorter(newB)
    let timeDiff = timeSorter(newA) - timeSorter(newB)
    if(dateDiff == 0){
        // meaning the days are equal.
        // so return the difference in time.
        return timeDiff
    }
        // meaning that dates have a difference and don't get into the time differences.
    else{
        return dateDiff
    }
}

function numberMap(value,index, array) {
    return Number(value)
}

