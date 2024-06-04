# Platform: PicoCTF
# Name: caas
## Type: Web

Following the link we get to this page:

![pg1](img1.png)

Following the instructions on the page I get this:

![pg2](img2.png)

Trying special character I find that ';' does not work.

![er1](img3.png)

So I'll try bash payloads.

Payload:

```bash
$(ls)
```

![payload1](img4.png)

Now that I know I'll just read the file.

Payload:

```bash
$(cat falg.txt)
```

![Flag](img5.png)

# We got the flag!