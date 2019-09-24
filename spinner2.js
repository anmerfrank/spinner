// process.stdout.write('hello from spinner1.js... \(rheyyy\n');

const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ','\r/   ', '\r-  ', '\r|   '];
let delay = 100;
for (let i = 0; i < spin.length; i++) {
  setTimeout(() => {
    process.stdout.write(spin[i]);
  }, delay += 200);
}

