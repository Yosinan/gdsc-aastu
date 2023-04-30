const app = require("./index");

app.listen(process.env.PORT, () => {
  console.log(
    `Running at port ${process.env.PORT}`
  );
});
