## Accenture FullStack University Training App
# Description
Training App, developed for the purpose of the providing hands=on expeience to students.

The Application is based on tutorials from [baeldung](https://www.baeldung.com/spring-boot-angular-web) and [Angular](https://stackblitz.com/angular/egmelpdxren?file=src%2Fapp%2Fhero.service.ts) 

## Configure your IDE

1. Download Eclipse IDE

### Enable Lombok
Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java.
Never write another getter or equals method again, with one annotation your class has a fully featured builder, Automate your logging variables, and much more.

1. [Download](https://projectlombok.org/download) the `lombok.jar` from this , or from your maven repository; it's the same jar.

2. `Double-click lombok.jar`. This starts the eclipse installer which will find eclipse and offers to install lombok into your eclipse installations. The same tool can also uninstall lombok.

3. For other IDE's (https://projectlombok.org/setup/overview)

# Running, building and packaging.

Please install [npm](https://www.npmjs.com/get-npm) (Node Package Manager),

Navigate to `/fullstack/src/main/js/application` and run:

```Node
npm install
```

We'll use [Angular CLI](https://cli.angular.io/), a powerful command-line utility.

Angular CLI is an extremely valuable tool since it allows us to create an entire Angular project from scratch, generating components, services, classes, and interfaces with just a few commands.

```
npm install -g @angular/cli
```
That's it. The above command will install the latest version of Angular CLI.

Finally, we're ready to run our application.

To accomplish this, let's first run the Spring Boot application, so the REST service is alive and listening for requests.

Once the Spring Boot application has been started, let's open a command console and type the following command:

```
ng serve --open
```
This will start Angular's live development server and also open the browser at http://localhost:4200.




