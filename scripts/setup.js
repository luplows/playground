// The project's setup for a coder's worktree (steward's `setup` setting).
// It leaves setup-ran.txt behind, so a run shows that setup ran.
require('fs').writeFileSync('setup-ran.txt', `setup ran at ${new Date().toISOString()}\n`)
