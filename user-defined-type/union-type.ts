let userId: string | number | boolean;

userId = 10;
userId = "pieash";

const displayUser = (userId: number | string) => {
  console.log(userId);
};
displayUser(10);
displayUser("10");
