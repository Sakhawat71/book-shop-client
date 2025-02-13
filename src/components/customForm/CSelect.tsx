import { Controller, useFormContext } from "react-hook-form";

type TSelectProps = {
    name: string;
    label?: string;
    required?: boolean;
    options: { value: string; label: string }[];
};

const CSelect = ({ name, label, required, options }: TSelectProps) => {
    const { formState: { errors } } = useFormContext();

    return (
        <div style={{ marginBottom: '8px' }}>
            {label && (
                <label
                    htmlFor={name}
                    style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        fontSize: '14px',
                        color: '#333',
                    }}
                >
                    {label}
                </label>
            )}
            <Controller
                name={name}
                render={({ field }) => (
                    <select
                        {...field}
                        id={name}
                        required={required}
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d9d9d9',
                            borderRadius: '6px',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'border-color 0.3s ease',
                            backgroundColor: '#fff',
                        }}
                        onFocus={(e) =>
                            (e.target.style.borderColor = '#1890ff')
                        }
                        onBlur={(e) =>
                            (e.target.style.borderColor = '#d9d9d9')
                        }
                    >
                        <option value="" disabled>
                            Select an option
                        </option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}
            />
            {errors[name] && (
                <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                    {(errors[name] as any).message}
                </p>
            )}
        </div>
    );
};

export default CSelect;
