# Welcome

This is simple starter repo to help you add Credo to your projects.

[Fork](https://github.com/credo-github/credo/fork) this repository and go to `credo.dev/github/<your_github_username>/workflow/welcome` to get started.

To install the cli:
```sh
npm i -g credo-cli
```

### What is Credo?

Credo is a way of sharing knowledge about code which allows you to:
- Write templates for your code using EJS
- Gather requirements and pass them into your templates in what we call a `workflow`
- Run these worflows on the credo web app and/or CLI

The [Credo Web App](https://www.credo.dev) looks for a public repository on your github account with the name `credo` and uses the data stored there to allow you to play around with your `workflow`s.

### CLI

You can call the workflows from the Credo cli like this:
```sh
credo @you_user_name/workflow_name
```
This will initiate a dialogue to gather the workflow requirements.

When all requirements are gathered, the CLI will display a summary of what will be written, and ask you to confirm.

#### Examples

```sh
credo @samhinton88/reactComponent
```