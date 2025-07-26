if [ "$CI" == '1' ]; then
  echo "Running in CI environment"
  git clone https://$NOTES_SHELL_GITHUB_TOKEN:x-oauth-basic@github.com/sahithyandev/notes-shell.git .shell
else
  echo "Not running in CI environment"
  git clone git@github.com:sahithyandev/notes-shell.git .shell
fi

rm .shell/README.md

cp -r .shell/* .

rm -rf .shell

bun install
bunx astro build
