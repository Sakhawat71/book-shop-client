import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>,
    children?: ReactNode,
    resolver?: any,
    defaultValues?: FieldValues
}


const CForm = (
    { onSubmit, children, resolver, defaultValues }: TFormProps
) => {
    const methods = useForm({ resolver, defaultValues });

    return (
        <div
            style={{
                maxWidth: '100%',
                width: '90%',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#F9FBFD',
            }}
        >
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    {children}
                </form>
            </FormProvider>
        </div>
    );
};

export default CForm;