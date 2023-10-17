[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12217339&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The process for my implementation of Quicksort is as follows:
1. Setup a loop that will run a number of times equal to the number of sections an array needs to be broken down into to sort it. Each section will be broken into two sections, unless it is only 1 element, so this should be a complexity of $T\left(n\right) = log_2(n)$. This loop encompasses steps 2-3.
2. For a section, iterate over it and compare each element to the first element, which is designated as the pivot point. Sort the array such that values less than the pivot are to the left, and values to the right are greater than the pivot point. This has a complexity of $T\left(n\right) = n$.
3. Push onto a stack two sections to be sorted in future loops. This has a complexity of $T\left(n\right) = 1$

The overall time complexity of this algorithm is given by $T\left(n\right) = nlog(n)$, which matches the theoretical limit of quicksort with no additional assumptions.


## References
A bunch of W3Schools stuff for syntax. The math operations were important to how I decided to do this too.
https://www.w3schools.com/js/js_operators.asp
https://www.w3schools.com/js/js_precedence.asp
https://www.w3schools.com/jsref/jsref_obj_math.asp
https://www.w3schools.com/js/js_loop_for.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity

Used these for reference on how to use an array as a queue, then checked its time complexity, and implemented a stack instead
https://medium.com/@ashfaqueahsan61/time-complexities-of-common-array-operations-in-javascript-c11a6a65a168
https://www.w3schools.com/js/js_array_methods.asp