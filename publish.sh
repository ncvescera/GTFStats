git add dist && git commit -m "New build added"
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
# git subtree push --prefix dist origin gh-pages