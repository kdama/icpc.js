# icpc.js
icpc.js: icpc.js is not a javascript framework.

## Demo
http://kdama.github.io/icpc.js/

### How to use
Demo has 4 textareas. From left to right, **Source**, **Stdin**, **Stdout**, **Answer**.

1. Write your JavaScript code to **Source** textarea. Code must have a `main` function.
2. Put your input dataset to **Stdin** textarea. This dataset is passed to `main` function as the first argument.
3. The return value of `main` is showed in **Stdout** textarea.
4. Put your answer set, corresponds to the input dataset, to **Answer** textarea. If the answer equals the value of **Stdout**, both textareas light up green.

### Caution
icpc.js uses `eval`, i.e., your browser might crash because of your code.
