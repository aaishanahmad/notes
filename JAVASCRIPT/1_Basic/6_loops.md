<!-- 
    1.while loop
    2.do while loop
    3.for loop
    4.for in loop
    5.for of loop
 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>loop</title>
  </head>
  <body>
    <script>
      //1. while loop
      while (false) {}

      //2.do - while loop
      do {} while (false);
      //3.for loop
      for (let i = 0; i < 10; i++) {}

      //4.for in loop
      // throug key travel access value
      let obj = { name: "ahsan", class: 12, roll: 14 };
      for (let key in obj) {
        document.write(key + "-->" + obj[key] + "<br>");
      }

      // travel on array
      let arr = ["hello", 13, 25, 78];
      document.write("array ==>");
      for (let value in arr) {
        document.write(arr[value] + ", ");
      }

      //5.for of loop

      document.write("<br>arry with for of=>");
      for (value of arr) {
        document.write(value + ", ");
      }
    </script>
  </body>
</html>
