export const formatNumber = (num: number): string => {
    const absNum = Math.abs(num);
    if (absNum >= 1_000_000_000_000_000) return (num / 1_000_000_000_000_000).toFixed(2) + "Qa";
    if (absNum >= 1_000_000_000_000) return (num / 1_000_000_000_000).toFixed(2) + "T";
    if (absNum >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "B";
    if (absNum >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M";
    if (absNum >= 1_000) return (num / 1_000).toFixed(2) + "K";
    return num.toString();
};

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const toCamelCase = (str: string): string => str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : "");

export const toKebabCase = (str: string): string => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

export const toSnakeCase = (str: string): string => str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

export const reverseString = (str: string): string => str.split("").reverse().join("");

export const isPalindrome = (str: string): boolean => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr === cleanStr.split("").reverse().join("");
};

export const truncate = (str: string, maxLength: number): string =>
    str.length > maxLength ? str.slice(0, maxLength) + "..." : str;

export const countOccurrences = (str: string, char: string): number =>
    str.split(char).length - 1;

export const removeWhitespace = (str: string): string => str.replace(/\s+/g, "");

export const onlyNumbers = (str: string): string => str.replace(/[^0-9]/g, "");

export const onlyLetters = (str: string): string => str.replace(/[^a-zA-Z]/g, "");

export const maskString = (str: string, visibleChars: number = 4): string =>
    str.slice(-visibleChars).padStart(str.length, "*");

export const randomString = (length: number, lineLength?: number): string => {
    let result = "";
    while (result.length < length) {
        result += Math.random().toString(36).substring(2);
    }
    result = result.substring(0, length);

    if (lineLength) {
        const lines = result.match(new RegExp(`.{1,${lineLength}}`, "g"));
        return lines ? lines.join("\n") : result;
    }

    return result;
};

export const toTitleCase = (str: string): string =>
    str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

export const swapCase = (str: string): string =>
    str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');

export const removeSpecialChars = (str: string): string => str.replace(/[^a-zA-Z0-9 ]/g, "");

export const repeatString = (str: string, times: number): string => str.repeat(times);

export const isUpperCase = (str: string): boolean => str === str.toUpperCase();

export const isLowerCase = (str: string): boolean => str === str.toLowerCase();