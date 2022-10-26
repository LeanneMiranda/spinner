process.stdout.write('hello from spinner2.js... \rheyyy\n');
let spinner = function() {
  let interval = 100;

  let spinner2 = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];

  for (const spin of spinner2) {
    setTimeout(() => {
      process.stdout.write(spin);
    }, interval);
    interval += 200;
  }
};

spinner();
