const Link = ({ route: { name, routeAddress } }) => {
  return (
    <li className="mr-12">
      <a href={routeAddress}>{name}</a>
    </li>
  );
};

export default Link;
