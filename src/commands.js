// @flow strict

export type CommandType = {|
    name: string, 
    url: string, 
    searchurl?: string,
|};

export type CommandNames = 
    'wiki'
    | 'confluence'
    | 'cal'
    | 'calendar'
    | 'git'
    | 'github'
    | 'onedrive'
    | 'jira'
    | 'gpt'
    | 'chatgpt'
    | 'atls'
    | 'atlassian'
    | 'trello'
    | 'cxeb'
    | 'cxep'
    | 'cxer'
    | 'g' 
    | 'DEFAULT';

export type CommandDataTableType = {|
    name: string, 
    url: string, 
    command: CommandNames
|};

export type ColumnDataTableType = {| 
    data: string, 
    title: string 
|};

export const COMMANDS: {[CommandNames] : CommandType} = {
    wiki: {
        name: "Confluence",
        url: "https://thestubhub.atlassian.net/wiki/home",
        searchurl: "https://thestubhub.atlassian.net/wiki/search?text="
    },
    cal: {
        name: "Outlook Calendar",
        url: "https://outlook.office.com/calendar/view/workweek/"
    },
    git: {
        name: "GitHub",
        url: "https://github.com/stubhub",
        // searchurl: "https://github.com/search?q=org%3Astubhub%20&type=code&text="
    },
    onedrive: {
        name: "One Drive / SharePoint",
        url: "https://viagogocorp-my.sharepoint.com/",
        searchurl: "https://viagogocorp-my.sharepoint.com/query?q="
    },
    jira: {
        name: "Jira",
        url: "https://thestubhub.atlassian.net/jira/your-work",
        searchurl: "https://thestubhub.atlassian.net/secure/QuickSearch.jspa?searchString="
    },
    gpt: {
        name: "ChatGPT",
        url: "https://chatgpt.com/"
    },
    atls: {
        name: "Atlassian Homepage",
        url: "https://home.atlassian.com/"
    },
    t: {
        name: "Trello",
        url: "https://trello.com/",
        searchurl: "https://trello.com/search?q="
    },
    cxeb: {
        name: "Trello - CX - Event - Backlog",
        url: "https://trello.com/b/axGYdiNz/cx-event-backlog"
    },
    cxep: {
        name: "CX - Event - Past Results",
        url: "https://trello.com/b/9abgFKKN/cx-event-past-results"
    },
    cxer: {
        name: "CX - Event - Retro",
        url: "https://trello.com/b/jFLAJwL3/cx-event-retro"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
