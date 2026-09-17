<!-- 
  1.function
    i. normal function
    ii. arrow function 
  2. anonamus function
  3. nested function
  4.callback function 
 -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>function</title>
  </head>
  <body>
    <script>
      ///////////////1.function///////////////////////////
      ////////////(i)normal function///////////////////////

      function print_hello() {
        console.log("hello");
      }

      print_hello();
      ///////////////////(ii)arrow function///////////////
      //-> es6 update , make easy
      const sum = (a, b) => {
        return a + b;
      };
      ///////////////////2.anonamus function//////////////
      //-> function with no name
      const a = function () {
        console.log("world");
      };
      //OR/
      const k = () => {};
      a();

      ////////////////////3.nested function ///////////////
      //-> function under the function
      function print_hello_world() {
        console.log("hello");
        function world() {
          console.log("world");
        }
        world();
      }
      print_hello_world();

      ////////////////4.callback function////////////////
      //-> pass function as a argument to another function

      function print_sum(a, b, fun) {
        const sum = a + b;
        fun(sum);
      }

      print_sum(1, 3, function (p) {
        console.log("answer = " + p);
      }); /// function and pass another fucntion as a argument
    </script>
  </body>
</html>
