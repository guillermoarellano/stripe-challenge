# Stripe Coding Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

The inspiration was a coding interview challenge for [Stripe](https://stripe.com/). The company does all their frontend in React.js, but my solution is written in Angular.

The meat of the solution rests in the Regex and event listeners emitting from the `<input>` element. See the [Phone Mask](src\app\phone-mask.directive.ts) directive for important logic.

## Running the Application

Clone the repository, navigate into the folder, and run `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
