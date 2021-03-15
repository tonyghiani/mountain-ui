# Contributing guideline

🚀 First off, thanks for taking the time to contribute! 🚀

#### Table Of Contents

[How Can I Contribute?](#how-can-i-contribute)

- [Reporting Bugs](#reporting-bugs)
- [Pull Requests](#pull-requests)

[Styleguides](#styleguides)

- [Git Commit Messages](#git-commit-messages)
- [JavaScript Styleguide](#javascript-styleguide)

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please be sure to check if a related issue already exist, the create one trying to be the most possible descriptive.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#atom-and-packages) your bug is related to, create an issue on that repository and provide information on how to reproduce the bug.

Explain the problem and include additional details to help maintainers reproduce the problem. 🤓

### Your First Code Contribution

In order to create your first contribution to this project, fork the repository on your GitHub account, clone it and create a new branch to fix a bug or implement a new feature.

When creating a new branch, we follow the [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) convention to keep the repository history well organized.

We have not particular coding style, we just want to keep the code well organized and clean following good coding convention. If provided in form of script, run the formatting with prettier and follow the styling rules imposed by the linter.

Once you are done and you think your code works well, submit a Pull Request.

### Pull Requests

Please follow these steps to have your contribution considered by the maintainers:

1. Create a descriptive pull request and, if exist, reference the related issue.
2. Follow the convention of the existing code you are working on.

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

We prepared a script that will help you to create you commits following some [commit conventions](https://www.conventionalcommits.org/en/v1.0.0-beta.2/):

```bash
$ yarn co
```

It'll then ask you some questions about the commit type, the scope, and will help you to keep the commit clean.

Furthermore, here you can get an idea of how a commit message should look like:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

Right now, at this point of the development, there are not big restrictions on the code style, just remember to follow the styling rules imposed by the linter and use your coding skills! 🤓🚀
