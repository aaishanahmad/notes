<!-- 
    js is dynamic typed language so in varibale declaration no need to specify data type 

    we have 3 way to declare a variable

    1.using var
    - global scoped , function scoped but not block scoped
    - can redeclared
    - can reassign
    - from es1 (2009)
    - hosting allowed meanse var declared automatic in top 

    2.using let 
    - global scoped , function scoped , block scoped
    - can't redeclared in scope
    - can reassign
    - from es6 (2015) , fixed var problemes
    - hosting not allowed 

    3.using const
     - global scoped , function scoped , block scoped
    - can't redeclared in scope
    - can't reassign
    - from es6 (2015)
    - hosting not allowed 
 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>variable</title>
  </head>
  <body>
    <!--_________________JAVASCRIPT__________ -->

    <script>
      var b = 2.3;
      let a = "hello";
      const pi = 3.14;
    </script>
  </body>
</html>
