function Header() {
  const title = "This is header";
  const passport = {seria: "AC0316503", issuedAt: "06-09-2002"};
  const person = { name: "Name", age: 12, passport: passport};

  console.log(person);

  return (
    <>
      <h1>{title}</h1>
      <p>{12 * 5}</p>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </>
  );
}

export default Header;
