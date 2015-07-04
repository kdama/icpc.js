# icpc.js
icpc.js: icpc.js is not a javascript framework.

## Demo
http://kdama.github.io/icpc.js/

### How to use
Demo has 4 textareas. From left to right, **Source**, **Stdin**, **Stdout**, **Answer**.

1. Write your JavaScript code to the **Source** textarea. Code must have a `main` function.
2. Put your input dataset to the **Stdin** textarea. This dataset is passed to `main` function as the first argument.
3. The return value of `main` is shown at the **Stdout** textarea.
4. Put your answer set, which corresponds to the input dataset, to the **Answer** textarea. If the answer equals the value of the **Stdout**, both textareas light up green.

### Tutorial
Demo has a built-in template.

1. See the **Source**. This `main` function just returns a sum of input values.
2. See the **Stdin**. The input dataset is 1, 2 and 3.
3. See the **Stdout**. 6 is shown because 1 + 2 + 3 == 6.
4. See the **Answer**. Somehow the answer is set to 10. Somehow **Stdout** must be set to 10.
5. **Stdout** is short by 4. Add a line "4" to **Stdin**.
6. 10 is shown at **Stdout** because 1 + 2 + 3 + 4 == 10.

After that, as you can see, **Stdout** and **Answer** light up green. It means *passed!*

### Caution
icpc.js uses `eval`, i.e., your browser might crash because of your code.
