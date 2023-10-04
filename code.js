function quicksort(array) {
    console.log("Start")
    // Until array is sorted, continue process
    if(array.length <= 1)
    {
        return array
    }
    temp = 0
    console.log(Math.ceil(Math.log2(array.length)))
    for(arrayDivisions = 1; arrayDivisions <= Math.ceil(Math.log2(array.length)); arrayDivisions++)
    {
        // Select section based on sort count
        console.log("Test")
        for(j = 1; j <= arrayDivisions; j+2)
        {
            console.log("Test2")

            front = (j/arrayDivisions)*array.length-1
            back = ((j+2)/arrayDivisions)*array.length-1
            // Sort section
            lessEnd = front
            for(i=front+1; i < back; i++)
            {
                if(array[i] < array[front]) 
                {
                array[++lessEnd] = array[i]
                }
            }
            temp = array[lessEnd]
            array[lessEnd] = array[front]
            array[front] = temp
        }
    }
    console.log("Finished")
    return array
}

console.log(quicksort([1,2]))