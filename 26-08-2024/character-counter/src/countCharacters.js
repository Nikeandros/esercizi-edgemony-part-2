#!/usr/bin/env node

const fs = require('fs');

const countCharacters = (text) => {
  const totalCharacters = text.length;
  const charactersExcludingSpaces = text.replace(/\s+/g, '').length;

  console.log(`Caratteri: ${totalCharacters}`);
  console.log(`Caratteri (spazi esclusi): ${charactersExcludingSpaces}`);
};

const text = process.argv[2];

if (fs.existsSync(text)) {
  const fileContent = fs.readFileSync(text, 'utf8');
  countCharacters(fileContent);
} else {
  countCharacters(text);
}
