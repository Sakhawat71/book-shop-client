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
                backgroundColor: '#E8F0FE',
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
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '16px',
                        }}
                    >
                        <button
                            type="submit"
                            style={{
                                padding: '12px 20px',
                                backgroundColor: '#1890ff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                                minWidth: '120px',
                            }}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.backgroundColor = '#40a9ff')
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.backgroundColor = '#1890ff')
                            }
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default CForm;