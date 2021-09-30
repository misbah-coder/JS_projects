function addNumbers(num1, num2) {
    return num1 + num2;
}

// console.log(addNumbers(2, 5));
// console.log(addNumbers(5, 5));
// console.log(addNumbers(15, 5));

function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}

// console.log(convertMinutesToSeconds(1));
// console.log(convertMinutesToSeconds(3));

function yourAgeInSeconds(age) {
    // years * months (12) * days (30) * hours (24) * minutes (60) * seconds (60)
    return age * 12 * 30 * 24 * 60 * 60;
}

// console.log(yourAgeInSeconds(25));

function getFirstItem(items) {
    return items[0];
}

let movies = [
    'banana', 'godfather', 
    'Shawshank', 'pickle'
]

// console.log(getFirstItem(movies))

// less than or equal to 7?
// bad movies
// good movies
// put them in 2 different buckets

function badOrGoodMovie(movie_rating) {
    // badOrGoodMovie(6) -> "bad"
    // badOrGoodMovie(7) -> "good"
    // badOrGoodMovie(9.2) -> "good"
    // badOrGoodMovie(2) -> "bad"
    let movie_result;

    if (movie_rating >= 7) {
        movie_result = 'Good movie'
    } else {
        movie_result = 'Bad movie'
    }

    return movie_result;
}

// console.log(badOrGoodMovie(6));  // bad
// console.log(badOrGoodMovie(7));  // good
// console.log(badOrGoodMovie(9.2)); // good
// console.log(badOrGoodMovie(2));  // bad

// check if a string is empty
function isEmptyString(some_string) {
    // isEmptyString("") -> True
    // isEmptyString("The Godfather") -> False
    if (some_string == "") {
        return true
    } else {
        return false
    }
}

// console.log(isEmptyString(""))
// console.log(isEmptyString("The Godfather"))

function findMin(numbers){
    // findMin([5, 2, 9, 8, 7, 3]) -> 2
    // findMin([5, 8, 9, 8, 7, 3]) -> 3
    let minimum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i]
        }
    }
    return minimum
}

// console.log(findMin([5, 2, 9, 8, 7, 3]))
// console.log(findMin([5, 8, 9, 8, 7, 3]))

function findMax(numbers){
    // findMax([5, 2, 9, 8, 7, 3, 13]) -> 13
    // findMax([5, 8, 9, 8, 7, 3]) -> 9
    let maximum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i]
            max_location = i
        }
    }
    return maximum
}

// console.log(findMax([5, 2, 9, 8, 7, 3, 13]))
// console.log(findMax([5, 8, 9, 8, 7, 3]))

function sortBestRatingsFirst(numbers){
    // sortBestRatingsFirst([5, 8, 2, 9, 3, 10])
    // Know max AND it's index
    // let's use findMax helper function

    // find max
    for (let j = 0; j < numbers.length - 1; j++) {

        let max_num = numbers[j];
        let max_location = j;

        for (let i = j; i < numbers.length; i++) {
            if (numbers[i] > max_num) {
                // Know max AND it's index (location)
                max_num = numbers[i]
                max_location = i
            }
        }
        // swap the first and the last
        numbers[max_location] = numbers[j] // --> 10
        numbers[j] = max_num
    }

    return numbers
}
// console.log(sortBestRatingsFirst([5, 8, 2, 9, 3, 10]))
// console.log(sortBestRatingsFirst([9, 8, 1, 12, 3, 10]))
// console.log(sortBestRatingsFirst([5, 9, 8, 1, 12, 3, 10]))


// Given a list of movies and their ratings..
// you need to sort the list in a descending
// order.
// function sortByBestMoviesFirst(movies){

// }
// objects
// 

function findMaxHelper(numbers, start){
    let maximum = numbers[start];
    let max_location = start

    for (let i = start; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i]
            max_location = i
        }
    }
    return {max_number: maximum, max_index: max_location}
}

// console.log(findMaxHelper([5, 2, 9, 3, 7], 3))

function sortBestWithHelper(numbers){
    // run as many times as there are items
    for (let j = 0; j < numbers.length - 1; j++) {

        // Find max number and max location starting from j
        max = findMaxHelper(numbers, j)
        max_num = max['max_number']
        max_location = max['max_index']

        // swap the first and max item in an array
        numbers[max_location] = numbers[j] //
        numbers[j] = max_num
    }

    return numbers
}


console.log(sortBestWithHelper([5, 8, 2, 9, 3, 10]))
console.log(sortBestRatingsFirst([9, 8, 1, 12, 3, 10]))
console.log(sortBestRatingsFirst([5, 9, 8, 1, 12, 3, 10]))