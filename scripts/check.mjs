import fs from 'node:fs';
import assert from 'node:assert/strict';
import path from 'node:path';
const root=new URL('../public/',import.meta.url), html=fs.readFileSync(new URL('index.html',root),'utf8'),css=fs.readFileSync(new URL('styles.css',root),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,'Duplicate IDs');
for(const m of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(m[1]),'Missing anchor '+m[1]);
for(const m of (html+css).matchAll(/assets\/[\w.-]+/g))assert(fs.existsSync(new URL(m[0],root)),'Missing '+m[0]);
assert.equal((html.match(/<h1\b/g)||[]).length,1,'One primary heading');
assert(html.includes('9779849272620'));assert(!/Nibesh|12 × 12|12ft/.test(html));
assert(html.includes('10 × 10'));assert(html.includes('Crustpresso Zero'));
assert.equal((html.match(/We\u2019re working to set up Crustpresso Zero/g)||[]).length,1,'Zero setup sentence appears once');
assert.equal((html.match(/data-cafe=/g)||[]).length,6);
assert.equal((html.match(/data-step=/g)||[]).length,8);
assert.equal((html.match(/class="operator-chapter/g)||[]).length,6); // wrapper + five chapters
assert(!/data:image\/\w+;base64/.test(html+css),'Production uses reusable assets');
console.log('PASS: navigation, image paths, six cafe/eight pizza stages, operator chapters, content and metadata');
