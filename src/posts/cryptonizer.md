With this console application, you can encrypt and decrypt text files (such as .txt or .rtf) using an encryption key. I created Cryptonizer not only because I needed an encryption tool, but also because I wanted to learn more about hashing and encrypting. For the script, I used the [crypto-js](https://www.npmjs.com/package/crypto-js) package. The files are encrypted with AES, and the encryption keys are stored as a SHA-3 hash in a local JSON file.

**How to use**  
Before using the script, you need to define some paths in the code, as described in the _README_ on [GitHub](https://github.com/Noldyman/cryptonizer). Once you've done that, you're good to go.

The application does not have a graphical interface, but it runs in the console. When you run the script, it expects two arguments: an action (-a) and a path (-p). The action can be either to encrypt (enc) or decrypt (dec) the file. The path you provide should point to the text file. For example, when encrypting a file, the command will look like this:

`$ cryptonize -a enc -p <path/to/file>`

If you want to decrypt the file, simply replace `-a enc` with `-a dec`. After entering the command, the terminal will ask you to enter an encryption key, as shown in the image below.

![Cryptonizer image 1](/images/posts/cryptonizer1.png)

The application also returns error messages if, for example, the encryption key does not match or if the file you're trying to decrypt was never encrypted in the first place. Note that in this example, `cryptonize` is an alias defined in the ~/.zshrc file that runs the script.
