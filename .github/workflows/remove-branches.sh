#!/bin/bash

branches=($(git branch -r | grep -i "ci" | sed 's/.*ci\///'))
for x in "${branches[@]}"
do
  json=$(curl -u bot-patina:$BOT_PWD https://gerrithub.io/a/changes/$x)
  status=($(echo $json | grep -o '"status":"[^"]*' | grep -o '[^"]*$'))

  if [[ $status == "MERGED" || $status == "ABANDONED" ]]; then
    git push origin --delete ci/$x
  fi
done
