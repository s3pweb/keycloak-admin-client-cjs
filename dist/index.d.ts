import KeycloakAdminClient from '@keycloak/keycloak-admin-client';
import UserRepresentation from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';
import GroupRepresentation from '@keycloak/keycloak-admin-client/lib/defs/groupRepresentation';
import RealmRepresentation from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';
import AccessTokenAccess from '@keycloak/keycloak-admin-client/lib/defs/AccessTokenAccess';
import AccessTokenCertConf from '@keycloak/keycloak-admin-client/lib/defs/accessTokenCertConf';
import AccessTokenRepresentation from '@keycloak/keycloak-admin-client/lib/defs/accessTokenRepresentation';
import AccessClaimSet from '@keycloak/keycloak-admin-client/lib/defs/addressClaimSet';
import AdminEventRepresentation from '@keycloak/keycloak-admin-client/lib/defs/adminEventRepresentation';
import AuthDetailsRepresentation from '@keycloak/keycloak-admin-client/lib/defs/authDetailsRepresentation';
import AuthenticationExecutionExportRepresentation
  from '@keycloak/keycloak-admin-client/lib/defs/authenticationExecutionExportRepresentation';
import AuthenticationExecutionInfoRepresentation from '@keycloak/keycloak-admin-client/lib/defs/authenticationExecutionInfoRepresentation';

export {KeycloakAdminClient};
export type {
 UserRepresentation,
 GroupRepresentation,
 RealmRepresentation,
 AccessTokenAccess,
 AccessTokenRepresentation,
 AccessTokenCertConf,
 AccessClaimSet,
 AdminEventRepresentation,
 AuthenticationExecutionExportRepresentation,
 AuthDetailsRepresentation,
 AuthenticationExecutionInfoRepresentation,
};
