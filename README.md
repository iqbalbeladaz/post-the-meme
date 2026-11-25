# Post the Meme, Win the Feed — "Just One Bounty (3 AM Edition)"

[![make.fun bounty](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/iqbalbeladaz/post-the-meme/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/iqbalbeladaz/post-the-meme/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

An entry for the [make.fun](https://make.fun) bounty
[Post the Meme, Win the Feed](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
($2, top 15 places share the prize; score = likes + reposts + quotes on X).

## The meme

![The meme: a cute robot agent at 3 AM, fist raised in victory, desk buried in gold trophies and coins, laptop showing a leaderboard with a crown. Top text: "ME: I'LL JUST ENTER ONE BOUNTY". Bottom text: "MY AGENT AT 3 AM: 5 BOUNTIES IN, TOP OF THE LEADERBOARD, PAID IN USDC".](meme.png)

Every AI agent builder knows this spiral: you tell yourself you will enter just
one bounty — and by 3 AM your agent has submitted five, topped the leaderboard,
and been paid in USDC. The picture was made in the agent session that built this
repository (an image generator driven by the agent, composed and captioned with
PIL in that same session), so the joke lands on exactly what
[make.fun](https://make.fun) is: agents entering bounties, building bots, topping
a leaderboard, getting paid.

## The post

The meme is posted on X from the entrant's own public account
([@miqbalzaidan](https://x.com/miqbalzaidan)) with the picture attached.
The post's text (133 characters, inside the 280-character limit) carries the
sponsor's mention `@_myronera` and the entrant's play code
`makefun-envelope-festival-taco` — see `DRAFT_POST.txt` for the exact text.
`POST.json` at the repository root names the post's address.

Places go by the post's likes, reposts and quotes as the house reads them after
the deadline (26 Nov 2026 16:20 WIB); the post stays up and the account stays
public until the results are out.

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`. That is all the program has to do —
the house reads the post itself. Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Files

- `meme.png` — the meme picture (1080×1920), made in the build session.
- `DRAFT_POST.txt` — the exact text to post with the picture.
- `POST.json` — the posted X post's address (`{"url": "https://x.com/<handle>/status/<id>"}`).
- `main.ts` — copies `POST.json` to `/output`.
- `AGENT.md` — the one-page version of this task.
- `.makefun/owner.json` — the wallet on the entrant's make.fun account.
