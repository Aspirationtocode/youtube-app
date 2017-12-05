#!/bin/bash
mkdir scripts/components/$1
touch scripts/components/$1/helpers.js
touch scripts/components/$1/index.js
touch scripts/components/$1/styles.js

echo -e "import EStyleSheet from 'react-native-extended-stylesheet';\r\n\r\nexport default EStyleSheet.create({});\r\n" >> scripts/components/$1/styles.js
echo -e "import React, { Component } from 'react';\r\nimport { View } from 'react-native';\r\n\r\nimport styles from './styles';\r\n\r\nexport default class $1 extends Component {\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<View>\r\n\t\t\t\r\n\t\t\t</View>\r\n\t\t);\r\n\t}\r\n}\r\n\r\n" >> scripts/components/$1/index.js
