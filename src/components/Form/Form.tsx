import { categories } from '../../utils/constant';
import { FieldValues, useForm } from 'react-hook-form';
interface FormData {
  desc: string;
  amount: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  console.log(errors);

  const OnSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(OnSubmit)}>
      <div className="mb-3">
        <label className="form-label" htmlFor="desc">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="desc"
          {...register('desc', { required: true, minLength: 3 })}
        />
        {errors.desc?.type === 'required' && (
          <span className="text-danger fw-bold">Required description</span>
        )}
        {errors.desc?.type === 'minLength' && (
          <span className="text-danger fw-bold">Minimum 3 characters</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Amount
        </label>
        <input
          {...register('amount', { required: true })}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          choose a category
        </label>
        <select name="category" id="category" className="form-select">
          <option value="category">Category</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
