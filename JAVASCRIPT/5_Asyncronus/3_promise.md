<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>promise</title>
  </head>
  <body>
    <script>
      // return
      const p = new Promise((res, rej) => {
        a = 1 + 1;

        if (a == 1) {
          res("work");
        } else {
          rej("rejected");
        }
      });

      //   recives

      p.then((data) => {
        console.log("succesful:" + data);
      }).catch((data) => {
        console.log("error:" + data);
      });
    </script>
  </body>
</html>
