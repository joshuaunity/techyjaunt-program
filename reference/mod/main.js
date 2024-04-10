import { calculate } from "./math.js";
import { procText, mergeText } from "./wordProcessor.js";

try {
    console.log(calculate(4, 3, "*"));
} catch (error) {
    console.log("Error: ", error.message);
}