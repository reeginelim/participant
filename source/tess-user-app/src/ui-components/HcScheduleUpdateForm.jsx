/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { HcSchedule } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function HcScheduleUpdateForm(props) {
  const {
    id,
    hcSchedule,
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
    away: undefined,
    home: undefined,
    sleep: undefined,
    vacation: undefined,
  };
  const [device_id, setDevice_id] = React.useState(initialValues.device_id);
  const [away, setAway] = React.useState(initialValues.away);
  const [home, setHome] = React.useState(initialValues.home);
  const [sleep, setSleep] = React.useState(initialValues.sleep);
  const [vacation, setVacation] = React.useState(initialValues.vacation);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...hcScheduleRecord };
    setDevice_id(cleanValues.device_id);
    setAway(cleanValues.away);
    setHome(cleanValues.home);
    setSleep(cleanValues.sleep);
    setVacation(cleanValues.vacation);
    setErrors({});
  };
  const [hcScheduleRecord, setHcScheduleRecord] = React.useState(hcSchedule);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(HcSchedule, id) : hcSchedule;
      setHcScheduleRecord(record);
    };
    queryData();
  }, [id, hcSchedule]);
  React.useEffect(resetStateValues, [hcScheduleRecord]);
  const validations = {
    device_id: [],
    away: [],
    home: [],
    sleep: [],
    vacation: [],
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
          away,
          home,
          sleep,
          vacation,
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
            HcSchedule.copyOf(hcScheduleRecord, (updated) => {
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
      {...getOverrideProps(overrides, "HcScheduleUpdateForm")}
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
              away,
              home,
              sleep,
              vacation,
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
        label="Away"
        isRequired={false}
        isReadOnly={false}
        defaultValue={away}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              away: value,
              home,
              sleep,
              vacation,
            };
            const result = onChange(modelFields);
            value = result?.away ?? value;
          }
          if (errors.away?.hasError) {
            runValidationTasks("away", value);
          }
          setAway(value);
        }}
        onBlur={() => runValidationTasks("away", away)}
        errorMessage={errors.away?.errorMessage}
        hasError={errors.away?.hasError}
        {...getOverrideProps(overrides, "away")}
      ></TextField>
      <TextField
        label="Home"
        isRequired={false}
        isReadOnly={false}
        defaultValue={home}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              away,
              home: value,
              sleep,
              vacation,
            };
            const result = onChange(modelFields);
            value = result?.home ?? value;
          }
          if (errors.home?.hasError) {
            runValidationTasks("home", value);
          }
          setHome(value);
        }}
        onBlur={() => runValidationTasks("home", home)}
        errorMessage={errors.home?.errorMessage}
        hasError={errors.home?.hasError}
        {...getOverrideProps(overrides, "home")}
      ></TextField>
      <TextField
        label="Sleep"
        isRequired={false}
        isReadOnly={false}
        defaultValue={sleep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              away,
              home,
              sleep: value,
              vacation,
            };
            const result = onChange(modelFields);
            value = result?.sleep ?? value;
          }
          if (errors.sleep?.hasError) {
            runValidationTasks("sleep", value);
          }
          setSleep(value);
        }}
        onBlur={() => runValidationTasks("sleep", sleep)}
        errorMessage={errors.sleep?.errorMessage}
        hasError={errors.sleep?.hasError}
        {...getOverrideProps(overrides, "sleep")}
      ></TextField>
      <TextField
        label="Vacation"
        isRequired={false}
        isReadOnly={false}
        defaultValue={vacation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              device_id,
              away,
              home,
              sleep,
              vacation: value,
            };
            const result = onChange(modelFields);
            value = result?.vacation ?? value;
          }
          if (errors.vacation?.hasError) {
            runValidationTasks("vacation", value);
          }
          setVacation(value);
        }}
        onBlur={() => runValidationTasks("vacation", vacation)}
        errorMessage={errors.vacation?.errorMessage}
        hasError={errors.vacation?.hasError}
        {...getOverrideProps(overrides, "vacation")}
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
