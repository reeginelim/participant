/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EvScheduleCreateFormInputValues = {
    device_id?: string;
};
export declare type EvScheduleCreateFormValidationValues = {
    device_id?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EvScheduleCreateFormOverridesProps = {
    EvScheduleCreateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EvScheduleCreateFormProps = React.PropsWithChildren<{
    overrides?: EvScheduleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EvScheduleCreateFormInputValues) => EvScheduleCreateFormInputValues;
    onSuccess?: (fields: EvScheduleCreateFormInputValues) => void;
    onError?: (fields: EvScheduleCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EvScheduleCreateFormInputValues) => EvScheduleCreateFormInputValues;
    onValidate?: EvScheduleCreateFormValidationValues;
} & React.CSSProperties>;
export default function EvScheduleCreateForm(props: EvScheduleCreateFormProps): React.ReactElement;
