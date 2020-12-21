# PilotMonetoringResultAngular

## Unlimit length filename before clone repository
Run `git config --system core.longpaths true` for resolve the problem `Filename too long`.

## Install all modules.
Run `npm install` for install all modules.

## Development server
Run `npm run serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Fixed error "Cannot find module"
```
# typescript
npm install --save typescript@2.3.4

# angular2-drag-scroll
npm install --save angular2-drag-scroll@1.3.7

# ngx-translate
npm install --save @ngx-translate/core@7.2.2
npm install --save @ngx-translate/http-loader@2.0.1

# auto-complete
npm install --save @ngui/auto-complete@0.16.1

# heatmapjs
npm install --save heatmapjs

# xlsx
npm install --save xlsx

# d3
npm install --save d3

# venn.js
npm install --save venn.js

# ngx-file-drop
npm install --save ngx-file-drop@3.0.2

# jquery
npm install --save jquery
npm install --save @types/jquery

# moment-timezone
npm install --save moment-timezone

# highcharts
npm install --save highcharts

# jspdf
npm install --save jspdf

# jspdf-autotable
npm install --save  jspdf-autotable

# jwt-decode
npm install --save  jwt-decode
```

## Test on local
**Prerequirement** : Install docker in you computer.

**Important commands** :
```
# Access nexus for freelancer:
Username: external_freelance
Password: HSj2KH6PyEUTy8DW

# Docker login
docker login -u {user} -p {pasword} docker-repo.monetoring.com

# Deploy
docker run -d -p 4300:80 --name angular docker-repo.monetoring.com/pilotmonetoringresultlogin:local

# Stop
docker stop angular

# Remove
docker rm angular

```
**Step test on local** :

1- Run the image (Use command Docker login of Deploy).

2- Run Angular project.

3- Access loing interface use this URL -> http://localhost:4300/

4- Type this access to Angular interface :
```
       Username: freelancer.dev@monetoring.com
       Password: 1qaz2wsx
```

## Integrate project

1- If freelancer work to finish on new branch. The freelancer need to create merge request to Qods for check code.

2- If there is comment on Review Code, the freelance need to solve till everything are finish.
