interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpendFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select mt-3 mb-3"
      name=""
      id=""
      onChange={e => onSelectCategory(e.target.value)}
    >
      <option value="">all category</option>
      <option value="jonas">jonas</option>
      <option value="jack">jack</option>
      <option value="james">james</option>
    </select>
  );
};

export default ExpendFilter;
