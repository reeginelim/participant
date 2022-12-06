/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { BatteryData } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function BatteryDataUpdateForm(props) {
  const {
    id,
    batteryData,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    device_id: undefined,
    battery_info: undefined,
    charger_info: undefined,
    charging: undefined,
    cost: undefined,
    desired_status: undefined,
    flexibility: undefined,
    status: undefined,
  };
  const [device_id, setDevice_id] = React.useState(initialValues.device_id);
  const [battery_info, setBattery_info] = React.useState(
    initialValues.battery_info
  );
  const [charger_info, setCharger_info] = React.useState(
    initialValues.charger_info
  );
  const [charging, setCharging] = React.useState(initialValues.charging);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [desired_status, setDesired_status] = React.useState(
    initialValues.desired_status
  );
  const [flexibility, setFlexibility] = React.useState(
    initialValues.flexibility
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...batteryDataRecord };
    setDevice_id(cleanValues.device_id);
    setBattery_info(cleanValues.battery_info);
    setCharger_info(cleanValues.charger_info);
    setCharging(cleanValues.charging);
    setCost(cleanValues.cost);
    setDesired_status(cleanValues.desired_status);
    setFlexibility(cleanValues.flexibility);
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [batteryDataRecord, setBatteryDataRecord] = React.useState(batteryData);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(BatteryData, id) : batteryData;
      setBatteryDataRecord(record);
    };
    queryData();
  }, [id, batteryData]);
  React.useEffect(resetStateValues, [batteryDataRecord]);
  const validations = {
    device_id: [],
    battery_info: [],
    charger_info: [],
    charging: [],
    cost: [],
    desired_status: [],
    flexibility: [],
    status: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          device_id,
          battery_info,
          charger_info,
          charging,
          cost,
          desired_status,
          flexibility,
          status,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            BatteryData.copyOf(batteryDataRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "BatteryDataUpdateForm")}
    >
      <TextField
        label="Device id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={device_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id: value,
              battery_info,
              charger_info,
              charging,
              cost,
              desired_status,
              flexibility,
              status,
            };
            const result = onChange(modelFields);
            value = result?.device_id ?? value;
          }
          if (errors.device_id?.hasError) {
            runValidationTasks("device_id", value);
          }
          setDevice_id(value);
        }}
        onBlur={() => runValidationTasks("device_id", device_id)}
        errorMessage={errors.device_id?.errorMessage}
        hasError={errors.device_id?.hasError}
        {...getOverrideProps(overrides, "device_id")}
      ></TextField>
      <TextField
        label="Battery info"
        isRequired={false}
        isReadOnly={false}
        defaultValue={battery_info}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              battery_info: value,
              charger_info,
              charging,
              cost,
              desired_status,
              flexibility,
              status,
            };
            const result = onChange(modelFields);
            value = result?.battery_info ?? value;
          }
          if (errors.battery_info?.hasError) {
            runValidationTasks("battery_info", value);
          }
          setBattery_info(value);
        }}
        onBlur={() => runValidationTasks("battery_info", battery_info)}
        errorMessage={errors.battery_info?.errorMessage}
        hasError={errors.battery_info?.hasError}
        {...getOverrideProps(overrides, "battery_info")}
      ></TextField>
      <TextField
        label="Charger info"
        isRequired={false}
        isReadOnly={false}
        defaultValue={charger_info}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              battery_info,
              charger_info: value,
              charging,
              cost,
              desired_status,
              flexibility,
              status,
            };
            const result = onChange(modelFields);
            value = result?.charger_info ?? value;
          }
          if (errors.charger_info?.hasError) {
            runValidationTasks("charger_info", value);
          }
          setCharger_info(value);
        }}
        onBlur={() => runValidationTasks("charger_info", charger_info)}
        errorMessage={errors.charger_info?.errorMessage}
        hasError={errors.charger_info?.hasError}
        {...getOverrideProps(overrides, "charger_info")}
      ></TextField>
      <TextField
        label="Charging"
        isRequired={false}
        isReadOnly={false}
        defaultValue={charging}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              battery_info,
              charger_info,
              charging: value,
              cost,
              desired_status,
              flexibility,
              status,
            };
            const result = onChange(modelFields);
            value = result?.charging ?? value;
          }
          if (errors.charging?.hasError) {
            runValidationTasks("charging", value);
          }
          setCharging(value);
        }}
        onBlur={() => runValidationTasks("charging", charging)}
        errorMessage={errors.charging?.errorMessage}
        hasError={errors.charging?.hasError}
        {...getOverrideProps(overrides, "charging")}
      ></TextField>
      <TextField
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        defaultValue={cost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              battery_info,
              charger_info,
              charging,
              cost: value,
              desired_status,
              flexibility,
              status,
            };
            const result = onChange(modelFields);
            value = result?.cost ?? value;
          }
          if (errors.cost?.hasError) {
            runValidationTasks("cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("cost", cost)}
        errorMessage={errors.cost?.errorMessage}
        hasError={errors.cost?.hasError}
        {...getOverrideProps(overrides, "cost")}
      ></TextField>
      <TextField
        label="Desired status"
        isRequired={false}
        isReadOnly={false}
        defaultValue={desired_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              battery_info,
              charger_info,
              charging,
              cost,
              desired_status: value,
              flexibility,
              status,
            };
            const result = onChange(modelFields);
            value = result?.desired_status ?? value;
          }
          if (errors.desired_status?.hasError) {
            runValidationTasks("desired_status", value);
          }
          setDesired_status(value);
        }}
        onBlur={() => runValidationTasks("desired_status", desired_status)}
        errorMessage={errors.desired_status?.errorMessage}
        hasError={errors.desired_status?.hasError}
        {...getOverrideProps(overrides, "desired_status")}
      ></TextField>
      <TextField
        label="Flexibility"
        isRequired={false}
        isReadOnly={false}
        defaultValue={flexibility}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              battery_info,
              charger_info,
              charging,
              cost,
              desired_status,
              flexibility: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.flexibility ?? value;
          }
          if (errors.flexibility?.hasError) {
            runValidationTasks("flexibility", value);
          }
          setFlexibility(value);
        }}
        onBlur={() => runValidationTasks("flexibility", flexibility)}
        errorMessage={errors.flexibility?.errorMessage}
        hasError={errors.flexibility?.hasError}
        {...getOverrideProps(overrides, "flexibility")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        defaultValue={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              battery_info,
              charger_info,
              charging,
              cost,
              desired_status,
              flexibility,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
