git clone https://$NOTES_SHELL_GITHUB_TOKEN@github.com/sahithyandev/notes-shell.git .shell
cp -r .shell/* .
bun install
bunx astro build
