export const Button = ({ label, type, action }) => {
  return (
    <div>
      <button type={type} onClick={action}>
        {label}
      </button>
    </div>
  );
};
