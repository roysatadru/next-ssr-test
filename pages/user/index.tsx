type UserProps = any;

export default function User(props: UserProps) {
  const { user } = props;

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}

export async function getServerSideProps() {
  const user = await fetch('https://reqres.in/api/users/2', {
    method: 'GET',
  }).then(res => res.json());

  return {
    props: {
      user,
    }, // will be passed to the page component as props
  };
}
