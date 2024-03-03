const prompt = require("prompt-sync")({ sigint: true });
const md5 = require('js-md5');
const SHA256 = require("js-sha256")
const SHA224 = require("js-sha256")
const fs = require("fs");

const OutputFile = "HashedOutput.txt";

let algorithm = prompt("Select algorithm (md5, SHA-256 or SHA-224): ").toString().toLowerCase()

function selectAlgorithm(algorithm) {
    if (algorithm == "md5") {
        md5Hasher()
    } if (algorithm == "sha-256" || algorithm == "sha256") {
        SHA256Hasher()
    } if (algorithm == "sha-224" || algorithm == "sha224") {
        SHA224Hasher()
    } if (algorithm !== "sha256" && algorithm !== "sha-256" && algorithm !== "sha224" && algorithm !== "sha-224" && algorithm !== "md5") {
        console.log("Please choose a valid algorithm");
        algorithm = prompt("Select algorithm (md5, SHA-256 or SHA-224): ").toLowerCase();
        selectAlgorithm(algorithm);
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
            console.log("Successfully Hashed Input");
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
            console.log("Successfully Hashed Input");
        }
    });
}

function SHA224Hasher() {
    let input = prompt("Message/Data to hash using SHA-224: ");
    let hashed = SHA224(input);
    console.log("Wrote: " + hashed + `, to file: ${OutputFile}`);

    fs.writeFileSync(`${OutputFile}`, hashed, "utf8", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully Hashed Input");
        }
    });
}

selectAlgorithm(algorithm);