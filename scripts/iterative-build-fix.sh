#!/bin/bash

# Iterative Build Fix Script
# Continues building and logging errors until build succeeds or max iterations reached

MAX_ITERATIONS=50
iteration=1

while [ $iteration -le $MAX_ITERATIONS ]; do
    echo "=== Build Iteration $iteration ==="

    npm run build > /tmp/build_iter_$iteration.log 2>&1
    exit_code=$?

    if [ $exit_code -eq 0 ]; then
        echo "✅ BUILD SUCCESSFUL after $iteration iterations!"
        exit 0
    fi

    # Extract error info
    error=$(grep -A 5 "is not defined\|Cannot read properties\|Could not resolve\|Expected" /tmp/build_iter_$iteration.log | head -20)

    if [ -z "$error" ]; then
        echo "❌ Build failed but no recognizable error pattern found"
        tail -30 /tmp/build_iter_$iteration.log
        exit 1
    fi

    echo "Found error:"
    echo "$error"
    echo ""

    ((iteration++))

    if [ $iteration -gt $MAX_ITERATIONS ]; then
        echo "❌ Reached maximum iterations ($MAX_ITERATIONS)"
        exit 1
    fi
done
