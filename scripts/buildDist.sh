#!/bin/bash -e
find ./dist-ts -iname "*.js" -type f | cut -d/ -f3- | while read b; do mkdir -p "dist/`dirname $b`" && cp dist-ts/$b dist/$b ; done