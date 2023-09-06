export const TypeSwitch = ({ role }: { role: string }) => {
  switch (role) {
    case "athor":
      return <h1>hi {role}</h1>;
    case "admin":
      return <h1>hi {role}</h1>;
    case "superuser":
      return <h1>hi {role}</h1>;
    default:
      return <h1>default</h1>;
  }
};
