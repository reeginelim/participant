/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { HcData } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function HcDataUpdateForm(props) {
  const {
    id,
    hcData,
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
    cost: undefined,
    in_temp: undefined,
    load: undefined,
    status: undefined,
  };
  const [device_id, setDevice_id] = React.useState(initialValues.device_id);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [in_temp, setIn_temp] = React.useState(initialValues.in_temp);
  const [load, setLoad] = React.useState(initialValues.load);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...hcDataRecord };
    setDevice_id(cleanValues.device_id);
    setCost(cleanValues.cost);
    setIn_temp(cleanValues.in_temp);
    setLoad(cleanValues.load);
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [hcDataRecord, setHcDataRecord] = React.useState(hcData);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(HcData, id) : hcData;
      setHcDataRecord(record);
    };
    queryData();
  }, [id, hcData]);
  React.useEffect(resetStateValues, [hcDataRecord]);
  const validations = {
    device_id: [],
    cost: [],
    in_temp: [],
    load: [],
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
          cost,
          in_temp,
          load,
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
            HcData.copyOf(hcDataRecord, (updated) => {
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
      {...getOverrideProps(overrides, "HcDataUpdateForm")}
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
              cost,
              in_temp,
              load,
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
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        defaultValue={cost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              cost: value,
              in_temp,
              load,
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
        label="In temp"
        isRequired={false}
        isReadOnly={false}
        defaultValue={in_temp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              cost,
              in_temp: value,
              load,
              status,
            };
            const result = onChange(modelFields);
            value = result?.in_temp ?? value;
          }
          if (errors.in_temp?.hasError) {
            runValidationTasks("in_temp", value);
          }
          setIn_temp(value);
        }}
        onBlur={() => runValidationTasks("in_temp", in_temp)}
        errorMessage={errors.in_temp?.errorMessage}
        hasError={errors.in_temp?.hasError}
        {...getOverrideProps(overrides, "in_temp")}
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
              cost,
              in_temp,
              load: value,
              status,
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
        label="Status"
        isRequired={false}
        isReadOnly={false}
        defaultValue={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              cost,
              in_temp,
              load,
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
