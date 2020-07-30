#!/bin/bash
# cd client
# set -e
npm install
npm start
tail -f /dev/null
# /bin/bash
exec "$@"
