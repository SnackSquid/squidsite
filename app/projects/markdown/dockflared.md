---
  key: "a234s"
  title: "FoundryVTT DockFlared"
  path: "dockflared"
  date: "2024-01-11"
  preview: "Learn how to set up FoundryVTT in a docker container using Cloudflare tunnels."
  image: "/foundry_dockflared.png"
---

## Running Foundry VTT on Docker with Cloudflare Tunnels

### unexpose your foundry install

Now before you start mashing **SKIP TO RECIPE** I hope you won't begrudge my small preamble to the setup, which is fairly simple depending on your computing situation.

Being a tremendous nerd I am, I love Dungeons and Dragons (_and other assorted TTRPGs_). When my group went totally remote, I searched long and hard for a good virtual table top. I naturally went with Foundry for the amount of customization and the self hosting option. I'm the kind of person who will let a subscription go for months after not needing it, and I just couldn't stomach another monthly fee.

I also wanted to do this as cheap as possible because my friends (_and I_) are flakey. The ability to spin up/shut down the service at will is great.
