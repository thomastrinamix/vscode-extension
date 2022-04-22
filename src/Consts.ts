import { Metadata } from "./models/Metadata";
import * as vscode from "vscode";

/** default 'global' uris */
var varADALresource="https://graph.microsoft.com"; 
var varADALauthURLPrefix="https://login.microsoftonline.com/";
var varADALauthURLDeviceLogin="https://login.microsoftonline.com/common/oauth2/deviceauth";
var varB2CGraphEndpoint="https://graph.microsoft.com/beta/trustFramework/policies"; 
var varSamplesYourTenant ="yourtenant.onmicrosoft.com";  
var varTenantRegion=".onmicrosoft.com" 

/** enable switch to 'china' uris */
var config = vscode.workspace.getConfiguration('aadb2c');
  if (config.get('region') === 'china') {
    varADALresource= "https://microsoftgraph.chinacloudapi.cn"; 
    varADALauthURLPrefix="https://login.chinacloudapi.cn/"; 
    varADALauthURLDeviceLogin="https://login.chinacloudapi.cn/common/oauth2/deviceauth";
    varB2CGraphEndpoint="https://microsoftgraph.chinacloudapi.cn/beta/trustFramework/policies"; 
    varSamplesYourTenant ="yourtenant.partner.onmschina.cn";  
    varTenantRegion=".partner.onmschina.cn"  
  }

export default class Consts {
  
  static TP_Metadata: Metadata[] = [
  new Metadata('openidconnect', 'client_id'),
  new Metadata('openidconnect', 'IdTokenAudience'),
  new Metadata('openidconnect', 'METADATA'),
  new Metadata('openidconnect', 'ProviderName'),
  new Metadata('openidconnect', 'response_types'),
  new Metadata('openidconnect', 'response_mode'),
  new Metadata('openidconnect', 'scope'),
  new Metadata('openidconnect', 'HttpBinding'),
  new Metadata('openidconnect', 'ValidTokenIssuerPrefixes'),
  new Metadata('openidconnect', 'UsePolicyInRedirectUri'),
  new Metadata('openidconnect', 'MarkAsFailureOnStatusCode5xx'),
  new Metadata('openidconnect', 'DiscoverMetadataByTokenIssuer'),
  new Metadata('oauth1', 'client_id'),
  new Metadata('oauth1', 'ProviderName'),
  new Metadata('oauth1', 'request_token_endpoint'),
  new Metadata('oauth1', 'authorization_endpoint'),
  new Metadata('oauth1', 'access_token_endpoint'),
  new Metadata('oauth1', 'ClaimsEndpoint'),
  new Metadata('oauth1', 'ClaimsResponseFormat'),
  new Metadata('oauth2', 'client_id'),
  new Metadata('oauth2', 'IdTokenAudience'),
  new Metadata('oauth2', 'authorization_endpoint'),
  new Metadata('oauth2', 'AccessTokenEndpoint'),
  new Metadata('oauth2', 'ClaimsEndpoint'),
  new Metadata('oauth2', 'AccessTokenResponseFormat'),
  new Metadata('oauth2', 'AdditionalRequestQueryParameters'),
  new Metadata('oauth2', 'ClaimsEndpointAccessTokenName'),
  new Metadata('oauth2', 'ClaimsEndpointFormatName'),
  new Metadata('oauth2', 'ClaimsEndpointFormat'),
  new Metadata('oauth2', 'ProviderName'),
  new Metadata('oauth2', 'response_mode'),
  new Metadata('oauth2', 'scope'),
  new Metadata('oauth2', 'HttpBinding'),
  new Metadata('oauth2', 'ResponseErrorCodeParamName'),
  new Metadata('oauth2', 'ExtraParamsInAccessTokenEndpointResponse'),
  new Metadata('oauth2', 'ExtraParamsInClaimsEndpointRequest'),
  new Metadata('saml', 'PartnerEntity'),
  new Metadata('saml', 'WantsSignedRequests'),
  new Metadata('saml', 'XmlSignatureAlgorithm'),
  new Metadata('saml', 'WantsSignedAssertions'),
  new Metadata('saml', 'ResponsesSigned'),
  new Metadata('saml', 'WantsEncryptedAssertions'),
  new Metadata('saml', 'IdpInitiatedProfileEnabled'),
  new Metadata('saml', 'NameIdPolicyFormat'),
  new Metadata('saml', 'NameIdPolicyAllowCreate'),
  new Metadata('saml', 'AuthenticationRequestExtensions'),
  new Metadata('saml', 'IncludeAuthnContextClassReferences'),
  new Metadata('saml', 'IncludeKeyInfo'),
  new Metadata('web.tpengine.providers.restfulprovider', 'ServiceUrl'),
  new Metadata('web.tpengine.providers.restfulprovider', 'AuthenticationType'),
  new Metadata('web.tpengine.providers.restfulprovider', 'SendClaimsIn'),
  new Metadata('web.tpengine.providers.restfulprovider', 'ClaimsFormat'),
  new Metadata('web.tpengine.providers.restfulprovider', 'DebugMode'),
  new Metadata('web.tpengine.providers.selfassertedattributeprovider', 'setting.showContinueButton'),
  new Metadata('web.tpengine.providers.selfassertedattributeprovider', 'setting.showCancelButton'),
  new Metadata('web.tpengine.providers.selfassertedattributeprovider', 'setting.operatingMode'),
  new Metadata('web.tpengine.providers.selfassertedattributeprovider', 'ContentDefinitionReferenceId'),
  new Metadata('web.tpengine.providers.selfassertedattributeprovider', 'EnforceEmailVerification'),
  new Metadata('web.tpengine.providers.selfassertedattributeprovider', 'setting.showSignupLink'),
  new Metadata('web.tpengine.providers.selfassertedattributeprovider', 'setting.retryLimit'),
  new Metadata('web.tpengine.providers.selfassertedattributeprovider', 'SignUpTarget'),
  new Metadata('web.tpengine.providers.azureactivedirectoryprovider', 'Operation'),
  new Metadata('web.tpengine.providers.azureactivedirectoryprovider', 'RaiseErrorIfClaimsPrincipalDoesNotExist'),
  new Metadata('web.tpengine.providers.azureactivedirectoryprovider', 'UserMessageIfClaimsPrincipalDoesNotExist'),
  new Metadata('web.tpengine.providers.azureactivedirectoryprovider', 'RaiseErrorIfClaimsPrincipalAlreadyExists'),
  new Metadata('web.tpengine.providers.azureactivedirectoryprovider', 'UserMessageIfClaimsPrincipalAlreadyExists'),
  new Metadata('web.tpengine.providers.azureactivedirectoryprovider', 'ApplicationObjectId'),
  new Metadata('web.tpengine.providers.azureactivedirectoryprovider', 'ClientId')
  ]
  static TP_IDP_Microsoft: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>live.com</Domain>\r\n' +
    '|  <DisplayName>Microsoft Account</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="MSA-OIDC">\r\n' +
    '|      <DisplayName>Microsoft Account</DisplayName>\r\n' +
    '|      <Protocol Name="OpenIdConnect" />\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="ProviderName">https://login.live.com</Item>\r\n' +
    '|        <Item Key="METADATA">https://login.live.com/.well-known/openid-configuration</Item>\r\n' +
    '|        <Item Key="response_types">code</Item>\r\n' +
    '|        <Item Key="response_mode">form_post</Item>\r\n' +
    '|        <Item Key="scope">openid profile email</Item>\r\n' +
    '|        <Item Key="HttpBinding">POST</Item>\r\n' +
    '|        <Item Key="UsePolicyInRedirectUri">0</Item>\r\n' +
    '|        <Item Key="client_id">Your Microsoft application client id</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="client_secret" StorageReferenceId="B2C_1A_MSASecret" />\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="identityProvider" DefaultValue="live.com" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="socialIdpAuthentication" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="sub" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="displayName" PartnerClaimType="name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="email" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <OutputClaimsTransformations>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateSubjectClaimFromAlternativeSecurityId" />\r\n' +
    '|      </OutputClaimsTransformations>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-SocialLogin" />\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>';

  static TP_IDP_Google: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>google.com</Domain>\r\n' +
    '|  <DisplayName>Google</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="Google-OAUTH">\r\n' +
    '|      <DisplayName>Google</DisplayName>\r\n' +
    '|        <Protocol Name="OAuth2" />\r\n' +
    '|        <Metadata>\r\n' +
    '|          <Item Key="ProviderName">google</Item>\r\n' +
    '|          <Item Key="authorization_endpoint">https://accounts.google.com/o/oauth2/auth</Item>\r\n' +
    '|          <Item Key="AccessTokenEndpoint">https://accounts.google.com/o/oauth2/token</Item>\r\n' +
    '|          <Item Key="ClaimsEndpoint">https://www.googleapis.com/oauth2/v1/userinfo</Item>\r\n' +
    '|          <Item Key="scope">email</Item>\r\n' +
    '|          <Item Key="HttpBinding">POST</Item>\r\n' +
    '|          <Item Key="UsePolicyInRedirectUri">0</Item>\r\n' +
    '|          <Item Key="client_id">Your Google+ application ID</Item>\r\n' +
    '|        </Metadata>\r\n' +
    '|        <CryptographicKeys>\r\n' +
    '|          <Key Id="client_secret" StorageReferenceId="B2C_1A_GoogleSecret" />\r\n' +
    '|        </CryptographicKeys>\r\n' +
    '|        <OutputClaims>\r\n' +
    '|          <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="id" />\r\n' +
    '|          <OutputClaim ClaimTypeReferenceId="email" PartnerClaimType="email" />\r\n' +
    '|          <OutputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="given_name" />\r\n' +
    '|          <OutputClaim ClaimTypeReferenceId="surname" PartnerClaimType="family_name" />\r\n' +
    '|          <OutputClaim ClaimTypeReferenceId="displayName" PartnerClaimType="name" />\r\n' +
    '|          <OutputClaim ClaimTypeReferenceId="identityProvider" DefaultValue="google.com" />\r\n' +
    '|          <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="socialIdpAuthentication" />\r\n' +
    '|        </OutputClaims>\r\n' +
    '|          <OutputClaimsTransformations>\r\n' +
    '|          <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName" />\r\n' +
    '|          <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName" />\r\n' +
    '|          <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId" />\r\n' +
    '|          <OutputClaimsTransformation ReferenceId="CreateSubjectClaimFromAlternativeSecurityId" />\r\n' +
    '|        </OutputClaimsTransformations>\r\n' +
    '|        <UseTechnicalProfileForSessionManagement ReferenceId="SM-SocialLogin" />\r\n' +
    '|        <ErrorHandlers>\r\n' +
    '|          <ErrorHandler>\r\n' +
    '|              <ErrorResponseFormat>json</ErrorResponseFormat>\r\n' +
    '|              <ResponseMatch>$[?(@@.error == \'invalid_grant\')]</ResponseMatch>\r\n' +
    '|              <Action>Reauthenticate</Action>\r\n' +
    '|              <!--In case of authorization code used error, we don\'t want the user to select his account again.-->\r\n' +
    '|              <!--AdditionalRequestParameters Key="prompt">select_account</AdditionalRequestParameters-->\r\n' +
    '|          </ErrorHandler>\r\n' +
    '|        </ErrorHandlers>\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>';

  static TP_IDP_AzureAD: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>Contoso</Domain>\r\n' +
    '|  <DisplayName>Login using Contoso</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="ContosoProfile">\r\n' +
    '|      <DisplayName>Contoso Employee</DisplayName>\r\n' +
    '|      <Description>Login with your Contoso account</Description>\r\n' +
    '|      <Protocol Name="OpenIdConnect"/>\r\n' +
    '|      <OutputTokenFormat>JWT</OutputTokenFormat>\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="METADATA">https://login.windows.net/contoso.com/.well-known/openid-configuration</Item>\r\n' +
    '|        <Item Key="ProviderName">https://sts.windows.net/00000000-0000-0000-0000-000000000000/</Item>\r\n' +
    '|        <Item Key="client_id">00000000-0000-0000-0000-000000000000</Item>\r\n' +
    '|        <Item Key="IdTokenAudience">00000000-0000-0000-0000-000000000000</Item>\r\n' +
    '|        <Item Key="response_types">id_token</Item>\r\n' +
    '|        <Item Key="UsePolicyInRedirectUri">false</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="client_secret" StorageReferenceId="B2C_1A_ContosoAppSecret"/>\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="oid"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="tenantId" PartnerClaimType="tid"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="given_name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="surName" PartnerClaimType="family_name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="displayName" PartnerClaimType="name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="contosoAuthentication" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="identityProvider" DefaultValue="AzureADContoso" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <OutputClaimsTransformations>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName"/>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName"/>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId"/>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateSubjectClaimFromAlternativeSecurityId"/>\r\n' +
    '|      </OutputClaimsTransformations>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-Noop"/>\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>';

  static TP_IDP_AzueADMulti: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>commonaad</Domain>\r\n' +
    '|  <DisplayName>Common AAD</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="Common-AAD">\r\n' +
    '|      <DisplayName>Multi-Tenant AAD</DisplayName>\r\n' +
    '|      <Protocol Name="OpenIdConnect" />\r\n' +
    '|      <Metadata>\r\n' +
    '|        <!-- Update the Client ID below to the Application ID -->\r\n' +
    '|        <Item Key="client_id">00000000-0000-0000-0000-000000000000</Item>\r\n' +
    '|        <Item Key="UsePolicyInRedirectUri">0</Item>\r\n' +
    '|        <Item Key="METADATA">https://login.microsoftonline.com/common/.well-known/openid-configuration</Item>\r\n' +
    '|        <Item Key="response_types">code</Item>\r\n' +
    '|        <Item Key="scope">openid</Item>\r\n' +
    '|        <Item Key="response_mode">form_post</Item>\r\n' +
    '|        <Item Key="HttpBinding">POST</Item>\r\n' +
    '|        <Item Key="DiscoverMetadataByTokenIssuer">true</Item>\r\n' +
    '|\r\n' +
    '|        <!-- The key below allows you to specify each of the Azure AD tenants that can be used to sign in. If you would like only specific tenants to be able to sign in, uncomment the line below and update the GUIDs. -->\r\n' +
    '|        <!-- <Item Key="ValidTokenIssuerPrefixes">https://sts.windows.net/00000000-0000-0000-0000-000000000000,https://sts.windows.net/11111111-1111-1111-1111-111111111111</Item> -->\r\n' +
    '|\r\n' +
    '|        <!-- The commented key below specifies that users from any tenant can sign-in. Comment or remove the line below if using the line above. -->\r\n' +
    '|        <Item Key="ValidTokenIssuerPrefixes">https://sts.windows.net/</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <!-- Make sure to update the reference ID of the client secret below you just created (B2C_1A_AADAppSecret) -->\r\n' +
    '|        <Key Id="client_secret" StorageReferenceId="B2C_1A_AADAppSecret" />\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="socialIdpAuthentication" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="identityProvider" PartnerClaimType="iss" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="sub" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="displayName" PartnerClaimType="name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="given_name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="surName" PartnerClaimType="family_name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="email" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <OutputClaimsTransformations>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateSubjectClaimFromAlternativeSecurityId" />\r\n' +
    '|      </OutputClaimsTransformations>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-SocialLogin" />\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>\r\n';

  static TP_IDP_Facebook: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>facebook.com</Domain>\r\n' +
    '|  <DisplayName>Facebook</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="Facebook-OAUTH">\r\n' +
    '|      <DisplayName>Facebook</DisplayName>\r\n' +
    '|      <Protocol Name="OAuth2" />\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="ProviderName">facebook</Item>\r\n' +
    '|        <Item Key="authorization_endpoint">https://www.facebook.com/dialog/oauth</Item>\r\n' +
    '|        <Item Key="AccessTokenEndpoint">https://graph.facebook.com/oauth/access_token</Item>\r\n' +
    '|        <Item Key="HttpBinding">GET</Item>\r\n' +
    '|        <Item Key="UsePolicyInRedirectUri">0</Item>\r\n' +
    '|        <!-- The Facebook required HTTP GET method, but the access token response is in JSON format from 3/27/2017 -->\r\n' +
    '|        <Item Key="AccessTokenResponseFormat">json</Item>\r\n' +
    '|        <Item Key="client_id">facebook_clientid</Item>\r\n' +
    '|        <Item Key="scope">email public_profile</Item>\r\n' +
    '|        <Item Key="ClaimsEndpoint">https://graph.facebook.com/me?fields=id,first_name,last_name,name,email</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="client_secret" StorageReferenceId="B2C_1A_FacebookSecret" />\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <InputClaims />\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="id" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="first_name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="surname" PartnerClaimType="last_name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="displayName" PartnerClaimType="name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="email" PartnerClaimType="email" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="identityProvider" DefaultValue="facebook.com" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="socialIdpAuthentication" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <OutputClaimsTransformations>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId" />\r\n' +
    '|      </OutputClaimsTransformations>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-SocialLogin" />\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>\r\n';

  static TP_IDP_LinkeIn: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>linkedin.com</Domain>\r\n' +
    '|  <DisplayName>LinkedIn</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="LinkedIn-OAUTH">\r\n' +
    '|      <DisplayName>LinkedIn</DisplayName>\r\n' +
    '|      <Protocol Name="OAuth2" />\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="ProviderName">linkedin</Item>\r\n' +
    '|        <Item Key="authorization_endpoint">https://www.linkedin.com/oauth/v2/authorization</Item>\r\n' +
    '|        <Item Key="AccessTokenEndpoint">https://www.linkedin.com/oauth/v2/accessToken</Item>\r\n' +
    '|        <Item Key="ClaimsEndpoint">https://api.linkedin.com/v1/people/~:(id,first-name,last-name,email-address,headline)</Item>\r\n' +
    '|        <Item Key="ClaimsEndpointAccessTokenName">oauth2_access_token</Item>\r\n' +
    '|        <Item Key="ClaimsEndpointFormatName">format</Item>\r\n' +
    '|        <Item Key="ClaimsEndpointFormat">json</Item>\r\n' +
    '|        <Item Key="scope">r_emailaddress r_basicprofile</Item>\r\n' +
    '|        <Item Key="HttpBinding">POST</Item>\r\n' +
    '|        <Item Key="UsePolicyInRedirectUri">0</Item>\r\n' +
    '|        <Item Key="client_id">Your LinkedIn application client ID</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="client_secret" StorageReferenceId="B2C_1A_LinkedInSecret" />\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="id" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="firstName" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="surname" PartnerClaimType="lastName" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="email" PartnerClaimType="emailAddress" />\r\n' +
    '|        <!--<OutputClaim ClaimTypeReferenceId="jobTitle" PartnerClaimType="headline" />-->\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="identityProvider" DefaultValue="linkedin.com" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="socialIdpAuthentication" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <OutputClaimsTransformations>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateSubjectClaimFromAlternativeSecurityId" />\r\n' +
    '|      </OutputClaimsTransformations>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-SocialLogin" />\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>\r\n';

  static TP_IDP_Twitter: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>twitter.com</Domain>\r\n' +
    '|  <DisplayName>Twitter</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="Twitter-OAUTH1">\r\n' +
    '|      <DisplayName>Twitter</DisplayName>\r\n' +
    '|      <Protocol Name="OAuth1" />\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="ProviderName">Twitter</Item>\r\n' +
    '|        <Item Key="authorization_endpoint">https://api.twitter.com/oauth/authenticate</Item>\r\n' +
    '|        <Item Key="access_token_endpoint">https://api.twitter.com/oauth/access_token</Item>\r\n' +
    '|        <Item Key="request_token_endpoint">https://api.twitter.com/oauth/request_token</Item>\r\n' +
    '|        <Item Key="ClaimsEndpoint">https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true</Item>\r\n' +
    '|        <Item Key="ClaimsResponseFormat">json</Item>\r\n' +
    '|        <Item Key="client_id">Your Twitter application consumer key</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="client_secret" StorageReferenceId="B2C_1A_TwitterSecret" />\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <InputClaims />\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="user_id" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="displayName" PartnerClaimType="screen_name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="email" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="identityProvider" DefaultValue="twitter.com" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="socialIdpAuthentication" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <OutputClaimsTransformations>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateSubjectClaimFromAlternativeSecurityId" />\r\n' +
    '|      </OutputClaimsTransformations>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-SocialLogin" />\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>\r\n';

  static TP_IDP_ADFS: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>contoso.com</Domain>\r\n' +
    '|  <DisplayName>Contoso ADFS</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="Contoso-SAML2">\r\n' +
    '|      <DisplayName>Contoso ADFS</DisplayName>\r\n' +
    '|      <Description>Login with your Contoso account</Description>\r\n' +
    '|      <Protocol Name="SAML2"/>\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="RequestsSigned">false</Item>\r\n' +
    '|        <Item Key="WantsEncryptedAssertions">false</Item>\r\n' +
    '|        <Item Key="PartnerEntity">https://{your_ADFS_domain}/federationmetadata/2007-06/federationmetadata.xml</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="SamlAssertionSigning" StorageReferenceId="B2C_1A_ADFSSamlCert"/>\r\n' +
    '|        <Key Id="SamlMessageSigning" StorageReferenceId="B2C_1A_ADFSSamlCert"/>\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="userPrincipalName" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="given_name"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="surname" PartnerClaimType="family_name"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="email" PartnerClaimType="email"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="displayName" PartnerClaimType="name"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="identityProvider" DefaultValue="contoso.com" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="socialIdpAuthentication"/>\r\n' +
    '|      </OutputClaims>\r\n' +
    '|        <OutputClaimsTransformations>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName"/>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName"/>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId"/>\r\n' +
    '|      <OutputClaimsTransformation ReferenceId="CreateSubjectClaimFromAlternativeSecurityId"/>\r\n' +
    '|      </OutputClaimsTransformations>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-Noop"/>\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>\r\n';

  static TP_IDP_Saleforce: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>salesforce</Domain>\r\n' +
    '|  <DisplayName>Salesforce</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="salesforce">\r\n' +
    '|      <DisplayName>Salesforce</DisplayName>\r\n' +
    '|      <Description>Login with your Salesforce account</Description>\r\n' +
    '|      <Protocol Name="SAML2"/>\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="RequestsSigned">false</Item>\r\n' +
    '|        <Item Key="WantsEncryptedAssertions">false</Item>\r\n' +
    '|        <Item Key="WantsSignedAssertions">false</Item>\r\n' +
    '|        <Item Key="PartnerEntity">https://contoso-dev-ed.my.salesforce.com/.well-known/samlidp.xml</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="SamlAssertionSigning" StorageReferenceId="B2C_1A_SAMLSigningCert"/>\r\n' +
    '|        <Key Id="SamlMessageSigning" StorageReferenceId="B2C_1A_SAMLSigningCert"/>\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="userId"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="given_name"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="surname" PartnerClaimType="family_name"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="email" PartnerClaimType="email"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="displayName" PartnerClaimType="username"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="externalIdp"/>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="identityProvider" DefaultValue="SAMLIdp" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <OutputClaimsTransformations>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName"/>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName"/>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId"/>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateSubjectClaimFromAlternativeSecurityId"/>\r\n' +
    '|      </OutputClaimsTransformations>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-Noop"/>\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>\r\n';

  static TP_IDP_Amazon: string =
    '|<ClaimsProvider>\r\n' +
    '|  <Domain>amazon.com</Domain>\r\n' +
    '|  <DisplayName>Amazon</DisplayName>\r\n' +
    '|  <TechnicalProfiles>\r\n' +
    '|    <TechnicalProfile Id="Amazon-OAUTH">\r\n' +
    '|      <DisplayName>Amazon</DisplayName>\r\n' +
    '|      <Protocol Name="OAuth2" />\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="ProviderName">amazon</Item>\r\n' +
    '|        <Item Key="authorization_endpoint">https://www.amazon.com/ap/oa</Item>\r\n' +
    '|        <Item Key="AccessTokenEndpoint">https://api.amazon.com/auth/o2/token</Item>\r\n' +
    '|        <Item Key="ClaimsEndpoint">https://api.amazon.com/user/profile</Item>\r\n' +
    '|        <Item Key="scope">profile</Item>\r\n' +
    '|        <Item Key="HttpBinding">POST</Item>\r\n' +
    '|        <Item Key="UsePolicyInRedirectUri">0</Item>\r\n' +
    '|        <Item Key="client_id">Your Amazon application client ID</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="client_secret" StorageReferenceId="B2C_1A_AmazonSecret" />\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="socialIdpUserId" PartnerClaimType="user_id" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="email" PartnerClaimType="email" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="displayName" PartnerClaimType="name" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="identityProvider" DefaultValue="amazon.com" />\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="authenticationSource" DefaultValue="socialIdpAuthentication" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <OutputClaimsTransformations>\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateRandomUPNUserName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateUserPrincipalName" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateAlternativeSecurityId" />\r\n' +
    '|        <OutputClaimsTransformation ReferenceId="CreateSubjectClaimFromAlternativeSecurityId" />\r\n' +
    '|      </OutputClaimsTransformations>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-SocialLogin" />\r\n' +
    '|    </TechnicalProfile>\r\n' +
    '|  </TechnicalProfiles>\r\n' +
    '|</ClaimsProvider>\r\n';

  static TP_IDP_VK: string = '  Not implemented yet\r\n';

  static TP_REST_None: string =
    '|    <TechnicalProfile Id="{name}">\r\n' +
    '|      <DisplayName>Validate user input data and return loyaltyNumber claim</DisplayName>\r\n' +
    '|      <Protocol Name="Proprietary" Handler="Web.TPEngine.Providers.RestfulProvider, Web.TPEngine, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null" />\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="ServiceUrl">{serviceUri}</Item>\r\n' +
    '|        <Item Key="AuthenticationType">None</Item>\r\n' +
    '|        <Item Key="SendClaimsIn">Body</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <InputClaims>\r\n' +
    '|        <InputClaim ClaimTypeReferenceId="email" />\r\n' +
    '|        <InputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="firstName" />\r\n' +
    '|        <InputClaim ClaimTypeReferenceId="surname" PartnerClaimType="lastName" />\r\n' +
    '|      </InputClaims>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="loyaltyNumber" PartnerClaimType="loyaltyNumber" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-Noop" />\r\n' +
    '|    </TechnicalProfile>\r\n';

  static TP_REST_Basic: string =
    '|    <TechnicalProfile Id="{name}">\r\n' +
    '|      <DisplayName>Validate user input data and return loyaltyNumber claim</DisplayName>\r\n' +
    '|      <Protocol Name="Proprietary" Handler="Web.TPEngine.Providers.RestfulProvider, Web.TPEngine, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null" />\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="ServiceUrl">{serviceUri}</Item>\r\n' +
    '|        <Item Key="AuthenticationType">Basic</Item>\r\n' +
    '|        <Item Key="SendClaimsIn">Body</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="BasicAuthenticationUsername" StorageReferenceId="B2C_1A_B2cRestClientId" />\r\n' +
    '|        <Key Id="BasicAuthenticationPassword" StorageReferenceId="B2C_1A_B2cRestClientSecret" />\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <InputClaims>\r\n' +
    '|        <InputClaim ClaimTypeReferenceId="email" />\r\n' +
    '|        <InputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="firstName" />\r\n' +
    '|        <InputClaim ClaimTypeReferenceId="surname" PartnerClaimType="lastName" />\r\n' +
    '|      </InputClaims>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="loyaltyNumber" PartnerClaimType="loyaltyNumber" />\r\n' +
    '|      </OutputClaims>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-Noop" />\r\n' +
    '|    </TechnicalProfile>\r\n';

  static TP_REST_ClientCertificate: string =
    '|    <TechnicalProfile Id="{name}">\r\n' +
    '|      <DisplayName>Validate user input data and return loyaltyNumber claim</DisplayName>\r\n' +
    '|      <Protocol Name="Proprietary" Handler="Web.TPEngine.Providers.RestfulProvider, Web.TPEngine, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null" />\r\n' +
    '|      <Metadata>\r\n' +
    '|        <Item Key="ServiceUrl">{serviceUri}</Item>\r\n' +
    '|        <Item Key="AuthenticationType">ClientCertificate</Item>\r\n' +
    '|        <Item Key="SendClaimsIn">Body</Item>\r\n' +
    '|      </Metadata>\r\n' +
    '|      <CryptographicKeys>\r\n' +
    '|        <Key Id="ClientCertificate" StorageReferenceId="B2C_1A_B2cRestClientCertificate" />\r\n' +
    '|      </CryptographicKeys>\r\n' +
    '|      <InputClaims>\r\n' +
    '|        <InputClaim ClaimTypeReferenceId="email" />\r\n' +
    '|        <InputClaim ClaimTypeReferenceId="givenName" PartnerClaimType="firstName" />\r\n' +
    '|        <InputClaim ClaimTypeReferenceId="surname" PartnerClaimType="lastName" />\r\n' +
    '|      </InputClaims>\r\n' +
    '|      <OutputClaims>\r\n' +
    '|        <OutputClaim ClaimTypeReferenceId="loyaltyNumber" PartnerClaimType="loyaltyNumber" />\r\n' +
    '|        </OutputClaims>\r\n' +
    '|      <UseTechnicalProfileForSessionManagement ReferenceId="SM-Noop" />\r\n' +
    '|    </TechnicalProfile>\r\n';


  static CLAIM_TextBox: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|  <DisplayName>{displayName}</DisplayName>\r\n' +
    '|  <DataType>string</DataType>\r\n' +
    '|  <UserHelpText>Add help text here</UserHelpText>\r\n' +
    '|  <UserInputType>TextBox</UserInputType>\r\n' +
    '|</ClaimType>\r\n';

  static CLAIM_RadioSingleSelect: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|	 <DisplayName>{displayName}</DisplayName>\r\n' +
    '|	 <DataType>string</DataType>\r\n' +
    '|  <UserHelpText>Add help text here</UserHelpText>\r\n' +
    '|	 <UserInputType>RadioSingleSelect</UserInputType>\r\n' +
    '|	 <Restriction>\r\n' +
    '|		<Enumeration Text="Bellevue" Value="bellevue" SelectByDefault="false" />\r\n' +
    '|		<Enumeration Text="Redmond" Value="redmond" SelectByDefault="false" />\r\n' +
    '|		<Enumeration Text="Kirkland" Value="kirkland" SelectByDefault="false" />\r\n' +
    '|	 </Restriction>\r\n' +
    '|</ClaimType>\r\n';

  static CLAIM_DropdownSingleSelect: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|  <DisplayName>{displayName}</DisplayName>\r\n' +
    '|  <DataType>string</DataType>\r\n' +
    '|  <UserHelpText>Add help text here</UserHelpText>\r\n' +
    '|  <UserInputType>DropdownSingleSelect</UserInputType>\r\n' +
    '|  <Restriction>\r\n' +
    '|    <Enumeration Text="Bellevue" Value="bellevue" SelectByDefault="false" />\r\n' +
    '|    <Enumeration Text="Redmond" Value="redmond" SelectByDefault="false" />\r\n' +
    '|    <Enumeration Text="Kirkland" Value="kirkland" SelectByDefault="false" />\r\n' +
    '|  </Restriction>\r\n' +
    '|</ClaimType>\r\n';

  static CLAIM_CheckboxMultiSelect: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|  <DisplayName>{displayName}</DisplayName>\r\n' +
    '|  <DataType>string</DataType>\r\n' +
    '|  <UserHelpText>Add help text here</UserHelpText>\r\n' +
    '|  <UserInputType>CheckboxMultiSelect</UserInputType>\r\n' +
    '|  <Restriction>\r\n' +
    '|    <Enumeration Text="Bellevue" Value="bellevue" SelectByDefault="false" />\r\n' +
    '|    <Enumeration Text="Redmond" Value="redmond" SelectByDefault="false" />\r\n' +
    '|    <Enumeration Text="Kirkland" Value="kirkland" SelectByDefault="false" />\r\n' +
    '|  </Restriction>\r\n' +
    '|</ClaimType>\r\n';

  static CLAIM_DateTimeDropdown: string =
    '|<ClaimType Id="{name}">\r\n' +
    '| <DisplayName>{displayName}</DisplayName>\r\n' +
    '| <DataType>date</DataType>\r\n' +
    '| <UserHelpText>Add help text here</UserHelpText>\r\n' +
    '| <UserInputType>DateTimeDropdown</UserInputType>\r\n' +
    '|</ClaimType>\r\n';

  static CLAIM_Readonly: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|	<DisplayName>{displayName}</DisplayName>\r\n' +
    '|	<DataType>string</DataType>\r\n' +
    '|  <UserHelpText>Add help text here</UserHelpText>\r\n' +
    '|	<UserInputType>Readonly</UserInputType>\r\n' +
    '|</ClaimType>\r\n';

  static CLAIM_Paragraph: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|	<DisplayName>{displayName}</DisplayName>\r\n' +
    '|	<DataType>string</DataType>\r\n' +
    '|  <UserHelpText>Add help text here</UserHelpText>\r\n' +
    '|	<UserInputType>Paragraph</UserInputType>\r\n' +
    '|</ClaimType>\r\n';

  static CLAIM_String: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|  <DisplayName>{displayName}</DisplayName>\r\n' +
    '|  <DataType>string</DataType>\r\n' +
    '|	<AdminHelpText>Add help text here</AdminHelpText>\r\n' +
    '|</ClaimType>\r\n';

  static CLAIM_stringCollection: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|	<DisplayName>{displayName}</DisplayName>\r\n' +
    '|	<DataType>stringCollection</DataType>\r\n' +
    '|	<AdminHelpText>Add help text here</AdminHelpText>\r\n' +
    '|</ClaimType>\r\n';


  static CLAIM_Boolean: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|	<DisplayName>{displayName}</DisplayName>\r\n' +
    '|	<DataType>boolean</DataType>\r\n' +
    '|	<AdminHelpText>Add help text here</AdminHelpText>\r\n' +
    '|</ClaimType>\r\n';


  static CLAIM_Integer: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|	<DisplayName>{displayName}</DisplayName>\r\n' +
    '|	<DataType>int</DataType>\r\n' +
    '|	<AdminHelpText>Add help text here</AdminHelpText>\r\n' +
    '|</ClaimType>\r\n';

  static CLAIM_Long: string =
    '|<ClaimType Id="{name}">\r\n' +
    '|	<DisplayName>{displayName}</DisplayName>\r\n' +
    '|	<DataType>long</DataType>\r\n' +
    '|	<AdminHelpText>Add help text here</AdminHelpText>\r\n' +
    '|</ClaimType>\r\n';

  static ApplicationInsightsDebugMode: string =
    '  <!--Step 1: Add the following attributes to the <TrustFrameworkPolicy> element\r\n' +
    '  DeploymentMode="Development"\r\n' +
    '  UserJourneyRecorderEndpoint="urn:journeyrecorder:applicationinsights"\r\n' +
    '  -->\r\n' +
    '\r\n' +
    '  <!--Step 2: Add the following node immediately after the DefaultUserJourney element-->\r\n' +
    '  <UserJourneyBehaviors>\r\n' +
    '  	<JourneyInsights TelemetryEngine="ApplicationInsights" InstrumentationKey="{instrumentationKey}" DeveloperMode="true" ClientEnabled="false" ServerEnabled="true" TelemetryVersion="1.0.0" />\r\n' +
    '  </UserJourneyBehaviors>\r\n';

  static readonly DefaultPoliciesFolder = {key: "PoliciesFolder", value: vscode.workspace.workspaceFolders[0].uri.fsPath.replace(/\\/g, "\\\\")};
  static readonly DefaultEnvironmentsFolder = {key: "EnvironmentsFolder", value: "Environments"};
  static DefaultDeploymentSettings: string = `
{
    "${Consts.DefaultPoliciesFolder.key}": "${Consts.DefaultPoliciesFolder.value}",
    "${Consts.DefaultEnvironmentsFolder.key}": "${Consts.DefaultEnvironmentsFolder.value}",
    "Environments": [
        {
            "Name": "Development",
            "Production": false,
            "Tenant": "your-dev-tenant.onmicrosoft.com",
            "PolicySettings" : {
                "IdentityExperienceFrameworkAppId": "Your dev environment AD app Id",
                "ProxyIdentityExperienceFrameworkAppId": "Your dev environment AD Proxy app Id",
                "FacebookAppId": "0"
            }
        },
        {
            "Name": "Test",
            "Production": false,
            "Tenant": "your-test-tenant.onmicrosoft.com",
            "PolicySettings" : {
                "IdentityExperienceFrameworkAppId": "Your test environment AD app Id",
                "ProxyIdentityExperienceFrameworkAppId": "Your AD test environment Proxy app Id",
                "FacebookAppId": "0"
            }
        },
        {
            "Name": "QA",
            "Production": false,
            "Tenant": "your-qa-tenant.onmicrosoft.com",
            "PolicySettings" : {
                "IdentityExperienceFrameworkAppId": "Your QA environment AD app Id",
                "ProxyIdentityExperienceFrameworkAppId": "Your QA environment AD Proxy app Id",
                "FacebookAppId": "0"
            }
        },
        {
            "Name": "Production",
            "Production": true,
            "Tenant": "your-production-tenant.onmicrosoft.com",
            "PolicySettings" : {
                "IdentityExperienceFrameworkAppId": "Your QA environment AD app Id",
                "ProxyIdentityExperienceFrameworkAppId": "Your production environment AD Proxy app Id",
                "FacebookAppId": "0"
            }
        }
    ]
}`;

  static IEF_Schema: string = `<?xml version="1.0" encoding="utf-8"?>
  <xs:schema xmlns="http://schemas.microsoft.com/online/cpim/schemas/2013/06" targetNamespace="http://schemas.microsoft.com/online/cpim/schemas/2013/06" xmlns:tfp="http://schemas.microsoft.com/online/cpim/schemas/2013/06" xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">
    <!-- <xs:schema xmlns="http://schemas.microsoft.com/online/cpim/schemas/2014/07" targetNamespace="http://schemas.microsoft.com/online/cpim/schemas/2014/07" xmlns:tfp="http://schemas.microsoft.com/online/cpim/schemas/2014/07" xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified"> -->
    <!--
      The top-level definition of a trust framework policy. Each section is defined by type elsewhere.
    -->
    <xs:element name="TrustFrameworkPolicy">
      <xs:annotation>
        <xs:documentation>
          The root element within which a Trust Framework Policy is defined.
        </xs:documentation>
      </xs:annotation>
      <xs:complexType>
        <xs:sequence>
          <xs:element minOccurs="0" maxOccurs="1" name="BasePolicy" type="tfp:BasePolicy" />
  
          <xs:element minOccurs="0" maxOccurs="1" name="PolicyConstraints">
            <xs:annotation>
              <xs:documentation>
                This section contains the policy constraints controlling which tenants and policies
                can inherit from it.
              </xs:documentation>
            </xs:annotation>
            <xs:complexType>
              <xs:sequence>
                <xs:element minOccurs="0" maxOccurs="1" name="Inheritance" type="tfp:Inheritance" />
                <xs:element minOccurs="0" maxOccurs="1" name="RerouteRules" type="tfp:RerouteRules" />
              </xs:sequence>
            </xs:complexType>
          </xs:element>
  
          <xs:element minOccurs="0" maxOccurs="1" name="Contacts">
            <xs:annotation>
              <xs:documentation>
                Contains a list of contacts who can be communicated with for notifications and issues regarding the Policy.
              </xs:documentation>
            </xs:annotation>
            <xs:complexType>
              <xs:sequence>
                <xs:element minOccurs="0" maxOccurs="unbounded" name="Contact" type="tfp:Contact" />
              </xs:sequence>
            </xs:complexType>
          </xs:element>
  
          <xs:element minOccurs="0" maxOccurs="1" name="DocumentReferences">
            <xs:annotation>
              <xs:documentation>
                Contains a list of references to documents for the Policy.
              </xs:documentation>
            </xs:annotation>
            <xs:complexType>
              <xs:sequence>
                <xs:element minOccurs="0" maxOccurs="unbounded" name="DocumentReference" type="tfp:DocumentReference" />
              </xs:sequence>
            </xs:complexType>
            <xs:key name="UniqueDocumentReferenceId">
              <xs:selector xpath="tfp:DocumentReference"/>
              <xs:field xpath="@Id"/>
            </xs:key>
          </xs:element>
  
          <xs:element minOccurs="0" maxOccurs="1" name="BuildingBlocks" type="tfp:BuildingBlocks" />
  
          <xs:element minOccurs="0" maxOccurs="1" name="ClaimsProviders">
            <xs:annotation>
              <xs:documentation>
                This section contains the Claims Providers and their Technical Profiles that may be used in the various User Journeys.
              </xs:documentation>
            </xs:annotation>
            <xs:complexType>
              <xs:sequence>
                <xs:element minOccurs="1" maxOccurs="unbounded" name="ClaimsProvider" type="tfp:ClaimsProvider"/>
              </xs:sequence>
            </xs:complexType>
            <xs:key name="UniqueTechnicalProfileId">
              <xs:selector xpath="tfp:ClaimsProvider/tfp:TechnicalProfiles/tfp:TechnicalProfile"/>
              <xs:field xpath="@Id"/>
            </xs:key>
          </xs:element>
  
          <xs:element minOccurs="0" maxOccurs="1" name="UserJourneys">
            <xs:annotation>
              <xs:documentation>
                The User Journeys through which a user is taken to retrieve the claims that are to be presented to the relying party.
              </xs:documentation>
            </xs:annotation>
            <xs:complexType>
              <xs:sequence>
                <xs:element minOccurs="1" maxOccurs="unbounded" name="UserJourney" type="tfp:UserJourney" />
              </xs:sequence>
            </xs:complexType>
            <xs:key name="UniqueUserJourneyId">
              <xs:selector xpath="tfp:UserJourney"/>
              <xs:field xpath="@Id"/>
            </xs:key>
          </xs:element>
          
          <xs:element minOccurs="0" maxOccurs="1" name="SubJourneys">
            <xs:annotation>
              <xs:documentation>
                The SubJourneys that are components of UserJourneys and are executed as part of a User Journey.
              </xs:documentation>
            </xs:annotation>
            <xs:complexType>
              <xs:sequence>
                <xs:element minOccurs="1" maxOccurs="unbounded" name="SubJourney" type="tfp:SubJourney" />
              </xs:sequence>
            </xs:complexType>
            <xs:key name="UniqueSubJourney">
              <xs:selector xpath="tfp:SubJourney" />
              <xs:field xpath="@Id" />
            </xs:key>
          </xs:element>
  
          <xs:element minOccurs="0" maxOccurs="1" name="RelyingParty">
            <xs:complexType>
              <xs:sequence>
                <xs:element minOccurs="0" maxOccurs="1" name="DefaultUserJourney">
                  <xs:annotation>
                    <xs:documentation>
                      An identifier of the User Journey which the orchestration engine will begin with. A merged trust framework policy
                      can contain multiple user journeys and relying parties select one of them as the starting point.
                    </xs:documentation>
                  </xs:annotation>
                  <xs:complexType>
                    <xs:attribute use="required" name="ReferenceId" type="xs:string"/>
                  </xs:complexType>
                </xs:element>
                <xs:element minOccurs="0" maxOccurs="1" name="Endpoints">
                  <xs:annotation>
                    <xs:documentation>
                      Defines different endpoints exposed by the policy and maps to UserJourneys to invoke.
                    </xs:documentation>
                  </xs:annotation>
                  <xs:complexType>
                    <xs:sequence>
                      <xs:element name="Endpoint" type="tfp:Endpoint" minOccurs="1" maxOccurs="unbounded" />
                    </xs:sequence>
                  </xs:complexType>
                  <xs:key name="UniqueEndpoint">
                    <xs:selector xpath="tfp:Endpoint" />
                    <xs:field xpath="@Id" />
                  </xs:key>
                </xs:element>
                <xs:element minOccurs="0" maxOccurs="1" name="UserJourneyBehaviors">
                  <xs:annotation>
                    <xs:documentation>
                      Controls the scope of various user journey behaviors.
                    </xs:documentation>
                  </xs:annotation>
                  <xs:complexType>
                    <xs:sequence>
                      <xs:element name="SingleSignOn" type="tfp:SingleSignOn" minOccurs="0" maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation>
                            Controls the scope of the single sign on behavior of a user journey.
                          </xs:documentation>
                        </xs:annotation>
                      </xs:element>
                      <xs:element name="SessionExpiryType" type="tfp:SessionExpiryTypeTYPE" minOccurs="0" maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation>
                            Controls the whether the session is rolling or absolute.
                          </xs:documentation>
                        </xs:annotation>
                      </xs:element>
                      <xs:element name="SessionExpiryInSeconds" type="xs:int" minOccurs="0" maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation>
                            Controls the time of the session expiry in seconds.
                          </xs:documentation>
                        </xs:annotation>
                      </xs:element>
                      <xs:element name="AzureApplicationInsights" type="tfp:AzureApplicationInsights" minOccurs="0" maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation>
                            DEPRECATED - Use JourneyInsights indicating ApplicationInsights as the telemetry engine.
                          </xs:documentation>
                        </xs:annotation>
                      </xs:element>
                      <xs:element name="JourneyInsights" type="tfp:JourneyInsights" minOccurs="0" maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation>
                            Specifies the details required for journey insights.
                          </xs:documentation>
                        </xs:annotation>
                      </xs:element>
                      <xs:element name="ContentDefinitionParameters" type="tfp:ContentDefinitionParameters" minOccurs="0" maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation>
                            Specifies the a list of key value pairs to be appended to the content definition load uri.
                          </xs:documentation>
                        </xs:annotation>
                      </xs:element>
                      <xs:element name="JourneyFraming" type="tfp:JourneyFraming" minOccurs="0" maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation>
                            Specifies whether journey framing is enabled and for what sources.
                          </xs:documentation>
                        </xs:annotation>
                      </xs:element>
                      <xs:element name="ScriptExecution" type="tfp:ScriptExecutionType" minOccurs="0" maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation>
                            Controls the whether script execution is allowed for the journey.
                          </xs:documentation>
                        </xs:annotation>
                      </xs:element>
                      <xs:element name="OnError" type="tfp:JourneyOnError" minOccurs="0" maxOccurs="1">
                        <xs:annotation>
                          <xs:documentation>
                            Specifies the error handling behavior of a journey.
                          </xs:documentation>
                        </xs:annotation>
                      </xs:element>
                    </xs:sequence>
                  </xs:complexType>
                </xs:element>
                <xs:element minOccurs="0" maxOccurs="unbounded" name="TechnicalProfile" type="tfp:TechnicalProfile"/>
              </xs:sequence>
            </xs:complexType>
          </xs:element>
        </xs:sequence>
        <xs:attribute use="required" name="PolicySchemaVersion" type="tfp:FourPartVersionNumber">
          <xs:annotation>
            <xs:documentation>
              Determines the schema version published by Microsoft using which this Policy is to be executed.
            </xs:documentation>
          </xs:annotation>
        </xs:attribute>
        <xs:attribute use="required" name="TenantId" type="tfp:TenantId">
          <xs:annotation>
            <xs:documentation>
              The unique identifier of the tenant to which this policy belongs.
            </xs:documentation>
          </xs:annotation>
        </xs:attribute>
        <xs:attribute use="optional" name="TenantObjectId" type="tfp:TenantObjectId">
          <xs:annotation>
            <xs:documentation>
              The unique identifier of the object ID of the Azure tenant.
            </xs:documentation>
          </xs:annotation>
        </xs:attribute>
        <xs:attribute use="required" name="PolicyId" type="tfp:PolicyId">
          <xs:annotation>
            <xs:documentation>
              The unique identifier of this policy.
            </xs:documentation>
          </xs:annotation>
        </xs:attribute>
        <xs:attribute use="required" name="PublicPolicyUri" type="xs:anyURI">
          <xs:annotation>
            <xs:documentation>
              The URI for the policy which is an appropriate name of the policy outside of the CPIM system.
            </xs:documentation>
          </xs:annotation>
        </xs:attribute>
        <xs:attribute use="optional" name="StateTableName" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The name of the StateTable that should execute this policy.
            </xs:documentation>
          </xs:annotation>
        </xs:attribute>
        <xs:attribute use="optional" name="DeploymentMode" type="tfp:DeploymentModeType">
          <xs:annotation>
            <xs:documentation>
              The mode under which the policy should be deployed.
            </xs:documentation>
          </xs:annotation>
        </xs:attribute>
        <xs:attribute use="optional" name="UserJourneyRecorderEndpoint" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The Url in the format http://{host}?stream={guid} (where the braces are omitted)
              of a service able to receive http posts documenting user journey progress
            </xs:documentation>
          </xs:annotation>
        </xs:attribute>
      </xs:complexType>
    </xs:element>
  
    <xs:complexType name="BasePolicy">
      <xs:annotation>
        <xs:documentation>
          This section defines the base policy from which this Policy is derived.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="1" name="TenantId" type="tfp:TenantId">
          <xs:annotation>
            <xs:documentation>
              The identifier of the tenant that published the base policy. The base policy is looked up inside the tenant
              specified here.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="1" maxOccurs="1" name="PolicyId" type="tfp:PolicyId">
          <xs:annotation>
            <xs:documentation>
              The identifier of the base policy. The policy is looked up using this identifier within the tenant specified
              by the preceding element.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  
    <xs:complexType name="Inheritance">
      <xs:annotation>
        <xs:documentation>
          This section defines the constraints for policies inheriting from this policy.
        </xs:documentation>
      </xs:annotation>
      <xs:choice minOccurs="0">
        <xs:element minOccurs="0" maxOccurs="1" name="Tenants" type="tfp:TenantListType">
          <xs:annotation>
            <xs:documentation>
              A list of tenant references used when the inheritance rule is an allow or deny list.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="ConstraintHandler" type="tfp:ConstraintHandler">
          <xs:annotation>
            <xs:documentation>
              A handler implementing the IConstraintHandler interface for applying more complex inheritance rules.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:choice>
      <xs:attribute use="required" name="DerivingPolicies" type="xs:string" />
    </xs:complexType>
  
    <xs:complexType name="RerouteRules">
      <xs:annotation>
        <xs:documentation>
          This section defines policy rerouting rules.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="RerouteRule" type="tfp:RerouteRule">
          <xs:annotation>
            <xs:documentation>
              A list of reroute rules
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute use="required" name="Type" type="xs:string" />
    </xs:complexType>
  
    <xs:complexType name="RerouteRule">
      <xs:annotation>
        <xs:documentation>
          This section defines details of a rerouting rule
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="PolicyId" type="tfp:PolicyIdPattern">
        <xs:annotation>
          <xs:documentation>
            The unique identifier of this policy.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="Weight" type="tfp:Weight">
        <xs:annotation>
          <xs:documentation>
            The weight for a policy in case of A/B testing.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="Match" type="tfp:Match">
        <xs:annotation>
          <xs:documentation>
            Defines an attribute that can be passed into the query string, that will match the policy to be redirected to.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="ConstraintHandler">
      <xs:annotation>
        <xs:documentation>
          This section defines the constraints for policies inheriting from this policy.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular constraint handler.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="Handler" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A fully-qualified name of the assembly that will be used by CPIM to determine the constraint handler.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="TechnicalProfile">
      <xs:annotation>
        <xs:documentation>
          Every Claims Provider must have one or more Technical Profiles which determines the end points and the protocols needed
          to communicate with that Claims Provider. In fact, in CPIM, it is the Technical Profile that is referenced elsewhere for
          communication with a particular Claims Provider.
  
          A Claims Provider can have multiple Technical Profiles for various reasons. For example, multiple Technical Profiles may
          be defined because the Claims Provider supports multiple protocols, various endpoints with different capabilities, or
          releases different claims at different assurance levels. It may be acceptable to release
          sensitive claims in one User Journey, but not in another one. A Technical Profile is usually certified for
          a Level of Assurance and thus one Claims Provider may have multiple Technical Profiles for different Levels of Assurance.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="Domains">
          <xs:annotation>
            <xs:documentation>
              The human understandable domain names for the technical profile.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="Domain" type="tfp:nonemptystring">
                <xs:annotation>
                  <xs:documentation>
                    The human understandable domain name for the technical profile.
                  </xs:documentation>
                </xs:annotation>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="Domain" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The human understandable domain name for the technical profile.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="DisplayName" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The human understandable name of the Technical Profile that can be displayed to the users.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="Description" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              Provides detailed user understandable text to explain the Technical Profile.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="Protocol">
          <xs:annotation>
            <xs:documentation>
              The protocol used for federation.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:attribute use="required" name="Name" type="tfp:ProtocolName">
              <xs:annotation>
                <xs:documentation>
                  Name of the protocol used by CPIM for claims exchange with the claims provider.
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
            <xs:attribute use="optional" name="Handler" type="xs:string">
              <xs:annotation>
                <xs:documentation>
                  A fully-qualified name of the assembly that will be used by CPIM to determine the protocol handler if the protocol
                  name is "Proprietary". It is invalid to provide this attribute with any other protocol name.
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
          </xs:complexType>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="InputTokenFormat" type="tfp:TokenFormat">
          <xs:annotation>
            <xs:documentation>
              Format of the input token
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="OutputTokenFormat" type="tfp:TokenFormat">
          <xs:annotation>
            <xs:documentation>
              Format of the output token
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="AssuranceLevelOfOutputClaims" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              Lists the assurance level of the claims that are retrieved from the Technical Profile.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="RequiredAssuranceLevelsOfInputClaims">
          <xs:annotation>
            <xs:documentation>
              Lists the assurance levels that a claim must have in order for it to be used as an input claim to the Technical Profile.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="RequiredAssuranceLevelOfInputClaims" type="xs:string"/>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="SubjectAuthenticationRequirements">
          <xs:annotation>
            <xs:documentation>
              Requirements regarding the conscious and active participation of the subject in authentication
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:attribute use="required" name="TimeToLive" type="xs:int">
              <xs:annotation>
                <xs:documentation>
                  The maximum number of minutes cached credentials can be used following an active authentication by the subject.
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
            <xs:attribute use="optional" name="ResetExpiryWhenTokenIssued" type="xs:boolean">
              <xs:annotation>
                <xs:documentation>
                  Default is False.  If True then whenever a token is issued
                  (even using a cached credential) the expiry time is set to the current time plus the TimeToLive
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
          </xs:complexType>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="Metadata" type="tfp:metadataTYPE">
          <xs:annotation>
            <xs:documentation>
              This is the data utilized by the protocol for communicating with the endpoint.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="CryptographicKeys" type="tfp:CryptographicKeys">
          <xs:annotation>
            <xs:documentation>
              A list of cryptographic keys used in this technical profile.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="Suppressions" type="tfp:ItemGroup">
          <xs:annotation>
            <xs:documentation>
              A list of suppressions supported by the protocol.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="PreferredBinding" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              If the protocol supports multiple bindings, this represents binding preferred by the protocol, for example HTTP POST or HTTP GET
              in the case of SAML.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="IncludeInSso" type="xs:boolean">
          <xs:annotation>
            <xs:documentation>
              A value indicating whether usage of this technical profile should apply
              single-signon behavior for the session and instead require explicit interaction
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="InputTokenSources" type="tfp:InputTokenSources">
          <xs:annotation>
            <xs:documentation>
              CPIM can send the original token from one claims provider to another claims provider. InputTokenSources are
              the list of technical profiles of the claims providers from which the original tokens are to be sent.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="unbounded" name="InputClaimsTransformations">
          <xs:annotation>
            <xs:documentation>
              ClaimsTransformations can be used to modify existing ClaimsSchema claims or generate new ones. This element contains the
              list of references to ClaimsTransformations that should be executed before any claims are sent to the claims provider or the
              relying party.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="InputClaimsTransformation" type="tfp:ClaimsTransformationReference" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="InputClaims">
          <xs:annotation>
            <xs:documentation>
              A list of the ClaimsSchema claim types that are sent as input to the claims provider or the relying party.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="InputClaim" type="tfp:ClaimsSchemaClaimTypeReference" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
  
        <xs:element name="DisplayClaims" minOccurs="0" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>Defines a list of display claims for user interface controls.</xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element name="DisplayClaim" type="DisplayClaimReference" minOccurs="0" maxOccurs="unbounded" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="PersistedClaims">
          <xs:annotation>
            <xs:documentation>
              A list of the ClaimsSchema claim types that are persisted by the claims provider.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="PersistedClaim" type="tfp:PersistedClaim" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="OutputClaims">
          <xs:annotation>
            <xs:documentation>
              A list of the ClaimsSchema claim types that are received as output from the claims provider.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="OutputClaim" type="tfp:ClaimsSchemaClaimTypeReference" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="unbounded" name="OutputClaimsTransformations">
          <xs:annotation>
            <xs:documentation>
              ClaimsTransformations can be used to modify existing ClaimsSchema claims or generate new ones. This element contains the
              list of references to ClaimsTransformations that should be executed after claims are received from the claims provider.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="OutputClaimsTransformation" type="tfp:ClaimsTransformationReference" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="unbounded" name="ValidationTechnicalProfiles">
          <xs:annotation>
            <xs:documentation>
              A TechnicalProfile can have a set of other TechnicalProfiles that it uses for validation purposes. This section lists all
              such technical profiles.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="ValidationTechnicalProfile">
                <xs:complexType>
                  <xs:annotation>
                    <xs:documentation>
                      The technical profile to be used for validating some or all of the output claims of the referencing technical profile.
                      Therefore, all the input claims of the referenced technical profile must appear in the output claims of the
                      referencing technical profile.
                    </xs:documentation>
                  </xs:annotation>
          <xs:sequence>
            <xs:element minOccurs="0" maxOccurs="unbounded" name="Preconditions" type="tfp:Preconditions">
            <xs:annotation>
              <xs:documentation>
              A list of preconditions that must be satisfied for the validation technical profile to execute.
              </xs:documentation>
            </xs:annotation>
            </xs:element>
          </xs:sequence>
                  <xs:attribute use="required" name="ReferenceId" type="xs:string" />
                  <xs:attribute use="optional" name="ContinueOnSuccess" type="xs:boolean">
                    <xs:annotation>
                      <xs:documentation>
                        A boolean indicating whether validation of any subsequent validation profiles should continue if this
                        profile succeeds. The default is true, meaning that the processing of further validation profiles will continue.
                      </xs:documentation>
                    </xs:annotation>
                  </xs:attribute>
                  <xs:attribute use="optional" name="ContinueOnError" type="xs:boolean">
                    <xs:annotation>
                      <xs:documentation>
                        A boolean indicating whether validation of any subsequent validation profiles should continue if this
                        profile errors. The default is false, meaning that processing of further validation profiles will stop and
                        an error returned.
                      </xs:documentation>
                    </xs:annotation>
                  </xs:attribute>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniqueTechnicalProfileReferenceId">
            <xs:selector xpath="tfp:ValidationTechnicalProfile"/>
            <xs:field xpath="@ReferenceId"/>
          </xs:key>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="SubjectNamingInfo">
          <xs:annotation>
            <xs:documentation>
              Information that controls production of the subject name in tokens (e.g. SAML) where subject name is specified separately
              from claims.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:attribute use="required" name="ClaimType" type="xs:string" />
            <xs:attribute use="optional" name="NameQualifier" type="xs:string" />
            <xs:attribute use="optional" name="SPNameQualifier" type="xs:string" />
            <xs:attribute use="optional" name="Format" type="xs:string" />
            <xs:attribute use="optional" name="SPProvidedID" type="xs:string" />
            <xs:attribute use="optional" name="ExcludeAsClaim" type="xs:boolean" />
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" name="Extensions" type="tfp:Extensions">
          <xs:annotation>
            <xs:documentation>
              An element for including additional information specific to a particular technical profile
            </xs:documentation>
          </xs:annotation>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="IncludeClaimsFromTechnicalProfile" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              A id of different technical profile. All input and output claims from referenced technical profile will be
              added to this technical profile. Referenced technical profile must be defined in the same trust framework policy.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="IncludeTechnicalProfile">
          <xs:complexType>
            <xs:annotation>
              <xs:documentation>
                A id of different technical profile. All data from referenced technical profile will be
                added to this technical profile. Referenced technical profile must exists in trust framework policy.
              </xs:documentation>
            </xs:annotation>
            <xs:attribute use="required" name="ReferenceId" type="xs:string" />
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="UseTechnicalProfileForSessionManagement">
          <xs:complexType>
            <xs:annotation>
              <xs:documentation>
                An id of a technical profile to be used for session managemetn.
              </xs:documentation>
            </xs:annotation>
            <xs:attribute use="required" name="ReferenceId" type="xs:string" />
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="ErrorHandlers">
          <xs:annotation>
            <xs:documentation>
              Error handlers to take action based on different error responses.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="ErrorHandler">
                <xs:complexType>
                  <xs:sequence>
                    <xs:element minOccurs="0" maxOccurs="1" name="ErrorResponseFormat" type="tfp:ErrorResponseFormat" >
                      <xs:annotation>
                        <xs:documentation>
                          Format of error response. Used to indicate the reader of the error response for path matching. Default is json.
                        </xs:documentation>
                      </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="1" maxOccurs="1" name="ResponseMatch" type="xs:string" >
                      <xs:annotation>
                        <xs:documentation>
                          Match path for the response to trigger the action. JSONPath is used for json response. XPath is used for XML response.
                        </xs:documentation>
                      </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="1" maxOccurs="1" name="Action" type="tfp:ErrorHandlingAction" >
                      <xs:annotation>
                        <xs:documentation>
                          Action to perform when the error response matches the pattern.
                        </xs:documentation>
                      </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" maxOccurs="unbounded" name="AdditionalRequestParameters">
                      <xs:complexType>
                        <xs:annotation>
                          <xs:documentation>
                            Additional query string to send for reauthentication action.
                          </xs:documentation>
                        </xs:annotation>
                        <xs:simpleContent>
                          <xs:extension base="xs:string">
                            <xs:attribute name="Key" type="xs:string" use="required"/>
                          </xs:extension>
                        </xs:simpleContent>
                      </xs:complexType>
                    </xs:element>
                  </xs:sequence>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="EnabledForUserJourneys" type="tfp:EnabledForUserJourneysValues">
          <xs:annotation>
            <xs:documentation>
              A boolean indicating if the technical provile should be used within a user journey, this includes ClaimProviderSelections.
              If this value is set to true, it will disable the selection.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
  
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular TechnicalProfile,
            and reference it from other sections of the document, for example OrchestrationSteps and InputTokenSources.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <!--
      Describes a particular user journey, which may refer to sections defined elsewhere.
    -->
    <xs:complexType name="UserJourney">
      <xs:annotation>
        <xs:documentation>
          A User Journey defines all the constructs necessary for a complete user flow.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
  
        <xs:element minOccurs="0" maxOccurs="1" name="AssuranceLevel" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              Specifies a measurement of identity assurance when the claims are presented to the Relying
              Party at the conclusion of the orchestration steps contained in the User Journey.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="PreserveOriginalAssertion" type="xs:boolean">
          <xs:annotation>
            <xs:documentation>
              Claims are presented to the Relying Party Application in a token generated by CPIM. However, a Technical
              Policy may state, using a true or a false for this element, that the original assertion which was returned from
              the Claims Provider(s) must also be preserved so that if needed, it can be looked at by Relying Party for auditing
              or diagnostic purposes.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        
        <xs:element minOccurs="0" maxOccurs="1" name="Authorization">
          <xs:annotation>
              <xs:documentation>
              Specifies relevent information required for the Authorization elements of a UserJourney. This can point to other
              element references in policy for validating information about the request in order to assert the request is allowed.
              </xs:documentation>
          </xs:annotation>
          
          <xs:complexType>
            <xs:sequence>
          
              <xs:element minOccurs="0" maxOccurs="1" name="AuthorizationTechnicalProfiles">
                <xs:annotation>
                  <xs:documentation>
                    A TechnicalProfile can be used to extract information from a request and perform authorization of the request. This section lists all
                    such technical profiles.
                  </xs:documentation>
                </xs:annotation>
                <xs:complexType>
                  <xs:sequence>
                    <xs:element minOccurs="1" maxOccurs="unbounded" name="AuthorizationTechnicalProfile">
                      <xs:complexType>
                        <xs:annotation>
                          <xs:documentation>
                            The technical profile to be used for validating/authorizing incoming data to assert the information is valid for the UserJourney. If
                            the information is invalid, the UserJourney will not execute and the request is Forbidden.
                          </xs:documentation>
                        </xs:annotation>
                        <xs:attribute use="required" name="ReferenceId" type="xs:string" />
                      </xs:complexType>
                    </xs:element>
                  </xs:sequence>
                </xs:complexType>
                <xs:key name="UniqueAuthorizationTechnicalProfileReferenceId">
                  <xs:selector xpath="tfp:AuthorizationTechnicalProfile"/>
                  <xs:field xpath="@ReferenceId"/>
                </xs:key>
              </xs:element>
            
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        
        <xs:element minOccurs="0" maxOccurs="1" name="OrchestrationSteps">
          <xs:annotation>
            <xs:documentation>
              This section lists the orchestration sequence that must be followed through for a successful transaction (i.e. a
              complete user flow). Thus, every User Journey consists of an ordered list of Orchestration Steps (OS) that are
              executed in sequence. If any step fails, the transaction fails.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="OrchestrationStep" type="tfp:OrchestrationStep" />
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniqueOrchestrationStepOrder">
            <xs:selector xpath="tfp:OrchestrationStep"/>
            <xs:field xpath="@Order"/>
          </xs:key>
          <xs:key name="UniqueClaimsExchangeId">
            <xs:selector xpath="tfp:OrchestrationStep/tfp:ClaimsExchanges/tfp:ClaimsExchange"/>
            <xs:field xpath="@Id"/>
          </xs:key>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="ClientDefinition">
          <xs:annotation>
            <xs:documentation>
              References settings definition section that determines the client behavior.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:attribute name="ReferenceId" type="xs:string">
              <xs:annotation>
                <xs:documentation>
                  The identifier of the policy to use.
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
          </xs:complexType>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="CryptographicKeys" type="tfp:CryptographicKeys">
          <xs:annotation>
            <xs:documentation>
              A list of cryptographic keys used in this User Journey.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
  
      </xs:sequence>
  
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular User Journey.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
  
      <xs:attribute use="optional" name="NonInteractive" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            A boolean that is used to indicate whether this particular User Journey is non interactive.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
  
      <xs:attribute use="optional" name="DefaultCpimIssuerTechnicalProfileReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The default Issuer TechnicalProfileId of the claims provider that will mint the token for the relyingParty.
            If absent then CpimIssuerTechicalProfileReferenceId from first SendClaims step would be considered as default.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      
    </xs:complexType>
    
    <xs:complexType name="SubJourney">
      <xs:annotation>
        <xs:documentation>
          A SubJourney describes a part of the User Journey
        </xs:documentation>
      </xs:annotation>
      
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="OrchestrationSteps">
          <xs:annotation>
            <xs:documentation>
              This section lists the orchestration sequence that must be followed through for a successful transaction (i.e. a
              complete user flow). Thus, every SubJourney consists of an ordered list of Orchestration Steps (OS) that are
              executed in sequence. If any step fails, the transaction fails.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="OrchestrationStep" type="tfp:OrchestrationStep" />
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniqueOrchestrationStepOrderForSubJourney">
            <xs:selector xpath="tfp:OrchestrationStep"/>
            <xs:field xpath="@Order"/>
          </xs:key>
          <xs:key name="UniqueClaimsExchangeIdForSubJourney">
            <xs:selector xpath="tfp:OrchestrationStep/tfp:ClaimsExchanges/tfp:ClaimsExchange"/>
            <xs:field xpath="@Id"/>
          </xs:key>
        </xs:element>
      </xs:sequence>
      
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular SubJourney.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      
      <xs:attribute use="required" name="Type" type="tfp:SubJourneyTYPE">
        <xs:annotation>
          <xs:documentation>
            The type of the SubJourney that governs how it is executed in the context of the policy.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
        
    </xs:complexType>
    
    <xs:complexType name="Endpoint">
      <xs:annotation>
        <xs:documentation>
          An Endpoint that describes what UserJourney should be invoked when a user agent lands on the endpoint.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular Endpoint.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="UserJourneyReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The unique identifier of the UserJourney to be executed on invoking the endpoint.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <!--
      Policy definitions that technical policies may refer to
    -->
    <xs:complexType name="BuildingBlocks">
      <xs:annotation>
        <xs:documentation>
          This section contains all the definitions that are used by the Technical Policies.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="ClaimsSchema">
          <xs:annotation>
            <xs:documentation>
              This section defines all the claim types that can be referenced from other sections of the document.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="ClaimType" type="tfp:ClaimType" />
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniqueClaimTypeId">
            <xs:selector xpath="tfp:ClaimType"/>
            <xs:field xpath="@Id"/>
          </xs:key>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="Predicates">
          <xs:annotation>
            <xs:documentation>
              This section defines all the predicates that are used to validate input strings.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="Predicate" type="tfp:Predicate" />
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniquePredicateId">
            <xs:selector xpath="tfp:Predicate"/>
            <xs:field xpath="@Id"/>
          </xs:key>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="InputValidations">
          <xs:annotation>
            <xs:documentation>
              This section defines input validations that combine predicates to create a string validation logic.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="InputValidation" type="tfp:InputValidation" />
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniqueInputValidationId">
            <xs:selector xpath="tfp:InputValidation"/>
            <xs:field xpath="@Id"/>
          </xs:key>
        </xs:element>
      
        <!--New password complexity schema xsd-->
        <xs:element minOccurs="0" maxOccurs="1" name="PredicateValidations">
          <xs:annotation>
            <xs:documentation>
              This section defines predicate validations that combine predicates to create a string validation logic.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="PredicateValidation" type="tfp:PredicateValidation" />
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniquePredicateValidationId">
            <xs:selector xpath="tfp:PredicateValidation"/>
            <xs:field xpath="@Id"/>
          </xs:key>
        </xs:element>
        <!--END-->
  
        <xs:element minOccurs="0" maxOccurs="1" name="ClaimsTransformations">
          <xs:annotation>
            <xs:documentation>
              Contains a list of claims transforms that can be used in Technical Policies.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="ClaimsTransformation" type="tfp:ClaimsTransformation" />
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniqueClaimsTransformationId">
            <xs:selector xpath="tfp:ClaimsTransformation"/>
            <xs:field xpath="@Id"/>
          </xs:key>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="ClientDefinitions">
          <xs:annotation>
            <xs:documentation>
              ClientDefinitions specify various properties specific to the end-user device for which the policy is being executed.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="ClientDefinition" type="tfp:ClientDefinition" />
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniqueClientDefinitionId">
            <xs:selector xpath="tfp:ClientDefinition"/>
            <xs:field xpath="@Id"/>
          </xs:key>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="ContentDefinitions">
          <xs:annotation>
            <xs:documentation>
              Content definitions contain URLs to external content (for example, URLs to pages used in claims providers such as Phone Factor).
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="ContentDefinition" type="tfp:ContentDefinition" />
            </xs:sequence>
          </xs:complexType>
          <xs:key name="UniqueContentDefinitionId">
            <xs:selector xpath="tfp:ContentDefinition"/>
            <xs:field xpath="@Id"/>
          </xs:key>
        </xs:element>
  
        <xs:element minOccurs="0" maxOccurs="1" name="Localization">
          <xs:annotation>
            <xs:documentation>
              Defines the supported cultures and contains strings and collections in those cultures.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="1" name="SupportedLanguages" type="tfp:SupportedLanguages">
                <xs:annotation>
                  <xs:documentation>
                    Defines all the cultures that are supported by this policy.
                  </xs:documentation>
                </xs:annotation>
              </xs:element>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="LocalizedResources" type="tfp:LocalizedResources">
                <xs:annotation>
                  <xs:documentation>
                    Contains all the translated strings for a specific culture.
                  </xs:documentation>
                </xs:annotation>
              </xs:element>
            </xs:sequence>
            <xs:attribute use="optional" name="Enabled" type="xs:boolean">
              <xs:annotation>
                <xs:documentation>
                  If set to true, the Localization section is used for rendering the strings and collections in appropriate languages, otherwise
                  this section is not used.
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
          </xs:complexType>
        </xs:element>
  
        <xs:element name="DisplayControls" minOccurs="0" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>This section defines all display controls associated with user interface controls.</xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element name="DisplayControl" type="DisplayControl" minOccurs="0" maxOccurs="unbounded">
                <xs:annotation>
                  <xs:documentation>Defines the display control associated with user interface control.</xs:documentation>
                </xs:annotation>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  
    <xs:complexType name="SupportedLanguages">
      <xs:annotation>
        <xs:documentation>
          Represents the set of supported language including the default language.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="SupportedLanguage" type="tfp:Culture">
          <xs:annotation>
            <xs:documentation>
              Represents one supported language
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute name="DefaultLanguage" type="tfp:Culture">
        <xs:annotation>
          <xs:documentation>
            This is the default language that the customer will see user journeys in, if he doesnt specify any other supported culture.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="PolicyLanguage" type="tfp:Culture">
        <xs:annotation>
          <xs:documentation>
            This is the the language the default values in the policy are written in.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="MergeBehavior" type="tfp:MergeBehavior">
        <xs:annotation>
          <xs:documentation>
            Specifies how the enumeration values will be merged together with any ClaimType present in a parent policy
            with the same identifier.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="LocalizedResources">
      <xs:annotation>
        <xs:documentation>
  
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="LocalizedCollections">
          <xs:annotation>
            <xs:documentation>
              A collection can have different number of items, and different strings for various cultures. This element
              allows defining the entire collections in various cultures. Examples of collections include the enumerations
              that appear in claim types, e.g. country/region list, and are shown to the user in a drop down list.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="LocalizedCollection" type="tfp:LocalizedCollection" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="LocalizedStrings">
          <xs:annotation>
            <xs:documentation>
              This section is used to define all the strings, except those that appear in collections, in various cultures.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="LocalizedString" type="tfp:LocalizedString" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
      <xs:attribute name="Culture" type="tfp:Culture">
        <xs:annotation>
          <xs:documentation>
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
    <!--
      Specifications for the various low-level types
    -->
    <xs:complexType name="JourneyFraming">
      <xs:annotation>
        <xs:documentation>
          Defines whether content journey framing is supported and the the corresponding
          domains allowed to frame.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Enabled" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Attribute indicating whether journey framing is enabled.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="Sources" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A space seperated list of sources used to populate the CSP frame-ancestors directive
            and the X-Frame-Options headers. In the case if X-Frame-Options if more than one
            source is specified only the first source is included for X-Frame-Options and must
            be an absolute URL.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="JourneyOnError">
      <xs:annotation>
        <xs:documentation>
          Defines whether errors should be returned to the requestor or displayed in service.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Mode" type="tfp:JourneyOnErrorModeType">
        <xs:annotation>
          <xs:documentation>
            Attribute the error handling mode.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="SingleSignOn">
      <xs:annotation>
        <xs:documentation>
          Defines the behavior of the single sign-on functionality for this application policy
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Scope" type="tfp:UserJourneyBehaviorScopeType">
        <xs:annotation>
          <xs:documentation>
            Defines the scope of the single sign-on behavior.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="KeepAliveInDays" type="xs:int">
        <xs:annotation>
          <xs:documentation>
            Defines the number of days to keep the session alive for when a user selects to be remembered.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="EnforceIdTokenHintOnLogout" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Attribute indicating whether the presence of the id_token_hint parameter is required for OIDC logout.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
    <xs:complexType name="AzureApplicationInsights">
      <xs:annotation>
        <xs:documentation>
          DEPRECATED - Use JourneyInsights indicating ApplicationInsights as the telemetry engine.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="InstrumentationKey" type="tfp:InstrumentationKey">
        <xs:annotation>
          <xs:documentation>
            Defines the instrumentation key for the application insights element.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
    <xs:complexType name="JourneyInsights">
      <xs:annotation>
        <xs:documentation>
          Defines the Azure Applications Insight element which includes the application insights script in the user journeys.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="InstrumentationKey" type="tfp:InstrumentationKey">
        <xs:annotation>
          <xs:documentation>
            Defines the instrumentation key for the application insights element.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="TelemetryEngine" type="tfp:TelemetryEngineType">
        <xs:annotation>
          <xs:documentation>
            Values indicating which telemetry engine to use.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="DeveloperMode" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Values indicating whether the aplication insights should operate in developer mode. Default if not specified is false.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="ClientEnabled" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Values indicating whether the aplication insights should be run on the client via JavaScript. Default if not specified is false.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="ServerEnabled" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Values indicating whether the server-side journey recording is enabled. Default if not specified is false.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="TelemetryVersion" type="tfp:ThreePartVersionNumber">
        <xs:annotation>
          <xs:documentation>
            Values indicating whether the version of journey telemetry to use. If not specified the lastest version is used.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
  
    </xs:complexType>
    <xs:complexType name="ContentDefinitionParameters">
      <xs:annotation>
        <xs:documentation>
          Defines a list of key value pairs to be appended to the query string of the content definition load uris.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element name="Parameter" maxOccurs="unbounded" type="tfp:ContentDefinitionParameter">
          <xs:key name="UniqueContentDefinitionParameterName">
            <xs:selector xpath="tfp:ContentDefinitionParameter"/>
            <xs:field xpath="@Name"/>
          </xs:key>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
    <xs:complexType name="ContentDefinitionParameter">
      <xs:annotation>
        <xs:documentation>
          Defines a key value pair that is to be appended to the query string of content definition load uri.
        </xs:documentation>
      </xs:annotation>
      <xs:simpleContent>
        <xs:extension base="xs:string">
          <xs:attribute name="Name" type="xs:string" use="required"/>
        </xs:extension>
      </xs:simpleContent>
    </xs:complexType>
  
    <xs:complexType name="ClaimsTransformation">
      <xs:annotation>
        <xs:documentation>
          Transforms take a set of claims, process them, and output another set of claims.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element name="InputClaims" minOccurs="0" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>
              A list of the Claim Types that are taken as input to the Claims Transformation. Each of these elements contains reference
              to a ClaimType already defined in the ClaimsSchema section.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="InputClaim" type="tfp:ClaimsTransformationClaimTypeReference" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="InputParameters" minOccurs="0" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>
              A list of the parameters that are provided as input to the Claims Transformation. Each of these elements contains a value that is passed
              verbatim to the transformation.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="InputParameter" type="tfp:ClaimsTransformationParameter" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="OutputClaims" minOccurs="0" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>
              A list of the Claim Types that are taken as input to the Claims Transformation. Each of these elements contains reference
              to a ClaimType already defined in the ClaimsSchema section.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="OutputClaim" type="tfp:ClaimsTransformationClaimTypeReference">
                <xs:annotation>
                  <xs:documentation>
                    The Claim Type that is outputted by the Claims Transformation. This element contains reference to a ClaimType already defined
                    in the ClaimsSchema section.
                  </xs:documentation>
                </xs:annotation>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular Claims Transform, and reference it
            from other sections of the document.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="TransformationMethod" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier to reference the published transformation method to be used.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
    <xs:complexType name="ContentDefinition">
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="LoadUri" />
        <xs:element minOccurs="0" maxOccurs="1" name="RecoveryUri" type="tfp:ContentUriTYPE" />
        <xs:element minOccurs="0" maxOccurs="1" name="DataUri" type="tfp:ContentUriTYPE" />
        <xs:element minOccurs="0" maxOccurs="1" name="Metadata" type="tfp:metadataTYPE">
          <xs:annotation>
            <xs:documentation>
              Metadata section that can be used to override API settings and content
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="LocalizedResourcesReferences">
          <xs:annotation>
            <xs:documentation>
              Contains a list of references to localized resources. The reference can be of the form of URL or a machine understandable identifier
              that is used to uniquely identify the specific localized resource in the policy.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="LocalizedResourcesReference" type="tfp:LocalizedResourcesReference" />
            </xs:sequence>
            <xs:attribute use="optional" name="MergeBehavior" type="tfp:MergeBehavior">
              <xs:annotation>
                <xs:documentation>
                  Specifies how the enumeration values will be merged together with any ClaimType present in a parent policy
                  with the same identifier.
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular Content Definition, and reference it
            from other sections of the document.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="LocalizedResourcesReference">
      <xs:attribute use="required" name="Language" type="tfp:Culture" />
      <xs:attribute use="optional"  name="Url" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The url to a localized resource hosted on a CORS enabled endpoint. This resource will be fetched by the clientside code.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional"  name="LocalizedResourcesReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular Localized Resource, and reference it
            from other sections of the document.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="ClientDefinition">
      <xs:annotation>
        <xs:documentation>
          Contains settings for a User Journey on a client.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="1" name="ClientUIFilterFlags" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              These flags are used for indicate the client's UI behavior.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A unique identifier that allows this client definition to be referenced from a User Journey.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="ClaimsProvider">
      <xs:annotation>
        <xs:documentation>
          Represents a Claims Provider, along with its technical profiles.
        </xs:documentation>
      </xs:annotation>    
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="Domains">
          <xs:annotation>
            <xs:documentation>
              Domain names for the claim provider.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="1" maxOccurs="unbounded" name="Domain" type="tfp:nonemptystring">
                <xs:annotation>
                  <xs:documentation>
                    The human understandable domain name for the claim provider.
                  </xs:documentation>
                </xs:annotation>
              </xs:element>
            </xs:sequence>
           </xs:complexType>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="Domain" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The human understandable domain name for the claim provider.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="DisplayName" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The human understandable name of the claims provider that can be displayed to the users.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element name="TechnicalProfiles">
          <xs:annotation>
            <xs:documentation>
              List of Technical Profiles for exchanging claims with this claims provider.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="TechnicalProfile" type="tfp:TechnicalProfile" />
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  
    <xs:complexType name="Preconditions">
      <xs:annotation>
        <xs:documentation>
          A collection of Precondition elements.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="Precondition" type="tfp:Precondition" />
      </xs:sequence>
    </xs:complexType>
  
    <xs:complexType name="Precondition">
      <xs:annotation>
        <xs:documentation>
          Represents a conditional check should is performed to determine if an OrchestrationStep or a validation technical profile should be executed.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="Value" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The data that is used by the check. For example, if the Type of this check is "ClaimsExist", this field
              will specify a ClaimTypeReferenceId to query for.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="Action" type="tfp:PreconditionActionType">
          <xs:annotation>
            <xs:documentation>
              Specifies the action that should be taken if the Precondition check is true, such as "SkipThisOrchestrationStep" and "SkipThisValidationTechnicalProfile"
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute use="required" name="Type" type="tfp:PreconditionType" >
        <xs:annotation>
          <xs:documentation>
            The type of check to perform.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="ExecuteActionsIf" type="xs:boolean" >
        <xs:annotation>
          <xs:documentation>
            Specifies if the actions in this precondition should be performed if the test is true or false.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="PredicateReference">
      <xs:annotation>
        <xs:documentation>
          A reference to a predicate element.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine readable identifier that references a predicate in the policy.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="InputValidation">
      <xs:annotation>
        <xs:documentation>
          A combination of predicate groups and predicates that will define how to validate an input.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="PredicateReferences" type="tfp:PredicateReferences" />
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine readable identifier that can be used to reference the input validation in the policy.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="PredicateReferences">
      <xs:annotation>
        <xs:documentation>
          A set of predicates.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="PredicateReference" type="tfp:PredicateReference" />
      </xs:sequence>
    <!--This attribute will need to be removed in favor of the id in "PredicateGroup"-->
      <xs:attribute name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine readable identifier for the pattern group that cannot be refrenced.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    <!--This attribute will need to be removed in favor of the element type "UserHelpText"-->
      <xs:attribute name="HelpText" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The help text shown for the predicate group in case of an error.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="MatchAtLeast" type="xs:integer">
        <xs:annotation>
          <xs:documentation>
            The least number of predicates that must match for the prediate group to take effect.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="Reject" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            The least number of predicates that must match for the prediate group to take effect.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="Parameter">
      <xs:annotation>
        <xs:documentation>
          Represents a single parameter that will be passed to a predicate method.
        </xs:documentation>
      </xs:annotation>
      <xs:simpleContent>
        <xs:extension base="xs:string">
          <xs:annotation>
            <xs:documentation>
              The value of the parameter.
            </xs:documentation>
          </xs:annotation>
  
          <xs:attribute use="required" name="Id" type="xs:string">
            <xs:annotation>
              <xs:documentation>
                The name of the parameter.
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
        </xs:extension>
      </xs:simpleContent>
    </xs:complexType>
  
    <xs:complexType name="Parameters">
      <xs:annotation>
        <xs:documentation>
          A collection of Parameters passed to a predicate.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="Parameter" type="tfp:Parameter" />
      </xs:sequence>
    </xs:complexType>
  
    <xs:complexType name="Predicate">
      <xs:annotation>
        <xs:documentation>
          Defines a single predicate that will be used to create an input validation.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="UserHelpText" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              A description of the predicate that can be helpful for the users to know what password they should type.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="Parameters" type="tfp:Parameters" />
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular Predicate, and reference it
            from other sections of the document.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="Method" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The method that will be called to validate this predicate, it takes as input the param elements and a string value and returns a boolean.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    <!--This attribute will need to remove in favor of the element type "UserHelpText"-->
      <xs:attribute name="HelpText" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The help text that will be shown to the user if the input validation that the predicate is in fails.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
    
    <!--New password complexity schema xsd-->
    <xs:complexType name="PredicateGroups">
      <xs:annotation>
        <xs:documentation>
          A set of predicate group.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="PredicateGroup" type="tfp:PredicateGroup" />
      </xs:sequence>
    </xs:complexType>
    
    <xs:complexType name="PredicateGroup">
      <xs:annotation>
        <xs:documentation>
          A reference to a predicate element.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="UserHelpText" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              A description of the predicate that can be helpful for the users to know what password they should type.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="PredicateReferences" type="tfp:PredicateReferences" />
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine readable identifier that can be used to indicate the name of predicate group, it can not be referenced.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
    
    <xs:complexType name="PredicateValidation">
      <xs:annotation>
        <xs:documentation>
          A combination of predicate groups and predicates that will define how to validate an input.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="PredicateGroups" type="tfp:PredicateGroups" />
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
        <xs:documentation>
          A machine readable identifier that can be used to reference the predicate validation in the policy.
        </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
    
    <xs:complexType name="PredicateValidationReference">
      <xs:annotation>
        <xs:documentation>
          A reference to an predicate validation element.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine readable identifier that references a predicate validation in the policy.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
    <!--End-->
  
    <xs:complexType name="ClaimsProviderSelections">
      <xs:annotation>
        <xs:documentation>
          A collection of ClaimsProviderSelection elements.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="ClaimsProviderSelection" type="tfp:ClaimsProviderSelection" />
      </xs:sequence>
      <xs:attribute use="optional" name="DisplayOption" type="tfp:ClaimsProviderSelectionDisplayOption" default="DoNotShowSingleProvider" />
    </xs:complexType>
  
    <xs:complexType name="ClaimsProviderSelection">
      <xs:annotation>
        <xs:documentation>
          Shows options for the selection between various claims providers in a given step (such as Google/Facebook/Microsoft Account).
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="optional" name="TargetClaimsExchangeId" type="xs:string" />
      <xs:attribute use="optional" name="ValidationClaimsExchangeId" type="xs:string" />
    </xs:complexType>
  
    <xs:complexType name="ClaimsExchanges">
      <xs:annotation>
        <xs:documentation>
          A collection of ClaimsExchange elements.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="ClaimsExchange" type="tfp:ClaimsExchange" />
      </xs:sequence>
      <xs:attribute use="optional" name="UserIdentity" type="xs:boolean" default="false" />
    </xs:complexType>
  
    <xs:complexType name="ClaimsExchange">
      <xs:annotation>
        <xs:documentation>
          Depending on the Technical Profile being used, a Claims Exchange either redirects the user’s client corresponding to the
          ClaimsProviderSelection that the user may have selected, or makes a server call to exchange claims.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular Claims Exchange step, and reference
            it from a ClaimsProviderSelection step.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="TechnicalProfileReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The unique identifier of the Technical Profile which is used for claims exchange.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
    
    <xs:complexType name="JourneyList">
      <xs:annotation>
        <xs:documentation>
          A list of SubJourneys that are able to be executed during an Orchestration Step
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="Candidate" type="tfp:Candidate" />
      </xs:sequence>
    </xs:complexType>
    
    <xs:complexType name="Candidate">
      <xs:annotation>
        <xs:documentation>
          A candidate is a single journey type that can be invoked on it's own during an Orchestration Step
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="SubJourneyReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The unique identifier for the SubJourney that can be executed
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="ClaimsTransformationReference">
      <xs:annotation>
        <xs:documentation>
          ClaimsTransformations may be used in a TechnicalProfile for transforming claims when they are sent to and received from a claims
          provider. A ClaimsTransformation must be defined in this section before it can be referenced in a TechnicalProfile.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="ReferenceId" type="xs:string" />
    </xs:complexType>
  
    <xs:complexType name="InputValidationReference">
      <xs:annotation>
        <xs:documentation>
          A reference to an input validation element.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine readable identifier that references a predicate in the policy.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="ClaimType">
      <xs:annotation>
        <xs:documentation>
          Defines a single claim type.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="DisplayName" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The human understandable name of the claim type that is displayed to the users on various screens.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="DataType" type="tfp:DataType">
          <xs:annotation>
            <xs:documentation>
              The type of data stored in the claim type, such as String, Boolean, Int or DateTime. This type may be used by
              claims transforms and may thus participate in comparison or arithmetic operations. Associating an appropriate type
              ensures that these operations are performed correctly by the transforms.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="DefaultPartnerClaimTypes">
          <xs:annotation>
            <xs:documentation>
              If a partner claim type is not provided in a claim mapping, then these partner claim types are used for
              the specified protocol.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element minOccurs="0" maxOccurs="unbounded" name="Protocol">
                <xs:complexType>
                  <xs:annotation>
                    <xs:documentation>
                      The list of technical profiles that is allowed to be used against a claims provider selection.
                    </xs:documentation>
                  </xs:annotation>
                  <xs:attribute use="required" name="Name" type="tfp:ProtocolName" />
          <xs:attribute use="optional" name="Handler" type="xs:string" />
                  <xs:attribute use="required" name="PartnerClaimType" type="xs:string" />
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="Mask" type="tfp:claimMaskTYPE">
          <xs:annotation>
            <xs:documentation>
              An optional string of masking characters that can be applied to the claim when displaying the claim for example phone number
              324-232-4343 masked as XXX-XXX-4343
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="AdminHelpText" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              A description of the claim type that can be helpful for the administrators to understand the purpose and/or usage of
              the claim type.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="UserHelpText" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              A description of the claim type that can be helpful for the users to understand the purpose and/or usage of the claim type.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="UserInputType" type="tfp:UserInputType">
          <xs:annotation>
            <xs:documentation>
              The type of input control that should be available to the user when manually entering claim data for this claim type.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="Restriction" type="tfp:Restriction">
          <xs:annotation>
            <xs:documentation>
              The value restrictions for this claim, such as a regular expression or a list of acceptable values.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="1" name="InputValidationReference" type="tfp:InputValidationReference" />
        <xs:element minOccurs="0" maxOccurs="1" name="PredicateValidationReference" type="tfp:PredicateValidationReference" />
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular Claim Type, and reference it
            from other sections of the document.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="StatementType" type="tfp:StatementType" default="Attribute">
        <xs:annotation>
          <xs:documentation>
            The type of statement the claim type represents, such as Attribute, Authentication or Subject, the default being Attribute. This type may be used by
            claims transforms and may thus participate in comparison or arithmetic operations. Associating an appropriate type
            ensures that these operations are performed correctly by the transforms.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="Contact">
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="1" name="DisplayName" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The display name.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="1" maxOccurs="1" name="TelephoneNumber" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The telephone number.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="1" maxOccurs="1" name="Email" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The email address.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="1" maxOccurs="1" name="Role" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The role of the contact.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A machine understandable identifier that is used to uniquely identify this particular Contact.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="DocumentReference">
      <xs:annotation>
        <xs:documentation>
          Certain documents, such as terms of use or privacy policy, may be made available to the Relying Parties or even the
          users before they sign up to the use one of the services provided by CPIM. The RPs may use these documents to determine
          whether the TF is appropriate for the purposes it intends to use it for. The users may view these documents to look at
          the parameters within which RPs and the TF will operate and determine whether they want to participate or not.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="1" name="DisplayName" type="xs:string">
          <xs:annotation>
            <xs:documentation>
              The display name of the document.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="1" maxOccurs="1" name="Url" type="xs:anyURI">
          <xs:annotation>
            <xs:documentation>
              The url where the document is located.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute use="required" name="Id" type="xs:string" />
    </xs:complexType>
    <xs:complexType name="OrchestrationStep">
      <xs:annotation>
        <xs:documentation>
          Specifies the orchestration step.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="Preconditions" type="tfp:Preconditions">
          <xs:annotation>
            <xs:documentation>
              A list of preconditions that must be satisfied for the step to execute.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="ClaimsProviderSelections" type="tfp:ClaimsProviderSelections">
          <xs:annotation>
            <xs:documentation>
              A list of Claims Provider Selection options for the Orchestration Step.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="ClaimsExchanges" type="tfp:ClaimsExchanges">
          <xs:annotation>
            <xs:documentation>
              A list of Claims Exchanges for the Orchestration Step.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
        <xs:element minOccurs="0" maxOccurs="unbounded" name="JourneyList" type="tfp:JourneyList">
          <xs:annotation>
            <xs:documentation>
              A list of available journeys that can be invoked by the Orchestration Step.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute use="required" name="Order" type="xs:int">
        <xs:annotation>
          <xs:documentation>
            The order of the Orchestration Step. Orchestration Steps must appear in increasing order, in which they are executed.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="Type" type="tfp:OrchestrationStepType">
        <xs:annotation>
          <xs:documentation>
            The type of the Orchestration Step.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="ContentDefinitionReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A reference to the Content that the Orchestration Step can display to the user.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="CpimIssuerTechnicalProfileReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            Used on SendClaims steps to define the TechnicalProfileId of the claims provider
            that will mint the token for the relyingParty.  If absent no RP token will be created.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="InputTokenSources">
      <xs:annotation>
        <xs:documentation>
          A list of sources for that can be the input assertions for the current technical profile.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="TechnicalProfile">
          <xs:complexType>
            <xs:attribute use="required" name="Id" type="xs:string">
              <xs:annotation>
                <xs:documentation>
                  A machine understandable identifier that is used to uniquely identify this particular technical policy.
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  
    <xs:complexType name="CryptographicKeys">
      <xs:annotation>
        <xs:documentation>
          Represents the CryptographicKeys that are used within the Policy. Since these are sensitive secrets, the actual cryptographic
          keys are stored outside of the Trust Framework Policy and would generally reside in a system deemed secure for
          cryptographic storage, such as in a hardware security module (HSM) or a key management service (KMS).
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="Key">
          <xs:complexType>
            <xs:attribute use="required" name="Id" type="xs:string">
              <xs:annotation>
                <xs:documentation>
                  A machine understandable identifier that is used to uniquely identify this particular Cryptographic Key.
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
            <xs:attribute use="required" name="StorageReferenceId" type="xs:string">
              <xs:annotation>
                <xs:documentation>
                  An identifier that references the key in the underlying key storage.
                </xs:documentation>
              </xs:annotation>
            </xs:attribute>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
    <xs:complexType name="metadataTYPE">
      <xs:annotation>
        <xs:documentation>
          Defines the element for the protocol provider metadata.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element name="Item" maxOccurs="unbounded" type="tfp:metadataItemTYPE">
          <xs:key name="UniqueMetadataItemKey">
            <xs:selector xpath="tfp:metadataItemTYPE"/>
            <xs:field xpath="@Key"/>
          </xs:key>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  
    <!-- Type for a keyed string value that allows large string values
         such as CDATA or simple strings such as URLs -->
    <xs:complexType name="metadataItemTYPE">
      <xs:annotation>
        <xs:documentation>
          Defines a single metadata item for the protocol provider metadata.
        </xs:documentation>
      </xs:annotation>
      <xs:simpleContent>
        <xs:extension base="xs:string">
          <xs:attribute name="Key" type="xs:string" use="required"/>
        </xs:extension>
      </xs:simpleContent>
    </xs:complexType>
  
    <xs:complexType name="ItemGroup">
      <xs:annotation>
        <xs:documentation>
          Defines a group of items of key/value pairs.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="Item" type="tfp:Item"/>
      </xs:sequence>
    </xs:complexType>
  
    <xs:complexType name="Item">
      <xs:annotation>
        <xs:documentation>
          Defines a single key/value pair item.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Key" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A key that uniquely identifies the item.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="Value" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The value to hold in the item.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="PersistedClaim">
      <xs:annotation>
        <xs:documentation>
          The claim type in the normalized schema that is sent to the claims provider. The claim mappings are used to determine the
          provider claim type before sending to the claims provider.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="ClaimTypeReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            Identifies a Claim Type specified in the Claims Schema.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="PartnerClaimType" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            Identifies the claim type of the external partner that the specified policy claim type maps to. If the PartnerClaimType attribute
            is not specified, then the specified policy claim type is mapped to the partner claim type of the same name.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="DefaultValue" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            If the claim indicated by ClaimTypeReferenceId does not exist, then the DefaultValue is used to create one so it can be used as an
            input claim by the technical profile.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="OverwriteIfExists" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Provides an optional property to the claims provider indicating whether the claim can be overwritten in the claims providers
            records if the claim provider supports overwriting.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="AlwaysUseDefaultValue" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Provides an optional property indicating whether the default claim value should always for the value of the claim.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="DisplayControl">
      <xs:annotation>
        <xs:documentation>
          A group of display elements in self asserted page that allows special interaction with the back-end.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element name="InputClaims" minOccurs="0" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>A list of input claims that indicate the prefilled values for user interface controls.</xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element name="InputClaim" type="DisplayControlClaimTypeReference" minOccurs="0" maxOccurs="unbounded">
                <xs:annotation>
                  <xs:documentation>The input claim that indicates the prefilled value for user interface control.</xs:documentation>
                </xs:annotation>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="DisplayClaims" minOccurs="0" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>A list of display claims to be displayed as user interface controls.</xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element name="DisplayClaim" type="DisplayControlDisplayClaimReference" minOccurs="0" maxOccurs="unbounded">
                <xs:annotation>
                  <xs:documentation>The display claim to be displayed as user interface control.</xs:documentation>
                </xs:annotation>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="OutputClaims" minOccurs="0" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>A list of output claims to be used by the relying technical profile.</xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element name="OutputClaim" type="DisplayControlClaimTypeReference" minOccurs="0" maxOccurs="unbounded">
                <xs:annotation>
                  <xs:documentation>The output claim to be used by the replying technical profile.</xs:documentation>
                </xs:annotation>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
        <xs:element name="Actions" minOccurs="0" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>A list of actions corresponding to front-end user control scenarios.</xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element name="Action" type="DisplayControlAction" minOccurs="0" maxOccurs="unbounded">
                <xs:annotation>
                  <xs:documentation>The display control action corresponding to a front-end user control scenario.</xs:documentation>
                </xs:annotation>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
      <xs:attribute name="Id" type="xs:string" use="required">
        <xs:annotation>
          <xs:documentation>The identifier of the display control.</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="UserInterfaceControlType" type="UserInterfaceControlType" use="required">
        <xs:annotation>
          <xs:documentation>Type of user interface control that allows users to enter and verify claims.</xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="DisplayControlAction">
      <xs:sequence>
        <xs:element name="ValidationClaimsExchange" minOccurs="1" maxOccurs="1">
          <xs:annotation>
            <xs:documentation>
              A list of technical profiles to execute sequentially when the action is invoked.
            </xs:documentation>
          </xs:annotation>
          <xs:complexType>
            <xs:sequence>
              <xs:element name="ValidationClaimsExchangeTechnicalProfile" minOccurs="1" maxOccurs="unbounded">
                <xs:annotation>
                  <xs:documentation>
                    The technical profile reference to execute when action is invoked.
                  </xs:documentation>
                </xs:annotation>
                <xs:complexType>
                  <xs:sequence>
                    <xs:element minOccurs="0" maxOccurs="unbounded" name="Preconditions" type="tfp:Preconditions">
                      <xs:annotation>
                        <xs:documentation>
                          A list of preconditions that must be satisfied for the validation technical profile to execute.
                        </xs:documentation>
                      </xs:annotation>
                    </xs:element>
                  </xs:sequence>
                  <xs:attribute name="TechnicalProfileReferenceId" type="xs:string" use="required">
                    <xs:annotation>
                      <xs:documentation>
                        An identifier that is a reference to a Technical Profile specified in the one of the Claims Providers.
                      </xs:documentation>
                    </xs:annotation>
                  </xs:attribute>
                  <xs:attribute use="optional" name="ContinueOnSuccess" type="xs:boolean">
                    <xs:annotation>
                      <xs:documentation>
                        A boolean indicating whether validation of any subsequent validation profiles should continue if this
                        profile succeeds. The default is true, meaning that the processing of further validation profiles will continue.
                      </xs:documentation>
                    </xs:annotation>
                  </xs:attribute>
                  <xs:attribute use="optional" name="ContinueOnError" type="xs:boolean">
                    <xs:annotation>
                      <xs:documentation>
                        A boolean indicating whether validation of any subsequent validation profiles should continue if this
                        profile errors. The default is false, meaning that processing of further validation profiles will stop and
                        an error returned.
                      </xs:documentation>
                    </xs:annotation>
                  </xs:attribute>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
      <xs:attribute name="Id" type="xs:string" use="required">
        <xs:annotation>
          <xs:documentation>
            The identifier of the display control action associated with a user interface scenario.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="DisplayClaimReference">
      <xs:attribute name="ClaimTypeReferenceId" type="xs:string" use="optional">
        <xs:annotation>
          <xs:documentation>
            An identifier that is a reference to a ClaimType specified in the ClaimsSchema.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="DisplayControlReferenceId" type="xs:string" use="optional">
        <xs:annotation>
          <xs:documentation>An identifier that is a reference to a defined DisplayControl.</xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="Required" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Identifies whether or not the user input is required for further actions.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="DisplayControlClaimTypeReference">
      <xs:attribute name="ClaimTypeReferenceId" type="xs:string" use="optional">
        <xs:annotation>
          <xs:documentation>
            An identifier that is a reference to a ClaimType specified in the ClaimsSchema.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="Required" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Identifies whether or not the claim is required for this technical profile. If this property is not specified, false is assumed,
            meaning that the given claim may be utilized if available, but its absence does not indicate an error. For claims that are user
            asserted, this property controls whether or not the user is required to fill out the associated field before continuing.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="DefaultValue" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            If the claim indicated by ClaimTypeReferenceId does not exist, then the DefaultValue is used to create one so it can be used as an
            input claim by the technical profile.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="AlwaysUseDefaultValue" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Provides an optional property indicating whether the default claim value should always for the value of the claim.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="DisplayControlDisplayClaimReference">
      <xs:attribute name="ClaimTypeReferenceId" type="xs:string" use="optional">
        <xs:annotation>
          <xs:documentation>
            An identifier that is a reference to a ClaimType specified in the ClaimsSchema.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute name="ControlClaimType" type="xs:string" use="optional">
        <xs:annotation>
          <xs:documentation>
            Identifies the control type of the display control that is mapped to the specified policy claim type.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="Required" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Identifies whether or not the user input is required for further actions.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="ClaimsSchemaClaimTypeReference">
      <xs:sequence>
        <xs:element name="From" type="tfp:FromTechnicalProfileReference" maxOccurs="unbounded" minOccurs="0">
          <xs:annotation>
            <xs:documentation>
              A reference to a Technical Profile which constrains the source of the claim to one or more
              technical profiles. If no from is specified then the claim can be sourced from any technical
              profile.
            </xs:documentation>
          </xs:annotation>
        </xs:element>
      </xs:sequence>
      <xs:attribute use="required" name="ClaimTypeReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            An identifier that is a reference to a ClaimType specified in the ClaimsSchema.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="PartnerClaimType" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            Identifies the claim type of the external partner that is mapped to the specified policy claim type. If the PartnerClaimType
            attribute is not specified, then the partner claim type of the same name as the specified policy claim type is mapped instead.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="Required" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Identifies whether or not the claim is required for this technical profile. If this property is not specified, false is assumed,
            meaning that the given claim may be utilized if available, but its absence does not indicate an error. For claims that are user
            asserted, this property controls whether or not the user is required to fill out the associated field before continuing.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="DefaultValue" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            If the claim indicated by ClaimTypeReferenceId does not exist, then the DefaultValue is used to create one so it can be used as an
            input claim by the technical profile.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="AlwaysUseDefaultValue" type="xs:boolean">
        <xs:annotation>
          <xs:documentation>
            Provides an optional property indicating whether the default claim value should always for the value of the claim.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="ClaimsTransformationClaimTypeReference">
      <xs:attribute use="required" name="ClaimTypeReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            An identifier that is a reference to a ClaimType specified in the ClaimsSchema.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="TransformationClaimType" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            Identifies the claim type of the transformation that is mapped to the specified policy claim type. If the TransformationClaimType
            attribute is not specified, then the transformation claim type of the same name as the specified policy claim type is mapped instead.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="FromTechnicalProfileReference">
      <xs:attribute use="required" name="TechnicalProfileReferenceId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            An identifier that is a reference to a Technical Profile specified in the one of the Claims Providers.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="claimMaskTYPE">
      <xs:annotation>
        <xs:documentation>
          An optional string for masking a claim when displaying the claim for example phone number
          324-232-4343 masked as XXX-XXX-4343. Can either be a simple substitution mask or a regular
          expression which uses named groups
        </xs:documentation>
      </xs:annotation>
      <xs:simpleContent>
        <xs:extension base="xs:string">
          <xs:attribute name="Type" type="tfp:MaskTypeTYPE" use="required"/>
          <xs:attribute name="Regex" type="xs:string" use="optional"/>
        </xs:extension>
      </xs:simpleContent>
    </xs:complexType>
  
    <xs:complexType name="EnumerationItem">
      <xs:annotation>
        <xs:documentation>
          Defines an available option for the user to select for a claim in the UI, such as a value in a dropdown.
        </xs:documentation>
      </xs:annotation>
      <xs:simpleContent>
        <xs:extension base="xs:string">
          <xs:attribute use="required" name="Text" type="xs:string">
            <xs:annotation>
              <xs:documentation>
                The user-friendly display string that should be shown to the user in the UI for this option.
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute use="required" name="Value" type="xs:string">
            <xs:annotation>
              <xs:documentation>
                The claim value associated with selecting this option.
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute use="optional" name="SelectByDefault" type="xs:boolean">
            <xs:annotation>
              <xs:documentation>
                A value indicating whether or not this option should be selected by default in the UI.
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
        </xs:extension>
      </xs:simpleContent>
    </xs:complexType>
  
    <xs:complexType name="Pattern">
      <xs:annotation>
        <xs:documentation>
          Defines a pattern restriction, such as a regular expression, to be placed on values for a specific claim type.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="RegularExpression" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A regular expression that claims of this type must match in order to be valid.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="optional" name="HelpText" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            A string that can describe the pattern/regular expression for this claim to the user.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="Restriction">
      <xs:annotation>
        <xs:documentation>
          Defines the element for specifying value restrictions for a claim, such as regular expressions or a list of acceptable values.
        </xs:documentation>
      </xs:annotation>
      <xs:choice minOccurs="1">
        <xs:sequence>
          <xs:element minOccurs="0" maxOccurs="unbounded" name="Enumeration" type="tfp:EnumerationItem" />
        </xs:sequence>
        <xs:element minOccurs="0" maxOccurs="1" name="Pattern" type="tfp:Pattern" />
      </xs:choice>
      <xs:attribute use="optional" name="MergeBehavior" type="tfp:MergeBehavior">
        <xs:annotation>
          <xs:documentation>
            Specifies how the enumeration values will be merged together with any ClaimType present in a parent policy
            with the same identifier. If no value is given for this we use replaceAll by default.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="TenantListType">
      <xs:annotation>
        <xs:documentation>
          A list of tenant references used when the inheritance rule is an allow or deny list.
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="Tenant" type="tfp:TenantReferenceType" />
      </xs:sequence>
    </xs:complexType>
  
    <xs:complexType name="PolicyIdPatternType">
      <xs:annotation>
        <xs:documentation>
          A list of tenant references used when the inheritance rule is an allow or deny list.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="Type" type="tfp:PatternTYPE">
        <xs:annotation>
          <xs:documentation>
            The type of pattern constraint to apply to the policy id.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="Pattern" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The actual pattern to be applied to the policy id.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="TenantReferenceType">
      <xs:annotation>
        <xs:documentation>
          Defines a reference to a tenant using the tenant guid as the reference id.
        </xs:documentation>
      </xs:annotation>
      <xs:attribute use="required" name="ReferenceId" type="tfp:TenantObjectId">
        <xs:annotation>
          <xs:documentation>
            The unique identifier of the object ID of the Azure tenant.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="ClaimsTransformationParameter">
      <xs:attribute use="required" name="Id" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            An identifier that is a reference to a parameter of the TransformationMethod.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="DataType" type="tfp:DataType">
        <xs:annotation>
          <xs:documentation>
            The type of data of the parameter, such as String, Boolean, Int or DateTime. This type is used to perform arithmetic
            operations correctly.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="Value" type="xs:string">
        <xs:annotation>
          <xs:documentation>
            The value that is to be provided to the TransformationMethod when invoked.
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
    </xs:complexType>
  
    <xs:complexType name="Extensions" mixed="false">
      <xs:annotation>
        <xs:documentation>
          An extension point for elements that allows any xml from any namespace outside of
          the document namespaces to be included in the element
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:any namespace="##any" processContents="skip" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:complexType>
  
    <xs:complexType name="LocalizedCollection">
      <xs:annotation>
        <xs:documentation>
  
        </xs:documentation>
      </xs:annotation>
      <xs:sequence>
        <xs:element minOccurs="1" maxOccurs="unbounded" name="Item" type="tfp:EnumerationItem" />
      </xs:sequence>
      <xs:attribute use="required" name="ElementType" type="xs:string">
        <xs:annotation>
          <xs:documentation>
  
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="ElementId" type="xs:string">
        <xs:annotation>
          <xs:documentation>
  
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
      <xs:attribute use="required" name="TargetCollection" type="xs:string">
        <xs:annotation>
          <xs:documentation>
  
          </xs:documentation>
        </xs:annotation>
      </xs:attribute>
  
    </xs:complexType>
  
    <xs:complexType name="LocalizedString">
      <xs:annotation>
        <xs:documentation>
  
        </xs:documentation>
      </xs:annotation>
      <xs:simpleContent>
        <xs:extension base="xs:string">
          <xs:attribute use="required" name="ElementType" type="xs:string">
            <xs:annotation>
              <xs:documentation>
  
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute name="ElementId" type="xs:string">
            <xs:annotation>
              <xs:documentation>
  
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
          <xs:attribute use="required" name="StringId" type="xs:string">
            <xs:annotation>
              <xs:documentation>
  
              </xs:documentation>
            </xs:annotation>
          </xs:attribute>
        </xs:extension>
      </xs:simpleContent>
    </xs:complexType>
  
    <!--
      Enumerations and pattern restrictions
    -->
  
    <xs:simpleType name="ErrorResponseFormat">
      <xs:annotation>
        <xs:documentation>
          Specifies to format type of error response
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="json" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="JourneyOnErrorModeType">
      <xs:annotation>
        <xs:documentation>
          Specifies how journey errors are to be communicated to the user/requestor.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="ReturnToRequestor">
          <xs:annotation>
            <xs:documentation>
              Error is returned to the requestor using protocol semantics.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="DisplayInService">
          <xs:annotation>
            <xs:documentation>
              Display the error message in the service.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
    
    <xs:simpleType name="ErrorHandlingAction">
      <xs:annotation>
        <xs:documentation>
          Specifies to handle error responses.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Reauthenticate">
          <xs:annotation>
            <xs:documentation>
              Ask the user to reauthenticate for a specific error case
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="InvalidClient">
          <xs:annotation>
            <xs:documentation>
              Display the message indicating client key/secret is not configured properly
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="MergeBehavior">
      <xs:annotation>
        <xs:documentation>
          Specifies how the contents of the node will be merged together with data from parent policies
          with the same unique identifer.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Append">
          <xs:annotation>
            <xs:documentation>
              Specifies that the collection of data present should be appended to the end of the
              collection specified in the parent policy.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="Prepend">
          <xs:annotation>
            <xs:documentation>
              Specifies that the collection of data present should be added before the
              collection specified in the parent policy.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="ReplaceAll">
          <xs:annotation>
            <xs:documentation>
              Specifies that the collection of data specified in the parent policy should be ignored,
              using instead the data specified in the current policy.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="MaskTypeTYPE">
      <xs:annotation>
        <xs:documentation>
          The types of claim masks
          1. Simple, a simple text mask that is
          applied to the leading portion of a string claim.
          2. A regular expression that can be applied
          to the string claim as whole
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Simple" />
        <xs:enumeration value="Regex" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="ProtocolName">
      <xs:annotation>
        <xs:documentation>
          The names of the valid protocols supported by CPIM.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="None" />
        <xs:enumeration value="OAuth1" />
        <xs:enumeration value="OAuth2" />
        <xs:enumeration value="SAML2" />
        <xs:enumeration value="OpenIdConnect" />
        <xs:enumeration value="WsFed" />
        <xs:enumeration value="WsTrust" />
        <xs:enumeration value="UProve11" />
        <xs:enumeration value="Proprietary" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="EnabledForUserJourneysValues">
      <xs:annotation>
        <xs:documentation>
          The list of acceptable values for "EnabledForUserJourneys" property: true and Always will execute the technical profile, false and Never will
          always skip it, and OnClaimsExistence will only execute the technical profile if the claim specified in the technical profile's metadata is
          present in the user journey storage.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="true" />
        <xs:enumeration value="false" />
        <xs:enumeration value="OnClaimsExistence" />
        <xs:enumeration value="Always" />
        <xs:enumeration value="Never" />
        <xs:enumeration value="OnItemExistenceInStringCollectionClaim" />
        <xs:enumeration value="OnItemAbsenceInStringCollectionClaim" />
      </xs:restriction>
    </xs:simpleType>
    
    <xs:simpleType name="ClaimsProviderSelectionDisplayOption">
      <xs:annotation>
        <xs:documentation>
          The list of acceptable values for how the claims provider selection page should be displayed
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="DoNotShowSingleProvider" />
        <xs:enumeration value="ShowSingleProvider" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="TokenFormat">
      <xs:annotation>
        <xs:documentation>
          The token formats supported by CPIM.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="JSON" />
        <xs:enumeration value="JWT" />
        <xs:enumeration value="SAML11" />
        <xs:enumeration value="SAML2" />
        <xs:enumeration value="CpimUnsigned" />
        <xs:enumeration value="UProve11" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="ScriptExecutionType">
      <xs:annotation>
        <xs:documentation>
          Describes the supported script execution modes.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Disallow">
          <xs:annotation>
            <xs:documentation>
              Script execution is not allowed on the client and any 3rd party content containing script will be blocked.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="Allow">
          <xs:annotation>
            <xs:documentation>
              Script execution is permitted
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="OrchestrationStepType">
      <xs:annotation>
        <xs:documentation>
          Specifies the type of the Orchestration Step.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="ConsentScreen">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step presents text to the user to which the user must consent.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="ClaimsProviderSelection">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step presents various Claims Providers to the user for the user to select one.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="CombinedSignInAndSignUp">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step presents a combined social provider signin and local account signup page.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="ClaimsExchange">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step exchanges Claims with a Claims Provider.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="ReviewScreen">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step presents a review screen for the user to review the claims which the user
              must accept.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="SendClaims">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step sends the claims to the Relying Party.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="GetClaims">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step processes claim data sent to the service from the relying party.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="UserDialog">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step presents a user dialog to the user for the capturing of information.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="InvokeSubJourney">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step has the ability to invoke one or more SubJourneys.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="Noop">
          <xs:annotation>
            <xs:documentation>
              Indicates that the Orchestration Step does nothing and is included to cope with errors in layering.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="UserJourneyBehaviorScopeType">
      <xs:annotation>
        <xs:documentation>
          Defines the scope of single sign-on behavior in the user journey.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Suppressed">
          <xs:annotation>
            <xs:documentation>
              Indicates that the behavior is suppressed. For exmaple in the case of SSO no session is maintained for the user and the user will always
              be prompted for identity provider selection.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="TrustFramework">
          <xs:annotation>
            <xs:documentation>
              Indicates that the behavior is applied for all policies in the trust framework. For example a user being put through two policy journeys
              for a given trust framework will not be prompted for identity provider selection.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="Tenant">
          <xs:annotation>
            <xs:documentation>
              Indicates that the behavior is applied for all policies in the tenant. For example a user being put through two policy journeys
              for a given tenant will not be prompted for identity provider selection.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="Application">
          <xs:annotation>
            <xs:documentation>
              Indicates that the behavior is applied for all policies for the application making the request. For example a user being put through two policy journeys
              for a given application will not be prompted for identity provider selection.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="Policy">
          <xs:annotation>
            <xs:documentation>
              Indicates that the behavior only applies to a policy. For example a user being put through two policy journeys
              for a given trust framework will be prompted for identity provider selection when switching between policies.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="PreconditionType">
      <xs:annotation>
        <xs:documentation>
          Specifies the type of query that is being performed for this precondition.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="ClaimsExist">
          <xs:annotation>
            <xs:documentation>
              Specifies that the actions should be performed if the specified Claims exist in the
              user's current Claim set.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="ClaimEquals">
          <xs:annotation>
            <xs:documentation>
              Specifies that the actions should be performed if the specified Claim exists and its
              values is equal to the specified value.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="PreconditionActionType">
      <xs:annotation>
        <xs:documentation>
          Specifies the action that should be taken if the Precondition check within
          an OrchestrationStep is true.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="SkipThisOrchestrationStep">
          <xs:annotation>
            <xs:documentation>
              Specifies that the associated OrchestrationStep should not be executed.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      <xs:enumeration value="SkipThisValidationTechnicalProfile">
          <xs:annotation>
            <xs:documentation>
              Specifies that the associated validation technical profile should not be executed.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="DataType">
      <xs:annotation>
        <xs:documentation>
          The supported data types that the claims or parameters can have. These types are a subset of the types specified by
          W3C XML Schema documentation, which can be found at http://www.w3.org/TR/xmlschema-2.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="boolean"/>
        <xs:enumeration value="date"/>
        <xs:enumeration value="dateTime"/>
        <xs:enumeration value="duration"/>
        <xs:enumeration value="int"/>
        <xs:enumeration value="long"/>
        <xs:enumeration value="string"/>
        <xs:enumeration value="stringCollection"/>
        <xs:enumeration value="alternativeSecurityIdCollection"/>
        <xs:enumeration value="userIdentityCollection"/>
        <xs:enumeration value="userIdentity"/>
        <xs:enumeration value="phoneNumber"/>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="UserInputType">
      <xs:annotation>
        <xs:documentation>
          Represents the type of input controls that should be available to the user when manually entering claim data.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="TextBox"/>
        <xs:enumeration value="EmailBox"/>
        <xs:enumeration value="DateTimeDropdown"/>
        <xs:enumeration value="RadioSingleSelect"/>
        <xs:enumeration value="DropdownSingleSelect"/>
        <xs:enumeration value="CheckboxMultiSelect"/>
        <xs:enumeration value="Password"/>
        <xs:enumeration value="Readonly"/>
        <xs:enumeration value="Button"/>
      <xs:enumeration value="Paragraph"/>
      </xs:restriction>
    </xs:simpleType>
    
    <xs:simpleType name="UserInterfaceControlType">
      <xs:annotation>
        <xs:documentation>
          Represents the type of input controls that should be available to the user when manually entering claim data. This is successor of "UserInputType".
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="VerificationControl" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="TelemetryEngineType">
      <xs:annotation>
        <xs:documentation>
          Represents the telemetry engines that can be used as part of journey insights.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="ApplicationInsights"/>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="StatementType">
      <xs:annotation>
        <xs:documentation>
          Describes the category of statement that the claim belongs to, used for comapring authentication contexts
          and issuing tokens
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Attribute">
          <xs:annotation>
            <xs:documentation>
              A general claim about the authenticated individual
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="Authentication">
          <xs:annotation>
            <xs:documentation>
              A claim providing information about how the individual
              was authenticated
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="Subject">
          <xs:annotation>
            <xs:documentation>
              A claim providing a means of identifying an individual
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="Culture">
      <xs:annotation>
        <xs:documentation>
          Represents a culture for displaying content.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:pattern value="[a-z]{1,3}(-[a-zA-Z0-9]{2,4}){0,2}" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="TenantId">
      <xs:annotation>
        <xs:documentation>
          Represents a tenant id.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:pattern value="[A-Za-z0-9\.]{3,63}" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="TenantObjectId">
      <xs:annotation>
        <xs:documentation>
          Represents the object id of an Azure tenant.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:pattern value="([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}"/>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="InstrumentationKey">
      <xs:annotation>
        <xs:documentation>
          Represents the instrumentation key for an Azure Application insights instance.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:pattern value="([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}"/>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="PolicyId">
      <xs:annotation>
        <xs:documentation>
          Represents the pattern to which a policyId must conform.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:minLength value="1"/>
        <xs:pattern value="[A-Za-z0-9_\-\.]*[A-Za-z0-9_\-]+" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="PolicyIdPattern">
      <xs:annotation>
        <xs:documentation>
          Represents a pattern that can be used to construct a valid policyId. This field supports dynamic parameters.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:minLength value="1"/>
        <xs:pattern value="[A-Za-z0-9_\-{}\.]*[A-Za-z0-9_\-{}]+" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="Weight">
      <xs:annotation>
        <xs:documentation>
          Represents weight of a policy.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:int">
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="Match">
      <xs:annotation>
        <xs:documentation>
          Defines an attribute that can be passed into the query string, that will match the policy to be redirected to.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:minLength value="1"/>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="FourPartVersionNumber">
      <xs:annotation>
        <xs:documentation>
          Represents a four part version number in the format 9.9.9.9.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:maxLength value="256"/>
        <xs:minLength value="1" />
        <xs:pattern value="[0-9][.][0-9][.][0-9][.][0-9]" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="ThreePartVersionNumber">
      <xs:annotation>
        <xs:documentation>
          Represents a three part version number in the format 9.9.9.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:maxLength value="256"/>
        <xs:minLength value="1" />
        <xs:pattern value="[0-9][.][0-9][.][0-9]" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="CryptographicKeyType" >
      <xs:annotation>
        <xs:documentation>
          Contains an enumeration of the key types supported by CPIM.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="UProveKey">
          <xs:annotation>
            <xs:documentation>
              A U-Prove Key.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="X509Certificate">
          <xs:annotation>
            <xs:documentation>
              A X-509 Certificate.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="Secret">
          <xs:annotation>
            <xs:documentation>
              A secret key.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="ContentUriTYPE" >
      <xs:annotation>
        <xs:documentation>
          Type that restricts a string to either an absolute or
          relative URL. Matches https://domain/path, http://domain/path
          and ~/path
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:pattern value="^(http://|https://|~/)([\w.,@?^=%&amp;:~+#\-_$!’();]+/)*([\w.,@?^=%&amp;:~+#\-_$!’();]+/?)$" />
        <xs:pattern value="^urn:[a-z0-9][a-z0-9-]{0,31}:[a-z0-9()+,\/\-.:=@;$_!*'%\/?#]+$" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="urlTYPE" >
      <xs:annotation>
        <xs:documentation>
          Type that restricts a string to either an absolute https URL. Matches https://domain/path.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:pattern value="^(https://)([\w.,@?^=%&amp;:~+#\-_$!’();]+/)*([\w.,@?^=%&amp;:~+#\-_$!’();]+/?)$" />
      </xs:restriction>
    </xs:simpleType>
    
    <xs:simpleType name="DeploymentModeType">
      <xs:annotation>
        <xs:documentation>
          The names of the valid values for a policy's DeploymentMode attribute.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Development" />
        <xs:enumeration value="Production" />
        <xs:enumeration value="Debugging" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="SessionExpiryTypeTYPE">
      <xs:annotation>
        <xs:documentation>
          The names of the valid values the single sign on session type.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Rolling" />
        <xs:enumeration value="Absolute" />
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="DerivingPoliciesType">
      <xs:annotation>
        <xs:documentation>
          Represents the type of deriving policies that can be specified for policy inheritance.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="All">
          <xs:annotation>
            <xs:documentation>Any policy can inherit from this policy.</xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="SameTenant">
          <xs:annotation>
            <xs:documentation>Only policies in the same tenant can inherit from this policy. The default.</xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="AllowList">
          <xs:annotation>
            <xs:documentation>Only tenants explicitly listed in the tenants list can inherit from this policy.</xs:documentation>
          </xs:annotation>
        </xs:enumeration>
        <xs:enumeration value="DenyList">
          <xs:annotation>
            <xs:documentation>Only tenants explicitly listed in the tenants list are blocked from inheriting from this policy. Anyone else can.</xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="PatternTYPE">
      <xs:annotation>
        <xs:documentation>
          The types of pattern constraints that can be used when
          constraining policies.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Prefix" >
          <xs:annotation>
            <xs:documentation>
              Specifies that a policy id needs to start with the specified prefix.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
    
    <xs:simpleType name="SubJourneyTYPE">
      <xs:annotation>
        <xs:documentation>
          Represents the types of SubJourneys that can be constructed in policy.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:enumeration value="Transfer">
          <xs:annotation>
            <xs:documentation>
              Represents a type of SubJourney that transfer control from the current execution context, either a SubJourney or UserJourney, into a new SubJourney execution context.
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      <xs:enumeration value="Call">
          <xs:annotation>
            <xs:documentation>
              Represents a type of SubJourney that is executed inside of the current User Journey. The invoked SubJourney yields control back to the original User Journey or SubJourney upon completion
            </xs:documentation>
          </xs:annotation>
        </xs:enumeration>
      </xs:restriction>
    </xs:simpleType>
  
    <xs:simpleType name="nonemptystring">
      <xs:annotation>
        <xs:documentation>
          Represents a string which cannot be empty.
        </xs:documentation>
      </xs:annotation>
      <xs:restriction base="xs:string">
        <xs:maxLength value="256"/>
        <xs:minLength value="1" />
      </xs:restriction>
    </xs:simpleType>
    
  </xs:schema>
  
    `;

  static ADALresource=varADALresource; 
  static ADALauthURLPrefix=varADALauthURLPrefix;
  static ADALauthURLDeviceLogin=varADALauthURLDeviceLogin;
  static B2CGraphEndpoint=varB2CGraphEndpoint; 
  static SamplesYourTenant=varSamplesYourTenant;  
  static TenantRegion=varTenantRegion;

  // static ADALresource: string ="https://graph.microsoft.com"; 
  // static ADALauthURLPrefix="https://login.microsoftonline.com/";
  // static ADALauthURLDeviceLogin="https://device.login.microsoftonline.com/";
  // static B2CGraphEndpoint="https://graph.microsoft.com/beta/trustFramework/policies"; 
  // static SamplesYourTenant ="yourtenant.onmicrosoft.com";  
  // static TenantRegion=".onmicrosoft.com" 


  // static ADALresource: string ="https://microsoftgraph.chinacloudapi.cn"; 
  // static ADALauthURLPrefix="https://login.chinacloudapi.cn/"; 
  // static ADALauthURLDeviceLogin="https://device.login.chinacloudapi.cn/";
  // static B2CGraphEndpoint="https://microsoftgraph.chinacloudapi.cn/beta/trustFramework/policies"; 
  // static SamplesYourTenant ="yourtenant.partner.onmschina.cn";  
  // static TenantRegion=".partner.onmschina.cn"  

}
