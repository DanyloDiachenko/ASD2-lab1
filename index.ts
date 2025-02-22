/* const bubbleSort = (array: number[]): number[] => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;
};

const numbers1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort", bubbleSort([...numbers1]));

const bubbleSortOptimized = (array: number[]): number[] => {
    let isSwapped = false;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }

        if (!isSwapped) break;
    }

    return array;
};

const numbers2 = [64, 34, 25, 12, 22, 11, 90];
console.log(
    "Optimized Bubble Sort:",
    bubbleSortOptimized([...numbers2]),
);

const shellSort = (array: number[]): number[] => {
    let gaps = [701, 301, 132, 57, 23, 10, 4, 1];

    for (let gap of gaps) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            let j = i;

            for (j; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }

            array[j] = temp;
        }
    }

    return array;
};

const numbers3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Shell Sort:", shellSort([...numbers3]));
 */

const bubbleSort = (
    array: number[],
): { sortedArray: number[]; swaps: number; compares: number } => {
    let swaps = 0;
    let compares = 0;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            compares++;

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swaps++;
            }
        }
    }

    return { sortedArray: array, swaps, compares };
};

const bubbleSortOptimized = (
    array: number[],
): { sortedArray: number[]; swaps: number; compares: number } => {
    let swaps = 0;
    let compares = 0;
    let isSwapped = false;

    for (let i = 0; i < array.length - 1; i++) {
        isSwapped = false;

        for (let j = 0; j < array.length - 1 - i; j++) {
            compares++;

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swaps++;
                isSwapped = true;
            }
        }

        if (!isSwapped) break;
    }

    return { sortedArray: array, swaps, compares };
};

const shellSort = (
    array: number[],
): { sortedArray: number[]; swaps: number; compares: number } => {
    let swaps = 0;
    let compares = 0;
    let gaps = [701, 301, 132, 57, 23, 10, 4, 1];

    for (let gap of gaps) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            let j = i;

            compares++;
            for (j; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
                swaps++;
                compares++;
            }

            array[j] = temp;
        }
    }

    return { sortedArray: array, swaps, compares };
};

const generateArray = (size: number, order: string) => {
    let array = [];
    
    for (let i = 1; i <= size; i++) {
        array.push(i);
    }

    if (order === "random") {
        array = array.sort(() => Math.random() - 0.5);
    } else if (order === "reverse") {
        array.reverse();
    }

    return array;
};

const testSorting = (size: number) => {
    const testCases = ["random", "sorted", "reverse"];

    testCases.forEach((order) => {
        const array = generateArray(size, order);

        console.log(`\nArray ${size} (${order}):`);

        let { sortedArray, swaps, compares } = bubbleSort([...array]);
        console.log(`Bubble Sort Compares: ${compares}, Swaps: ${swaps}`);

        ({ sortedArray, swaps, compares } = bubbleSortOptimized([...array]));
        console.log(
            `Bubble Sort Optimized Compares: ${compares}, Swaps: ${swaps})`,
        );

        ({ sortedArray, swaps, compares } = shellSort([...array]));
        console.log(`Shell Sort Compares: ${compares}, Swaps: ${swaps}`);
    });
};

testSorting(10);
testSorting(100);
testSorting(1000);
testSorting(5000);
testSorting(10000);
testSorting(20000);
testSorting(50000);
