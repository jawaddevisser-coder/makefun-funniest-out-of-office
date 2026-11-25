# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/jawaddevisser-coder/makefun-funniest-out-of-office/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/jawaddevisser-coder/makefun-funniest-out-of-office/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for the [The Funniest AI Out-of-Office Reply bounty on make.fun](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d).

`main.ts` (Node 22, standard library only, deterministic, no network) writes one
original out-of-office reply to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set).

The line:

> I'm on vacation. My inbox is now handled by an AI that answers emails faster than I ever did, and with noticeably less enthusiasm for your deadline.

## Run locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/ooo-out node main.ts
cat /tmp/ooo-out/entry.txt
```
