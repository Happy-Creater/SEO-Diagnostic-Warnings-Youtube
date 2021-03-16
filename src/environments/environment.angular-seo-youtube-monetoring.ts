// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,
    loginUrl: "https://dev.monetoring.com:11259",
    OAUTH2_URL: "https://dev.monetoring.com:444/WebServiceMonetoringAuthorization/oauth/token",
    OAUTH2_USERNAME: "clientapp",
    OAUTH2_PASSWORD: "adminpix92",
    BASE_SERVICE_URL: "https://dev.monetoring.com:444",
    SEA_VERSION: "test",
    MONETORING_TYPE: "test",
    profile: "test"
  };
