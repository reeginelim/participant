/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvData = /* GraphQL */ `
  mutation CreateEvData(
    $input: CreateEvDataInput!
    $condition: ModelEvDataConditionInput
  ) {
    createEvData(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const updateEvData = /* GraphQL */ `
  mutation UpdateEvData(
    $input: UpdateEvDataInput!
    $condition: ModelEvDataConditionInput
  ) {
    updateEvData(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const deleteEvData = /* GraphQL */ `
  mutation DeleteEvData(
    $input: DeleteEvDataInput!
    $condition: ModelEvDataConditionInput
  ) {
    deleteEvData(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const createSolarData = /* GraphQL */ `
  mutation CreateSolarData(
    $input: CreateSolarDataInput!
    $condition: ModelSolarDataConditionInput
  ) {
    createSolarData(input: $input, condition: $condition) {
      id
      device_id
      inverter
      inverter_model
      pv_in
      pv_model
      pv_sys
  
    }
  }
`;
export const updateSolarData = /* GraphQL */ `
  mutation UpdateSolarData(
    $input: UpdateSolarDataInput!
    $condition: ModelSolarDataConditionInput
  ) {
    updateSolarData(input: $input, condition: $condition) {
      id
      device_id
      inverter
      inverter_model
      pv_in
      pv_model
      pv_sys
  
    }
  }
`;
export const deleteSolarData = /* GraphQL */ `
  mutation DeleteSolarData(
    $input: DeleteSolarDataInput!
    $condition: ModelSolarDataConditionInput
  ) {
    deleteSolarData(input: $input, condition: $condition) {
      id
      device_id
      inverter
      inverter_model
      pv_in
      pv_model
      pv_sys
  
    }
  }
`;
export const createBatteryData = /* GraphQL */ `
  mutation CreateBatteryData(
    $input: CreateBatteryDataInput!
    $condition: ModelBatteryDataConditionInput
  ) {
    createBatteryData(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const updateBatteryData = /* GraphQL */ `
  mutation UpdateBatteryData(
    $input: UpdateBatteryDataInput!
    $condition: ModelBatteryDataConditionInput
  ) {
    updateBatteryData(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const deleteBatteryData = /* GraphQL */ `
  mutation DeleteBatteryData(
    $input: DeleteBatteryDataInput!
    $condition: ModelBatteryDataConditionInput
  ) {
    deleteBatteryData(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const createEvSchedule = /* GraphQL */ `
  mutation CreateEvSchedule(
    $input: CreateEvScheduleInput!
    $condition: ModelEvScheduleConditionInput
  ) {
    createEvSchedule(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const updateEvSchedule = /* GraphQL */ `
  mutation UpdateEvSchedule(
    $input: UpdateEvScheduleInput!
    $condition: ModelEvScheduleConditionInput
  ) {
    updateEvSchedule(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const deleteEvSchedule = /* GraphQL */ `
  mutation DeleteEvSchedule(
    $input: DeleteEvScheduleInput!
    $condition: ModelEvScheduleConditionInput
  ) {
    deleteEvSchedule(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const createHcSchedule = /* GraphQL */ `
  mutation CreateHcSchedule(
    $input: CreateHcScheduleInput!
    $condition: ModelHcScheduleConditionInput
  ) {
    createHcSchedule(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const updateHcSchedule = /* GraphQL */ `
  mutation UpdateHcSchedule(
    $input: UpdateHcScheduleInput!
    $condition: ModelHcScheduleConditionInput
  ) {
    updateHcSchedule(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const deleteHcSchedule = /* GraphQL */ `
  mutation DeleteHcSchedule(
    $input: DeleteHcScheduleInput!
    $condition: ModelHcScheduleConditionInput
  ) {
    deleteHcSchedule(input: $input, condition: $condition) {
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
  
    }
  }
`;
export const createHcData = /* GraphQL */ `
  mutation CreateHcData(
    $input: CreateHcDataInput!
    $condition: ModelHcDataConditionInput
  ) {
    createHcData(input: $input, condition: $condition) {
      id
      device_id
      cost
      in_temp
      load
      status
  
    }
  }
`;
export const updateHcData = /* GraphQL */ `
  mutation UpdateHcData(
    $input: UpdateHcDataInput!
    $condition: ModelHcDataConditionInput
  ) {
    updateHcData(input: $input, condition: $condition) {
      id
      device_id
      cost
      in_temp
      load
      status
  
    }
  }
`;
export const deleteHcData = /* GraphQL */ `
  mutation DeleteHcData(
    $input: DeleteHcDataInput!
    $condition: ModelHcDataConditionInput
  ) {
    deleteHcData(input: $input, condition: $condition) {
      id
      device_id
      cost
      in_temp
      load
      status
  
    }
  }
`;
export const createTestDataModel = /* GraphQL */ `
  mutation CreateTestDataModel(
    $input: CreateTestDataModelInput!
    $condition: ModelTestDataModelConditionInput
  ) {
    createTestDataModel(input: $input, condition: $condition) {
      id
      description
  
    }
  }
`;
export const updateTestDataModel = /* GraphQL */ `
  mutation UpdateTestDataModel(
    $input: UpdateTestDataModelInput!
    $condition: ModelTestDataModelConditionInput
  ) {
    updateTestDataModel(input: $input, condition: $condition) {
      id
      description
  
    }
  }
`;
export const deleteTestDataModel = /* GraphQL */ `
  mutation DeleteTestDataModel(
    $input: DeleteTestDataModelInput!
    $condition: ModelTestDataModelConditionInput
  ) {
    deleteTestDataModel(input: $input, condition: $condition) {
      id
      description
  
    }
  }
`;
