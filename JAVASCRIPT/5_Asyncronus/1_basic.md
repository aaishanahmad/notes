<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function fun1(fun) {
        console.log("1");
        fun();
      }

      function fun3() {
        console.log("3");
      }

      fun1(fun2);

      fun3();
    </script>
  </body>
</html>
