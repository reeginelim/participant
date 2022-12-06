/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BatteryData } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BatteryDataUpdateFormInputValues = {
    device_id?: string;
    battery_info?: string;
    charger_info?: string;
    charging?: string;
    cost?: string;
    desired_status?: string;
    flexibility?: string;
    status?: string;
};
export declare type BatteryDataUpdateFormValidationValues = {
    device_id?: ValidationFunction<string>;
    battery_info?: ValidationFunction<string>;
    charger_info?: ValidationFunction<string>;
    charging?: ValidationFunction<string>;
    cost?: ValidationFunction<string>;
    desired_status?: ValidationFunction<string>;
    flexibility?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BatteryDataUpdateFormOverridesProps = {
    BatteryDataUpdateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
    battery_info?: FormProps<TextFieldProps>;
    charger_info?: FormProps<TextFieldProps>;
    charging?: FormProps<TextFieldProps>;
    cost?: FormProps<TextFieldProps>;
    desired_status?: FormProps<TextFieldProps>;
    flexibility?: FormProps<TextFieldProps>;
    status?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BatteryDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: BatteryDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    batteryData?: BatteryData;
    onSubmit?: (fields: BatteryDataUpdateFormInputValues) => BatteryDataUpdateFormInputValues;
    onSuccess?: (fields: BatteryDataUpdateFormInputValues) => void;
    onError?: (fields: BatteryDataUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BatteryDataUpdateFormInputValues) => BatteryDataUpdateFormInputValues;
    onValidate?: BatteryDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BatteryDataUpdateForm(props: BatteryDataUpdateFormProps): React.ReactElement;
