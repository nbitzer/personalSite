#
# Simple script to start the backend node/express app
#

if [[ "$#" -gt 1 ]]; then
    echo "Too many params! Script takes one argument!"
    exit 1
fi

SERVER_TYPE=$1

npm run $SERVER_TYPE