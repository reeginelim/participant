/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSolarData = /* GraphQL */ `
  subscription OnCreateSolarData(
    $filter: ModelSubscriptionSolarDataFilterInput
  ) {
    onCreateSolarData(filter: $filter) {
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
export const onUpdateSolarData = /* GraphQL */ `
  subscription OnUpdateSolarData(
    $filter: ModelSubscriptionSolarDataFilterInput
  ) {
    onUpdateSolarData(filter: $filter) {
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
export const onDeleteSolarData = /* GraphQL */ `
  subscription OnDeleteSolarData(
    $filter: ModelSubscriptionSolarDataFilterInput
  ) {
    onDeleteSolarData(filter: $filter) {
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
export const onCreateBatteryData = /* GraphQL */ `
  subscription OnCreateBatteryData(
    $filter: ModelSubscriptionBatteryDataFilterInput
  ) {
    onCreateBatteryData(filter: $filter) {
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
export const onUpdateBatteryData = /* GraphQL */ `
  subscription OnUpdateBatteryData(
    $filter: ModelSubscriptionBatteryDataFilterInput
  ) {
    onUpdateBatteryData(filter: $filter) {
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
export const onDeleteBatteryData = /* GraphQL */ `
  subscription OnDeleteBatteryData(
    $filter: ModelSubscriptionBatteryDataFilterInput
  ) {
    onDeleteBatteryData(filter: $filter) {
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
export const onCreateEvSchedule = /* GraphQL */ `
  subscription OnCreateEvSchedule(
    $filter: ModelSubscriptionEvScheduleFilterInput
  ) {
    onCreateEvSchedule(filter: $filter) {
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
export const onUpdateEvSchedule = /* GraphQL */ `
  subscription OnUpdateEvSchedule(
    $filter: ModelSubscriptionEvScheduleFilterInput
  ) {
    onUpdateEvSchedule(filter: $filter) {
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
export const onDeleteEvSchedule = /* GraphQL */ `
  subscription OnDeleteEvSchedule(
    $filter: ModelSubscriptionEvScheduleFilterInput
  ) {
    onDeleteEvSchedule(filter: $filter) {
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
export const onCreateHcSchedule = /* GraphQL */ `
  subscription OnCreateHcSchedule(
    $filter: ModelSubscriptionHcScheduleFilterInput
  ) {
    onCreateHcSchedule(filter: $filter) {
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
export const onUpdateHcSchedule = /* GraphQL */ `
  subscription OnUpdateHcSchedule(
    $filter: ModelSubscriptionHcScheduleFilterInput
  ) {
    onUpdateHcSchedule(filter: $filter) {
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
export const onDeleteHcSchedule = /* GraphQL */ `
  subscription OnDeleteHcSchedule(
    $filter: ModelSubscriptionHcScheduleFilterInput
  ) {
    onDeleteHcSchedule(filter: $filter) {
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
export const onCreateHcData = /* GraphQL */ `
  subscription OnCreateHcData($filter: ModelSubscriptionHcDataFilterInput) {
    onCreateHcData(filter: $filter) {
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
export const onUpdateHcData = /* GraphQL */ `
  subscription OnUpdateHcData($filter: ModelSubscriptionHcDataFilterInput) {
    onUpdateHcData(filter: $filter) {
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
export const onDeleteHcData = /* GraphQL */ `
  subscription OnDeleteHcData($filter: ModelSubscriptionHcDataFilterInput) {
    onDeleteHcData(filter: $filter) {
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
export const onCreateTestDataModel = /* GraphQL */ `
  subscription OnCreateTestDataModel(
    $filter: ModelSubscriptionTestDataModelFilterInput
  ) {
    onCreateTestDataModel(filter: $filter) {
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
export const onUpdateTestDataModel = /* GraphQL */ `
  subscription OnUpdateTestDataModel(
    $filter: ModelSubscriptionTestDataModelFilterInput
  ) {
    onUpdateTestDataModel(filter: $filter) {
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
export const onDeleteTestDataModel = /* GraphQL */ `
  subscription OnDeleteTestDataModel(
    $filter: ModelSubscriptionTestDataModelFilterInput
  ) {
    onDeleteTestDataModel(filter: $filter) {
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
