/*
 * Copyright 2021-Present The Serverless Workflow Specification Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*****************************************************************************************
 *
 * /!\ This file is computer generated. Any manual modification can and will be lost. /!\
 *
 *****************************************************************************************/

/**
 * A map of type names and their corresponding schema
 */
export const validationPointers = {
  Workflow: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#',
  AllEventConsumptionStrategy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventConsumptionStrategy/oneOf/0',
  AllEventConsumptionStrategyConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventConsumptionStrategy/oneOf/0/properties/all',
  AnyEventConsumptionStrategy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventConsumptionStrategy/oneOf/1',
  AnyEventConsumptionStrategyConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventConsumptionStrategy/oneOf/1/properties/any',
  AnyEventConsumptionStrategyUntil:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventConsumptionStrategy/oneOf/1/properties/until',
  AnyEventUntilConsumed:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventConsumptionStrategy/oneOf/1/properties/until/oneOf/1',
  AsyncApiArguments: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/0/properties/with',
  AuthenticationPolicy: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy',
  AuthenticationPolicyReference:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/referenceableAuthenticationPolicy/oneOf/0',
  BasicAuthenticationPolicy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/0',
  BasicAuthenticationPolicyConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/0/properties/basic',
  BasicAuthenticationProperties:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/0/properties/basic/oneOf/0',
  BearerAuthenticationPolicy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/1',
  BearerAuthenticationPolicyConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/1/properties/bearer',
  BearerAuthenticationProperties:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/1/properties/bearer/oneOf/0',
  CallAsyncAPI: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/0',
  CallFunction: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/4',
  CallGRPC: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/1',
  CallHTTP: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/2',
  CallOpenAPI: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/3',
  CallTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask',
  Catalog: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/catalog',
  CatchErrors:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/tryTask/properties/catch/properties/errors',
  ConstantBackoff:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/retryPolicy/properties/backoff/oneOf/0',
  Container:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/0/properties/container',
  ContainerEnvironment:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/0/properties/container/properties/environment',
  ContainerLifetime:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/0/properties/container/properties/lifetime',
  ContainerPorts:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/0/properties/container/properties/ports',
  ContainerVolumes:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/0/properties/container/properties/volumes',
  DigestAuthenticationPolicy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/2',
  DigestAuthenticationPolicyConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/2/properties/digest',
  DigestAuthenticationProperties:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/2/properties/digest/oneOf/0',
  Document: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/document',
  DoTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/doTask',
  Duration: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/duration',
  DurationInline: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/duration/oneOf/0',
  EmitEventDefinition:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/emitTask/properties/emit/properties/event',
  EmitEventWith:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/emitTask/properties/emit/properties/event/properties/with',
  EmitTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/emitTask',
  EmitTaskConfiguration: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/emitTask/properties/emit',
  Endpoint: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/endpoint',
  EndpointConfiguration: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/endpoint/oneOf/2',
  EndpointUri: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/endpoint/oneOf/2/properties/uri',
  Error: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/error',
  ErrorFilter: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/errorFilter',
  ErrorInstance: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/error/properties/instance',
  ErrorType: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/error/properties/type',
  EventConsumptionStrategy: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventConsumptionStrategy',
  EventData: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventProperties/properties/data',
  EventDataschema:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventProperties/properties/dataschema',
  EventFilter: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventFilter',
  EventFilterCorrelate:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventFilter/properties/correlate',
  EventSource: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventProperties/properties/source',
  EventTime: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventProperties/properties/time',
  ExponentialBackOff:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/retryPolicy/properties/backoff/oneOf/1',
  Export: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/export',
  ExportAs: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/export/properties/as',
  Extension: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/extension',
  ExtensionItem: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use/properties/extensions/items',
  ExternalResource: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/externalResource',
  ExternalScript:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/1/properties/script/oneOf/1',
  FlowDirective: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/flowDirective',
  ForkTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/forkTask',
  ForkTaskConfiguration: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/forkTask/properties/fork',
  ForTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/forTask',
  ForTaskConfiguration: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/forTask/properties/for',
  FunctionArguments: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/4/properties/with',
  GRPCArguments: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/1/properties/with',
  HTTPArguments: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/2/properties/with',
  HTTPBody:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/2/properties/with/properties/body',
  HTTPHeaders:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/2/properties/with/properties/headers',
  HTTPQuery:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/2/properties/with/properties/query',
  InlineScript:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/1/properties/script/oneOf/0',
  Input: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/input',
  InputFrom: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/input/properties/from',
  LinearBackoff:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/retryPolicy/properties/backoff/oneOf/2',
  ListenTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/listenTask',
  ListenTaskConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/listenTask/properties/listen',
  OAuth2AutenthicationData:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/oauth2AuthenticationProperties',
  OAuth2AutenthicationDataAudiences:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/oauth2AuthenticationProperties/properties/audiences',
  OAuth2AutenthicationDataClient:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/oauth2AuthenticationProperties/properties/client',
  OAuth2AutenthicationDataScopes:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/oauth2AuthenticationProperties/properties/scopes',
  OAuth2AuthenticationPolicy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/3',
  OAuth2AuthenticationPolicyConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/3/properties/oauth2',
  OAuth2AuthenticationPropertiesEndpoints:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/3/properties/oauth2/oneOf/0/allOf/1/properties/endpoints',
  OAuth2ConnectAuthenticationProperties:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/3/properties/oauth2/oneOf/0',
  OAuth2Issuers:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/oauth2AuthenticationProperties/properties/issuers',
  OAuth2TokenDefinition: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/oauth2Token',
  OAuth2TokenRequest:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/oauth2AuthenticationProperties/properties/request',
  OneEventConsumptionStrategy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventConsumptionStrategy/oneOf/2',
  OpenAPIArguments: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/3/properties/with',
  OpenIdConnectAuthenticationPolicy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/4',
  OpenIdConnectAuthenticationPolicyConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/4/properties/oidc',
  OpenIdConnectAuthenticationProperties:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/authenticationPolicy/oneOf/4/properties/oidc/oneOf/0',
  Output: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/output',
  OutputAs: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/output/properties/as',
  RaiseTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/raiseTask',
  RaiseTaskConfiguration: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/raiseTask/properties/raise',
  RaiseTaskError:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/raiseTask/properties/raise/properties/error',
  ReferenceableAuthenticationPolicy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/referenceableAuthenticationPolicy',
  RetryBackoff: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/retryPolicy/properties/backoff',
  RetryLimit: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/retryPolicy/properties/limit',
  RetryLimitAttempt:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/retryPolicy/properties/limit/properties/attempt',
  RetryPolicy: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/retryPolicy',
  RetryPolicyJitter: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/retryPolicy/properties/jitter',
  RunContainer: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/0',
  RunScript: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/1',
  RunShell: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/2',
  RunTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask',
  RunTaskConfiguration: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run',
  RuntimeExpression: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runtimeExpression',
  RunWorkflow: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/3',
  Schedule: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/schedule',
  Schema: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/schema',
  SchemaExternal: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/schema/oneOf/1',
  SchemaInline: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/schema/oneOf/0',
  Script:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/1/properties/script',
  SecretBasedAuthenticationPolicy:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/secretBasedAuthenticationPolicy',
  SetTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/setTask',
  SetTaskConfiguration: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/setTask/properties/set',
  Shell:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/2/properties/shell',
  ShellArguments:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/2/properties/shell/properties/arguments',
  ShellEnvironment:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/2/properties/shell/properties/environment',
  SubflowConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/3/properties/workflow',
  SubflowInput:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/runTask/properties/run/oneOf/3/properties/workflow/properties/input',
  SubscriptionIterator: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/subscriptionIterator',
  SwitchCase:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/switchTask/properties/switch/items/additionalProperties',
  SwitchItem: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/switchTask/properties/switch/items',
  SwitchTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/switchTask',
  SwitchTaskConfiguration:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/switchTask/properties/switch',
  Task: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/task',
  TaskBase: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/taskBase',
  TaskBaseIf: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/taskBase/properties/if',
  TaskItem: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/taskList/items',
  TaskList: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/taskList',
  TaskMetadata: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/taskBase/properties/metadata',
  TaskTimeout: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/taskBase/properties/timeout',
  Timeout: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/timeout',
  TryTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/tryTask',
  TryTaskCatch: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/tryTask/properties/catch',
  TryTaskCatchRetry:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/tryTask/properties/catch/properties/retry',
  UriTemplate: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/uriTemplate',
  Use: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use',
  UseAuthentications:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use/properties/authentications',
  UseCatalogs: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use/properties/catalogs',
  UseErrors: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use/properties/errors',
  UseExtensions: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use/properties/extensions',
  UseFunctions: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use/properties/functions',
  UseRetries: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use/properties/retries',
  UseSecrets: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use/properties/secrets',
  UseTimeouts: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/use/properties/timeouts',
  WaitTask: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/waitTask',
  WithEvent: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/eventFilter/properties/with',
  WithGRPCArguments:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/1/properties/with/properties/arguments',
  WithGRPCService:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/1/properties/with/properties/service',
  WithOpenAPIParameters:
    'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/$defs/callTask/oneOf/3/properties/with/properties/parameters',
  WorkflowMetadata: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/document/properties/metadata',
  WorkflowTags: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/document/properties/tags',
  WorkflowTimeout: 'https://lumifai.s3.us-east-1.amazonaws.com/workflow.json#/properties/timeout',
};
