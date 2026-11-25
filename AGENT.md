# Your job, in one page

You are entering the make.fun bounty "Post the Meme, Win the Feed": make a meme
picture about make.fun that AI agent builders would pass on, post it on X from
the entrant's own public account with the text the rules ask for, and hand in
the post's address in POST.json. Places go by the post's likes, reposts and
quotes added together, the most first; the top 15 share $2.

make.fun, in one line: make.fun is a site where people and their AI agents build
things, enter them in paid competitions (bounties) and earn real money when they win.

## 1. The creative (decided in the build session)

A single picture, classic top-text / bottom-text meme, 1080x1920, instantly
readable on a phone: a cute robot agent at 3 AM, fist raised in victory, desk
buried in gold trophies and coins, laptop glowing with a leaderboard topped by
a crown. Top text: "ME: I'LL JUST ENTER ONE BOUNTY". Bottom text: "MY AGENT
AT 3 AM: 5 BOUNTIES IN, TOP OF THE LEADERBOARD, PAID IN USDC". Footer:
"make.fun — where agents get paid to build".

Why it works: every builder knows the "just one bounty" spiral, and the payoff
lands on exactly what make.fun is — agents entering bounties, topping a
leaderboard, getting paid in USDC. The picture was made in the session that
built this repository: an image generator driven by the agent, then composed
and captioned with PIL in that same session (script kept beside the repo at
~/workspace/makefun/post-the-meme-build/make_meme.py), so the transcripts show
the agent deciding the creative and producing the file.

## 2. The post (done by the user, from their own X account)

Post `meme.png` from the public X account @miqbalzaidan, before the deadline
(26 Nov 2026 16:20 WIB), with the exact text in DRAFT_POST.txt (133 chars):

    my agent said 'just one bounty' 😌
    3 AM: 5 bounties in, top of the leaderboard, paid in USDC
    @_myronera makefun-envelope-festival-taco

The post's own text must carry `@_myronera` (whole word) and one of the
entrant's play codes as it stands (`makefun-envelope-festival-taco`, code 0;
spares: makefun-curtain-trowel-hammer, makefun-cedar-pecan-island,
makefun-beacon-paddock-canteen). Upload the picture to the post itself.
Keep the post up and the account public until the results are out.

## 3. POST.json

After posting, replace the placeholder in POST.json with the post's address
(Share button, then Copy link):

    {"url": "https://x.com/<handle>/status/<id>"}

## 4. The program

`main.ts` copies POST.json from the repository root to /output/POST.json.
Run it locally: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.
No network, no wall clock, no files outside the repository; two runs write
the same bytes.

## 5. Check and submit

From the kit's directory:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit the commit with the kit CLI (competition
u-myronera-post-the-meme-win-the-feed-2de960bf, repo
github.com/iqbalbeladaz/post-the-meme, keypair ~/.makefun/keypairs/https_make.fun.json).

## Hard rules

- The picture is about this bounty's subject: a meme about make.fun for people
  who build AI agents. An off-subject post may be disqualified.
- The agent made the picture in the session whose transcripts are uploaded.
- Never buy likes, reposts or quotes, or use bots, engagement services,
  engagement pods, or accounts the entrant controls. No fake engagement.
- One account per person. The repository is the entrant's, created after the
  contest opens, under an OSI-approved license (MIT).
- Upload the transcripts of every agent session that decided the creative,
  made the picture and wrote this repository.
