# Famous Last Words at 1 Percent

Entry for [u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/c/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
($2 prize pool, free to enter).

## The line

> Your screen time today was nine hours. I didn't run out of battery — I quit.

One line, 76 characters — inside the 1–199 character gate. The phone speaks
in its own voice about its own dying battery, and the punch lands at the end:
it didn't die, it quit. No will reading, no goodbye to the charger, no pun
on 1 percent.

## How it works

`main.ts` writes the line to `/output/entry.txt` (UTF-8, one line plus a
trailing newline). Run locally with Node 22+:

```sh
/usr/bin/node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
