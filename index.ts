//1-topshiriq
function sumArray(arr: unknown): number {
    
    if (!Array.isArray(arr)) {
        throw new Error("Input array bo‘lishi kerak");
    }


    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            throw new Error("Array faqat sonlardan iborat bo‘lishi kerak");
        }
    }

    // 3. Hisoblash
    return arr.reduce((sum: number, num: number) => sum + num, 0);
}

// Testlar
console.log(sumArray([1, 2, 3, 4]));   
console.log(sumArray([-1, 5, 6]));     

//2-yopshiriq
function stringLengths(arr: unknown): number[] {
    if (!Array.isArray(arr)) {
        throw new Error("Input array bo‘lishi kerak");
    }

    const result: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "string") {
            throw new Error("Array ichidagi barcha elementlar string bo‘lishi kerak");
        }

        result.push(arr[i].length);
    }

    return result;
}

//3-topshiqi

function tupleToObject(data: unknown): { name: string; age: number; job: string } {
    if (!Array.isArray(data) || data.length !== 3) {
        throw new Error("3 ta elementdan iborat array bo‘lishi kerak");
    }

    const [name, age, job] = data;

    if (typeof name !== "string" || typeof age !== "number" || typeof job !== "string") {
        throw new Error("Format noto‘g‘ri: [string, number, string] bo‘lishi kerak");
    }

    return { name, age, job };
}

//4-topshiriq

function getCarModels(arr: unknown): string[] {
    if (!Array.isArray(arr)) {
        throw new Error("Input array bo‘lishi kerak");
    }

    const result: string[] = [];

    for (let i = 0; i < arr.length; i++) {
        const car = arr[i];

        if (typeof car !== "object" || car === null || !("model" in car)) {
            throw new Error("Har bir elementda model bo‘lishi kerak");
        }

        const model = (car as { model: unknown }).model;

        if (typeof model !== "string") {
            throw new Error("model string bo‘lishi kerak");
        }

        result.push(model);
    }

    return result;
}
//5-topshiriq
function addBook(books: unknown, newBook: unknown): string[] {
    if (!Array.isArray(books)) {
        throw new Error("books array bo‘lishi kerak");
    }

    if (typeof newBook !== "object" || newBook === null || !("title" in newBook)) {
        throw new Error("newBook da title bo‘lishi kerak");
    }

    const result: string[] = [];
    for (let i = 0; i < books.length; i++) {
        const book = books[i] as { title: unknown };

        if (typeof book.title !== "string") {
            throw new Error("title string bo‘lishi kerak");
        }

        result.push(book.title);
    }
    const newTitle = (newBook as { title: unknown }).title;

    if (typeof newTitle !== "string") {
        throw new Error("newBook.title string bo‘lishi kerak");
    }

    result.push(newTitle);

    return result;
}

//6-topshiriq

function checkValue(value: unknown): number {
    if (typeof value === "string") {
        return value.length;
    }

    if (typeof value === "number") {
        return value * 2;
    }

    throw new Error("Qiymat string yoki number bo‘lishi kerak");
}
console.log(checkValue("hi")); 
console.log(checkValue(5));    

//7-topshiriq

console.log(checkId("abc"));

//8-topshirq
function isEven(num: unknown): boolean {
    if (typeof num !== "number") {
        throw new Error("Faqat number kiriting");
    }

    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false

//9-topshiriq

function safeValue(value: unknown): string {
    if (value === null || value === undefined) {
        return "default";
    }

    return String(value);
}
console.log(safeValue(null));       
console.log(safeValue("hello"));    
console.log(safeValue(123));       

//10-topshiriq

function upperCaseKeys(obj: unknown): Record<string, unknown> {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        throw new Error("Object kiriting");
    }

    const result: Record<string, unknown> = {};

    for (const key in obj as Record<string, unknown>) {
        result[key.toUpperCase()] = (obj as Record<string, unknown>)[key];
    }

    return result;
}
console.log(upperCaseKeys({ city: "Toshkent" }));

//11-topshieiq

function fizzBuzz(n: unknown): string[] {
    if (typeof n !== "number" || n <= 0) {
        throw new Error("Musbat number kiriting");
    }

    const result: string[] = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
}
console.log(fizzBuzz(3)); 

//12-topshiriq

function getPermutations(value: unknown): string[] {
    if (typeof value !== "string") {
        throw new Error("Qiymat string bo‘lishi kerak");
    }

    if (value.length === 0) {
        return [""];
    }

    const result: string[] = [];

    function permute(current: string, remaining: string): void {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const nextChar = remaining[i];
            const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            permute(current + nextChar, nextRemaining);
        }
    }

    permute("", value);

    return result;
}
console.log(getPermutations("ab")); 


//13-topshiriq

function jsonDiff(obj1: unknown, obj2: unknown): Record<string, { old: unknown; new: unknown }> {
    if (
        typeof obj1 !== "object" || obj1 === null || Array.isArray(obj1) ||
        typeof obj2 !== "object" || obj2 === null || Array.isArray(obj2)
    ) {
        throw new Error("Ikkala qiymat ham object bo‘lishi kerak");
    }

    const first = obj1 as Record<string, unknown>;
    const second = obj2 as Record<string, unknown>;
    const result: Record<string, { old: unknown; new: unknown }> = {};

    const keys = new Set([...Object.keys(first), ...Object.keys(second)]);

    for (const key of keys) {
        if (first[key] !== second[key]) {
            result[key] = {
                old: first[key],
                new: second[key]
            };
        }
    }

    return result;
}
console.log(jsonDiff({ a: 1 }, { a: 2 }));

//14-topshiriq

function sortIPs(ips: string[]): string[] {
    return ips.sort((a, b) => {
        const aParts = a.split(".").map(Number);
        const bParts = b.split(".").map(Number);

        for (let i = 0; i < 4; i++) {
            if (aParts[i] !== bParts[i]) {
                return aParts[i] - bParts[i];
            }
        }

        return 0;
    });
}
console.log(sortIPs(["1.1.1.2","1.1.1.1"]));

//15-topshiriq

function compressString(str: string): string {
    if (str.length === 0) return "";

    let result = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }

    return result;
}
console.log(compressString("aaabb"));

//16-topshiriq
function isValidSudoku(board: number[][]): boolean {
    if (board.length !== 9) return false;

    for (let i = 0; i < 9; i++) {
        if (board[i].length !== 9) return false;
    }
    for (let i = 0; i < 9; i++) {
        const row = new Set<number>();

        for (let j = 0; j < 9; j++) {
            const value = board[i][j];

            if (value < 0 || value > 9) return false;

            if (value !== 0) {
                if (row.has(value)) return false;
                row.add(value);
            }
        }
    }
    for (let j = 0; j < 9; j++) {
        const col = new Set<number>();

        for (let i = 0; i < 9; i++) {
            const value = board[i][j];

            if (value !== 0) {
                if (col.has(value)) return false;
                col.add(value);
            }
        }
    }
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const box = new Set<number>();

            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    const value = board[i][j];

                    if (value !== 0) {
                        if (box.has(value)) return false;
                        box.add(value);
                    }
                }
            }
        }
    }

    return true;
}
console.log(isValidSudoku([
    [1,2,3,4,5,6,7,8,9],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]));

//17-topshiriq

function groupAnagrams(words: string[]): string[][] {
    const groups: { [key: string]: string[] } = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const sorted = word.split("").sort().join("");

        if (!groups[sorted]) {
            groups[sorted] = [];
        }

        groups[sorted].push(word);
    }

    return Object.values(groups);
}
console.log(groupAnagrams(["ab", "ba"]));

