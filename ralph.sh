#!/bin/bash

# Ralph Wiggum Loop - Autonomous Development Agent
# Usage: ./ralph.sh [max_iterations]

MAX_ITERATIONS=${1:-20}
ITERATION=0
PROMPT_FILE="PROMPT.md"

echo "🚀 Starting Ralph Wiggum Loop"
echo "📋 Max iterations: $MAX_ITERATIONS"
echo "📝 Prompt file: $PROMPT_FILE"
echo ""

# Check if prompt file exists
if [ ! -f "$PROMPT_FILE" ]; then
    echo "❌ Error: $PROMPT_FILE not found"
    exit 1
fi

# Check if plan.md exists
if [ ! -f "plan.md" ]; then
    echo "❌ Error: plan.md not found"
    exit 1
fi

# Check if activity.md exists
if [ ! -f "activity.md" ]; then
    echo "❌ Error: activity.md not found"
    exit 1
fi

# Create screenshots directory if it doesn't exist
mkdir -p screenshots

# Start local development server if not running
if ! lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo "🌐 Starting local development server on port 8000..."
    cd /home/user/CodeExamples
    python3 -m http.server 8000 > /dev/null 2>&1 &
    SERVER_PID=$!
    echo "✅ Server started (PID: $SERVER_PID)"
    sleep 2
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Main loop
while [ $ITERATION -lt $MAX_ITERATIONS ]; do
    ITERATION=$((ITERATION + 1))

    echo "🔄 Iteration $ITERATION of $MAX_ITERATIONS"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    # Read prompt and run Claude
    PROMPT_CONTENT=$(<"$PROMPT_FILE")

    # Call Claude CLI with the prompt
    OUTPUT=$(claude "$PROMPT_CONTENT" 2>&1)

    echo "$OUTPUT"
    echo ""

    # Check for completion signal
    if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "✅ All tasks complete!"
        echo "📊 Completed in $ITERATION iterations"
        echo "📁 Check activity.md for full log"
        echo "🖼️  Check screenshots/ for verification images"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        exit 0
    fi

    # Check for blocked signal
    if echo "$OUTPUT" | grep -q "<promise>BLOCKED</promise>"; then
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "⚠️  Agent is blocked!"
        echo "📝 Check activity.md for details"
        echo "🔧 Resolve the issue and run again"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        exit 1
    fi

    # Brief pause between iterations
    sleep 1

    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
done

# Max iterations reached
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "⏰ Max iterations ($MAX_ITERATIONS) reached"
echo "📊 Check plan.md for remaining tasks"
echo "📁 Check activity.md for progress log"
echo "🔁 Run again with: ./ralph.sh $MAX_ITERATIONS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
