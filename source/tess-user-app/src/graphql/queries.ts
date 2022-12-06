/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSolarData = /* GraphQL */ `
  query GetSolarData($id: ID!) {
    getSolarData(id: $id) {
      id
      device_id
      inverter
      inverter_model
      pv_in
      pv_model
      pv_sys
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSolarData = /* GraphQL */ `
  query ListSolarData(
    $filter: ModelSolarDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSolarData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        device_id
        inverter
        inverter_model
        pv_in
        pv_model
        pv_sys
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSolarData = /* GraphQL */ `
  query SyncSolarData(
    $filter: ModelSolarDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSolarData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        device_id
        inverter
        inverter_model
        pv_in
        pv_model
        pv_sys
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBatteryData = /* GraphQL */ `
  query GetBatteryData($id: ID!) {
    getBatteryData(id: $id) {
      id
      device_id
      battery_info
      charger_info
      charging
      cost
      desired_status
      flexibility
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBatteryData = /* GraphQL */ `
  query ListBatteryData(
    $filter: ModelBatteryDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBatteryData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        device_id
        battery_info
        charger_info
        charging
        cost
        desired_status
        flexibility
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBatteryData = /* GraphQL */ `
  query SyncBatteryData(
    $filter: ModelBatteryDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBatteryData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        device_id
        battery_info
        charger_info
        charging
        cost
        desired_status
        flexibility
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEvSchedule = /* GraphQL */ `
  query GetEvSchedule($id: ID!) {
    getEvSchedule(id: $id) {
      id
      device_id
      away
      home
      sleep
      vacation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEvSchedules = /* GraphQL */ `
  query ListEvSchedules(
    $filter: ModelEvScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        device_id
        away
        home
        sleep
        vacation
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEvSchedules = /* GraphQL */ `
  query SyncEvSchedules(
    $filter: ModelEvScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        device_id
        away
        home
        sleep
        vacation
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHcSchedule = /* GraphQL */ `
  query GetHcSchedule($id: ID!) {
    getHcSchedule(id: $id) {
      id
      device_id
      away
      home
      sleep
      vacation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listHcSchedules = /* GraphQL */ `
  query ListHcSchedules(
    $filter: ModelHcScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHcSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        device_id
        away
        home
        sleep
        vacation
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHcSchedules = /* GraphQL */ `
  query SyncHcSchedules(
    $filter: ModelHcScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHcSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        device_id
        away
        home
        sleep
        vacation
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHcData = /* GraphQL */ `
  query GetHcData($id: ID!) {
    getHcData(id: $id) {
      id
      device_id
      cost
      in_temp
      load
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listHcData = /* GraphQL */ `
  query ListHcData(
    $filter: ModelHcDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHcData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        device_id
        cost
        in_temp
        load
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHcData = /* GraphQL */ `
  query SyncHcData(
    $filter: ModelHcDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHcData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        device_id
        cost
        in_temp
        load
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTestDataModel = /* GraphQL */ `
  query GetTestDataModel($id: ID!) {
    getTestDataModel(id: $id) {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTestDataModels = /* GraphQL */ `
  query ListTestDataModels(
    $filter: ModelTestDataModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestDataModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTestDataModels = /* GraphQL */ `
  query SyncTestDataModels(
    $filter: ModelTestDataModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestDataModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
