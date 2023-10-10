function quicksort(array) {
    // Return array if it is guarunteed to already be sorted
    if(array.length <= 1)
    {
        return array
    }
    // Temp variable holds information of array element to swap to elements
    temp = 0
    // Determine how many subdivisions of array is needed to sort array
    limit = Math.ceil(Math.log2(array.length))
    // Until array is sorted, continue process
    for(arrayDivisions = 1; arrayDivisions <= limit; arrayDivisions++)
    {
        // Select section based on sort count
        for(j = 1; j <= arrayDivisions; j += 2)
        {
            // If this is the first division of the array, end points are the front index and the last index of array
            if(arrayDivisions == 1)
            {
                front = 0
                back = array.length - 1
            } else
            // Otherwise, select section based on array divisions. Second division should be first half then
            // second half, third division should be first quarter, second quarter, etc.
            // This is a little confusing, first division doesn't actually divide array. This is because
            // I haven't consolidated these two outer arrays yet.
            {
                if(j == arrayDivisions - 1)
                {
                    front = (Math.floor(((j+2)/(2**(arrayDivisions)))*array.length-1)+1)
                    back = array.length - 1
                } else
                {
                    front = (Math.ceil((j/(2**(arrayDivisions)))*array.length-1)+1)
                    back = Math.floor(((j+2)/(2**(arrayDivisions)))*array.length-1)-1
                }
            }
            // Sort section
            // Select index after pivot where smaller values will be stored
            lessEnd = front + 1
            // For each element, compare to pivot and move to smaller values section if smaller
            for(i=front; i <= back; i++)
            {
                if(array[i] < array[front]) 
                {
                    // Swap smaller element with element at the end of the smaller values section
                    temp = array[lessEnd]
                    array[lessEnd] = array[i]
                    array[i] = temp
                    lessEnd +=1
                }
            }
            // Now, swap the pivot with whatever is at the end of the smaller values section
            temp = array[lessEnd]
            array[lessEnd] = array[front]
            array[front] = temp
        }
    }
    // Array should be sorted, return array
    return array
}

console.log(quicksort([4,7,3,9,10,2,13,11]))