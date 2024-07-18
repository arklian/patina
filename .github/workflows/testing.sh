#!/bin/bash


echo $(( $(( $(date --date "2023-02-28" +%s) - $(date -d "2022-12-31" +%s))) / 86400 ))

# Output: 58

