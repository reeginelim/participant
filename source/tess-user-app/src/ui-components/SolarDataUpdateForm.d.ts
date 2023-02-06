/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SolarData } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SolarDataUpdateFormInputValues = {
    device_id?: string;
    inverter?: string;
    inverter_model?: string;
    pv_in?: string;
    pv_model?: string;
    pv_sys?: string;
};
export declare type SolarDataUpdateFormValidationValues = {
    device_id?: ValidationFunction<string>;
    inverter?: ValidationFunction<string>;
    inverter_model?: ValidationFunction<string>;
    pv_in?: ValidationFunction<string>;
    pv_model?: ValidationFunction<string>;
    pv_sys?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SolarDataUpdateFormOverridesProps = {
    SolarDataUpdateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
    inverter?: FormProps<TextFieldProps>;
    inverter_model?: FormProps<TextFieldProps>;
    pv_in?: FormProps<TextFieldProps>;
    pv_model?: FormProps<TextFieldProps>;
    pv_sys?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SolarDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: SolarDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    solarData?: SolarData;
    onSubmit?: (fields: SolarDataUpdateFormInputValues) => SolarDataUpdateFormInputValues;
    onSuccess?: (fields: SolarDataUpdateFormInputValues) => void;
    onError?: (fields: SolarDataUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SolarDataUpdateFormInputValues) => SolarDataUpdateFormInputValues;
    onValidate?: SolarDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SolarDataUpdateForm(props: SolarDataUpdateFormProps): React.ReactElement;
