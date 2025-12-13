# Release Process

This repository uses automated semantic versioning and publishing to NPM via [semantic-release](https://github.com/semantic-release/semantic-release).

## How It Works

When code is merged to `main`, the release workflow automatically:

1. Analyzes commit messages to determine the version bump
2. Generates/updates CHANGELOG.md
3. Bumps version in package.json
4. Creates a git tag
5. Publishes to NPM
6. Creates a GitHub release

## Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/) for all commits:

### Version Bumps

- **Major (Breaking)**: `feat!: description` or `fix!: description` or include `BREAKING CHANGE:` in footer
- **Minor (Feature)**: `feat: description`
- **Patch (Fix)**: `fix: description`, `perf: description`, `docs: description`, etc.
- **No Release**: `chore: description`

### Examples

```bash
# Patch release (1.0.0 → 1.0.1)
git commit -m "fix: resolve dropdown positioning issue"

# Minor release (1.0.0 → 1.1.0)
git commit -m "feat: add new Alert component"

# Major release (1.0.0 → 2.0.0)
git commit -m "feat!: redesign Button API

BREAKING CHANGE: Button now requires 'variant' prop instead of 'primary'"

# No release
git commit -m "chore: update dev dependencies"
```

### Common Types

- `feat:` - New feature (minor)
- `fix:` - Bug fix (patch)
- `docs:` - Documentation changes (patch)
- `style:` - Code style changes (patch)
- `refactor:` - Code refactoring (patch)
- `perf:` - Performance improvements (patch)
- `test:` - Test updates (patch)
- `build:` - Build system changes (patch)
- `ci:` - CI configuration changes (patch)
- `chore:` - Maintenance tasks (no release)

## Setup Requirements

### 1. NPM Token

Add an NPM access token to GitHub repository secrets:

1. Generate token at <https://www.npmjs.com/settings/YOUR_USERNAME/tokens>
2. Choose "Automation" token type
3. Add as `NPM_TOKEN` in GitHub repository Settings → Secrets and variables → Actions

### 2. GitHub Token

The workflow uses the default `GITHUB_TOKEN` which is automatically provided.

## Manual Release (if needed)

```bash
# Install dependencies
bun runinstall

# Run release locally (requires environment variables)
GITHUB_TOKEN=xxx NPM_TOKEN=xxx npx semantic-release
```

## Workflow Checks

Before publishing, the workflow runs:

- ✓ Build (`bun runbuild`)
- ✓ Tests (`bun runtest run`)
- ✓ Format check (`bun runformat`)

If any check fails, the release is aborted.
