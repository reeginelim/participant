/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { SolarData } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SolarDataCreateForm(props) {
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
    inverter: undefined,
    inverter_model: undefined,
    pv_in: undefined,
    pv_model: undefined,
    pv_sys: undefined,
  };
  const [device_id, setDevice_id] = React.useState(initialValues.device_id);
  const [inverter, setInverter] = React.useState(initialValues.inverter);
  const [inverter_model, setInverter_model] = React.useState(
    initialValues.inverter_model
  );
  const [pv_in, setPv_in] = React.useState(initialValues.pv_in);
  const [pv_model, setPv_model] = React.useState(initialValues.pv_model);
  const [pv_sys, setPv_sys] = React.useState(initialValues.pv_sys);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDevice_id(initialValues.device_id);
    setInverter(initialValues.inverter);
    setInverter_model(initialValues.inverter_model);
    setPv_in(initialValues.pv_in);
    setPv_model(initialValues.pv_model);
    setPv_sys(initialValues.pv_sys);
    setErrors({});
  };
  const validations = {
    device_id: [],
    inverter: [],
    inverter_model: [],
    pv_in: [],
    pv_model: [],
    pv_sys: [],
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
          inverter,
          inverter_model,
          pv_in,
          pv_model,
          pv_sys,
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
          await DataStore.save(new SolarData(modelFields));
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
      {...getOverrideProps(overrides, "SolarDataCreateForm")}
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
              inverter,
              inverter_model,
              pv_in,
              pv_model,
              pv_sys,
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
        label="Inverter"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              inverter: value,
              inverter_model,
              pv_in,
              pv_model,
              pv_sys,
            };
            const result = onChange(modelFields);
            value = result?.inverter ?? value;
          }
          if (errors.inverter?.hasError) {
            runValidationTasks("inverter", value);
          }
          setInverter(value);
        }}
        onBlur={() => runValidationTasks("inverter", inverter)}
        errorMessage={errors.inverter?.errorMessage}
        hasError={errors.inverter?.hasError}
        {...getOverrideProps(overrides, "inverter")}
      ></TextField>
      <TextField
        label="Inverter model"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              inverter,
              inverter_model: value,
              pv_in,
              pv_model,
              pv_sys,
            };
            const result = onChange(modelFields);
            value = result?.inverter_model ?? value;
          }
          if (errors.inverter_model?.hasError) {
            runValidationTasks("inverter_model", value);
          }
          setInverter_model(value);
        }}
        onBlur={() => runValidationTasks("inverter_model", inverter_model)}
        errorMessage={errors.inverter_model?.errorMessage}
        hasError={errors.inverter_model?.hasError}
        {...getOverrideProps(overrides, "inverter_model")}
      ></TextField>
      <TextField
        label="Pv in"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              inverter,
              inverter_model,
              pv_in: value,
              pv_model,
              pv_sys,
            };
            const result = onChange(modelFields);
            value = result?.pv_in ?? value;
          }
          if (errors.pv_in?.hasError) {
            runValidationTasks("pv_in", value);
          }
          setPv_in(value);
        }}
        onBlur={() => runValidationTasks("pv_in", pv_in)}
        errorMessage={errors.pv_in?.errorMessage}
        hasError={errors.pv_in?.hasError}
        {...getOverrideProps(overrides, "pv_in")}
      ></TextField>
      <TextField
        label="Pv model"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              inverter,
              inverter_model,
              pv_in,
              pv_model: value,
              pv_sys,
            };
            const result = onChange(modelFields);
            value = result?.pv_model ?? value;
          }
          if (errors.pv_model?.hasError) {
            runValidationTasks("pv_model", value);
          }
          setPv_model(value);
        }}
        onBlur={() => runValidationTasks("pv_model", pv_model)}
        errorMessage={errors.pv_model?.errorMessage}
        hasError={errors.pv_model?.hasError}
        {...getOverrideProps(overrides, "pv_model")}
      ></TextField>
      <TextField
        label="Pv sys"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              inverter,
              inverter_model,
              pv_in,
              pv_model,
              pv_sys: value,
            };
            const result = onChange(modelFields);
            value = result?.pv_sys ?? value;
          }
          if (errors.pv_sys?.hasError) {
            runValidationTasks("pv_sys", value);
          }
          setPv_sys(value);
        }}
        onBlur={() => runValidationTasks("pv_sys", pv_sys)}
        errorMessage={errors.pv_sys?.errorMessage}
        hasError={errors.pv_sys?.hasError}
        {...getOverrideProps(overrides, "pv_sys")}
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
