# RWC Project Development Guidelines

## Version Management

**IMPORTANT**: Always update version numbers when making changes to any component.

### Semantic Versioning (SemVer)
Use semantic versioning (MAJOR.MINOR.PATCH) for all components:

- **MAJOR**: Breaking changes or major feature overhauls
- **MINOR**: New features, significant improvements 
- **PATCH**: Bug fixes, small improvements

- Always include version tracking in package.json, manifest.json, or similar

### Version Update Examples

- Adding hybrid extraction to browser extension: 1.0.2 → 1.1.0 (minor)
- Fixing a bug in content script: 1.1.0 → 1.1.1 (patch)
- Complete rewrite of extraction logic: 1.1.1 → 2.0.0 (major)

### Workflow
1. Make code changes
2. Update appropriate version number
3. Commit with version number in commit message
4. Document changes if significant

## Development Guidelines

### Code Changes
**IMPORTANT**: Do not change code unless explicitly instructed to do so.

- If the user asks "where is X?" or "I don't see Y" - they are asking for information, not requesting changes
- Only modify code when given clear instructions like "please fix", "change this to", "add this feature"
- When in doubt, ask for clarification before making changes
- Questions about code location, structure, or current implementation should be answered without modifications
- Always use fixed versions in package.json (no ^ or * or .x), never use a "X.0.0" version, if there is a newer one available, e.g. X.0.1.

### Code Quality Standards
**IMPORTANT**: Follow these coding standards in all implementations:

- **No Inline Strings**: Never inline important strings (paths, URLs, configuration values)
- **Extract Constants**: All important strings must be extracted to constants at the top of the file
- **Validate Configuration**: Always validate that required paths/resources exist before using them
- **Environment Variables**: Use environment variables for configuration with safe defaults


This is a static website project with very simple parameters.
