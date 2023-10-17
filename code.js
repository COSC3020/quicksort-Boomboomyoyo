function quicksort(array) {
    //array.push(Infinity)
    // Temp variable holds information of array element to swap to elements
    temp = 0
    // Initialize array which will contain ends of unsorted sections, it acts like a stack because
    // the order in which we process arrays doesn't matter
    //console.log(array.length)
    sectionEnds = [0,array.length]
    while(sectionEnds.length > 0)
    {   
        //console.log(array)
        // Pop front and back of section to be sorted off array
        back = sectionEnds.pop()
        front = sectionEnds.pop()
        //console.log("Back and front: " + front + ", " + back)
        // If front and back are the same, go to next iteration of loop instead of processing
        if(front != back)
        {
            // Variable holding index of the first value past the values less than the pivot
            lessEnd = front + 1
            // Starting at the first uncompared value, compare each value to the pivot. If less,
            // move to the end of the less than pivot portion of the array
            for(i=lessEnd; i <= back; i++)
            {
                if(array[i] < array[front]) 
                {
                    temp = array[lessEnd]
                    array[lessEnd] = array[i]
                    array[i] = temp
                    // This is to guard lessEnd from going out of array bounds
                    if(lessEnd != back)
                    {
                        lessEnd +=1
                    }
                }
            }
            // Swap the pivot with the end of the section of the array less than it
            temp = array[lessEnd-1]
            array[lessEnd-1] = array[front]
            array[front] = temp
        
            // If the section of the array is larger than one, push new sections to sort onto the stack
            if(front != back)
            {
                sectionEnds.push(front)
                sectionEnds.push(lessEnd-1)
                sectionEnds.push(lessEnd)
                sectionEnds.push(back)
            }
            //console.log(sectionEnds)
        }
    }
    //array.pop()
    return array
}

//console.log(quicksort([8,7,6,5,4,3,2,3,4]))