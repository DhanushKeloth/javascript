# ⚡ JavaScript Fundamentals Cheat Sheet

## 📦 1. Variables, Scope & Hoisting

* **`let` & `const`**
  * **Definition:** Modern ways to store data in memory.
  * **Use Case:** Use `const` by default for values that won't change; use `let` for values that will (like counters).
  * **Key Point:** They are **Block Scoped** (trapped inside `{}`) and safe from accidental overwrites.
* **Hoisting**
  * **Definition:** JS setting up memory for variables *before* the code runs.
  * **Use Case:** Explains why you can call `function declarations` before you write them.
  * **Key Point:** `let` and `const` are hoisted into a "Temporal Dead Zone"—you can't use them before the exact line they are declared.

---

## 🧱 2. Data Types (Primitives vs. References)

* **Primitives (String, Number, Boolean, Null, Undefined, Symbol)**
  * **Definition:** Simple, independent pieces of data.
  * **Use Case:** Storing basic values like names, ages, or true/false flags.
  * **Key Point:** Stored by **Value**. Copying a primitive makes a completely independent clone. (`null` acts like a primitive, even though `typeof null` says "object" due to a legacy bug).
* **References (Objects, Arrays, Functions)**
  * **Definition:** Complex data structures holding multiple values.
  * **Use Case:** Grouping related data (like a user profile or a list of high scores).
  * **Key Point:** Stored by **Reference**. Copying them only copies the *address* (the map) to the data, not the data itself. Modifying the copy modifies the original!

---

## ⚖️ 3. Operators & Type Coercion

* **Logical Operators (`&&`, `||`, `!`)**
  * **Definition:** Tools to combine multiple true/false conditions.
  * **Use Case:** Controlling access (e.g., `isLoggedIn && isAdmin`).
  * **Key Point:** `&&` means BOTH must be true; `||` means AT LEAST ONE must be true.
* **Strict Equality (`===`) vs. Loose Equality (`==`)**
  * **Definition:** How JS compares two values.
  * **Use Case:** Always use `===` to compare data safely.
  * **Key Point:** `==` allows **Type Coercion** (JS secretly changes data types to force a match, e.g., `5 == "5"` is true). `===` checks value AND type (e.g., `5 === "5"` is false).

---

## 🔀 4. Control Flow & Loops

* **`if / else if / else` & `switch`**
  * **Definition:** Directing which code runs based on conditions.
  * **Use Case:** `if/else` for ranges and complex logic; `switch` for checking a single variable against specific, exact values.
* **Loops (`for`, `while`, `for...of`, `for...in`)**
  * **Definition:** Running the same block of code repeatedly.
  * **Use Cases:**
    * `for`: When you know exactly how many times to loop.
    * `while`: When looping until a condition becomes false.
    * `for...of`: The best way to loop through **Arrays**.
    * `for...in`: The best way to loop through **Object keys**.

---

## ⚙️ 5. Functions

* **Declarations vs. Arrow Functions**
  * **Definition:** Reusable blocks of code that perform a specific task.
  * **Use Case:** Wrapping up logic so you don't repeat yourself.
  * **Key Point:** Declarations (`function doMath() {}`) are fully hoisted. Arrow Functions (`const doMath = () => {}`) are modern, shorter, and act like variables.
* **Default Parameters**
  * **Definition:** Fallback values inside the function parentheses.
  * **Key Point:** Prevents `undefined` errors (e.g., `const calc = (price, tax = 0.05) => {}`).

---

## 📚 6. Arrays & Array Methods

* **Arrays (`[]`)**
  * **Definition:** Ordered, 0-indexed lists of data.
  * **Use Case:** Top 10 lists, queues, shopping cart items.
  * **Key Point:** `push/pop` modifies the end; `unshift/shift` modifies the beginning.
* **Iteration Methods (`.map`, `.filter`, `.reduce`)**
  * **Definition:** Modern tools to loop through and transform array data without mutating the original.
  * **Use Cases:** * `.map()`: Modifies every item and returns a **new array of the same length**.
    * `.filter()`: Tests every item and returns a **new array of only the winners**.
    * `.reduce()`: Squashes an array down into a **single value** (like a total sum).

---

## 🗂️ 7. Objects & Maps

* **Objects (`{}`)**
  * **Definition:** Data grouped into Key-Value pairs.
  * **Use Case:** Representing a single entity (like `user` or `car`).
  * **Key Point:** Use dot notation (`user.name`) to read values. Keys are always Strings or unique Symbols.
* **Maps (`new Map()`)**
  * **Definition:** A specialized dictionary for constantly changing data.
  * **Key Point:** Unlike Objects, Map keys can be *any* data type (even numbers or other objects), and they have a built-in `.size` property.

---

## 📅 8. Dates

* **The `Date` Object**
  * **Definition:** JS's built-in way to track time.
  * **Use Case:** Timestamps, calendars, age calculations.
  * **Key Point:** **Months are 0-indexed** (January is 0, December is 11), but days start at 1.

---

## 🪄 9. Modern ES6 Magic (Spread, Rest, Destructuring)

* **Spread (`...`)**
  * **Definition:** Unpacks an array or object into individual pieces.
  * **Use Case:** Copying or merging arrays/objects (`const newArr = [...oldArr, "new item"]`).
* **Rest (`...`)**
  * **Definition:** Packs loose, unknown data into an array.
  * **Use Case:** Gathering leftover function arguments (`const myFunc = (...args) => {}`).
* **Destructuring**
  * **Definition:** Extracting data instantly into variables in one line.
  * **Use Case:** `const { name, age } = userProfile;` or `const [first, second] = topPlayers;`.