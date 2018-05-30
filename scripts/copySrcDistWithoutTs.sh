#!/bin/bash -e
find ./src -not -iname '*.tsx' -not -iname '*.ts' -type f | cut -d/ -f3- | while read b; do mkdir -p "dist/`dirname $b`" && cp src/$b dist/$b ; done