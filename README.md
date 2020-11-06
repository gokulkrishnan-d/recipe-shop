# RecipeShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Generate Component Without spec

ng g c recipes\recipe-start --skipTests=true


## Observables 

If u are creating the own observable u need to unsubscribe once its finished , but for preDefined observables no need for that.

- is a data source
- just objects from lib(Events,Http Requests  etc)
- Observer( is a subscribe)*Handle Data  * Handle Error  *Handle completion 
  - it may never complete depends on requirements
  - mainly for the handling of asynchronous operations
- ## Operators in Observables
  - can build ur own operators which helps in Observable
  - this can be used if u want to change some functionalities of predefined Observables/ can be used in custom also..
  - # Reference https://www.learnrxjs.io/learn-rxjs/operators
  - used by pipe operator
  
- ## Subjects in Observables
  - A Subject is a special type of Observable which shares a single execution path among observers.
  - can be used as event emitters.