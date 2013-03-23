#!/bin/bash

echo "Please enter the file path of the csv:"
read csv_file


while read line
do

LINKZ="`echo $line | cut -d "," -f1`"
LANG="`echo $line | cut -d "," -f2`"
FUNCT="`echo $line | cut -d "," -f3`"
LIB="`echo $line | cut -d "," -f4`"

cat >> /tmp/JSON << EOL
    {
        "link" : "$LINKZ",
        "language" : "$LANG",

        "function-name" : "$FUNCT",
        "param" : "",
        "method-root" : "",

        "lib" : "$LIB"
    },
EOL


done < $csv_file




