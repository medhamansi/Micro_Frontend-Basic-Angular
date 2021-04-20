# Micro_Frontend-Basic-Angular

## App-one

This is the first application

First we created a component - ng g c flight

Next - ng add @angular/elements
     - ng add ngx-build-plus
     - npm i -g http-server --save
     
Make necessary changes in app.module.ts & flight.component.ts

Run using - http-server ./dist/app-one --port 8080

## App-two 

This is the second application

First we created a component - ng g c train

Next - ng add @angular/elements
     - ng add ngx-build-plus
     - npm i -g http-server --save
     
Make necessary changes in app.module.ts & train.component.ts

Run using - http-server ./dist/app-one --port 8082

## Combined Application

Make chnages in index.html
- Add the selector tags of both the components of individual project.
- Add the necessary script tags
- do ng serve
