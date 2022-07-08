git add dist && git commit -m "New build added"
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
git reset --soft HEAD~1 # undo last commit
rm -rf dist/            # remove dist folder