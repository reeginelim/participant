/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EvSchedule } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EvScheduleUpdateFormInputValues = {
    device_id?: string;
};
export declare type EvScheduleUpdateFormValidationValues = {
    device_id?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EvScheduleUpdateFormOverridesProps = {
    EvScheduleUpdateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EvScheduleUpdateFormProps = React.PropsWithChildren<{
    overrides?: EvScheduleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    evSchedule?: EvSchedule;
    onSubmit?: (fields: EvScheduleUpdateFormInputValues) => EvScheduleUpdateFormInputValues;
    onSuccess?: (fields: EvScheduleUpdateFormInputValues) => void;
    onError?: (fields: EvScheduleUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EvScheduleUpdateFormInputValues) => EvScheduleUpdateFormInputValues;
    onValidate?: EvScheduleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EvScheduleUpdateForm(props: EvScheduleUpdateFormProps): React.ReactElement;
