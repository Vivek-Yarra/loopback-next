// IMPORTANT
// This snapshot file is auto-generated, but designed for humans.
// It should be checked into source control and tracked carefully.
// Re-generate by setting UPDATE_SNAPSHOTS=1 and running tests.
// Make sure to inspect the changes in the snapshots below.
// Do not ignore changes!

'use strict';

exports[`openapi to controllers/models generates models for customer 1`] = `
[{"tag":"Customer","decoration":"@api({\\n  components: {\\n    schemas: {\\n      Name: {\\n        type: 'string',\\n      },\\n      profileId: {\\n        type: 'string',\\n      },\\n      AddressList: {\\n        items: {\\n          $ref: '#/components/schemas/Address',\\n        },\\n        type: 'array',\\n      },\\n      Address: {\\n        type: 'object',\\n        properties: {\\n          street: {\\n            type: 'string',\\n          },\\n          city: {\\n            type: 'string',\\n          },\\n          state: {\\n            type: 'string',\\n          },\\n          zipCode: {\\n            type: 'string',\\n          },\\n        },\\n      },\\n      USAddress: {\\n        $ref: '#/components/schemas/Address',\\n      },\\n      Customer: {\\n        required: [\\n          'id',\\n        ],\\n        properties: {\\n          id: {\\n            type: 'integer',\\n            format: 'int64',\\n          },\\n          'first-name': {\\n            type: 'string',\\n          },\\n          'last-name': {\\n            $ref: '#/components/schemas/Name',\\n          },\\n          profiles: {\\n            type: 'array',\\n            items: {\\n              $ref: '#/components/schemas/profileId',\\n            },\\n          },\\n          emails: {\\n            type: 'array',\\n            items: {\\n              type: 'string',\\n            },\\n          },\\n          addresses: {\\n            $ref: '#/components/schemas/AddressList',\\n          },\\n          'us-office': {\\n            $ref: '#/components/schemas/USAddress',\\n          },\\n        },\\n      },\\n    },\\n  },\\n  paths: {},\\n})","description":"Customer resource","className":"CustomerController","serviceClassName":"CustomerService","imports":["import {Customer} from '../models/customer.model';"],"methodMapping":{"getCustomers":"getCustomers","createCustomer":"createCustomer","findCustomerById":"find customer by id"},"methods":[{"description":"Returns all customers (/* customers */)","comments":["Returns all customers (/* customers */)","","@param _if if condition","@param limit maximum number of results to return","@param accessToken Access token (/* access_token */)","@returns customer response"],"decoration":"@operation('get', '/customers', {\\n  tags: [\\n    'Customer',\\n  ],\\n  description: 'Returns all customers (/* customers */)',\\n  operationId: 'getCustomers',\\n  parameters: [\\n    {\\n      name: 'if',\\n      in: 'query',\\n      description: 'if condition',\\n      required: false,\\n      style: 'form',\\n      schema: {\\n        type: 'array',\\n        items: {\\n          type: 'string',\\n        },\\n      },\\n    },\\n    {\\n      name: 'limit',\\n      in: 'query',\\n      description: 'maximum number of results to return',\\n      required: false,\\n      schema: {\\n        type: 'integer',\\n        format: 'int32',\\n      },\\n    },\\n    {\\n      name: 'access-token',\\n      in: 'query',\\n      description: 'Access token (/* access_token */)',\\n      required: false,\\n      schema: {\\n        type: 'string',\\n      },\\n    },\\n  ],\\n  responses: {\\n    '200': {\\n      description: 'customer response',\\n      content: {\\n        'application/json': {\\n          schema: {\\n            type: 'array',\\n            items: {\\n              $ref: '#/components/schemas/Customer',\\n            },\\n          },\\n        },\\n      },\\n    },\\n  },\\n})","signature":"async getCustomers(@param({\\n  name: 'if',\\n  in: 'query',\\n  description: 'if condition',\\n  required: false,\\n  style: 'form',\\n  schema: {\\n    type: 'array',\\n    items: {\\n      type: 'string',\\n    },\\n  },\\n}) _if: string[], @param({\\n  name: 'limit',\\n  in: 'query',\\n  description: 'maximum number of results to return',\\n  required: false,\\n  schema: {\\n    type: 'integer',\\n    format: 'int32',\\n  },\\n}) limit: number, @param({\\n  name: 'access-token',\\n  in: 'query',\\n  description: 'Access token (/* access_token */)',\\n  required: false,\\n  schema: {\\n    type: 'string',\\n  },\\n}) accessToken: string): Promise<Customer[]>","signatureForInterface":"getCustomers(_if: string[], limit: number, accessToken: string): Promise<Customer[]>","signatureForNamedParams":"getCustomers(params: { if: string[]; limit: number; 'access-token': string }): Promise<Customer[]>"},{"description":"Creates a new customer","comments":["Creates a new customer","","@param _requestBody Customer to add","@param accessToken Access token (/* access_token */)","@returns customer response"],"decoration":"@operation('post', '/customers', {\\n  tags: [\\n    'Customer',\\n  ],\\n  description: 'Creates a new customer',\\n  operationId: 'addCustomer',\\n  'x-operation-name': 'createCustomer',\\n  requestBody: {\\n    description: 'Customer to add',\\n    required: true,\\n    content: {\\n      'application/json': {\\n        schema: {\\n          $ref: '#/components/schemas/Customer',\\n        },\\n      },\\n    },\\n  },\\n  responses: {\\n    '200': {\\n      description: 'customer response',\\n      content: {\\n        'application/json': {\\n          schema: {\\n            $ref: '#/components/schemas/Customer',\\n          },\\n        },\\n      },\\n    },\\n  },\\n  parameters: [\\n    {\\n      name: 'access-token',\\n      in: 'query',\\n      description: 'Access token (/* access_token */)',\\n      required: false,\\n      schema: {\\n        type: 'string',\\n      },\\n    },\\n  ],\\n})","signature":"async createCustomer(@requestBody({\\n  description: 'Customer to add',\\n  required: true,\\n  content: {\\n    'application/json': {\\n      schema: {\\n        $ref: '#/components/schemas/Customer',\\n      },\\n    },\\n  },\\n}) _requestBody: Customer, @param({\\n  name: 'access-token',\\n  in: 'query',\\n  description: 'Access token (/* access_token */)',\\n  required: false,\\n  schema: {\\n    type: 'string',\\n  },\\n}) accessToken: string): Promise<Customer>","signatureForInterface":"createCustomer(_requestBody: Customer, accessToken: string): Promise<Customer>","signatureForNamedParams":"createCustomer(params: { requestBody: Customer; 'access-token': string }): Promise<Customer>"},{"description":"Returns a customer based on a single ID","comments":["Returns a customer based on a single ID","","@param customerId ID of customer to fetch","@returns customer response"],"decoration":"@operation('get', '/customers/{customer_id}', {\\n  tags: [\\n    'Customer',\\n  ],\\n  description: 'Returns a customer based on a single ID',\\n  'x-implementation': \\"return {id: customerId, 'first-name': 'John', 'last-name': 'Smith'};\\",\\n  operationId: 'find customer by id',\\n  parameters: [\\n    {\\n      name: 'customer-id',\\n      in: 'path',\\n      description: 'ID of customer to fetch',\\n      required: true,\\n      schema: {\\n        type: 'integer',\\n        format: 'int64',\\n      },\\n    },\\n  ],\\n  responses: {\\n    '200': {\\n      description: 'customer response',\\n      content: {\\n        'application/json': {\\n          schema: {\\n            $ref: '#/components/schemas/Customer',\\n          },\\n        },\\n      },\\n    },\\n  },\\n})","signature":"async findCustomerById(@param({\\n  name: 'customer-id',\\n  in: 'path',\\n  description: 'ID of customer to fetch',\\n  required: true,\\n  schema: {\\n    type: 'integer',\\n    format: 'int64',\\n  },\\n}) customerId: number): Promise<Customer>","signatureForInterface":"findCustomerById(customerId: number): Promise<Customer>","signatureForNamedParams":"findCustomerById(params: { customer_id: number }): Promise<Customer>","implementation":"return {id: customerId, 'first-name': 'John', 'last-name': 'Smith'};"}],"methodMappingObject":"{\\n  getCustomers: 'getCustomers',\\n  createCustomer: 'createCustomer',\\n  findCustomerById: 'find customer by id',\\n}"}]
`;
