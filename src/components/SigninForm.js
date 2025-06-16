const SigninForm = ({ handleSubmit, handleChange, formData }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail:</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="username@gamehub.com"
        value={formData.email}
        onChange={handleChange}
      />

      <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px' }}>
        Du kan logge inn med testbruker: <strong>test@gamehub.com</strong>
      </p>
      <button id="signin" type="submit">Sign In</button>
    </form>
  );
};

export default SigninForm;
