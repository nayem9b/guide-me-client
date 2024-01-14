// 'use client';

import { api } from '~/trpc/server';

const AllUsers = async () => {
  const data = api.user.getUsers.query();

  //   data?.result?.data.forEach(user => {
  //     console.log(user);
  //   });
  return (
    <div>
      {(await data)?.map(datam => <h1 key={datam.id}>{datam.name}</h1>)}
      <h1>This is all users page</h1>
    </div>
  );
};

export default AllUsers;
