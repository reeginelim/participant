/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { EvData } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function EvDataUpdateForm(props) {
  const {
    id,
    evData,
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
    current_limit: undefined,
    load: undefined,
    charger_name: undefined,
    model: undefined,
    manufacturer: undefined,
    input_voltage: undefined,
    health: undefined,
  };
  const [device_id, setDevice_id] = React.useState(initialValues.device_id);
  const [state_of_charge, setState_of_charge] = React.useState(
    initialValues.state_of_charge
  );
  const [charging, setCharging] = React.useState(initialValues.charging);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [current_limit, setCurrent_limit] = React.useState(
    initialValues.current_limit
  );
  const [load, setLoad] = React.useState(initialValues.load);
  const [charger_name, setCharger_name] = React.useState(
    initialValues.charger_name
  );
  const [model, setModel] = React.useState(initialValues.model);
  const [manufacturer, setManufacturer] = React.useState(
    initialValues.manufacturer
  );
  const [input_voltage, setInput_voltage] = React.useState(
    initialValues.input_voltage
  );
  const [health, setHealth] = React.useState(initialValues.health);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...evDataRecord };
    setDevice_id(cleanValues.device_id);
    setState_of_charge(cleanValues.state_of_charge);
    setCharging(cleanValues.charging);
    setCost(cleanValues.cost);
    setCurrent_limit(cleanValues.current_limit);
    setLoad(cleanValues.load);
    setCharger_name(cleanValues.charger_name);
    setModel(cleanValues.model);
    setManufacturer(cleanValues.manufacturer);
    setInput_voltage(cleanValues.input_voltage);
    setHealth(cleanValues.health);
    setErrors({});
  };
  const [evDataRecord, setEvDataRecord] = React.useState(evData);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(EvData, id) : evData;
      setEvDataRecord(record);
    };
    queryData();
  }, [id, evData]);
  React.useEffect(resetStateValues, [evDataRecord]);
  const validations = {
    device_id: [],
    state_of_charge: [],
    charging: [],
    cost: [],
    current_limit: [],
    load: [],
    charger_name: [],
    model: [],
    manufacturer: [],
    input_voltage: [],
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
          current_limit,
          load,
          charger_name,
          model,
          manufacturer,
          input_voltage,
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
          await DataStore.save(
            EvData.copyOf(evDataRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EvDataUpdateForm")}
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
              state_of_charge,
              charging,
              cost,
              current_limit,
              load,
              charger_name,
              model,
              manufacturer,
              input_voltage,
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
        defaultValue={state_of_charge}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge: value,
              charging,
              cost,
              current_limit,
              load,
              charger_name,
              model,
              manufacturer,
              input_voltage,
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
        defaultValue={charging}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging: value,
              cost,
              current_limit,
              load,
              charger_name,
              model,
              manufacturer,
              input_voltage,
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
        type="number"
        step="any"
        defaultValue={cost}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              cost: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost: value,
              current_limit,
              load,
              charger_name,
              model,
              manufacturer,
              input_voltage,
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
        label="Current limit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={current_limit}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              current_limit: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              current_limit: value,
              load,
              charger_name,
              model,
              manufacturer,
              input_voltage,
              health,
            };
            const result = onChange(modelFields);
            value = result?.current_limit ?? value;
          }
          if (errors.current_limit?.hasError) {
            runValidationTasks("current_limit", value);
          }
          setCurrent_limit(value);
        }}
        onBlur={() => runValidationTasks("current_limit", current_limit)}
        errorMessage={errors.current_limit?.errorMessage}
        hasError={errors.current_limit?.hasError}
        {...getOverrideProps(overrides, "current_limit")}
      ></TextField>
      <TextField
        label="Load"
        isRequired={false}
        isReadOnly={false}
        defaultValue={load}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              current_limit,
              load: value,
              charger_name,
              model,
              manufacturer,
              input_voltage,
              health,
            };
            const result = onChange(modelFields);
            value = result?.load ?? value;
          }
          if (errors.load?.hasError) {
            runValidationTasks("load", value);
          }
          setLoad(value);
        }}
        onBlur={() => runValidationTasks("load", load)}
        errorMessage={errors.load?.errorMessage}
        hasError={errors.load?.hasError}
        {...getOverrideProps(overrides, "load")}
      ></TextField>
      <TextField
        label="Charger name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={charger_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              current_limit,
              load,
              charger_name: value,
              model,
              manufacturer,
              input_voltage,
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
        defaultValue={model}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              current_limit,
              load,
              charger_name,
              model: value,
              manufacturer,
              input_voltage,
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
        label="Manufacturer"
        isRequired={false}
        isReadOnly={false}
        defaultValue={manufacturer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              current_limit,
              load,
              charger_name,
              model,
              manufacturer: value,
              input_voltage,
              health,
            };
            const result = onChange(modelFields);
            value = result?.manufacturer ?? value;
          }
          if (errors.manufacturer?.hasError) {
            runValidationTasks("manufacturer", value);
          }
          setManufacturer(value);
        }}
        onBlur={() => runValidationTasks("manufacturer", manufacturer)}
        errorMessage={errors.manufacturer?.errorMessage}
        hasError={errors.manufacturer?.hasError}
        {...getOverrideProps(overrides, "manufacturer")}
      ></TextField>
      <TextField
        label="Input voltage"
        isRequired={false}
        isReadOnly={false}
        defaultValue={input_voltage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              current_limit,
              load,
              charger_name,
              model,
              manufacturer,
              input_voltage: value,
              health,
            };
            const result = onChange(modelFields);
            value = result?.input_voltage ?? value;
          }
          if (errors.input_voltage?.hasError) {
            runValidationTasks("input_voltage", value);
          }
          setInput_voltage(value);
        }}
        onBlur={() => runValidationTasks("input_voltage", input_voltage)}
        errorMessage={errors.input_voltage?.errorMessage}
        hasError={errors.input_voltage?.hasError}
        {...getOverrideProps(overrides, "input_voltage")}
      ></TextField>
      <TextField
        label="Health"
        isRequired={false}
        isReadOnly={false}
        defaultValue={health}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              state_of_charge,
              charging,
              cost,
              current_limit,
              load,
              charger_name,
              model,
              manufacturer,
              input_voltage,
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
