const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    // Replace blue classes
    .replace(/blue-50\b/g, 'red-50')
    .replace(/blue-100\b/g, 'red-100')
    .replace(/blue-200\b/g, 'red-200')
    .replace(/blue-300\b/g, 'red-300')
    .replace(/blue-400\b/g, 'red-400')
    .replace(/blue-500\b/g, 'red-600')
    .replace(/blue-600\b/g, 'red-800')
    .replace(/blue-700\b/g, 'red-900')
    // Replace violet classes
    .replace(/violet-300\b/g, 'rose-300')
    .replace(/violet-400\b/g, 'rose-400')
    .replace(/violet-500\b/g, 'rose-600')
    .replace(/violet-600\b/g, 'rose-800')
    // Replace purple classes
    .replace(/purple-300\b/g, 'rose-300')
    .replace(/purple-400\b/g, 'rose-400')
    .replace(/purple-500\b/g, 'rose-600')
    .replace(/purple-600\b/g, 'rose-800')
    // RGB replacements
    .replace(/59,130,246/g, '220,38,38')   // blue-500 rgb to red-600 rgb
    .replace(/37,99,235/g, '153,27,27')   // blue-600 rgb to red-800 rgb
    // Replace hex codes
    .replace(/#3B82F6/gi, '#DC2626') // blue-500 hex to red-600
    .replace(/#2563EB/gi, '#991B1B') // blue-600 hex to red-800
    .replace(/#60A5FA/gi, '#F87171') // blue-400 hex to red-400
    .replace(/#8B5CF6/gi, '#E11D48') // violet-500 hex to rose-600
    ;
    
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
};

walk('d:/RMP/hariharan-lighting/components', (err, results) => {
  if (err) throw err;
  results.forEach(replaceInFile);
});

walk('d:/RMP/hariharan-lighting/app', (err, results) => {
  if (err) throw err;
  results.forEach(replaceInFile);
});

walk('d:/RMP/hariharan-lighting/data', (err, results) => {
  if (err) throw err;
  results.forEach(replaceInFile);
});
