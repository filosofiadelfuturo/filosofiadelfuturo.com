@echo off
echo.
echo Starting with gh-pages branch
echo $ jekyll build
CALL bundle exec jekyll build
echo.
echo $ git add
CALL git add .
echo.
echo $ git commit
CALL git commit -m "commit"
echo.
echo $ git push origin gh-pages
CALL git push origin gh-pages
echo.
echo gh-pages branch DONE
echo Moving to master branch
echo.
CALL cd _site
echo Currently on ./_site
echo.
echo $ git add
CALL git add .
echo.
echo $ git commit
CALL git commit -m "commit"
echo.
echo $ git push origin master
CALL git push origin master
echo.
echo master branch DONE
CALL cd ..
echo Currently on ./
pause