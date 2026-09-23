#!/usr/bin/env node
/* Stamps every app-shell file with ONE build id derived from their contents.
     node scripts/stamp.js          rewrite the stamps in place (npm run stamp)
     node scripts/stamp.js --check  exit 1 if any stamp is stale (npm test runs this)

   Why: a deploy must never be able to mix generations (new HTML + old JS).
   The id appears in every shell file, so the service worker can verify what
   it is about to cache, and the page can verify what it is running. It also
   replaces the hand-bumped CACHE_NAME: any change to any shell file changes
   the id, so the cache name changes automatically. Never edit stamps by hand. */
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const root = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const write = (f, s) => fs.writeFileSync(path.join(root, f), s);

// [file, pattern that matches the stamped text, template — {B} = build id]
const STAMPS = [
  ['sw.js',                 /const BUILD = '[^']*';/,                          "const BUILD = '{B}';"],
  ['index.html',            /<meta name="mc-build" content="[^"]*">/,          '<meta name="mc-build" content="{B}">'],
  ['index.html',            /css\/styles\.css(\?v=[^"]*)?"/,                   'css/styles.css?v={B}"'],
  ['index.html',            /js\/supabase-client\.js(\?v=[^"]*)?"/,            'js/supabase-client.js?v={B}"'],
  ['index.html',            /js\/app\.js(\?v=[^"]*)?"/,                        'js/app.js?v={B}"'],
  ['js/app.js',             /window\.MC_BUILD='[^']*';/,                       "window.MC_BUILD='{B}';"],
  ['js/supabase-client.js', /window\.MC_BUILD_CLIENT='[^']*';/,                "window.MC_BUILD_CLIENT='{B}';"],
  ['css/styles.css',        /--mc-build:"[^"]*";/,                             '--mc-build:"{B}";'],
];
// Shell files that carry no stamp but must still change the id when they change.
const UNSTAMPED = ['js/vendor/supabase.js', 'manifest.json'];

const files = [...new Set([...STAMPS.map((s) => s[0]), ...UNSTAMPED])].sort();
const original = {};
files.forEach((f) => (original[f] = read(f)));

function applyStamps(f, text, build) {
  let out = text;
  for (const [file, re, tpl] of STAMPS) {
    if (file !== f) continue;
    if (!re.test(out)) throw new Error(`stamp: no stamp placeholder found in ${f} for ${re}`);
    out = out.replace(re, tpl.replace('{B}', build));
  }
  return out;
}
// Hash the files with every stamp neutralised, so the id depends only on real content.
const neutral = files.map((f) => f + '\n' + applyStamps(f, original[f], '__BUILD__'));
const BUILD = crypto.createHash('sha256').update(neutral.join('\n----\n')).digest('hex').slice(0, 10);

const versionJson = JSON.stringify({ build: BUILD }) + '\n';
if (process.argv.includes('--check')) {
  const stale = files.filter((f) => applyStamps(f, original[f], BUILD) !== original[f]);
  let vjson = ''; try { vjson = read('version.json'); } catch (e) {}
  if (vjson !== versionJson) stale.push('version.json');
  if (stale.length) {
    console.error('Build stamps are stale (' + stale.join(', ') + '). Run: npm run stamp');
    process.exit(1);
  }
  console.log('Build stamps OK (' + BUILD + ')');
} else {
  files.forEach((f) => { const next = applyStamps(f, original[f], BUILD); if (next !== original[f]) write(f, next); });
  write('version.json', versionJson);
  console.log('Stamped build ' + BUILD);
}
