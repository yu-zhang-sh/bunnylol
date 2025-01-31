# Rithik BunnyLOL

While I was at Facebook, I heavily used the internally developed tool `bunnylol`. I found several other versions of `bunnylol` that required me to host a server. This version of `bunnylol` *does not* need to be hosted on a server.

Currently, this is hosted on [https://rithik.me/bunnylol](https://rithik.me/bunnylol). However, you can host it on any website that you would like (even on GitHub Pages). Since this is going to be your primary search engine for every new tab you open, I would suggest that you don't host it somewhere that may take a while to spin up the static page (like Heroku where your VM could go to sleep).

A note: a lot of these commands are customized for me. It is probably most beneficial for you to fork this repo and add/remove commands so that it is optimized for commands you actually need.

## Example Commands

| Command | Name | URL |
| --- | --- | --- |
| wiki | Confluence | [https://thestubhub.atlassian.net/wiki/home](https://thestubhub.atlassian.net/wiki/home) |
| cal | Outlook Calendar | [https://outlook.office.com/calendar/view/workweek/](https://outlook.office.com/calendar/view/workweek/) |
| git | GitHub | [https://github.com/stubhub](https://github.com/stubhub) |
| onedrive | One Drive / SharePoint | [https://viagogocorp-my.sharepoint.com/](https://viagogocorp-my.sharepoint.com/) |
| jira | Jira | [https://thestubhub.atlassian.net/jira/your-work](https://thestubhub.atlassian.net/jira/your-work) |
| gpt | ChatGPT | [https://chatgpt.com/](https://chatgpt.com/) |
| atls | Atlassian Homepage | [https://home.atlassian.com/](https://home.atlassian.com/) |
| t | Trello | [https://trello.com/](https://trello.com/) |
| cxeb | Trello - CX - Event - Backlog | [https://trello.com/b/axGYdiNz/cx-event-backlog](https://trello.com/b/axGYdiNz/cx-event-backlog) |
| cxep | CX - Event - Past Results | [https://trello.com/b/9abgFKKN/cx-event-past-results](https://trello.com/b/9abgFKKN/cx-event-past-results) |
| cxer | CX - Event - Retro | [https://trello.com/b/jFLAJwL3/cx-event-retro](https://trello.com/b/jFLAJwL3/cx-event-retro) |


## Setup

1. Open Chrome and click the three dots. Click `Settings` and scroll down to `Search Engines`.

2. Click `Manage Search Engines`.

3. Add a new search engine with the URL being `https://yu-zhang-sh.github.io/bunnylol/?search=%s`. 

4. Make this the default search engine.

## Adding a command

1. Run `npm install` so that `flow` (JavaScript type checker) can run.

2. Open up the `src/commands.js` file. Add your command to the `COMMANDS` object. You must include a `name` and `url` attribute and you can add an additional `searchurl` attribute if you would to be able to type a command like `yt NBA Highlights` (in which case, `bunnylol` will automatically search for NBA Highlights on YouTube).

3. Run `npm run prepublish`.

4. Publish to your website.

## Running locally

Since we use `import` module syntax, we need to run a server to bypass CORS issues. You can setup the server by running `npm install`, followed by `node server.js`. The server should be up and visible at `localhost:3000`.
