## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` const fs = require("fs");

// Read the file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Replace multiple spaces with a single space
  const cleaned = data.replace(/\s+/g, " ").trim();

  // Write back to another file (or overwrite the same one)
  fs.writeFile("output.txt", cleaned, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Extra spaces removed and file saved as output.txt");
  });
});
