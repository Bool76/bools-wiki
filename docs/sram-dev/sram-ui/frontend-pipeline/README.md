# Sram-ui | Frontend Pipeline

Summary - How to install the sram-ui package into another project. In this article we'll be doing it for slr2

*Prerequisites* 
1. If you did work on sram-ui, that work is complete, testing, and merged with the `main` branch
2. Verify that your sram-ui feature branch was merged into main by going into the Pull Request and clicking on "Checks" 
3. For sram-ui, in the package.json file, make note of the version number for `@sramplm/sram-ui` 


### Local | slr2 Steps

1. Switch to `main` branch and pull recent code
2. Create new branch (base branch name off of Jira ticket number)
3. In a terminal navigate to the “slr2.web” directory (you need to be in this directory to run npm commands)
```
cd slr2.web
```
4. Make note of the new version number. Run the following script to update the package.json dependency for "sram-ui" to the current version (enter in the appropriate new version number):
```
npm install @sramplm/sram-ui@X.X.XX
```
e.g.
```
npm install @sramplm/sram-ui@0.7.11
```  
5. Verify the sram-ui version number has updated. Go to: package.json
6. Look for:
```
 "dependencies": {
    "@sramplm/sram-ui": "^0.7.11",
```
7. Verify the correct version number is seen
8. Run build:
```
npm run build
```
9. Start the slr2 environment locally (via VS Code):  
Run > Run Without Debugging
10. Go to site to test:
```
http://localhost:32673/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG
```
> :warning: **Warning:** The above link might not work. If so then go to the slr2 URL + PubId article

11. Save changes and make final commit
12. Push code to github to the Main branch in "slr2"
13. In Github create a PR for slr2 and you know the rest

