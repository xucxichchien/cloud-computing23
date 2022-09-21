Router.get("/", (yeucau,trave) => {
    data = fs.readFileSync("./html/products.html");
    pageContent = data.toString;
    trave.send(pageContent);
});

Router.get("/giadung", (yeucau,trave) => {
    pageContent = "Hang gia dung";
    trave.send(pageContent);
});
