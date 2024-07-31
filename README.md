# Keycloak Admin Client in CommonJS

This lib exports the [@keycloak/keycloak-admin-client](https://www.npmjs.com/package/@keycloak/keycloak-admin-client) 
(an ECMA Script module) as a CommonJS module, so it can be used in NestJS.

This repo is based on an idea by [Manuelbaun](https://github.com/Manuelbaun) on this issue https://github.com/keycloak/keycloak-nodejs-admin-client/issues/523

The version number of this repo will follow the version number of @keycloak/keycloak-admin-client.

## Install

```shell
npm i @s3pweb/keycloak-admin-client-cjs
```

## Usage

```ts
import { KeycloakAdminClient } from '@s3pweb/keycloak-admin-client-cjs';

@Injectable()
export class KeycloakService {
    private readonly kcAdminClient: KeycloakAdminClient;

    constructor(logger: LoggingService) {
        this.log = logger.getLogger(KeycloackService.name);
        this.kcAdminClient = new KeycloakAdminClient();
    }

}
```
