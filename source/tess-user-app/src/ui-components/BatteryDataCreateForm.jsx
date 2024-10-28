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
    state_of_charge: undefined,
    charging: undefined,
    cost: undefined,
    desired_state_of_charge: undefined,
    flexibility: undefined,
    charger_name: undefined,
    model: undefined,
    capacity: undefined,
    health: undefined,
  };
  const [device_id, setDevice_id] = React.useState(initialValues.device_id);
  const [state_of_charge, setState_of_charge] = React.useState(
    initialValues.state_of_charge
  );
  const [charging, setCharging] = React.useState(initialValues.charging);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [desired_state_of_charge, setDesired_state_of_charge] = React.useState(
    initialValues.desired_state_of_charge
  );
  const [flexibility, setFlexibility] = React.useState(
    initialValues.flexibility
  );
  const [charger_name, setCharger_name] = React.useState(
    initialValues.charger_name
  );
  const [model, setModel] = React.useState(initialValues.model);
  const [capacity, setCapacity] = React.useState(initialValues.capacity);
  const [health, setHealth] = React.useState(initialValues.health);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDevice_id(initialValues.device_id);
    setState_of_charge(initialValues.state_of_charge);
    setCharging(initialValues.charging);
    setCost(initialValues.cost);
    setDesired_state_of_charge(initialValues.desired_state_of_charge);
    setFlexibility(initialValues.flexibility);
    setCharger_name(initialValues.charger_name);
    setModel(initialValues.model);
    setCapacity(initialValues.capacity);
    setHealth(initialValues.health);
    setErrors({});
  };
  const validations = {
    device_id: [],
    state_of_charge: [],
    charging: [],
    cost: [],
    desired_state_of_charge: [],
    flexibility: [],
    charger_name: [],
    model: [],
    capacity: [],
    health: [],
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
          state_of_charge,
          charging,
          cost,
          desired_state_of_charge,
          flexibility,
          charger_name,
          model,
          capacity,
          health,
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
              state_of_charge,
              charging,
              cost,
              desired_state_of_charge,
              flexibility,
              charger_name,
              model,
              capacity,
              health,
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
        label="State of charge"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge: value,
              charging,
              cost,
              desired_state_of_charge,
              flexibility,
              charger_name,
              model,
              capacity,
              health,
            };
            const result = onChange(modelFields);
            value = result?.state_of_charge ?? value;
          }
          if (errors.state_of_charge?.hasError) {
            runValidationTasks("state_of_charge", value);
          }
          setState_of_charge(value);
        }}
        onBlur={() => runValidationTasks("state_of_charge", state_of_charge)}
        errorMessage={errors.state_of_charge?.errorMessage}
        hasError={errors.state_of_charge?.hasError}
        {...getOverrideProps(overrides, "state_of_charge")}
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
              state_of_charge,
              charging: value,
              cost,
              desired_state_of_charge,
              flexibility,
              charger_name,
              model,
              capacity,
              health,
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
              state_of_charge,
              charging,
              cost: value,
              desired_state_of_charge,
              flexibility,
              charger_name,
              model,
              capacity,
              health,
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
        label="Desired state of charge"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              desired_state_of_charge: value,
              flexibility,
              charger_name,
              model,
              capacity,
              health,
            };
            const result = onChange(modelFields);
            value = result?.desired_state_of_charge ?? value;
          }
          if (errors.desired_state_of_charge?.hasError) {
            runValidationTasks("desired_state_of_charge", value);
          }
          setDesired_state_of_charge(value);
        }}
        onBlur={() =>
          runValidationTasks("desired_state_of_charge", desired_state_of_charge)
        }
        errorMessage={errors.desired_state_of_charge?.errorMessage}
        hasError={errors.desired_state_of_charge?.hasError}
        {...getOverrideProps(overrides, "desired_state_of_charge")}
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
              state_of_charge,
              charging,
              cost,
              desired_state_of_charge,
              flexibility: value,
              charger_name,
              model,
              capacity,
              health,
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
        label="Charger name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              desired_state_of_charge,
              flexibility,
              charger_name: value,
              model,
              capacity,
              health,
            };
            const result = onChange(modelFields);
            value = result?.charger_name ?? value;
          }
          if (errors.charger_name?.hasError) {
            runValidationTasks("charger_name", value);
          }
          setCharger_name(value);
        }}
        onBlur={() => runValidationTasks("charger_name", charger_name)}
        errorMessage={errors.charger_name?.errorMessage}
        hasError={errors.charger_name?.hasError}
        {...getOverrideProps(overrides, "charger_name")}
      ></TextField>
      <TextField
        label="Model"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              desired_state_of_charge,
              flexibility,
              charger_name,
              model: value,
              capacity,
              health,
            };
            const result = onChange(modelFields);
            value = result?.model ?? value;
          }
          if (errors.model?.hasError) {
            runValidationTasks("model", value);
          }
          setModel(value);
        }}
        onBlur={() => runValidationTasks("model", model)}
        errorMessage={errors.model?.errorMessage}
        hasError={errors.model?.hasError}
        {...getOverrideProps(overrides, "model")}
      ></TextField>
      <TextField
        label="Capacity"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              desired_state_of_charge,
              flexibility,
              charger_name,
              model,
              capacity: value,
              health,
            };
            const result = onChange(modelFields);
            value = result?.capacity ?? value;
          }
          if (errors.capacity?.hasError) {
            runValidationTasks("capacity", value);
          }
          setCapacity(value);
        }}
        onBlur={() => runValidationTasks("capacity", capacity)}
        errorMessage={errors.capacity?.errorMessage}
        hasError={errors.capacity?.hasError}
        {...getOverrideProps(overrides, "capacity")}
      ></TextField>
      <TextField
        label="Health"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              desired_state_of_charge,
              flexibility,
              charger_name,
              model,
              capacity,
              health: value,
            };
            const result = onChange(modelFields);
            value = result?.health ?? value;
          }
          if (errors.health?.hasError) {
            runValidationTasks("health", value);
          }
          setHealth(value);
        }}
        onBlur={() => runValidationTasks("health", health)}
        errorMessage={errors.health?.errorMessage}
        hasError={errors.health?.hasError}
        {...getOverrideProps(overrides, "health")}
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
