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
export default function BatteryDataCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    setDevice_id(initialValues.device_id);
    setBattery_info(initialValues.battery_info);
    setCharger_info(initialValues.charger_info);
    setCharging(initialValues.charging);
    setCost(initialValues.cost);
    setDesired_status(initialValues.desired_status);
    setFlexibility(initialValues.flexibility);
    setStatus(initialValues.status);
    setErrors({});
  };
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
          await DataStore.save(new BatteryData(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "BatteryDataCreateForm")}
    >
      <TextField
        label="Device id"
        isRequired={false}
        isReadOnly={false}
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
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
