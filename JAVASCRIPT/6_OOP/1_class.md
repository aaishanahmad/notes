<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>class</title>
  </head>
  <body>
    <script>
      //class declaration

      class student {
        //constructor
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
        //method

        print() {
          console.log("name = " + this.name);
          console.log("age = " + this.age);
        }

        print(what) {
          console.log("i am what");
          console.log("name = " + this.name);
          console.log("age = " + this.age);
        }
      }

      var s1 = new student("ahsan", 15);

      s1.print();
    </script>
  </body>
</html>
