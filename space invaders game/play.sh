#!/bin/sh
echo Starting python web server...
python3 -m http.server 8080 > web_server.logs &
echo Done!\nCheckout http://localhost:8080
