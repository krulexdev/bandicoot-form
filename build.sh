#!/bin/bash

if [ "$(git diff HEAD^ HEAD)" != "" ]; then
    echo "Changes detected, building site..."
    exit 1 
else
    echo "No changes detected, skipping build."
    exit 0 
fi
