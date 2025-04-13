echo $NOTES_SHELL_GITHUB_TOKEN

git clone https://$NOTES_SHELL_GITHUB_TOKEN:x-oauth-basic@github.com/sahithyandev/notes-shell.git .shell

rm .shell/README.md


cp -r .shell/* .

rm -rf .shell

bun install
bunx astro build
