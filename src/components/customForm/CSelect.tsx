import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TSelectProps = {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  options: { value: string; label: string }[];
};

const CSelect = ({ name, label, required, options, placeholder }: TSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-2">
      {label && (
        <label htmlFor={name} className="block mb-1 text-sm font-semibold text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? "This field is required" : false }}
        render={({ field }) => (
          <Select
            {...field}
            id={name}
            placeholder={placeholder || "Select an option"}
            options={options}
            className="w-full"
          />
        )}
      />
      {errors[name] && (
        <p className="mt-1 text-xs text-red-500">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

export default CSelect;
