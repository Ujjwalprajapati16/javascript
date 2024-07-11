// const coding = ["js", "ruby", "java", "pythons"];

// const values = coding.forEach((item) => {
//     console.log(item); // Outputs each item in the array in a new line, without modifying the original array.  Returns undefined.
//     // console.log(coding); // Output: ["js", "ruby", "java", "pythons"] - The original array remains unchanged.  This is a side effect of using forEach method.
//     return item;
//  });

//  console.log(values);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newNum = nums.filter((num) => {
    return num > 4;
})

console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => {
return bk.genre === 'History'
});

userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.edition > 2005;
});

console.log(userBooks);