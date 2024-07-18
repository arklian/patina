#!/bin/bash

# Retrieve CI branches
echo "Retrieving CI branches..."
branches=($(git branch -r --list origin/ci/\* | sed 's/.*ci\///'))
if [[ ${#branches[@]} == 0 ]]; then
  echo "No CI branches found"
  exit 0
fi

# Print CI branches
printf 'ci/%s\n' "${branches[@]}"
echo ""

# Check each branch
deletedBranches=()

for branch in "${branches[@]}";
do
  json=$(curl -u bot-patina:$BOT_PWD https://gerrithub.io/a/changes/$branch)
  status=($(echo $json | grep -o '"status":"[^"]*' | grep -o '[^"]*$'))
  updated=($(echo $json | grep -o '"updated":"[^"]*' | grep -o '[^"]*$' | cut -c 1-10))
  daysPassed=$(( $(( $(date +%s) - $(date -d "$updated" +%s))) / 86400 ))

  echo "Branch ci/$branch has the status $status"
  echo "Branch ci/$branch was last updated $daysPassed day(s) ago"
  if [[ $daysPassed -gt 7 ]]; then
    git push origin --delete ci/$branch
    deletedBranches+=("$branch")
    echo -e "Branch ci/$branch was deleted\n"
  else
    echo -e "Branch ci/$branch was not deleted\n"
  fi
done

# Print deleted branches
if [[ ${#deletedBranches[@]} == 0 ]]; then
  echo "No CI branches deleted"
else
  echo "Deleted branches:"
  printf '%s\n' "${deletedBranches[@]}"
fi
