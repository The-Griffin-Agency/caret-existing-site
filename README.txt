CARET PRODUCT REVIEW

Upload index.html, styles.css, script.js and the images folder together to your GitHub Pages published folder. No build step needed.

Hub opens first. Navigation: Hub / Capture / Command / Court Rules / CARET Why / Copy Docs.

UPDATING AN IMAGE (same approach as Summer Launch)
1. Export the revised PNG with a new versioned filename, e.g. product_capture_v1b.png.
2. Upload it to images/.
3. Update its file value in the pages map at the top of script.js.
4. In index.html, increment script.js?v=1 to script.js?v=2 (and increase again on later updates).
5. Commit the new PNG, script.js and index.html together.

If you prefer replacing PNGs with the SAME filenames, also increase IMAGE_VERSION at the top of script.js. Then increase the script.js query in index.html as above.

UPDATING STYLES
Edit styles.css and increment styles.css?v=1 in index.html to the next number. Commit both files together.

Keep index.html's filename and the review URL unchanged. Version queries and revised image filenames avoid old cached assets. Reviewers use a normal reload after deployment; no manual cache clearing required. An already-open tab does not automatically update. Allow time for GitHub Pages deployment to finish.

The original PNGs are unchanged. No commenting tools included.
