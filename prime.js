/*
function outputPrime(n)
{
    for (let i = 2; i <= n; i++)
    {
        isPrime = true;
        for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++)
        {
            if (i % j == 0)
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
        {
            console.log(i);
        }
        else
        {
            continue;
        }
    }
}

outputPrime(10);
*/

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// console.log(styles);

// let middle_idx = Math.floor(styles.length / 2);
// styles[middle_idx] =  "Classic";
// console.log(styles);

// console.log(styles.shift());
// styles.unshift('Rap');
// styles.unshift('Reggae');
// console.log(styles);

let arr = [1, 2, 15];
arr.sort((a, b) => a - b);
console.log(arr);