#!/usr/bin/env bash


for i in $(seq 1 30)

do
  out=$(git diff --shortstat "@{ $i day ago}");
  echo $i "days ago" $out;
done
