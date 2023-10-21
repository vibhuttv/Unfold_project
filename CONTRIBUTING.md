# Guidelines for Contribution

Below are some fundamental conventions for contributing to this project.

### General

Before contributing, please ensure there are no existing pull requests that address the same issue. Additionally, check for related issues that may be under development in a separate branch or fork.

* For significant changes, initiate a discussion by creating an issue.
* Work on a dedicated topic branch, not the master branch.
* Combine your commits into a single coherent commit (squash commits).

### Code Quality

Before submitting your pull request, run `npm run lint` to check your code. The CI build will fail if `eslint` reports any issues.

### Commit Message Format

Each commit message should follow the format of **type**, **scope**, and **subject**:

```
<type>(<scope>): <subject>
```

Ensure that each line does not exceed 100 characters, making the message readable on GitHub and other Git tools, and creating an organized commit log, as shown below:

```
#459 refactor(utils): create URL mapping utility function
#463 chore(webpack): update to isomorphic tools v2
#494 fix(babel): correct dependencies and polyfills
#510 feat(app): add responsive navbar using react-bootstrap
```

#### Type

The **type** must be one of the following:

* **feat**: Introduces a new feature.
* **fix**: Addresses a bug.
* **docs**: Makes documentation-related changes.
* **style**: Includes changes that do not affect code meaning (e.g., white-space, formatting).
* **refactor**: Implements code changes that neither fix a bug nor add a feature.
* **test**: Adds missing tests.
* **chore**: Covers changes in the build process or auxiliary tools and libraries, like documentation generation.

#### Scope

The **scope** specifies the area of the commit change. Examples include `webpack`, `helpers`, `api`, and so on.

#### Subject

The **subject** provides a brief description of the change:

* Use the imperative, present tense (e.g., "change" rather than "changed" or "changes").
* Do not capitalize the first letter.
* Avoid using a period (.) at the end.