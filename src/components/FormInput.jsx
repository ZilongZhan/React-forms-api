export const FormInput = ({ label, id, value, action }) => {
  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input id={id} value={value} onChange={action} required/>
    </div>
  );
};
