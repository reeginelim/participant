/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvData = /* GraphQL */ `
  query GetEvData($id: ID!) {
    getEvData(id: $id) {
      id
      device_id
      state_of_charge
      charging
      cost
      current_limit
      load
      charger_name
      model
      manufacturer
      input_voltage
      health
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEvData = /* GraphQL */ `
  query ListEvData(
    $filter: ModelEvDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        device_id
        state_of_charge
        charging
        cost
        current_limit
        load
        charger_name
        model
        manufacturer
        input_voltage
        health
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
export const syncEvData = /* GraphQL */ `
  query SyncEvData(
    $filter: ModelEvDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        device_id
        state_of_charge
        charging
        cost
        current_limit
        load
        charger_name
        model
        manufacturer
        input_voltage
        health
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
      state_of_charge
      charging
      cost
      desired_state_of_charge
      flexibility
      charger_name
      model
      capacity
      health
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
        state_of_charge
        charging
        cost
        desired_state_of_charge
        flexibility
        charger_name
        model
        capacity
        health
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
        state_of_charge
        charging
        cost
        desired_state_of_charge
        flexibility
        charger_name
        model
        capacity
        health
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
      schedule {
        comfort
        state_of_charge
        desired_time_to_leave
        time_to_finish_charge
        health
        type
      }
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
      schedule {
        comfort
        min_temp
        max_temp
        start_time
        end_time
        type
      }
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
