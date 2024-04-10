import { categories } from '../../utils/constant';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
const userSchema = z.object({
  desc: z
    .string({ required_error: 'Description is required' })
    .min(3, { message: 'Description must be at least 3 characters' })
    .max(50, { message: 'Description cannot be more than 50 characters' }),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .min(1, { message: 'Amount must be at least 1' })
    .max(100_000, { message: 'Amount cannot be more than 100000' }),
  categories: z.enum(categories, {
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

export type ExpenseFormData = z.infer<typeof userSchema>;
const ExpenseForm = ({ onSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      desc: '',
      amount: 1,
      categories: categories[0],
    },
  });

  return (
    <form
      action=""
      onSubmit={handleSubmit(data => {
        onSubmit(data);
        reset(
          { desc: 'jonas will never disappear', amount: 1 },
          {
            keepDefaultValues: true,
          },
        );
      })}
    >
      <div className="mb-3">
        <label className="form-label" htmlFor="desc">
          Description
        </label>
        <input
          type="text"
          ref={inputRef}
          className="form-control"
          id="desc"
          {...register('desc', {
            required: true,
          })}
        />
        {errors.desc && (
          <span className="text-danger fw-bold">{errors.desc.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <span className="text-danger fw-bold">{errors.amount.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          choose a category
        </label>
        <select {...register('categories')} className="form-select">
          <option value="category"></option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.categories && (
          <span className="text-danger fw-bold">
            {errors.categories.message}
          </span>
        )}
      </div>
      <button
        disabled={!isDirty || !isValid}
        className="btn btn-primary"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default ExpenseForm;
