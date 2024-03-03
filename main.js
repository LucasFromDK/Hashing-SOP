const prompt = require("prompt-sync")({ sigint: true });
const md5 = require('js-md5');
const SHA256 = require("js-sha256")
const fs = require("fs");

const OutputFile = "HashedOutput.txt";

let algorithm = prompt("Select algorithm (md5 or SHA-256): ")

function selectAlgorithm(algorithm) {
    if (algorithm.toString() == "md5") {
        md5Hasher()
    } else {
        SHA256Hasher()
    }
}

function md5Hasher() {
    let input = prompt("Message/Data to hash using md5: ");
    let hashed = md5(input);
    console.log("Wrote: " + hashed + `, to file: ${OutputFile}`);

    fs.writeFileSync(`${OutputFile}`, hashed, "utf8", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully Hashed Data");
        }
    });
}

function SHA256Hasher() {
    let input = prompt("Message/Data to hash using SHA-256: ");
    let hashed = SHA256(input);
    console.log("Wrote: " + hashed + `, to file: ${OutputFile}`);

    fs.writeFileSync(`${OutputFile}`, hashed, "utf8", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully Hashed Data");
        }
    });
}

selectAlgorithm(algorithm);